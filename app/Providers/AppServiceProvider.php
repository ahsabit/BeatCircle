<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Request;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        // Updated Rate Limiter configuration
        RateLimiter::for('freezeUser', function (Request $request) {
            return Limit::perHour(15)
                ->by(optional($request->user())->id ?: $request->ip())
                ->response(function() {
                    return response()->json([
                        'message' => 'Wait a bit'
                    ], 429);
                });
        });
    }
}

