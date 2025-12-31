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

// Routes for User Management
Route::middleware(['auth:sanctum', 'admin'])->group(function(){
    Route::get('/users', [UserController::class,'index']);
    Route::get('/users/{user}', [UserController::class,'show']);
    Route::post('users', [UserController::class,'store']);
    Route::put('/users/{user}', [UserController::class,'update']);
    Route::delete('/users/{user}', [UserController::class, 'destroy']);
});

// Routes for Pillars
Route::middleware('auth:sanctum')->group(function () {

    // Read only
    Route::get('/pillars', [PillarController::class, 'index']);
    Route::get('/pillars/{pillar}', [PillarController::class, 'show']);

    // Only for Admins
    Route::middleware('admin')->group(function () {
        Route::post('/pillars', [PillarController::class, 'store']);
        Route::put('/pillars/{pillar}', [PillarController::class, 'update']);
        Route::delete('/pillars/{pillar}', [PillarController::class, 'destroy']);
    });
});