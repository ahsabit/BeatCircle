<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MusicResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=> $this->id,
            "title" => $this->title,
            "album" => $this->album,
            "artist" => $this->artist,
            "price" => $this->price,
            "cover" => $this->cover,
            "link" => $this->link,
            "credits" => new CreditResource($this->credits),
        ];
    }
}
