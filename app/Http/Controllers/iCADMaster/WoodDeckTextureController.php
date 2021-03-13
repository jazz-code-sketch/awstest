<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\WoodDeckTexture;
use Validator;

class WoodDeckTextureController extends BaseController
{
    //
    public function index(){
        $items = WoodDeckTexture::all();
        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); 
        $requestURI = explode('/api/',$_SERVER['REQUEST_URI'])[1];
        foreach($itemsDecode as $item){
    
          switch($requestURI){
            case 'wooddeck':
              $item['RowIndex'] = 38;
            break;
            case 'wooddeck2':
              $item['RowIndex'] = 39;
            break; 
            case 'wooddeckFence':
              $item['RowIndex'] = 63;
            break;
            case 'wooddeckFence2':
              $item['RowIndex'] = 64;
            break; 
          }
        $newArray[$i] = $item;
        $i = $i + 1;
      }
  
        if(stripos($requestURI, 'fence') > 0){
          array_splice($newArray, 0, 3);
        }else{
          array_splice($newArray, 3, 3);  
        }
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'WoodDeck Texture retrieved successfully.');  
    }

    public function show($req){
        $items = WoodDeckTexture::where('Id',$req)->get();
        return $this->sendResponse(SRSTextureResource::collection($items), 'WoodDeck Texture retrieved successfully.');  
    }
    
}
