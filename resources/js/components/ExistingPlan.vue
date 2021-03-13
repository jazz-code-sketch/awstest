<template>
  <v-app>
    <!-- This is for dialog message -->
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card class="elevation-6">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title class="arial">Revision Plan</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pt-4" >
           <!-- <v-text-field name="constructionCode" v-model="constructionCode" placeholder="お客様コード" @keyup="getplannumber" ref="constructionCode"  outlined></v-text-field> -->
          <div class="pb-7">
            <the-mask id="maskEdit" class="input pl-2" name="constructionCode" v-model="constructionCode" placeholder="お客様コード" mask="XXXXXXX-####" type="text" masked />
          </div>
            <v-select v-model="planNumber" name="planNumber" :items="planNumbers" :item-text="'plan_no'" :item-value="'plan_no'" label="図面番号" @change="getrequestnumber" outlined></v-select> <!-- Fetch revisions from database-->
            <v-select v-model="requestNumber" name="requestNumber" :items="requestNos" :item-text="'shio_no'" :item-value="'shio_no'" label="仕様書番号" @change="gethousetype" outlined></v-select > <!-- Fetch revisions from database-->
            <v-select v-model="houseType" name="houseType" :items="houseTypes" :item-text="'house_type'" :item-value="'house_type'" label="家タイプ" outlined></v-select> <!-- Fetch revisions from database-->
        </v-card-text>

        <v-card-actions>
             <v-btn color="blue darken-1" text @click="checkPlanDetails()">新規登録</v-btn>
            <v-btn color="blue darken-1" text @click="dialog=false; $router.push('menu').catch(()=>{})">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


      <v-dialog v-model="loading" hide-overlay persistent width="350">
      <v-card color="primary" dark>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Loading...</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

  </v-app>
</template>


<style scoped>
  .input{
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 15px;
    height: 55px;
    width: 100%;
  }
  .arial{
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

<script>



import { mapState, mapGetter, mapMutations } from 'vuex'
import { bus } from '../app'

  export default {
      
    name: 'Existing',
    data: () => ({
      loading: false,   
      //empInfo: {},
      dialog: true,
      constructionCode: '',
      planNumber:'',
      requestNumber:'',
      planNumbers: [], // the value of this is to be fetch in database using axios
      requestNos: [], //['4', '3', '2', '1'],
      houseType: [{houseType: 'i-smile'}],
      houseTypes: ['i-smile'],
      showName: false,
    }),
    watch:{
      loading (val) {
        if (!val) return
        setTimeout(() => (this.$router.push('GaibuList').catch(()=>{})
       ), 2500)
      }
    },

    mounted(){
      document.getElementById("maskEdit").addEventListener("keyup", this.getplannumber);

      this.selButton()
      //catch the error when user is trying to access the route without logging in

      // if(this.$store.state.isLogged === true){
      //   this.dialog = true
      // }else{
      //   this.$router.push({ name: "Login" }); //push to login route if not logged
      // }
      this.isDrawerHidden(false)
    },

    methods:{
      selButton (){
        bus.$emit('changeIt', '');
      },

      isDrawerHidden(bool){
        bus.$emit('hideDrawer', bool);
      },



      checkPlanDetails(){
        this.$ShiyoushoData.clearSelectedInJSON();  

        if (this.constructionCode !== '' && this.planNumber !== '' && this.houseType !== ''){
          axios.get(`${window.location.origin}/api/getAllUploadedTextures/${this.constructionCode}${this.planNumber}${this.requestNumber}${this.houseType}`)
            .then(res =>{  
              res.data.forEach( element => {
              this.$ShiyoushoData.setSelected( element.rowIndex, element.Kind, element.Material, element , element.colorCount )
            });
          })

          this.loading = true
          this.dialog = false
          this.$store.commit('changeConstructionCode', this.constructionCode)
          this.$store.commit('changePlanNumber', this.planNumber)
          this.$store.commit('changeRequestNumber', this.requestNumber)
          this.$store.commit('changeHouseType', this.houseType)

 


        }else{
            alert('Please complete the plan details')
        }
      },
      getplannumber(){
        if(this.constructionCode.length == '12'){
          let url = `api/getplannumber/${this.constructionCode}`
          axios.get(url).then( res =>{
            this.planNumbers = res.data;
          }).catch(err =>{
            console.log(err)
          })
        }else{
          //
        }
      },
      getrequestnumber(){
        let url = `api/getrequestnumber/${this.constructionCode}/${this.planNumber}`
        axios.get(url).then( res =>{
            this.requestNos = res.data;
        }).catch(err =>{
             console.log(err)
        })
      },
      gethousetype(){
        let url = `api/gethousetype/${this.constructionCode}/${this.planNumber}/${this.requestNumber}`
        axios.get(url).then( res =>{
            this.houseTypes = res.data;
        }).catch(err =>{
             console.log(err)
        })
      },
    }

  }
</script>
