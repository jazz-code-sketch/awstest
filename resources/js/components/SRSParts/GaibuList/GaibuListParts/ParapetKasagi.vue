<template>
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td class="firstColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex(2)).length + 2" >
        <v-label>パラペット壁笠木</v-label>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in $PlanData.texturesInAPI($PlanData.itemIndex(2))">  
      <tr v-if="($PlanData.itemIndexTexture($PlanData.texturesInAPI($PlanData.itemIndex(2)), texture.SortNo) == 0)" :key="textureIndex">    
        <td class="secondColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex(2)).length">
          <v-checkbox class="shrink mt-0" v-model="textureMaterial" color="orange" hide-details label="アルミニウム" value="アルミニウム" @change="textureColor = texture.JapaneseName" />       
        </td>          
        <td>
          <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" @change="textureMaterial = 'アルミニウム'" />
        </td>
      </tr>
       <tr v-if="($PlanData.itemIndexTexture($PlanData.texturesInAPI($PlanData.itemIndex(2)), texture.SortNo) > 0)" :key="textureIndex">    
          <td>
            <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" @change="textureMaterial = 'アルミニウム'" />
          </td>
        </tr>   
    </template>
      <tr>
        <td colspan="2" >
          <v-checkbox class="shrink mt-0" v-model="textureMaterial" color="orange" hide-details label="その他" value="その他" @change="textureColor = '' " />   
        </td>
      </tr>  
  </v-simple-table>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data: () =>({
    textureMaterial: '',
    textureColor: '',

  }),
  computed:{
    ...mapState(['srsGaibuListItems', 'houseType' ]),
    ...mapGetters(['getHouseTypeNumber']),
    
  },
  mounted(){
   
  }
}
</script>

