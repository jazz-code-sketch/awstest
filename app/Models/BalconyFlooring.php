<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BalconyFlooring extends Model
{
    use HasFactory;
    protected $connection = 'sqlite2';
    protected $table = 'balconyflooring';
}
