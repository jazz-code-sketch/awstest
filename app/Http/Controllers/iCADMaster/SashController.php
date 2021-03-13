<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\Sash;
use Validator;

class SashController extends BaseController
{
    //
    public function index(){
        $items = Sash::all();

        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
  
        foreach($itemsDecode as $item){
          $item['RowIndex'] = 11;
          $newArray[$i] = $item;
          $i = $i + 1;
        }

        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Sash Texture retrieved successfully.');
    
    }

    public function show($req){
        $items = Sash::where('Id',$req)->get();
        return $this->sendResponse(SRSTextureResource::collection($items), 'Sash Texture retrieved successfully.');
    }

}
