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

    public function store(Request $request)
    {
        $data = $request->validate([
            "name" => "required|string",
            "slug" => "required|unique:pillars,slug",
            "description" => "required|string",
            "color" => "required|string",
            "needed_value" => "required|integer|min:1|max:10",
        ]);
        
        return Pillar::create($data);
    }

    public function show(Pillar $pillar)
    {
        return $pillar;
    }

    public function update(Request $request, Pillar $pillar)
    {
        $data = $request->validate([
            'name' => 'sometimes|string',
            'slug' => 'sometimes|string|unique:pillars,slug' . $pillar->id,
            'description' => 'sometimes|string'
            'color' => 'sometimes|string',
            'needed_value' => 'sometimes|integer|min:1|max:10',
        ]);
        $pillar->update($data);
        return $pillar;
    }

    public function destroy(Pillar $pillar)
    {
        $pillar->delete();
        return response()->json(null, 204);
    }
}
