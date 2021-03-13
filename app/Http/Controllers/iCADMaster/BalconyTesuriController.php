<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use Illuminate\Support\Facades\DB;
use App\Models\BalconyTexture;
use Validator;

class BalconyTesuriController extends BaseController
{
    //
    public function index(){
      //$items = BalconyTexture::all();
      //return $this->sendResponse(SRSTextureResource::collection($items), 'Balcony Tesuri retrieved successfully.');
    }

    public function show($req){
      $items = DB::connection('sqlite2')->table('balconytexture')
      ->join('tesuritype','tesuritype.SortNo','=','balconytexture.TypeId')
      ->select('balconytexture.TextureId','balconytexture.JapaneseName','balconytexture.EnglishName')
      ->where('tesuritype.SortNo','=', $req)
      ->get();

      $i = 0;
      $newArray = [];
      $itemsDecode = json_decode($items, true);

      $requestURI = explode('/',explode('/api/',$_SERVER['REQUEST_URI'])[1])[0];

      foreach($itemsDecode as $item){
        switch($requestURI){
          case 'balconyTesuri':
            $item['RowIndex'] = 26;
            break;
          case 'balconyTesuri2':
            $item['RowIndex'] = 32;
            break;
          case 'balconyTesuri3':
            $item['RowIndex'] = 37;
            break;			
          case 'balconyTesuri3F':
            $item['RowIndex'] = 57;
            break;
          case 'balconyTesuri3F2':
            $item['RowIndex'] = 61;
            break;            
          case 'balconyCoping':
            $item['RowIndex'] = 52;
            break;   
          case 'balconyCoping2':
            $item['RowIndex'] = 53;
            break; 
          case 'balconyCoping3':
            $item['RowIndex'] = 54;
            break;                
          case 'balconyCoping3F':
            $item['RowIndex'] = 58;
            break;
          case 'balconyCoping3F2':
            $item['RowIndex'] = 62;
            break;
          }

        $item['SortNo'] = $i + 1 . '';

        $newArray[$i] = $item;
        $i = $i + 1;
      }
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Balcony Tesuri retrieved successfully.');
    }
}
