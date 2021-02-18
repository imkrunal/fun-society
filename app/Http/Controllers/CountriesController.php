<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CountriesController extends Controller
{
    public function index(Country $country)
    {
        return response()->json(['countries' => $country->all()], 200);
    }

    public function create(Country $country, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:countries'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $country = $country->create($request->all());

        return response()->json([
            'message' => 'Country created.',
            'country' => $country
        ], 201);
    }

    public function show(Country $country)
    {
        return response()->json(['country' => $country], 200);
    }

    public function update(Country $country, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:countries,name,' . $country->id
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $country = $country->update($request->all());

        return response()->json([
            'message' => 'Country updated.',
        ], 200);
    }

    public function delete(Country $country)
    {
        $country->delete();

        return response()->json(['message' => 'Country deleted.'], 200);
    }
}
