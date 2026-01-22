<?php

namespace App\Http\Controllers;

use App\Models\Pillar;
use Illuminate\Http\Request;

class PillarController extends Controller
{
    public function index()
    {
        return Pillar::all();
    }

    public function cmsIndex()
    {
        $pillars = Pillar::orderBy('id', 'desc')->get();
        return view('cms.pillars.index', compact('pillars'));
    }
    
    public function show(Pillar $pillar)
    {
        return $pillar;
    }

    public function cmsCreate()
    {
        return view('cms.pillars.create');
    }

    public function cmsStore(Request $request)
    {
        $data = $request->validate([
            "name" => "required|string",
            "slug" => "required|unique:pillars,slug",
            "description" => "required|string",
            "color" => "required|string",
            "needed_value" => "required|integer|min:1|max:10",
        ]);
            
        Pillar::create($data);
        return redirect()->route('cms.pillars.index');
    }

    public function cmsEdit(Pillar $pillar)
    {
        return view('cms.pillars.edit', compact('pillar'));
    }

    public function cmsUpdate(Request $request, Pillar $pillar)
    {
        $data = $request->validate([
            "name" => "sometimes|string",
            "slug" => "sometimes|string|unique:pillars,slug," . $pillar->id,
            "description" => "sometimes|string",
            "color" => "sometimes|string",
            "needed_value" => "sometimes|integer|min:1|max:10",
        ]);

        $pillar->update($data);
        return redirect()->route('cms.pillars.index');
        
    }

    public function cmsDestroy(Pillar $pillar)
    {
        $pillar->delete();
        return redirect()->route('cms.pillars.index');
    }
}
