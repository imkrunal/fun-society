<?php

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

Route::group(['namespace' => 'App\Http\Controllers'], function () {

    // Auth
    Route::post('auth/login', 'Auth\LoginController@login');

    // Countries
    Route::group(['prefix' => 'countries'], function () {
        Route::get('/', 'CountriesController@index');
        Route::get('/{country}', 'CountriesController@show');

        Route::group(['middleware' => 'auth:sanctum'], function () {
            Route::post('/', 'CountriesController@create');
            Route::post('/{country}', 'CountriesController@update');
            Route::delete('/{country}', 'CountriesController@delete');
        });
    });
});
