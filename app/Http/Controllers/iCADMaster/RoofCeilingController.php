<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\RoofCeiling;
use Validator;

class RoofCeilingController extends BaseController
{
    //  
    public function index(){
        $items = RoofCeiling::All();
        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
  
        foreach($itemsDecode as $item){
          $item['SortNo'] = $i + 2 . '';
          $item['RowIndex'] = 5;
  
          switch($item['TextureId']){
            case 1:
              $item['TextureId'] = 0;
              break;
            case 2:
              $item['TextureId'] = 2;
              break;         
            case 3:
              $item['TextureId'] = 1;
              break;   
          }
  
          $newArray[$i] = $item;
          $i = $i + 1;
        }
  
        $item = [
            'textureId'    => '-1',
            'EnglishName'  => 'Directly above coping',
            'JapaneseName' => '直上(下)笠木又は土台水切合せ',
            'RowIndex'     => 5,
            'SortNo'      => '1'
          ];

        array_unshift($newArray, $item);     

        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Roof Ceiling retrieved successfully.');
    }

    public function show($req){
        $items = RoofCeiling::where('Id',$req)->get();
        return $this->sendResponse(SRSTextureResource::collection($items), 'Roof Ceiling retrieved successfully.');
    }

}
