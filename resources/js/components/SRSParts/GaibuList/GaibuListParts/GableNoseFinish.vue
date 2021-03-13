<template>
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td class="firstColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex(6)).length + 1" >
        <v-label>破風鼻隠し仕上げ</v-label>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in $PlanData.texturesInAPI($PlanData.itemIndex(6))">  
      <tr v-if="($PlanData.itemIndexTexture($PlanData.texturesInAPI($PlanData.itemIndex(6)), texture.SortNo) == 0)" :key="textureIndex">    
        <td class="secondColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex(6)).length">
          <v-checkbox class="shrink mt-0" v-model="textureMaterial" color="orange" hide-details label="ガルバリウム鋼板" value="ガルバリウム鋼板" @change="textureColor = texture.JapaneseName" />       
        </td>          
        <td>
          <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" @change="textureMaterial = 'ガルバリウム鋼板'" />
        </td>
      </tr>
       <tr v-if="($PlanData.itemIndexTexture($PlanData.texturesInAPI($PlanData.itemIndex(6)), texture.SortNo) > 0)" :key="textureIndex">    
          <td>
            <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" @change="textureMaterial = 'ガルバリウム鋼板'" />
          </td>
        </tr>     
    </template>
  </v-simple-table>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data: () =>({
    textureColor: '',
    textureMaterial: '',
  }),

  computed:{
    ...mapState(['srsGaibuListItems', 'houseType' ]),
    ...mapGetters(['getHouseTypeNumber']),
    

  },
  mounted(){
    this.textureIndexInArray = this.$PlanData.itemIndexTexture(this.$PlanData.texturesInAPI(this.$PlanData.itemIndex(6)), '7')
    console.log(this.textureIndexInArray)

   
   
  }
}
</script>

