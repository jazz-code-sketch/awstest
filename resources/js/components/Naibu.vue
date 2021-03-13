<template>
  <v-app>
    <v-card>
      <v-tabs v-model="tab" background-color="white" color="deep-purple accent-4" left center-active show-arrows>
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab"> 

    <!-- 建具･造作色 -->
    <div v-if="item.tabNo === 1">
      <v-container fluid>
        <v-row>
          <v-col cols="4" md="2" sm="4" v-for="texture in texturesDoorColor" :key="texture.index">
            
            
            
            <v-card dense align="center" :color="texture.chosenTexture" outlined elevation class="pt-5" @click="selectTexture(texture)">
              <v-img :src="texture.image" position="center" width="150" height="150" />
              <v-list-item-content>
                <v-list-item-title>{{ texture.text }}</v-list-item-title>
              </v-list-item-content>
            </v-card>



          </v-col>
        </v-row>
      </v-container>
    </div>










    <!-- ﾌﾛｰﾘﾝｸﾞ色 -->
    <div v-if="item.tabNo === 2">
      <v-container fluid>
        <v-row>
          <v-col cols="4" md="2" sm="4" v-for="texture in texturesFlooringColor" :key="texture.index">
            <v-card dense align="center" :color="texture.chosenTexture" outlined elevation class="pt-5" @click="selectTexture(texture)">
              <v-img :src="texture.image" position="center" width="150" height="150" />
              <v-list-item-content>
                <v-list-item-title>{{ texture.text }}</v-list-item-title>
              </v-list-item-content>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- 階段色 -->
    <div v-if="item.tabNo === 3">
      <v-container fluid>
        <v-row>
          <v-col cols="4" md="2" sm="4" v-for="texture in texturesStairsColor" :key="texture.index">
            <v-card dense align="center" :color="texture.chosenTexture" outlined elevation class="pt-5" @click="selectTexture(texture)">
              <v-img :src="texture.image" position="center" width="150" height="150" />
              <v-list-item-content>
                <v-list-item-title>{{ texture.text }}</v-list-item-title>
              </v-list-item-content>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- ｷｯﾁﾝｾｯﾄ -->
    <div v-if="item.tabNo === 4">
      <v-container fluid>
        <v-row>
          <v-col cols="4" md="2" sm="4" v-for="texture in texturesKitchenColor" :key="texture.index">
            <v-card dense align="center" :color="texture.chosenTexture" outlined elevation class="pt-5" @click="selectTexture(texture)">
              <v-img :src="texture.image" position="center" width="150" height="150" />
              <v-list-item-content>
                <v-list-item-title>{{ texture.text }}</v-list-item-title>
              </v-list-item-content>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
	
      </v-tab-item>
    </v-tabs-items>
</v-card>
  </v-app>


</template>
<script>
 export default {
    name: 'Naibu',
    data: () => ({
      tab: null,
      items: [ //should be json data to be fetch in database
         { tab: '建具･造作色 ', tabNo: 1 }, 
          { tab: 'ﾌﾛｰﾘﾝｸﾞ色 ', tabNo: 2  },
          { tab: '階段色 ', tabNo: 3  },
          { tab: 'ｷｯﾁﾝｾｯﾄ ', tabNo: 4  },
      ],
      texturesDoorColor: [
        { id: 0, image: `${process.env.MIX_API_BASEURL}:8002/HP EXTERNAL PATTERN/internal door/CB.jpg`, text: 'CB', chosenTexture: null },
        { id: 1, image: `${process.env.MIX_API_BASEURL}:8002/HP EXTERNAL PATTERN/internal door/PM.jpg`, text: 'PM', chosenTexture: null },

      ],
      texturesFlooringColor: [
        { id: 0, image: `${process.env.MIX_API_BASEURL}:8002/HP EXTERNAL PATTERN/floor/chocolate brown.jpg`, text: 'chocolate brown', chosenTexture: null },
        { id: 1, image: `${process.env.MIX_API_BASEURL}:8002/HP EXTERNAL PATTERN/floor/natural.jpg`, text: 'natural', chosenTexture: null },
        { id: 2, image: `${process.env.MIX_API_BASEURL}:8002/HP EXTERNAL PATTERN/floor/plain.jpg`, text: 'plain', chosenTexture: null },      
      ],
      texturesStairsColor: [
        { id: 0, image: `${process.env.MIX_API_BASEURL}:8002/HP EXTERNAL PATTERN/stairs/bitter.jpg`, text: 'bitter', chosenTexture: null }, 
        { id: 1, image: `${process.env.MIX_API_BASEURL}:8002/HP EXTERNAL PATTERN/stairs/light.jpg`, text: 'light', chosenTexture: null }, 
      
      ],
      texturesKitchenColor: [
        { id: 0, image: `${process.env.MIX_API_BASEURL}:8002/HP EXTERNAL PATTERN/kitchen/bitterwalnut.jpg`, text: 'bitter walnut', chosenTexture: null }, 
        { id: 1, image: `${process.env.MIX_API_BASEURL}:8002/HP EXTERNAL PATTERN/kitchen/lightwalnut.jpg`, text: 'light walnut', chosenTexture: null }, 
        { id: 2, image: `${process.env.MIX_API_BASEURL}:8002/HP EXTERNAL PATTERN/kitchen/whitewalnut.jpg`, text: 'white walnut', chosenTexture: null }, 

      ],

      chosenTexture: null,
    }),
    mounted(){
  
    },

    methods:{
     selectTexture(texture){

        // this.texturesYane.forEach( yane => {
        //   yane.chosenTexture = null  
        // })

        let textureid = texture.id;

        if (texture.chosenTexture != 'orange'){
          texture.chosenTexture  = 'orange'
        }else{
          texture.chosenTexture  = null
        }

        var element = { quantity: quantity };
      }      
    }
 }
</script>