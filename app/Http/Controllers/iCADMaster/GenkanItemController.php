<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\GenkanHandleAdditional;
use Illuminate\Support\Facades\DB;
use Validator;

class GenkanItemController extends BaseController
{
    //
    public function index(){
        $newArray = GenkanHandleAdditional::all();

        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Genkan Item retrieved successfully.');  
    }

    public function show($req){
        $items = DB::connection('sqlite2')->table('genkanitemname')
        ->join('genkanitem','genkanitem.Id','=','genkanitemname.TypeId')
        ->select('genkanitemname.TextureId as TextureId', 'genkanitemname.JapaneseName', 'genkanitemname.EnglishName','genkanitemname.TypeId')
        ->where('genkanitemname.TypeId','=', $req)
        ->get();

        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
        foreach($itemsDecode as $item){
     
          $newArray[$i] = $item;
          $i = $i + 1;
        }

        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Genkan Item retrieved successfully.');  
    }
}
