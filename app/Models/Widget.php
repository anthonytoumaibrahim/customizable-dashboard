<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Widget extends Model
{
    use HasFactory;

    protected $fillable = ['widget_id', 'user_id', 'name', 'color1', 'color2', 'dataset_url', 'widget_data'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
