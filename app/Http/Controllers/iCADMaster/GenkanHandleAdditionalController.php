<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\GenkanHandleAdditional;
use Validator;

class GenkanHandleAdditionalController extends BaseController
{
    //
    public function index(){
        $items = GenkanHandleAdditional::all();
  
        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
  
        foreach($itemsDecode as $item){
          $item['RowIndex'] = 25;
          $newArray[$i] = $item;
          $i = $i + 1;
        }

        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Gankan Handle Additional retrieved successfully.');  
    }

    public function show($req){
        $newArray = GenkanHandleAdditional::where('Id',$req)->get();
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Gankan Handle Additional retrieved successfully.');  
    }


}
