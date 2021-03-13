<template>
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td class="firstColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex(8)).length + $PlanData.texturesInAPI($PlanData.itemIndex(8)).length + 3" >
        <v-label>縦樋</v-label>
      </td>
    </tr>
    <template v-for="toiMaterial in toiMaterialLabel">
      <template v-for="(texture, textureIndex) in $PlanData.texturesInAPI($PlanData.itemIndex(8))">  
        <tr v-if="($PlanData.itemIndexTexture($PlanData.texturesInAPI($PlanData.itemIndex(8)), texture.SortNo) == 0)" :key="textureIndex + '-' + toiMaterial">    
          <td class="secondColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex(8)).length">
            <v-checkbox class="shrink mt-0" v-model="textureMaterial" color="orange" hide-details :label="toiMaterial" :value="toiMaterial" @change="textureColor = texture.JapaneseName" />       
          </td>          
          <td>
            <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" />
          </td>
        </tr>
        <tr v-if="($PlanData.itemIndexTexture($PlanData.texturesInAPI($PlanData.itemIndex(8)), texture.SortNo) > 0)" :key="textureIndex + '-' + toiMaterial">    
          <td>
            <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" @change="textureMaterial = toiMaterial"  />
          </td>
        </tr> 
      </template>
    </template>
    <tr>
      <td colspan="2">
        <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details label="なし" value="なし" @change="textureMaterial = ''" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <v-checkbox class="shrink mt-0" v-model="textureColor" colspan="2" color="orange" hide-details label="その他" value="その他" @change="textureMaterial = ''" />
      </td>
    </tr>
  </v-simple-table>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data: () =>({
    toiMaterialLabel : ['角樋　T15', '角樋　T30'],
    textureColor: '',
    textureMaterial: '',
  }),

  computed:{
    ...mapState(['srsGaibuListItems', 'houseType' ]),
    ...mapGetters(['getHouseTypeNumber']),
  },
  mounted(){
  }
}
</script>

