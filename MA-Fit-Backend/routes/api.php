<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NotificationController;
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

// Routes for Pillars
Route::get('/pillars', [PillarController::class, 'index']);

// Routes 
Route::get('/notifications', [NotificationController::class, 'index']);