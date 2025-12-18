<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PillarController;


Route::get("/test", function () {
    return ["message" => "API werkt"];
});

Route::apiResource("pillars", PillarController::class);
