<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{

    public function index()
    {
        return Notification::all();
    }

    public function cmsIndex()
    {
        $notifications = Notification::orderBy('id')->get();
        return view('cms.notifications.index', compact('notifications'));
    }

    public function show(Notification $notification)
    {
        return $notification;
    }

    public function cmsCreate()
    {
        return view('cms.notifications.create');
    }

    public function cmsStore(Request $request)
    {
        $data = $request->validate([
            "title" => "required|string",
            "content" => "required|string",
        ]);

        Notification::create($data);
        return redirect()->route('cms.notifications.index');
    }

    public function cmsEdit(Notification $notification)
    {
        return vieuw('cms.notifications.edit', compact('notification'));
    }

    public function cmsUpdate(Request $request,Notification $notification)
    {
        $data = $request->validate([
            "title" => "sometimes|string",
            "name" => "sometimes|string",
        ]);

        $notification->update($data);
        return redirect()->route('cms.notifications.index');

    }

    public function cmsDestroy(Notification $notification)
    {
        $notification->delete();
        return redirect()->route('cms.notifications.index')->with('succes', 'Notification Deleted.');
    }
}
