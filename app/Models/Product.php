<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $connection = 'master'; //this is the connection to be used
    protected $table= 'products';

    
    protected $fillable = [
        'name',
         'detail'
    ];

}
