<template>
  <v-app>
    <v-dialog v-model="loginDialog" persistent max-width="400" class="elevation-12">
      <v-card>
        <v-toolbar color="primary" dark flat>
          <v-card-title class="headline">User Login</v-card-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="Email" name="login" prepend-icon="email" type="text" v-model="input.email" />
            <v-text-field id="password" label="Password" name="password" prepend-icon="lock" type="password" v-model="input.password" @keyup.enter="login" />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" dark @click="login()">Login</v-btn> <!-- emit data to parent -->
        </v-card-actions>
      </v-card>
    </v-dialog>
     
    <!-- This is for dialog message -->
    <v-dialog v-model="dialog" persistent max-width="290">  
      <v-card>
        <v-card-title class="headline">Login Error</v-card-title>
        <v-card-text> {{verify}} </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="red darken-1" text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>

import axios from 'axios'
import { bus } from '../app'

export default {
  name: 'Login',       
  data() {
    return {
      menu: false,              
      input: {
        email:'',
        password: ''
      },
      verify     : '',
      dialog     : false,
      loginDialog: true,
    }
  },
  methods: {
    changeUser(user){
      bus.$emit('changeUser', user);
    },
    async login(){
      try{
        const response = await this.$UserInfo.logInUser(this.input.email, this.input.password);
        this.changeUser(`Welcome  ${response.data.logged_user.name}!`);
        this.$router.push('/menu')
        this.$store.commit('loggedIn')
      }catch{
        this.verify = 'invalid credentials'
        this.dialog = true 
      }
    }
  },
  mounted(){
 




  }

  // mounted () {

          //this.$cookies.remove('srs_session')

           //axios.post(`${window.location.origin}/api/logout`)

          // axios.post(`${window.location.origin}/api/logout`)

          // location.replace(`${window.location.origin}`)
          // this.$store.commit('loggedOut') 


         
      
            // localStorage.removeItem('piranesiRequestPaper'); 
            //                 }
        
            //                 }else{
          //this.$store.commit('loggedOut') //change the state to logout
      
    

            //                   this.verify = 'Password is incorrect!'
            //                   this.dialog = true
            //                 }
            //             }else{
            //                 this.verify = 'Username is incorrect!'
            //                 this.dialog = true
            //             }
            //         })
    
            //     } else {
       

            // this.$store.commit('changeConstructionCode','')
            // this.$store.commit('changePlanNumber','')
            // this.$store.commit('changeRequestNumber','')
            // this.$store.commit('hideGaibu')
     

            // this.$store.commit('changeHouseType','')



    //     }
    // }







  }
</script>
     
