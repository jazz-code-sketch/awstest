<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\GenkanHandle;
use Validator;


class GenkanHandleController extends BaseController
{
    public function index(){
        $items = GenkanHandle::all();

        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
        $requestURI = explode('/',explode('/api/',$_SERVER['REQUEST_URI'])[1])[0];
  
        foreach($itemsDecode as $item){
          switch($requestURI){
            case 'genkanhandle':
              $item['RowIndex'] = 25;
              break;
            case 'genkanhandle2':
              $item['RowIndex'] = 45;
              break;
          }
  
          $newArray[$i] = $item;
          $i = $i + 1;
        }

        
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Genkan Handle retrieved successfully.');  

    }

    public function show($req){
        $newArray = GenkanHandle::where('Id',$req)->get();
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Genkan Handle retrieved successfully.'); 
    }
}
