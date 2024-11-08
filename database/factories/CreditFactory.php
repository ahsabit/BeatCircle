<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Credit>
 */
class CreditFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'music' => 'Sachin-Jigar',
            'singer' => 'Soumyadeep, Sachin-Jigar',
            'lyrics' => 'Priya Saraiya',
            'music_label' => 'T-Series'
        ];
    }
}
