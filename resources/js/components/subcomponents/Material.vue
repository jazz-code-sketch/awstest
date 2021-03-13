<template>

<td width="40%" class="pl-5" rowspan="2">
  
  <v-simple-table class="arial" width="100%">
  <v-item-group :value="selected" >
    <v-container> 
      <v-row
        v-for="n in materialCount"
        :key="n"
        class="pb-3"

        >
        <tr>
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'orange' : ''"
              class="align-center"
              height="20"
              width="20"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div v-if="active" class="text-center">
                  <!-- {{ $ShiyoushoData.setSelected(rowIndex, Kind,selectionName[n - 1],'',) }} -->
                  {{ activeItem(rowIndex, Kind,selectionName[n - 1]) }}



                </div>
                <div v-else>
                  {{ inactive() }}
                </div>
              </v-scroll-y-transition>
            </v-card>     
          </v-item>
        
        </tr>
        <td class="pt-1 pl-2"> {{selectionName[n - 1]}}</td>
      </v-row>
    </v-container>
  </v-item-group>

</v-simple-table>






</td>

















</template>
<style scoped>
  tr{
    border: .1px dotted grey;
    padding: 2px;
    /* font-family: Arial, Helvetica, sans-serif; */
    /* font-size: 90%; */
  }
</style>
<script>

import { mapState, mapGetter,  mapMutations } from 'vuex'

export default {
  props: ['materialCount','selectionName','Kind', 'rowIndex'],
  data: () =>({
    selectedMaterials: [],
    selected: '',
  }),
  computed: {
  

  },

  created(){
    this.selectedMaterials = [
                              {RowIndex: 0, MaterialIndex: 0}, {RowIndex: 1, MaterialIndex: 0},
                              {RowIndex: 3, MaterialIndex: 0}, {RowIndex: 4, MaterialIndex: 0},
                              {RowIndex: 5, MaterialIndex: 0}, {RowIndex: 6, MaterialIndex: 0},
                              {RowIndex: 9, MaterialIndex: 0}, {RowIndex: 13, MaterialIndex: 0},
                              {RowIndex: 15, MaterialIndex: 0},
                             ]
    this.checked();

  },
  methods:{
    inactive(){     
      this.$ShiyoushoData.selectedInJSON.forEach( item =>{ 

        if(this.rowIndex === item.rowIndex){
          this.$ShiyoushoData.removeSelected(item)          
        }
      })
      console.log(this.$ShiyoushoData.selectedInJSON)
    },
    
    checked(){
      this.selectedMaterials.forEach(item =>{
        if(item.RowIndex === this.rowIndex){
          this.selected = item.MaterialIndex    
        }
      })
    },

    activeItem(rowIndex, Kind, name){
      this.$ShiyoushoData.setSelected(rowIndex, Kind,name,'',)

      //this.$ShiyoushoData.clickMaterial(rowIndex)






   

      console.log(this.$ShiyoushoData.selectedInJSON)







    }





  },





}

</script>