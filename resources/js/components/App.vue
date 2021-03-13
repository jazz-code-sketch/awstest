<template>
  <v-app id="inspire" >
    <nav-drawer :mainDrawer="mainDrawer" />
      <v-container >

        <v-app-bar flat :clipped-left="$vuetify.breakpoint.lgAndUp" app dark color="blue darken-3" dense>
          <v-btn @click="mainDrawer = !mainDrawer" icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <v-toolbar-title> SHIYOUSHO REQUEST SYSTEM </v-toolbar-title>
          <v-spacer></v-spacer>
              {{ fullname }}
        </v-app-bar>
      </v-container>

      <second-appbar
       :constructionCode="constructionCode"
       :planNumber="planNumber"
       :requestNumber="requestNumber"
       :houseType="houseType"
       :selectedItem="this.selectedButton"
      />

    <!-- Routes will appear in this section (e.g Login, AddTexture, etc)-->
    <router-view class="pa-3"/>

  </v-app>
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

//logout when user close the tab
//window.addEventListener("beforeunload", function (e) {
  //localStorage.removeItem('piranesiRequestPaper');
  // var confirmationMessage = "\o/";
  // (e || window.event).returnValue = confirmationMessage; 
  // return confirmationMessage;                            
//});


import { mapState, mapGetter, mapMutations } from 'vuex'
import NavDrawer from './subcomponents/NavigationDrawer'
import SecondAppbar from './subcomponents/SecondAppbar'
import { bus } from './../app'

export default {
  name: 'App',
  components: {
    NavDrawer,
    SecondAppbar,
  },
 
  data: () => ({
    mainDrawer: false,
    fullname: '',
    tablists: [],
    selectedButton: ''
  }),
  created(){
    this.validateUserSession()
  },
  mounted(){
    bus.$on('changeUser', (data) => {
      this.fullname = data
    })
    bus.$on('hideDrawer', (data) => {
      this.mainDrawer = data
    })
  },
  computed: {
    ...mapState(['constructionCode', 'planNumber', 'houseType','requestNumber','currentView','isLogged']),  
  },
  methods:{
    setMessage(showNavBar) {
      this.showNavBar = showNavBar;
    },
    
    async validateUserSession(){
      try{
        const data = await this.$UserInfo.checkIfValidCookie();  
        const path = `/login`
  
        if( !data ){
          this.$UserInfo.logOutUser();   
          if (this.$route.path !== path) this.$router.push(path)            
        }
      }catch{
        console.log('unauthorized')
      }
    }


  


    //   this.$store.commit('loggedOut'); //change the state to logout
    //   this.changeMsg('false')
    //   this.$store.commit('changeConstructionCode','')
    //   this.$store.commit('changePlanNumber','')
    //   this.$store.commit('changeRequestNumber','')
    //   this.$store.commit('changeHouseType','')
    //   this.$store.commit('hideGaibu')
    //   this.$store.commit('clearSelectedTextures')
    // }
  }//end methods
};
</script>