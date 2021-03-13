<template>
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td class="firstColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex(7)).length + 3" >
        <v-label>軒樋</v-label>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in $PlanData.texturesInAPI($PlanData.itemIndex(7))">  
      <tr v-if="($PlanData.itemIndexTexture($PlanData.texturesInAPI($PlanData.itemIndex(7)), texture.SortNo) == 0)" :key="textureIndex">    
        <td>
          <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" />
        </td>
      </tr>
      <tr v-if="($PlanData.itemIndexTexture($PlanData.texturesInAPI($PlanData.itemIndex(7)), texture.SortNo) > 0)" :key="textureIndex">    
        <td>
          <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" />
        </td>
      </tr> 
    </template>
    <tr>
      <td>
        <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details label="なし" value="なし"  />
      </td>
    </tr>
    <tr>
      <td>
        <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details label="その他" value="その他" />
      </td>
    </tr>
  </v-simple-table>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data: () =>({
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

