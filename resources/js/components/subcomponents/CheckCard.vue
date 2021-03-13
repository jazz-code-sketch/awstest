<template>
<v-container class="d-flex">

<v-item v-slot:default="{ active, toggle }" >
  <v-card
               :color="active ? 'primary' : ''"
               class="align-center"
               height="20"
               width="20"
               @click="toggle"
             >
            <v-scroll-y-transition>
              <div v-if="active" class="text-center">
                <!-- {{ $ShiyoushoData.setSelected(rowIndex, Kind,selectionName[n - 1],'',) }} -->
                    {{ activeItem( materialName )}}
              </div>
            </v-scroll-y-transition>
             </v-card>
           </v-item>
           {{ materialName }}
       
</v-container>
</template>

<script>
export default {
  props: ['type','materialName','colorName'],
  data: () =>({


  }),
  methods:{
    activeItem(materialName){
        console.log(materialName)
    }
  }




}
</script>