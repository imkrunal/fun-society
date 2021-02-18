<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(User $user)
    {
        // Superuser
        $user->firstOrCreate([
            'email' => 'shahkrunal7091@gmail.com'
        ], [
            'name' => 'Krunal Shah',
            'password' => Hash::make('Password123#'),
            'email_verified_at' => now()
        ]);
    }
}
