<?php

namespace Database\Seeders;

use App\Models\Credit;
use App\Models\Music;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Credit::factory()->count(1)->create();
        Music::factory()->count(1000)->create();
    }
}
