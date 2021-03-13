<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use Illuminate\Support\Facades\DB;
use App\Models\BalconyFlooring;
use Validator;
class BalconyFlooringController extends BaseController
{
    //

    public function index(){
        $items = BalconyFlooring::all();
        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true);
        $requestURI = explode('/',explode('/api/',$_SERVER['REQUEST_URI'])[1])[0];
        foreach($itemsDecode as $item){
          switch($requestURI){
            case 'balconyFlooring':
              $item['RowIndex'] = 48;
              break;
            case 'balconyFlooring2':
              $item['RowIndex'] = 49;
              break;
            case 'balconyFlooring3':
              $item['RowIndex'] = 50;
              break;		
            case 'balconyFlooring3F':
              $item['RowIndex'] = 55;
              break;	
            case 'balconyFlooring3F2':
              $item['RowIndex'] = 59;
              break;          	
          }
          $item['SortNo'] = $i + 1 . '';
          $newArray[$i] = $item;
          $i = $i + 1;
        }

        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Balcony Tesuri retrieved successfully.');
    }

    public function show($req){
        $items = BalconyFlooring::where('TextureId',$req)->get();
        return $this->sendResponse(SRSTextureResource::collection($items), 'Balcony Tesuri retrieved successfully.');
    }

}
