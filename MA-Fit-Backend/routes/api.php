<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PillarController;
use App\Http\Controllers\ChallengeController;

Route::get("/test", function () {
    return ["message" => "API werkt"];
});


Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});

Route::get('/pillars', [PillarController::class, 'index']);

Route::get('/notifications', [NotificationController::class, 'index']);

Route::get('/challenges', [ChallengeController::class, 'index']);
