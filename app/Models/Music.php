<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Music extends Model
{
    /** @use HasFactory<\Database\Factories\MusicFactory> */
    use HasFactory;
    protected $fillable = ['title', 'album', 'artist', 'price', 'cover', 'link', 'credits_id'];

    public function credits()
    {
        return $this->belongsTo(Credit::class);
    }
}
