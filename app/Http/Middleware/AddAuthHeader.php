<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AddAuthHeader
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
		$request->headers->add(['Accept' => 'application/json'] ); //set response always json
		
        if (!$request->bearerToken()) {
            if ($request->hasCookie('srs_session')) {
                $token = $request->cookie('srs_session');
                
                $request->headers->add(['Authorization' => 'Bearer ' . $token] );
            }
        }
        return $next($request);
    }
}
