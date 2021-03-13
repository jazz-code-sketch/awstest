<template>
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td class="firstColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex(0)).length + 1" >
        <v-label>屋根材種</v-label>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in $PlanData.texturesInAPI($PlanData.itemIndex(0))">
      <template v-for="(roof, labelIndex) in roofMaterialLabel">    
        <template v-if="(texture.RoofId === roof.KindId)">
          <tr v-if="($PlanData.itemIndexTexture($PlanData.texturesInAPI($PlanData.itemIndex(0)), texture.SortNo) == 0)" :key="textureIndex + labelIndex">    
            <td class="secondColumnWidth" :rowspan="$PlanData.textureCount(roof.KindId)">
              <v-checkbox class="shrink mt-0" v-model="textureMaterial" color="orange" hide-details :label="roof.RoofLabel" :value="roof.RoofLabel" @change="textureColor = texture.JapaneseName" />       
            </td>
            <td>
              <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" @change="textureMaterial = roof.RoofLabel" />
            </td>
          </tr>
          <tr v-if="($PlanData.itemIndexTexture($PlanData.texturesInAPI($PlanData.itemIndex(0)), texture.SortNo) > 0)" :key="textureIndex + labelIndex">    
            <td>
              <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName"  @change="textureMaterial = roof.RoofLabel" />
            </td>
          </tr>
        </template>
      </template> 
    </template>
  </v-simple-table>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data: () =>({
    roofMaterialLabel : [
                          {RoofLabel:'彩色スレート(コロニアルクァッド）', KindId: '6'},
                          {RoofLabel:'彩色スレート(コロニアルグラッサ）', KindId: '3'},
                          {RoofLabel:'ガルバリウム鋼板(横葺き板金）', KindId: '2'},
                          {RoofLabel:'コロナルーフ', KindId: '5'},                          
                        ],
    textureMaterial: '',
    textureColor: '',
  }),

  computed:{
    ...mapState(['srsGaibuListItems', 'houseType' ]),
    ...mapGetters(['getHouseTypeNumber'])

  },
}
</script>

