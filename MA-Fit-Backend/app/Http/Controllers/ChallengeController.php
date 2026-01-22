<?php

namespace App\Http\Controllers;

use App\Models\Challenge;
use Illuminate\Http\Request;

class ChallengeController extends Controller
{

    public function index()
    {
        return Challenge::all();
    }

    public function cmsIndex()
    {
        $challenges = Challenge::orderBy('id')->get();
        return view('cms.challenges.index', compact('challenges'));
    }

    public function chow(Challenge $challenge)
    {
        return $challenge;
    }

    public function cmsCreate()
    {
        return view('cms.challenges.create');
    }

    public function cmsStore(Request $request)
    {
        $data = $request->validate([
            "name" => "required|string",
            "needed_value" => "required|integer|min:1|max:10",
        ]);

        Challenge::create($data);
        return redirect()->route('cms.challenge.index');
    }

    public function cmsEdit(Challenge $challenge)
    {
        return view('cms.challenge.edit', compact('challenge'));
    }

    public function cmsUpdate(Request $request, Challenge $challenge)
    {
        $data = $request->validate([
            "name" => "sometimes|string",
            "needed_value" => "sometimes|integer|min:1|max:10",
        ]);

        Challenge::update($data);
        return redirect()->route('cms.challenge.index');
    }

    public function cmsDestroy(Challenge $challenge)
    {
        $challenge->delete();
        return redirect()->route('cms.challenge.index');
    }
}
