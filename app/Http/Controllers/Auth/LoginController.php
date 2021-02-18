<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users',
            'password' => 'required|string|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        if (!Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ])) {
            return response()->json([
                'errors' => $validator->errors()->add('email', 'Invalid email or password')
            ], 403);
        }

        $user = auth()->user();

        $token = $user->createToken('api');

        return response()->json([
            'message' => 'Logged in',
            'user' => $user,
            'token' => $token->plainTextToken
        ], 200);
    }
}
