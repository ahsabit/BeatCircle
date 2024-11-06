<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Music>
 */
class MusicFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->name(),
            'album' => fake()->name(),
            'artist' => fake()->name(),
            'price' => '$' . fake()->numberBetween(1, 50),
            'cover' => 'https://placehold.co/400',
            'credits_id' => 1,
        ];
    }
}
