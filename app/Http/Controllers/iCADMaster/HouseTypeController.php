<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\HouseTypes;
use Validator;

class HouseTypeController extends BaseController
{
    public function index(){
        $newArray = HouseTypes::all();
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Fascia Board Textures retrieved successfully.');  
    }

    public function show($req){
        $newArray = HouseTypes::where('Id', $req)->get();
        return $this->sendResponse(SRSTextureResource::collection($newArray),'House Types Retrieve Succesfully.');
    }
}
