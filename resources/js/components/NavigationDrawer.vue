<template>
    <v-container>

    <v-navigation-drawer v-model="mainDrawer" app :clipped="$vuetify.breakpoint.lgAndUp" dense>
      <v-list dense>
        <template v-for="(item, i) in items" >
          <v-list-item :key="i" :to="item.to" @click="hideDrawer()">
            <v-list-item-action @click="hideDrawer()">
              <v-icon>{{item.icon}}</v-icon> 
            </v-list-item-action >        
            <v-list-item-content > {{item.text}} </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>

    </v-navigation-drawer>
    </v-container>  

</template>

<script>
import { bus } from '../../app'
export default {
  props: ['mainDrawer'],
    data: () => {
      return {
        items:[
          {icon: "mdi-file-plus", text: "New Plan", to: "/newplan"},
          {icon: "mdi-file-document", text: "Existing Plan", to: "/existing"},
          // {icon: "mdi-texture", text: "Add Texture", to : "/AddTexture"},
          // {icon: "mdi-apps", text: "Settings", to : "/settings"},
         // {icon: "mdi-apps", text: "3D_test", to : "/model"},
          {icon: "mdi-logout", text: "LogOut", to : "/Login"},
          //{icon: "mdi-user", text: "Update Information", to : "/Login"},
        ],  
      }
    },
    methods:{
      hideDrawer(){
        this.mainDrawer = false
      },
    },
    mounted(){
      // bus.$on('hideDrawer', (data) => {
      //   this.$props.mainDrawer = false
      // })

    }





}

</script>
