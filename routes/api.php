<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\PorchTextureController;

use App\Http\Resources\SRSTextureResource as SRSTextureResource;

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

Route::get('/test', function () {
    return config('app.security');
});




Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);
//Route::post('logout', [RegisterController::class, 'logout']);

Route::middleware('auth:api')->group( function () {
    if( config('app.security') == 'fGUYMfo9eswYMdYyMuMz'){
        Route::resource('porch', PorchTextureController::class);
        Route::resource('products', ProductController::class); //->middleware('isAuthorize'); 
        Route::post('logout', [RegisterController::class, 'logout']);
        Route::get('serverCookie', [RegisterController::class, 'serverCookie']);

         
    }
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    
    if ($request->hasHeader('SRS-Key')) {
        if ($request->header('SRS-Key') == 'sample'){
            return $request->user();
        }else{
            return 'Unauthenticated';
        }
    }else{
        return $request->user();
    }
    
});

