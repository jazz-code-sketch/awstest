<template>
<v-simple-table class="arial" width="100%" v-show="true">
  <v-item-group :value="selected">
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
                 {{ check(selectionName[ n - 1 ]) }}



                </div>
              </v-scroll-y-transition>
            </v-card>     
          </v-item>  
        </tr>
        <!-- {{isShown}} -->
        <td class="pt-1 pl-2"> {{selectionName[ n - 1 ].JapaneseName}}</td>
      </v-row>
    </v-container>
  </v-item-group>
</v-simple-table>
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
export default {
  props: ['materialCount','selectionName','Kind', 'rowIndex', 'isShown'],
  data: () =>({
    selectedMaterials : [],
    selected: ''

  }),
  methods:{
    check(TextureInfo){
      this.$ShiyoushoData.selectedInJSON.forEach(item =>{
        if(this.rowIndex === item.rowIndex){
          item.EnglishName = TextureInfo.EnglishName
          item.FilePath = TextureInfo.FilePath
          item.JapaneseName = TextureInfo.JapaneseName
          item.TextureId = TextureInfo.TextureId
        }
      })

      //console.log(this.$ShiyoushoData.clickMaterial)


    },

    preSelected(){
      this.selectedMaterials.forEach(item =>{
        if(item.RowIndex === this.rowIndex){
          this.selected = item.ColorIndex
        }
      })
    }



  },
  created(){
    this.selectedMaterials = [
                              {RowIndex: 2, ColorIndex: 0}, {RowIndex: 4, ColorIndex: 0},
                              {RowIndex: 5, ColorIndex: 0}, {RowIndex: 8, ColorIndex: 0},
                              {RowIndex: 10, ColorIndex: 0}, {RowIndex: 13, ColorIndex: 0},
                              {RowIndex: 14, ColorIndex: 0}, {RowIndex: 7, ColorIndex: 0},
                             ]
    this.preSelected();



    // this.$ShiyoushoData.selectedInJSON.forEach(item =>{
    //   console.log(item.Material)

    // })




    
  }









}
</script>