<template>
  <v-app>
    <v-row>
      <v-container fluid>



      
       

        <!-- <ismile /> -->


        





        

      </v-container>
    </v-row>
  </v-app>
</template>

<style scoped>
  td,tr, table{
    border: .1px dotted grey;
    padding: 5px;
    /* font-family: Arial, Helvetica, sans-serif; */
    /* font-size: 90%; */
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

 import Ismile from './subcomponents/Ismile'
 import { bus } from '../app'

  export default {
    components:{
      Ismile,
    },
    data: () => ({
      materialName: '',
      checkedMaterials: [],

    }),
    mounted(){
      this.selectedButton()
    },
  methods: {
    selectedButton (){
      bus.$emit('changeIt', '外部 シート-');
    },

  }


 






  }
 </script>

