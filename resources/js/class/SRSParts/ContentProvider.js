import axios from 'axios'
import store from '../../store'

export class SRSContents{

  static async getSRSGaibuListItemsFromAPI(){ 
    let tmpArray = [];
    try{
        const response = await axios.get(`${window.location.origin}/api/clItems`);  
        tmpArray.push(...response.data.filter(item => item.isAvailableInWeb === 1));
        
        //loop each items and get their textures in API
        tmpArray.forEach( async(item) =>{
          const textureList = await axios.get(`${window.location.origin}/api/${item.Path}`); 
          item['textureList'] = textureList.data.sort((a, b) => a.KindSortNo - b.KindSortNo);
        })
        tmpArray.sort((a, b) => a.SortNo - b.SortNo);
        store.commit('srsGaibuListItems', tmpArray);
    }catch(error){
      alert(error);    
    }
  }

  static async getSRSHouseTypesFromAPI(){
    let tmpArray = [];
    try{
        const response = await axios.get(`${window.location.origin}/api/houseTypes`);   
        tmpArray.push(...response.data);
        store.commit('srsHouseTypes', tmpArray);
    }catch(error){
      alert(error);
    }  
  }

  



  









}//end class










// class RoofB extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/roof/3`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList()
//   }
// }

// class RoofC extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/roof/2`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList()
//   }
// }

// class RoofD extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/roof/5`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList()
//   }
// }

// class BalconyCeiling extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/balconyCeiling`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList({TextureId: -1, JapaneseName: '外壁合せ', EnglishName: 'Same As Wall', TypeId: -1, FilePath: ""})
//   }
// }

// class RoofCeiling extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/roofCeiling`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList({TextureId: -1, JapaneseName: '直上(下)笠木又は土台水切合せ', EnglishName: 'Same As Kasagi', TypeId: -1, FilePath: ""}) //add only object parameter if you want to add value to json from api
//   }
// }

// class Fascia extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/fascia`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList() //add only object parameter if you want to add value to json from api
//   }
// }



// class Sash extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/sashTextures`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList()
//   }
// }

// class Mizukiri extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/mizukiri`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList()
//   }
// }

// // class SashGlass extends TextureList{
// //   constructor(){
// //     super(`${window.location.origin}/api/sashGlass`) //use parent constructor 
// //   }

// //   get TextureList(){
// //     return this.getTextureList()
// //   }
// // }

// class Porch extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/porch`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList()
//   }
// }


// class Parapet extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/parapet`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList({TextureId: -1, JapaneseName: '外壁合せ', EnglishName: 'Same As Wall', TypeId: "", FilePath: ""})
//   }
// }


// class BalconyCoping extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/balconyCoping`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList({TextureId: -1, JapaneseName: 'サッシ合せ', EnglishName: 'Same As Sash', TypeId: "", FilePath: ""})
//   }
// }


// class Gutter extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/gutter/1`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList({TextureId: "-1", JapaneseName: '破風色合わせ', EnglishName: 'Same As Gable', TypeId: "", FilePath: ""})
//   }
// }

// class DownSpout extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/gutter/2`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList({TextureId: "-1", JapaneseName: 'パターン色', EnglishName: 'Pattern Color', TypeId: "", FilePath: ""})
//   }
// }


// class GenkanTexture extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/genkanTextures`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList()
//   }
// }

// class GenkanHandle extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/genkanHandle`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList()
//   }
// }

// class GenkanHandleAdditional extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/genkanHandleAdditional`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList()
//   }
// }


// // added 10-08-20
// class BalconyHandrail extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/balconyTesuri/5`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList()
//   }
// }

// // added 10-09-20
// class Terasu extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/terasu`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList()
//   }
// }

// class SlopePorch extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/slopePorch`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList()
//   }
// }


// class WoodDeck extends TextureList{
//   constructor(){
//     super(`${window.location.origin}/api/wooddeck`) //use parent constructor 
//   }

//   get TextureList(){
//     return this.getTextureList()
//   }
// }





// export class ShiyoushoData{

//     constructor(){

//       this.RoofA = new RoofA;
//       this.RoofATextureLists = this.RoofA.TextureList

//       this.RoofB = new RoofB;
//       this.RoofBTextureLists = this.RoofB.TextureList

//       this.RoofC = new RoofC;
//       this.RoofCTextureLists = this.RoofC.TextureList

//       this.RoofD = new RoofD;
//       this.RoofDTextureLists = this.RoofD.TextureList

//       this.RoofCeiling = new RoofCeiling;
//       this.RoofCeilingTextureLists = this.RoofCeiling.TextureList;

//       this.BalconyCeiling = new BalconyCeiling;
//       this.BalconyCeilingTextureLists = this.BalconyCeiling.TextureList;  

