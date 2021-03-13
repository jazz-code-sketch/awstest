<template>
  <v-app>
    <v-row>
      <v-container fluid>
        <template v-for="(srsGaibuListItem) in srsGaibuListItems" >
          <template v-if="srsGaibuListItem.HouseType.indexOf(getHouseTypeNumber) > -1">
            <DynamicComponentsProvider :componentName="srsGaibuListItem.EnglishName" :key="srsGaibuListItem.Id" />
          </template>
        </template> 
      </v-container>
    </v-row>
  </v-app>
</template>
<style scoped>
  td,tr, table{
    border: .1px dotted grey;
    padding: 5px;
  }
  .header{
    background-color: #d9d9d9;
  }
  .arial{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 90%;
    
  }
</style>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex';
import DynamicComponentsProvider from './GaibuListParts/DynamicComponentsProvider';

// import { bus } from '../app'

  export default {
    components:{
      DynamicComponentsProvider,
    },


    data: () => ({
      materialName: '',


      






    }),
    mounted(){
  




    },
  methods: {
    selectedButton (){
      bus.$emit('changeIt', '外部 シート-');
    },




  },
  computed: {
    ...mapState(['srsGaibuListItems', 'houseType' ]),
    ...mapGetters(['getHouseTypeNumber']),
  },


 






}
 </script>

