<?php

namespace App\Http\Controllers\iCADMaster;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use Illuminate\Http\Request;
use App\Models\ParapetCoping;
use validator;

class ParapetCopingController extends BaseController
{
    //
    public function index(){
        $items = ParapetCoping::Select( 'CopingTextures.Id as TextureId',
                         'CopingTextures.EnglishName as EnglishName',
                         'CopingTextures.JapaneseName', 
                         'CopingTextures.EnglishName', 
                         'CopingTextures.SortNo' )
        ->get();

        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); 
        $requestURI = explode('/api/',$_SERVER['REQUEST_URI'])[1];
        
        foreach($itemsDecode as $item){
          switch($requestURI){
            case 'parapet':
              $item['RowIndex'] = 2;
                    $default = '外壁色合せ'; 
              break;
            case 'balconyCoping':
              $item['RowIndex'] = 15;
                    $default = 'サッシ合せ';
              break;
            case 'balconyCoping3F':
              $item['RowIndex'] = 57;
              break;
          }
          $newArray[$i] = $item;
          $i = $i + 1;
        }
        
        $items = [
           'textureId'    => '-1',
           'EnglishName'  => 'Same as wall',
           'JapaneseName' => $default,
           'SortNo' => '0',
           'RowIndex'     => $newArray[1]['RowIndex']
        ];
        array_unshift($newArray, $items);
  
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Parapet Coping retrieved successfully.');
    }

    public function show($req){
        $items = ParapetCoping::all()->where('Id',$req);;
        return $this->sendResponse(SRSTextureResource::collection($items), 'Parapet Coping retrieved successfully.');
    }

}
