<?php
  
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Password;
  
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\CategoryController;
  
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
  
  
Route::controller(RegisterController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
    Route::get('show', 'show');
    Route::get('/edit/{id}', 'edit');
    Route::post("update/{id}",'update');
    Route::delete("destroy/{id}","destroy");
    Route::post('forgotpassword', 'forgotpassword');
    // Route::post('password/reset', 'reset');
});
        
Route::middleware('auth:sanctum')->group( function () {
    Route::resource('products', ProductController::class);
});

Route::middleware('auth:sanctum')->group( function () {
    Route::resource('category', CategoryController::class);
});