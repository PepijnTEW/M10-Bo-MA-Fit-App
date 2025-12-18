<?php

namespace App\Http\Controllers;

use App\Models\Pillar;
use Illuminate\Http\Request;

class PillarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Pillar::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
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

    /**
     * Display the specified resource.
     */
    public function show(Pillar $pillar)
    {
        return $pillar;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pillar $pillar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pillar $pillar)
    {
        $pillar->update($request->all());
        return $pillar;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pillar $pillar)
    {
        $pillar->delete();
        return response()->json(null, 204);
    }
}
