<?php

use Illuminate\Support\Facades\Route;

Route::get("/test", function () {
    return ["message" => "API werkt"];
});

use App\Http\Controllers\PillarController;

Route::apiResource("pillars", PillarController::class);
