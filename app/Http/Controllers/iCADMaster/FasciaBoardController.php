<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\FasciaBoard;
use Validator;

class FasciaBoardController extends BaseController
{
    //
    public function index(){
       $items = FasciaBoard::all();

       $i = 0;
       $newArray = [];
       $itemsDecode = json_decode($items, true); //add value to existing api
 
       foreach($itemsDecode as $item){
         $item['SortNo'] = $i + 1 . '';
 
         $item['RowIndex'] = 6;
         $default = '屋根材色合せ';
         
         $newArray[$i] = $item;
         $i = $i + 1;
       }
 
       $items = [
         'TextureId'    => '-1',
         'EnglishName'  => 'Same as Roof',
         'JapaneseName' => $default,
         'TypeId' => '0',
         'RowIndex'     => $newArray[1]['RowIndex'],
         'SortNo'       => '0'
       ];
 
       array_unshift($newArray, $items);    

       return $this->sendResponse(SRSTextureResource::collection($newArray), 'Fascia Board Textures retrieved successfully.');  
    }

    public function show($req){
        $items = FasciaBoard::where('Id', $req)->get();

        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
  
        foreach($itemsDecode as $item){
          $newArray[$i] = $item;
          $i = $i + 1;
        }
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Fascia Board Textures retrieved successfully.');  
    }

}
