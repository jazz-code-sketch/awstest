<template>
  <v-app>
    <v-card v-show="this.$store.state.isGaibu" class="elevation-16">
      <v-tabs v-model="tab" background-color="white" color="deep-purple accent-4" left center-active show-arrows>
        <v-tab v-for="(item, index) in $GaibuTabs[0]" :key="index" >
          {{ item.TabName}}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(item, index) in $GaibuTabs[0]" :key="index" >
          <template v-if="item.SortNo === index" > <!-- Loop in tabs and array of items -->
            <div v-if="index === 1"> <!-- if gaihekiTairu -->
              <texture-card :textureItems="$TexturesGroup[index][0]" :tabIndex="item.TabName" :isMultiple="true" /> 
            </div>
            <div v-else>
              <texture-card :textureItems="$TexturesGroup[index][0]"  :tabIndex="item.TabName" /> 
            </div>           
          </template>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
//import * as Textures from './../class/Textures.js' //class path

//Sub Component
import TextureCard from './subcomponents/TextureCard'

 export default {
    name: 'Gaibu',
    components: {
      TextureCard,
    },
    data: () => ({
      tab: 0,
      tablist: '', 
    }),
  computed: {
    ...mapGetters(['getSelectedRoof','getSelectedOutsideTile','getSelectedBalconyGlass','getSelectedBalconyHandrail','getSelectedDesignLouver',
                   'getSelectedSash','getSelectedGenkanDoor','getSelectedNokitoi','getSelectedMizukiri','getSelectedPorchTile'])  
   },
   mounted(){

      if(this.$store.state.isLogged === true){
        this.dialog = true   
      }else{
        this.$router.push({ name: "Login" }); //push to login route if not logged
      }

    },
    methods: {

    }
 }
</script>