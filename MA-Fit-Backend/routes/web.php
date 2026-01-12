<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PillarController;
use App\Http\Controllers\UserController;

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'admin', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'admin'])
    ->prefix('dashboard')
    ->name('cms.')
    ->group(function () {

        //Pillars
        Route::get('/pillars', [PillarController::class, 'cmsIndex'])
            ->name('pillars.index');

        Route::get('/pillars/create', [PillarController::class, 'cmsCreate'])
            ->name('pillars.create');

        Route::post('/pillars', [PillarController::class, 'cmsStore'])
            ->name('pillars.store');

        Route::get('/pillars/{pillar}/edit', [PillarController::class, 'cmsEdit'])
            ->name('pillars.edit');

        Route::put('/pillars/{pillar}', [PillarController::class, 'cmsUpdate'])
            ->name('pillars.update');

        Route::delete('/pillars/{pillar}', [PillarController::class, 'cmsDestroy'])
            ->name('pillars.destroy');

        //Users
        Route::get('/users', [UserController::class, 'cmsIndex'])
            ->name('users.index');

        Route::get('/users/create', [UserController::class, 'cmsCreate'])
            ->name('users.create');

        Route::post('/users', [UserController::class, 'cmsStore'])
            ->name('users.store');

        Route::get('/users/{user}/edit', [UserController::class, 'cmsEdit'])
            ->name('users.edit');

        Route::put('/users/{user}', [UserController::class, 'cmsUpdate'])
            ->name('users.update');

        Route::delete('/users/{user}', [UserController::class, 'cmsDestroy'])
            ->name('users.destroy');
    });

require __DIR__.'/auth.php';
