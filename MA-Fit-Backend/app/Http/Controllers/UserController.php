<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }
    
    public function show(User $user)
    {
        return $user;
    }

    public function cmsIndex()
    {
        $users = User::orderBy('id', 'desc')->get();
        return view('cms.users.index', compact('users'));
    }

    public function cmsCreate()
    {
        return view('cms.users.create');
    }

    public function cmsStore(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'role' => 'required|in:user,admin',
        ]);
        User::create($data);
        return redirect()->route('cms.users.index');
    }
    
    public function cmsEdit(User $user)
    {
        return view('cms.users.edit', compact('user'));
    }

    public function cmsUpdate(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => 'sometimes|string',
            'email' => 'sometimes|email|unique:users,email',
            'password' => 'sometimes|string|min:8',
            'role' => 'sometimes|in:user,admin',
        ]);
        $user->update($data);
        return redirect()->route('cms.users.index');
    }

    public function cmsDestroy(User $user)
    {
        $user->delete();
        return redirect()->route('cms.users.index')->with('succes', 'User Deleted');
    }
}
