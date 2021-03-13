<?php

namespace App\Http\Controllers\iCADMaster;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;
use App\Models\Roof;
use App\Models\RoofTexture;
use Validator;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use Illuminate\Support\Facades\DB;

class RoofController extends BaseController
{
    //
    public function index(){
        $Roof = Roof::all();
        return $this->sendResponse(SRSTextureResource::collection($items), 'Products retrieved successfully.');
    }

    public function show($request){
        if ($request === '0'){
            $request = ['2', '3', '5', '6'];
          }else{
            $request = [$request];
          }
      
          $items = DB::connection('sqlite')->table('RoofTextures')
          ->select( 
                    'Roofs.JapaneseName as Kind', 
                    'Roofs.SortNo as KindSortNo',
                    'RoofTextures.TextureId',
                    'RoofTextures.JapaneseName',
                    'RoofTextures.EnglishName',
                    'RoofTextures.SortNo',
                    'RoofTextures.FilePath',
                    'RoofTextures.RoofId' 
                  )
          ->join('Roofs','Roofs.Id','=','RoofTextures.RoofId')
          ->whereIn('RoofId',$request)
          ->whereNull(['Roofs.DeletedDate', 'RoofTextures.DeletedDate'])
          ->orderBy('Roofs.SortNo', 'ASC')
          ->orderBy('RoofTextures.SortNo', 'ASC')
          ->get();
      
          $i = 0;
          $newArray = [];
          $itemsDecode = json_decode($items, true); //add value to existing api
      
          foreach($itemsDecode as $item){
            if (stripos($_SERVER['HTTP_USER_AGENT'], 'Indy')){ //check if the user agent is from icad		
              switch($item['Kind']){
                case 'コロニアル クァッド':
                  $item['Kind'] = '彩色スレート(コロニアルクァッド）,' . $item['RoofId']; 
                  $item['JapaneseName'] = '(Col. Quad) ' . $item['JapaneseName'] . '`';
                break; 
                case 'コロニアル グラッサ':
                  $item['Kind'] = '彩色スレート(コロニアルグラッサ）,' . $item['RoofId']; 
                  $item['JapaneseName'] = '(Col. Glass) ' . $item['JapaneseName'];
                break;   
                case 'ガルバリウム':
                  $item['Kind'] = 'ガルバリウム鋼板,' . $item['RoofId']; 
                  $item['JapaneseName'] = '(Gal.) ' . $item['JapaneseName'];
                break;   
                case 'コロナルーフ':
                  $item['Kind'] = 'コロナルーフ,' . $item['RoofId']; 
                  $item['JapaneseName'] = '(Cor.) ' . $item['JapaneseName'];
                break;        
              }
            }else{
              switch($item['Kind']){
                case 'コロニアル クァッド':
                  $item['Kind'] = '彩色スレート(コロニアルクァッド）,' . $item['RoofId'];
                  $item['KindSortNo'] = '1'; 
                  $item['JapaneseName'] = $item['JapaneseName'] . '`';
                break; 
                case 'コロニアル グラッサ':
                  $item['KindSortNo'] = '2';
                  $item['Kind'] = '彩色スレート(コロニアルグラッサ）,' . $item['RoofId']; 
                break;   
                case 'ガルバリウム':
                  $item['KindSortNo'] = '3';
                  $item['Kind'] = 'ガルバリウム鋼板,' . $item['RoofId']; 
                break;   
                case 'コロナルーフ':
                  $item['KindSortNo'] = '4';
                  $item['Kind'] = 'コロナルーフ,' . $item['RoofId']; 
                break;        
              }		   
            }
      
            $item['RowIndex'] = 0;
            $item['SubCategory'] = '';
      
            $newArray[$i] = $item;
            $i = $i + 1;
          }
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Products retrieved successfully.');
    }

}
