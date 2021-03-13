<template>
  <v-app>

    <!-- This is for dialog message -->
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card class="elevation-6">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title class="arial">入力情報(NEW PLAN)</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pt-4" >
        <div class="pb-7">
          <the-mask class="input pl-2" name="constructionCode" v-model="constructionCode" placeholder="お客様コード" mask="XXXXXXX-####" type="text" masked />
        </div>
          
          <div>
              <v-text-field maxlength="6" v-model="planNumber" name="planNumber" placeholder="図面番号" @keyup="getShioNumber()" outlined></v-text-field>
              <v-text-field maxlength="2" v-model="requestNumber" name="requestNumber" placeholder="仕様書番号" outlined></v-text-field>
              <!-- <v-text-field v-model="houseType" name="houseType" placeholder="家タイプ" outlined></v-text-field> -->
              <v-select v-model="houseType" :name="houseType" label="家タイプ" :items="srsHouseTypes[0]" :item-text="'HouseType'" :item-value="'HouseType'" outlined></v-select>
          </div>
        </v-card-text>

        <v-card-actions>
    
             <v-btn color="blue darken-1" text @click="checkPlanDetails(); isDrawerHidden(false)">新規登録</v-btn>
              <v-btn color="blue darken-1" text @click="getPreviousPlan(); isDrawerHidden(false)" >呼び出し</v-btn>
            <v-btn color="blue darken-1" text @click="dialog=false; $router.push('menu').catch({})">Close</v-btn>
        </v-card-actions>
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
import MenuDialog from './subcomponents/Menu'
import { mapState, mapGetters, mapMutations } from 'vuex'
import { bus } from '../app'

  export default {
    components:{
       MenuDialog 
    },
    name: 'Main',
    data: () => ({
      empInfo: {},
      mainDrawer: false,
      dialog: true,
      constructionCode: '',
      planNumber:'',
      requestNumber:'',
      planNumbers: '', // the value of this is to be fetch in database using axios
      requestNos: [], //['4', '3', '2', '1'],
      houseType: '',
      showName: false,
      token: '',
    }),
    mounted(){

    bus.$on('getToken', (data) => {
        this.token = data
    })

    alert(this.token)



     
     },
    computed: {
      ...mapState(['srsHouseTypes']),
      ...mapGetters(['getHouseTypeNumber'])
    },
    methods:{
      isDrawerHidden(bool){
        bus.$emit('hideDrawer', bool);
      },
      getShioNumber(){
        this.requestNumber = 1;
        let urlChecks = `api/getShioNumber/${this.constructionCode}/${this.planNumber}`
          axios.get(urlChecks).then( res =>{
            if(res.data.length > 0){
              let shioNo = res.data[0].shio_no
              if(isNaN(shioNo)){
                this.requestNumber = '1'
              }else{
                this.requestNumber = parseInt(shioNo) + 1
              }
            }
          })
        },
      checkPlanDetails(){
          //checking if plan is exist
          let urlCheck = `api/checkPlanIfExist/${this.constructionCode+this.planNumber+this.requestNumber+this.houseType}`
          axios.get(urlCheck).then( res =>{

            if(res.data.length > 0){
              alert('Plan Already Exists!')
            }else if(this.constructionCode !== '' && this.planNumber !== '' && this.houseType !== '' && this.requestNumber !== '' ){
              // check if details is complete
              this.$store.commit('changeConstructionCode', this.constructionCode)
              this.$store.commit('changePlanNumber', this.planNumber)
              this.$store.commit('changeRequestNumber', this.requestNumber)
              this.$store.commit('changeHouseType', this.houseType)
              this.$router.push({ name: "GaibuList" }).catch(()=>{})


               this.$PlanData.setHouseType(this.getHouseTypeNumber);

            }else{
              alert('Please filled-up all informations.')
            }
          })
      },
      getPreviousPlan(){
          //checking if plan is exist
          let urlCheck = `api/checkPlanIfExist/${this.constructionCode+this.planNumber+this.requestNumber+this.houseType}`
          axios.get(urlCheck).then( res =>{

            if(res.data.length > 0){
              alert('Plan Already Exists!')
            }else if(this.constructionCode !== '' && this.planNumber !== '' && this.houseType !== '' && this.requestNumber !== '' ){
              // check if details is complete
              this.dialog = false
              this.$store.commit('changeConstructionCode', this.constructionCode)
              this.$store.commit('changePlanNumber', this.planNumber)
              this.$store.commit('changeRequestNumber', this.requestNumber)
              this.$store.commit('changeHouseType', this.houseType)

              //Save to global class
              this.$PlanDetails.setControlNumber(this.constructionCode)
              this.$PlanDetails.setPlanNumber(this.planNumber)
              this.$PlanDetails.setRequestNumber(this.requestNumber)
              this.$PlanDetails.setHouseType(this.houseType)

              this.$router.push({ name: "Previous Plan" }).catch({});

            }else{
              alert('Please filled-up all informations.')
            }
          })
        
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
