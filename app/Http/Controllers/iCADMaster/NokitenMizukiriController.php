<?php

namespace App\Http\Controllers\iCADMaster;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use Illuminate\Http\Request;
use App\Models\NokitenMizukiri;
use validator;


class NokitenMizukiriController extends BaseController
{
    //

    public function index(){
        $items = NokitenMizukiri::select('Id As TextureId','JapaneseName', 'EnglishName', 'FilePath')
        ->get(); 

        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api

        foreach($itemsDecode as $item){
            $item['RowIndex'] = 4;
            $item['SortNo'] = $i + 2 . '';
            $newArray[$i] = $item;
            $i = $i + 1;
        }

            $items = [
            'textureId'    => '-1',
            'EnglishName'  => 'Same as wall',
            'JapaneseName' => '外壁色合せ',
            'RowIndex'     => $newArray[1]['RowIndex'],
            'SortNo'      => '1'
            ];

        array_unshift($newArray, $items);  
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Nokiten Mizukiri retrieved successfully.');
    }

    public function show($req){
        $items = NokitenMizukiri::all()->where('Id', $req);
        return $this->sendResponse(SRSTextureResource::collection($items), 'Nokiten Mizukiri retrieved successfully.');
    }


}
