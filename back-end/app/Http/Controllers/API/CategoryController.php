<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Validator;

class CategoryController extends Controller
{
    public function index()
            {
            $category = Category::all();
            return response()->json([
            "success" => true,
            "message" => "Category List",
            "data" => $category
            ]);
            }
    public function store(Request $request)
            {
            $input = $request->all();
            $validator = Validator::make($input, [
            'category' => 'required'
            ]);
            if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
            }
            $category = new Category;
                $category->category=$request->category;
                $category->save();
            return response()->json([
            "success" => true,
            "message" => "Category created successfully.",
            "data" => $category
            ]);
            } 
    public function show($id)
            {
            $categorys = Category::find($id);
            if (is_null($categorys)) {
            return $this->sendError('Category not found.');
            }
            return response()->json([
            "success" => true,
            "message" => "Category retrieved successfully.",
            "data" => $categorys
            ]);
            }
 public function edit($id)
            {
                $categorys = User::find($id);
                if($categorys){
        
                    return response()->json([
                        'status' => 200,
                        'users' => $categorys
                    ],200);
                }else{
        
                    return response()->json([
                        'status' => 404,
                        'message' => "No User Found"
                    ],404);
        
                }
            }
public function update(Request $request,$id)
            {
                $category = Category::find($id);
                // $input = $request->all();
                
                $category->category=$request->category;
                $category->save();
                return response()->json([
                "success" => true,
                "message" => "Category updated successfully.",
          
                 ]);
            }

public function destroy(Category $category)
            {
            $category->delete();
            return response()->json([
            "success" => true,
            "message" => "Category deleted successfully.",
            "data" => $category
            ]);
            }
   
}
