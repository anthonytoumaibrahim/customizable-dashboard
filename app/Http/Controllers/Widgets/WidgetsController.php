<?php

namespace App\Http\Controllers\Widgets;

use App\Http\Controllers\Controller;
use App\Models\Widget;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class WidgetsController extends Controller
{
    public function addWidget(Request $request)
    {
        $widget = new Widget();
        $widget->widget_id = $request->widget_id;
        $widget->order = $request->order;
        $widget->size = $request->size;
        $widget->type = $request->type;
        $widget->user_id = $request->user()->id;
        $widget->name = $request->name;
        $widget->color1 = $request->color1;
        $widget->color2 = $request->color2;
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
            'id2' => 'exists:widgets,id'
        ]);
    }

    public function deleteWidget(Request $request)
    {
        $request->validate([
            'id' => 'exists:widgets,id'
        ]);
        $widget = Widget::find($request->id)->delete();
        return Redirect::refresh();
    }
}
