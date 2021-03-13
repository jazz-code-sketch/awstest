<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\Mizukiri;
use Validator;

class MizukiriController extends BaseController
{
    //
    public function index(){
        $items = Mizukiri::select( 'CopingTextures.Id as TextureId', 'CopingTextures.EnglishName as EnglishName', 'CopingTextures.JapaneseName', 'CopingTextures.EnglishName', 'CopingTextures.SortNo as SortNo' )    
        ->get();
  
        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
        $requestURI = explode('/api/',$_SERVER['REQUEST_URI'])[1];
  
  
        foreach($itemsDecode as $item){
          $item['RowIndex'] = 9;
          $newArray[$i] = $item;
          $i = $i + 1;
        }

        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Mizukiri retrieved successfully.');
    }

    public function show($request){
        $items = Mizukiri::All()->where('Id',$request);
        return $this->sendResponse(SRSTextureResource::collection($items), 'Mizukiri retrieved successfully.');
    }
}
