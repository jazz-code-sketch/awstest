<template>
   <v-row v-show='true' class="secondAppBar">
     <v-app-bar class="pl-3 pr-3">            
       <v-text-field class="pl-3 pt-5 planInfo" label="ConstructionCode" readonly dense v-model="constructionCode" /> 
       <v-text-field class="pl-3 pt-5 planInfo" label="PlanNumber" readonly dense v-model="planNumber" />
       <v-text-field class="pl-3 pt-5 planInfo" label="ShioNumber" readonly dense v-model="requestNumber" />
       <v-text-field class="pl-3 pt-5 planInfo" label="HouseType" readonly dense v-model="houseType" />
       <v-spacer />     

       <v-toolbar-items class="hidden-sm-and-down"> <!-- hide when in small screens -->
         <v-btn style="display:none" text :class="isPressedGaibu" @click="selectedButton('外部')" value="外部" disabled> 外部 </v-btn>
         <v-divider style="display:none" inset vertical />
         <v-btn style="display:none" text :class="isPressedNaibu" @click="selectedButton('内部')" disabled> 内部 </v-btn> 
         <v-divider inset vertical />   
         <v-btn text :class="isPressedGaibuList" @click="selectedButton('外部 シート-')" > 外部 シート- </v-btn> 
         <v-divider inset vertical />  
         <v-btn style="display:none" text :class="isPressedBasicSpecs" @click="selectedButton('基本仕様')" disabled> 基本仕様 </v-btn>
         <v-divider style="display:none" inset vertical /> 
         <v-btn style="display:none" text :class="isPressedInternalFinish" @click="selectedButton('内部仕上')" disabled> 内部仕上 </v-btn> 
         <v-divider inset vertical />
         <v-btn text :class="isPressedSummary" @click="selectedButton('概要')" > 概要 </v-btn> 
         <v-divider inset vertical />
       </v-toolbar-items>

       <v-app-bar-nav-icon class="hidden-md-and-up">
         <v-menu bottom left>
           <template v-slot:activator="{ on, attrs }">
             <v-btn icon v-bind="attrs" v-on="on"  >
               <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
           </template>
           <v-list class="pa-3">
             <v-list-item v-for="(item, i) in toolbarItems" :key="i" @click="selectedButton(item.title)" >
               <v-list-item-title>{{ item.title }}</v-list-item-title>
             </v-list-item>
            </v-list>
          </v-menu>
       </v-app-bar-nav-icon>
     </v-app-bar>
   </v-row>
</template>
<style scoped>
 .planInfo {
    font-size: .8em;
    padding-left: 30px;
    font-family: Arial, Helvetica, sans-serif;
    /* font-weight: bold; */
 }
 .secondAppBar{
    position: '-webkit-sticky';
    position: sticky;
    top: 48px;
    z-index: 1;
 }
</style>

<script>
import { bus } from '../../app'

export default {
  props: ['constructionCode', 'planNumber', 'requestNumber', 'houseType', 'selectedItem'],
  data(){
    return {
      isPressedGaibu: null,
      isPressedNaibu: null,

      isPressedGaibuList: null, //temp enable by default
      isPressedSummary: null, 
      isPressedBasicSpecs: null,
      isPressedInternalFinish: null,
      toolbarItems: [
        { title: '外部' },
        { title: '内部' },
        { title: '外部 シート-' },
        { title: '基本仕様' },
        { title: '内部仕上' },
        { title: '概要' }
      ],       
    }
  },
  mounted(){
    //listen to event
    bus.$on('changeIt', (data) => {
      this.selectedButton(data);
    })
  },
  methods:{
    selectedButton(value){
      switch(value){
        case '':
          this.isPressedGaibu     = null
          this.isPressedNaibu     = null
          this.isPressedGaibuList = null
          this.isPressedSummary   = null
          this.isPressedBasicSpecs = null
          this.isPressedInternalFinish = null  
          break;        
        case '外部':
          this.isPressedGaibu     = 'deep-orange lighten-4'
          this.isPressedNaibu     = null
          this.isPressedGaibuList = null
          this.isPressedSummary   = null
          this.isPressedBasicSpecs = null
          this.isPressedInternalFinish = null
          this.$store.commit('showGaibu')
          
          if(this.$route.name !== 'Gaibu'){
            this.$router.push({ name: "Gaibu" }).catch(()=>{});
          }        
          break;
        case '内部':
          this.isPressedGaibu     = null
          this.isPressedNaibu     = 'deep-orange lighten-4'
          this.isPressedGaibuList = null
          this.isPressedSummary   = null
          this.isPressedBasicSpecs = null,
          this.isPressedInternalFinish = null,
          this.$router.push({ name: "Naibu" }).catch(()=>{})
          break;
        case '外部 シート-':
          this.isPressedGaibu     = null
          this.isPressedNaibu     = null 
          this.isPressedGaibuList = 'deep-orange lighten-4'
          this.isPressedSummary   = null
          this.isPressedBasicSpecs = null
          this.isPressedInternalFinish = null
          this.$router.push({ name: "GaibuList" }).catch(()=>{})
          break;
        case '概要':
          this.isPressedGaibu     = null
          this.isPressedNaibu     = null 
          this.isPressedGaibuList = null
          this.isPressedBasicSpecs = null
          this.isPressedInternalFinish = null
          this.isPressedSummary   = 'deep-orange lighten-4'
          this.$router.push({ name: "Summary" }).catch(()=>{})
          break;
        case '基本仕様':
          this.isPressedGaibu     = null
          this.isPressedNaibu     = null 
          this.isPressedGaibuList = null
          this.isPressedBasicSpecs = 'deep-orange lighten-4'
          this.isPressedInternalFinish = null
          this.isPressedSummary   = null
          this.$router.push({ name: "BasicSpecs" }).catch(()=>{})
          break;
        case '内部仕上':
          this.isPressedGaibu     = null
          this.isPressedNaibu     = null 
          this.isPressedGaibuList = null
          this.isPressedBasicSpecs = null
          this.isPressedInternalFinish = 'deep-orange lighten-4'   
          this.isPressedSummary   = null
          this.$router.push({ name: "InternalFinish" }).catch(()=>{})
          break;
      }
      //this.$store.commit('selectedView',value)
    },// end selected button
    }
 

}





</script>
