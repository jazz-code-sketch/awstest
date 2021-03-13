import axios from 'axios'
import store from '../../store'

export class PlanData{
  constructor(){
    this.houseType        = '';  
    this.texturesList     = [];
    this.selectedTextures = [];
  }





  setHouseType(houseType){
    this.houseType = houseType;
  }


  //index of rowindex in an array //need localstorage array //Parameter is rowIndex
  itemIndex(rowIndex){
    return store.state.srsGaibuListItems.map(e => e.Id).indexOf(rowIndex);
  }

  //get index of textures in array
  itemIndexTexture(texturesArray, textureSortNo){
    return texturesArray.map(e => e.SortNo).indexOf(textureSortNo);
  }


  //item index = index of rows //need localstorage array //filtered
  texturesInAPI(itemIndex){
    let excludedItems = {}
    let tmpArray = [];
    let textureToRemove = [];


    excludedItems = this.#excludeItem(itemIndex)


    tmpArray.push(...store.state.srsGaibuListItems[itemIndex].textureList);


   if(excludedItems != 0){

    excludedItems.forEach(item =>{
      if(item.HouseType == this.houseType){
        textureToRemove.push(...item.Items)
      }
    })

    textureToRemove.forEach(item =>{
      let tmpItemIndex = tmpArray.map(e => e.JapaneseName).indexOf(item) 

      tmpArray.splice(tmpItemIndex, 1); 
    })

  }


    this.textureList = tmpArray

    return this.textureList;
  }


  //Count of texturelist
  textureCount(roofId){
    let tmpArray = [];
    tmpArray.push(...this.textureList.filter(item => item.RoofId == roofId));
    return tmpArray.length
  }


  //
  #excludeItem(itemIndex){
    const tmpObject = JSON.parse(store.state.srsGaibuListItems[itemIndex].excludedItems);
    let tmpArray    = [];

    if(tmpObject != 0){
      tmpArray.push(...tmpObject);
    }
    return tmpObject
  }






 










  



  









}//end class