//       this.Fascia = new Fascia;
//       this.FasciaTextureLists = this.Fascia.TextureList;   

//       this.Gutter = new Gutter; 
//       this.GutterTextureLists = this.Gutter.TextureList

//       this.DownSpout = new DownSpout;
//       this.DownSpoutTextureLists = this.DownSpout.TextureList

//       this.Parapet = new Parapet;
//       this.ParapetTextureLists = this.Parapet.TextureList;

//       this.Porch = new Porch;
//       this.PorchTextureLists = this.Porch.TextureList;

  
//       this.Sash = new Sash;
//       this.SashTextureLists = this.Sash.TextureList; 

//       /*this.SashGlass = new SashGlass;
//       this.SashGlassTextureLists = this.SashGlass.TextureList; */

//       this.Mizukiri = new Mizukiri;
//       this.MizukiriTextureLists = this.Mizukiri.TextureList; 

//       this.BalconyCoping = new BalconyCoping;
//       this.BalconyCopingTextureLists = this.BalconyCoping.TextureList;

//       /*this.GenkanItem1 = new GenkanItem1; //防火ドア
//       this.GenkanItem1TextureLists = this.GenkanItem1.TextureList;

//       this.GenkanItem2 = new GenkanItem2; //防火なし
//       this.GenkanItem2TextureLists = this.GenkanItem2.TextureList;*/

//       this.GenkanTexture = new GenkanTexture; 
//       this.GenkanTextureTextureLists = this.GenkanTexture.TextureList;

//       this.GenkanHandle = new GenkanHandle; 
//       this.GenkanHandleTextureLists = this.GenkanHandle.TextureList;

//       this.GenkanHandleAdditional = new GenkanHandleAdditional; 
//       this.GenkanHandleAdditionalTextureLists = this.GenkanHandleAdditional.TextureList;

//       //added 10-08-20      
//       this.BalconyHandrail = new BalconyHandrail;
//       this.BalconyHandrailTextureLists = this.BalconyHandrail.TextureList

//       //added 10-09-20      
//       this.Terasu = new Terasu;
//       this.TerasuTextureLists = this.Terasu.TextureList

//       this.SlopePorch = new SlopePorch;
//       this.SlopePorchTextureLists = this.SlopePorch.TextureList

//       this.WoodDeck = new WoodDeck;
//       this.WoodDeckTextureLists = this.WoodDeck.TextureList

//       this.selectedItem = []
//       this.selectedView = ''
//       this.Material = ''

//     }
    
//     setSelected(rowIndex, Kind, Material, TextureInfo, colorCount ){ 
//       var EnglishName = ''
//       var JapaneseName = ''
//       var FilePath = ''
//       var TextureId = ''

//       if(typeof TextureInfo !== 'object' ){
//         EnglishName = ''
//         JapaneseName = TextureInfo
//         FilePath  = ''
//         TextureId = ''
//         colorCount = ''
//       }else if(typeof TextureInfo == ''){
//         EnglishName = ''
//         JapaneseName = ''
//         FilePath  = ''
//         TextureId = ''
//         colorCount = ''       
//       }else{
//         EnglishName = TextureInfo.EnglishName
//         JapaneseName = TextureInfo.JapaneseName
//         FilePath = TextureInfo.FilePath
//         TextureId = TextureInfo.TextureId
//         colorCount = colorCount
//       }
      
//       this.selectedItem = [
//                            ...this.selectedItem,
//                            {
//                              'rowIndex'    : rowIndex,
//                              'Kind'        : Kind,
//                              'Material'    : Material,
//                              'TextureId'   : TextureId,
//                              'JapaneseName': JapaneseName,
//                              'EnglishName' : EnglishName,
//                              'FilePath'    : FilePath,
//                              'colorCount'  : colorCount
//                            } 
//       ] 
//       const uniqueValue = [...new Map(this.selectedItem.map(item => [item.Kind, item])).values()]   
//       this.selectedItem = uniqueValue
//       // localStorage.setItem("GaibuList", JSON.stringify(this.selectedItem)); 

//     }

//     get selectedInJSON(){
//       //localStorage.setItem("GaibuList", JSON.stringify(this.selectedItem));
//        return this.selectedItem
//     }

//     removeSelected(index){
//       const arrayIndex = this.selectedItem.indexOf(index)

//       if(arrayIndex > -1){
//         this.selectedItem.splice(arrayIndex, 1);
//       }
//       //localStorage.setItem("GaibuList", JSON.stringify(this.selectedItem));
//     }

//     clearSelectedInJSON(){
//       this.selectedItem = []
//     }

//     // setSelectedView(View){
//     //   this.selectedView = View   
//     // }

//     // get SelectedView(){
//     //   return this.selectedView
//     // }

  

// }