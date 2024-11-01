<?php

namespace App\Http\Controllers;

use App\Http\Resources\MusicResource;
use App\Models\Music;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Route;

class MusicController extends Controller
{
    public function fetch(Request $request)
    {
        try {
            $request->validate([
                'bundle_count' => 'required|integer|between:1,4',
                'req_num' => 'required|integer',
            ]);
            $bundleCount = $request->bundle_count;
            $reqNum = $request->req_num;
            $offset = $reqNum * 10;
            $musics = [];
            
            for ($i = 0; $i < $bundleCount; $i++) {
                $temp_musics = Music::offset($offset)->limit(10)->get();
                $musics[$i] = MusicResource::collection($temp_musics);
                $offset += 10;
            }
            
            return response()->json($musics);
        } catch (\Exception $e) {
            \Log::error('Error fetching music: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong!'], 500);
        }
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $request->validate([
            'key' => 'required|string',
            'time' => 'required|integer',
        ]);
        if ($request->key && $request->time) {
            $musics = Music::where('title', 'like', '%' . $request->key . '%')
                                ->orWhere('album', 'like', '%' . $request->key . '%')
                                ->limit(10)
                                ->get();

            return Inertia::render('Search', [
                'result' => MusicResource::collection($musics),
            ]);
        }else{
            abort(404);
        }
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Music $credit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Music $credit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Music $credit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Music $credit)
    {
        //
    }
}
