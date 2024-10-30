<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Credit extends Model
{
    /** @use HasFactory<\Database\Factories\CreditFactory> */
    use HasFactory;
    protected $fillable = ['music', 'singer', 'lyrics', 'music_label'];

    public function musics()
    {
        return $this->hasMany(Music::class);
    }
}
