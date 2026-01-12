<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            "name" => ["required", "string", "max:255"],
            "email" => ["required", "email", "unique:users,email"],
            "password" => ["required", "string", "min:6", "confirmed"],
        ]);
        $user = User::create([
            "name" => $validated["name"],
            "email" => $validated["email"],
            "password" => $validated["password"],
            "role" => "user",
        ]);

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            "message" => "Gebruiker aangemaakt",
            "user" => $user,
        ], 201);
    }
    public function login(Request $request)
    {
        $validated = $request->validate([
            "email" => ["required", "email"],
            "password" => ["required", "string"],
        ]);

        if (!Auth::attempt($validated)) {
            return response()->json([ 
                'message' => 'Ongeldige inloggegevens'], 401);
        }

        $user = Auth::user();

        $user->tokens()->delete();

        $token = $user->createToken(api-token)->plainTextToken;

        return respons()->json([
            "message" => "Succesvol ingelogd",
            "user" => $user,
            "token" => $token,
        ]);
    }
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            "message" => "Uitgelogd",
        ]);
    }
}