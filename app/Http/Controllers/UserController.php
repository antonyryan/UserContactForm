<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;

class UserController extends Controller
{
    //
    public function create(Request $request)
    {
        $emails = User::where('email',$request->email)->get();
        if (count($emails) !== 0) {
            return response("This email already exists", 403);
        } else {
            $user = new User;
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->email = $request->email;
            $user->us_state = $request->us_state;
            $user->zip_code = $request->zip_code;
            $user->save();
        }
    }
}
