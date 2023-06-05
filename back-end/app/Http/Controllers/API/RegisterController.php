<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\User;
use App\Models\Password_reset_tokens;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\Hash;

   
class RegisterController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
   
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
   
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->plainTextToken;
        $success['name'] =  $user->name;
   
        return $this->sendResponse($success, 'User register successfully.');
    }
   
    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')->plainTextToken; 
            $success['name'] =  $user->name;
   
            return $this->sendResponse($success, 'User login successfully.');
        } 
        else{ 
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        } 
    }
    public function show()
    {
        $users = User::all();

        return $users;
    }

    public function edit($id)
    {
        $users = User::find($id);
        if($users){

            return response()->json([
                'status' => 200,
                'users' => $users
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
    $user = User::find($id);

    $input = $request->all();
   
    $user->name = $input['name'];
    $user->email = $input['email'];
        if(!empty($input['password'])){
            $user->password=Hash::make($input['password']);
        }
    $user->save();
    return response()->json([
                            "success" => true,
                            "message" => "user updated successfully.",
                            "data" => $user
                            ]);
        }

    public function destroy($id)
    {
        $users = User::find($id);
       // echo "<pre>";print_r($users);die();
        $users->delete();


        return response()->json([
            'status' => 200,
            'message' => 'User Delete successfully'
        ]);
    }
//     public function forgotPassword(Request $request)
//         {
//             $request->validate([
//                 'email' => 'required|email|exists:users',
//             ]);

//             $token = Str::random(64);
        
//             User::table('password_resets')->insert([
//                 'email' => $request->email,
//                 'token' => $token,
            
//             ]);

//                  return back()->with('message');
// }
   
//     // public function reset() {
//     //     $credentials = request()->validate([
//     //         'email' => 'required|email',
//     //         'token' => 'required|string',
//     //         'password' => 'required|string|confirmed'
//     //     ]);

//     //     $reset_password_status = Password::reset($credentials, function ($user, $password) {
//     //         $user->password = $password;
//     //         $user->save();
//     //     });

//     //     if ($reset_password_status == Password::INVALID_TOKEN) {
//     //         return response()->json(["msg" => "Invalid token provided"], 400);
//     //     }

//     //     return response()->json(["msg" => "Password has been successfully changed"]);
//     // }
}