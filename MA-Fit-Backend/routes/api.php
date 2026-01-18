<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PillarController;


Route::get("/test", function () {
    return ["message" => "API werkt"];
});


// Routes for Authentication
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});

Route::get('/pillars', [PillarController::class, 'index']);
Route::get('/pillars/{pillar}', [PillarController::class, 'show']);
// Routes for Pillars