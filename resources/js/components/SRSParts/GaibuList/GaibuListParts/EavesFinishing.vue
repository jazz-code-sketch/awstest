<template>
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td class="firstColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex(4)).length + 1" >
        <v-label>軒天仕上げ</v-label>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in $PlanData.texturesInAPI($PlanData.itemIndex(4))">  
      <tr v-if="($PlanData.itemIndexTexture($PlanData.texturesInAPI($PlanData.itemIndex(4)), texture.SortNo) == 0)" :key="textureIndex">    
        <td class="secondColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex(4)).length">
          <v-checkbox class="shrink mt-0" v-model="textureMaterial" color="orange" hide-details label="塗装板サイディング" value="塗装板サイディング" @change="textureColor = texture.JapaneseName" />       
        </td>          
        <td>
          <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" @change="textureMaterial='塗装板サイディング'" />
        </td>
      </tr>
       <tr v-if="($PlanData.itemIndexTexture($PlanData.texturesInAPI($PlanData.itemIndex(4)), texture.SortNo) > 0)" :key="textureIndex">    
          <td>
            <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName"  @change="textureMaterial='塗装板サイディング'" />
          </td>
        </tr>     
    </template>
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

