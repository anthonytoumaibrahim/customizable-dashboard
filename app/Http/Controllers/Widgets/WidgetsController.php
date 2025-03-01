<?php

namespace App\Http\Controllers\Widgets;

use Inertia\Inertia;
use App\Models\Widget;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class WidgetsController extends Controller
{
    public function addWidget(Request $request)
    {
        $widget = new Widget();
        $widget->widget_id = $request->widget_id;
        $widget->order = $request->order;
        $widget->size = $request->size ?? "small";
        $widget->type = $request->type;
        $widget->user_id = $request->user()->id;
        $widget->name = $request->name;
        $widget->color1 = $request->color1 ?? "";
        $widget->color2 = $request->color2 ?? "";
        $widget->dataset_url = $request->dataset_url;
        $widget->widget_data = $request->widget_data;
        $widget->saveOrFail();

        return response()->json([
            'success' => true,
            'widget' => $widget
        ]);
    }

    public function moveWidget(Request $request)
    {
        $request->validate([
            'id1' => 'exists:widgets,id',
            'order1' => 'required|numeric',
            'id2' => 'exists:widgets,id',
            'order2' => 'required|numeric',
        ]);
        $widget1 = Widget::find($request->id1);
        $widget1->order = $request->order1;
        $widget1->saveOrFail();

        $widget2 = Widget::find($request->id2);
        $widget2->order = $request->order2;
        $widget2->saveOrFail();
    }

    public function deleteWidget(Request $request)
    {
        $request->validate([
            'id' => 'exists:widgets,id'
        ]);
        $widget = Widget::find($request->id)->delete();
    }
}
