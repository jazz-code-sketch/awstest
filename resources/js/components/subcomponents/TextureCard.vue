<template>
  <v-item-group :v-model="test" active-class="orange" :multiple="isMultiple" max="2">
    <v-container>
      <v-row>
        <v-col
          v-for="(n, index) in textureItems" :key="index"
          cols="12"
          md="2"
          sm="4"
        >
          <v-item v-slot:default="{ active, toggle  }">
            <v-card
              align="center"
              height="97%"
              @click="toggle"
              outlined
              dense
              class="pt-2 pb-3"
            >
            {{n.Kind}}
            <v-img
              height="150"
              position="center"
              width="150"
              :src="n.FilePath | getRealFilePath"
            />
            {{n.JapaneseName}}


              <v-scroll-y-transition>
                <div v-if="active">
                  {{ check(tabIndex, n.JapaneseName)}}  
                </div>
                <div v-else>
                  {{inactive(n.JapaneseName)}}
                </div>

              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
 

    </v-container>
  </v-item-group>
</template>
<script>


export default {
  props:['texture', 'textureItems', 'isMultiple', 'tabIndex'],
    data: () => ({
      test: [],
      temp: [],

    }),

    filters:{
      getRealFilePath: function(value){
        let imgPath = `/images/${value}`
        return imgPath
      }
    },
    methods: {
      check(tabIndex, index){   
        // if(tabIndex === '外壁タイル'){
        //   this.temp = [...this.temp, index]
        //   console.log(this.temp)
        // }
  
        this.$TexturesObject.setSelected(tabIndex, index)

        // this.$store.commit('selectedTextures', { tabIndex, index }  
      },

      inactive(index){
        this.$TexturesObject.removeSelected(index) 
        
      }
        
      

    },
    mounted() {
 
      


 
    }











}
</script>
