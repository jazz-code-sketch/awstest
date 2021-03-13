<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\WoodDeckTexture;
use Validator;

class GenkanTextureController extends BaseController
{
    //
    public function index(){
        return ['name'=>'Vern'];
    }

    public function show($req){
        return ['name'=>$req];
    }
}
