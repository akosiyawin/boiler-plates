<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*Change from auth:api to auth:sanctum*/
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return \App\Http\Resources\UserResource::make($request->user());
});
/*Authentication check. Access this route /authenticated to see if user is authenticate*/
Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});

Route::prefix('user')->group(function () {
    Route::post('/register', [\App\Http\Controllers\UserAuthenticationController::class,'register']);
    Route::post('/login', [\App\Http\Controllers\UserAuthenticationController::class,'login']);
    Route::post('/logout', [\App\Http\Controllers\UserAuthenticationController::class,'logout']);
});
