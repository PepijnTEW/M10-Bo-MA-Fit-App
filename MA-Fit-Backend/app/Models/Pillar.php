<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pillar extends Model
{
    use HasFactory;

    // Zeg tegen Laravel welke velden "mass assignable" zijn
    protected $fillable = [
        "name",
        "slug",
        "description",
        "color",
        "needed_value",
    ];

    // hier later relaties naar bv. tips, checkins etc.
}
