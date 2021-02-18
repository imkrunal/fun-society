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
    Route::group(['prefix' => 'countries'], function () {
        Route::get('/', 'CountriesController@index');
        Route::post('/', 'CountriesController@create');
        Route::get('/{country}', 'CountriesController@show');
        Route::post('/{country}', 'CountriesController@update');
        Route::delete('/{country}', 'CountriesController@delete');
    });
});
