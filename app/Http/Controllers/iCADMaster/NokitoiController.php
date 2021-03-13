<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\Nokitoi;
use Validator;
use Illuminate\Support\Facades\DB;

class NokitoiController extends BaseController
{
    //
    public function index(){
        $items = Nokitoi::all();
        return $this->sendResponse(SRSTextureResource::collection($items), 'Nokitoi retrieved successfully.');
    }

    public function show($request){
        $items = DB::connection('sqlite')->table('GutterTextures')
        ->Join('ProductCategories','ProductCategories.SortNo','=','GutterTextures.TypeId')
        ->select('GutterTextures.Id as TextureId', 'GutterTextures.JapaneseName', 'GutterTextures.EnglishName','GutterTextures.TypeId','GutterTextures.FilePath')
        ->where('TypeId','=', $request)->whereNull('GutterTextures.DeletedDate')
        ->get(); 
  
        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); 
        $requestURI = explode('/api/',$_SERVER['REQUEST_URI'])[1];
  
        foreach($itemsDecode as $item){	  
          if ($request === '1'){
            $item['RowIndex'] = 7;
                $default = '破風色合わせ';
          }else{
                if($requestURI === 'groundduct/2'){
                switch($item['TextureId']){
                  case 1:
                  $item['TextureId'] = 7;
                  break;
                case 2:
                  $item['TextureId'] = 8;
                  break;				
                case 3:
                  $item['TextureId'] = 9;
                  break;				
                case 4:
                  $item['TextureId'] = 10;
                  break;				
                case 5:
                  $item['TextureId'] = 11;
                  break;				
                case 6:
                  $item['TextureId'] = 12;
                  break;					
                case 7:
                  $item['TextureId'] = 13;
                  break;			
                case 8:
                  $item['TextureId'] = 14;
                  break;	
                case 9:
                  $item['TextureId'] = 15;
                  break;	
                case 10:
                  $item['TextureId'] = 16;
                  break;
              }    
                
              $item['RowIndex'] = 47; 
                $default = 'パターン色';
            }else{
            $item['RowIndex'] = 8; 
                $default = 'パターン色';			  
            }
          }
          $item['SortNo'] = $i + 2 . '';
          $newArray[$i] = $item;
          $i = $i + 1;
        }
  
        $items = [
            'textureId'    => '-1',
            'EnglishName'  => 'Same as gable',
            'JapaneseName' => $default,
            'RowIndex'     => $newArray[1]['RowIndex'],
            'SortNo'       => '1'
          ];
  
          array_unshift($newArray, $items);   
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Tatetoi retrieved successfully.');
    }
}
