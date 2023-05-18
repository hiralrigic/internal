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
            'name' => 'required'
            ]);
            if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
            }
            $category = Category::create($input);
            return response()->json([
            "success" => true,
            "message" => "Category created successfully.",
            "data" => $category
            ]);
            } 
    public function show($id)
            {
            $category = Category::find($id);
            if (is_null($category)) {
            return $this->sendError('Category not found.');
            }
            return response()->json([
            "success" => true,
            "message" => "Category retrieved successfully.",
            "data" => $category
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
                $input = $request->all();

                        // $validator = Validator::make($input, [
                        // 'name' => 'required'
                        // ]);
                        // if($validator->fails()){
                        // return $this->sendError('Validation Error.', $validator->errors());       
                        // }
                        $category->name=$input['name'];
                        $category->save();
                        return response()->json([
                        "success" => true,
                        "message" => "Category updated successfully.",
                        "data" => $category
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
