<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use Illuminate\Support\Facades\DB;
use Validator;

class BalconyGlassController extends BaseController
{
    //
    public function index(){
        $requestURI = explode('/',explode('/api/',$_SERVER['REQUEST_URI'])[1])[0];

        $newArray = [];
  
        switch($requestURI){
          case 'balconyGlass':
            $Clear = ['RowIndex' => 14, 'TextureId' => 0, 'EnglishName' => 'Clear', 'JapaneseName' => '(透明ガラス）', 'Material' => 'ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）'];
            $Mist  = ['RowIndex' => 14, 'TextureId' => 1, 'EnglishName' => 'Mist', 'JapaneseName' => '(ミストガラス）', 'Material' => 'ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）'];
            break;
          case 'balconyGlass2':
            $Clear = ['RowIndex' => 31, 'TextureId' => 0, 'EnglishName' => 'Clear', 'JapaneseName' => '(透明ガラス）', 'Material' => 'ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）'];
            $Mist  = ['RowIndex' => 31, 'TextureId' => 1, 'EnglishName' => 'Mist', 'JapaneseName' => '(ミストガラス）', 'Material' => 'ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）'];
            break;
          case 'balconyGlass3':
            $Clear = ['RowIndex' => 35, 'TextureId' => 0, 'EnglishName' => 'Clear', 'JapaneseName' => '(透明ガラス）', 'Material' => 'ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）'];
            $Mist  = ['RowIndex' => 35, 'TextureId' => 1, 'EnglishName' => 'Mist', 'JapaneseName' => '(ミストガラス）', 'Material' => 'ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）'];
            break;		  
          case 'balconyGlass3F':
            $Clear = ['RowIndex' => 56, 'TextureId' => 0, 'EnglishName' => 'Clear', 'JapaneseName' => '(透明ガラス）', 'Material' => 'ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）'];
            $Mist  = ['RowIndex' => 56, 'TextureId' => 1, 'EnglishName' => 'Mist', 'JapaneseName' => '(ミストガラス）', 'Material' => 'ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）'];
            break;
          case 'balconyGlass3F2':
            $Clear = ['RowIndex' => 60, 'TextureId' => 0, 'EnglishName' => 'Clear', 'JapaneseName' => '(透明ガラス）', 'Material' => 'ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）'];
            $Mist  = ['RowIndex' => 60, 'TextureId' => 1, 'EnglishName' => 'Mist', 'JapaneseName' => '(ミストガラス）', 'Material' => 'ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）'];
            break;          
        }   

        $newArray = [$Clear, $Mist];
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Balcony Glass retrieved successfully.');
    }

    public function show($req){
        $items = [];
        return $this->sendResponse(SRSTextureResource::collection($items), 'Balcony Glass retrieved successfully.');
    }

}
