<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\CLItems;
use Validator;

class FormItemsController extends BaseController
{
    public function index(){
        $items = CLItems::all();

        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
  
        foreach($itemsDecode as $item){
          $newArray[$i] = $item;
          $i = $i + 1;
        }
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Form Items retrieved successfully.');
    }

    public function show($req){
        $items = CLItems::where('Id',$req)->get();
        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
  
        foreach($itemsDecode as $item){
          $newArray[$i] = $item;
          $i = $i + 1;
        }      
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Form Items retrieved successfully.');        
    }
}

