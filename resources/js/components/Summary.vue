
<template>
  <v-app>

<!----- FOR PRINTING PURPOSE ONLY ------------> 
<!--------------------------------------------> 
      <vue-easy-print tableShow ref="easyPrint" style="display:none" >

        <table style="width:100%;border-collapse: collapse;">
              <label>Construction Code:{{constructionCode}}</label> &emsp;
              <label>Plan Number: {{planNumber}}</label>&emsp;
              <label>Shio Number:{{requestNumber}}</label>&emsp;
              <label>House Type: {{houseType}}</label>

            <thead>
              <tr>
                <td colspan="2">Kind</td>
                <td>Material</td>
                <td>Texture(JapaneseName)</td>
              </tr>
            </thead>
            <tbody v-for="(texture, textureIndex) in this.gaibulisListTextures" :key="textureIndex.textureIndex">
				        <template v-if="texture.rowIndex >= 0 ">
     

                  <tr class="highlight" v-if="texture.rowIndex === 41">
                    <template v-if="isParapet" >
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 40">
                    <template v-if="isPorch">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 42">
                    <template v-if="isTerasu">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 43">
                    <template v-if="isSlope">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr v-else-if="texture.rowIndex === 25" >
                      <td colspan="2">玄関戸.{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 44" >
                    <template v-if="isGenkan">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 45" >
                    <template v-if="isGenkan">
                      <td colspan="2">玄関戸.{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 39">
                    <template v-if="isWoodDeck">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 46">
                    <template v-if="isGenkanUchidoma">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>     
                  <tr class="highlight" v-else-if="texture.rowIndex === 30 || texture.rowIndex === 31 
                      || texture.rowIndex === 32 || texture.rowIndex === 33">
                    <template v-if="isBalcony2">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>

                  <tr class="highlight2" v-else-if="texture.rowIndex === 34 || texture.rowIndex === 35 
                      || texture.rowIndex === 36 || texture.rowIndex === 37">
                    <template v-if="isBalcony3">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>

                  <tr v-else-if="texture.rowIndex !== 7 && texture.rowIndex !== 9 && 
                     texture.rowIndex !== 11 && texture.rowIndex !== 15 && texture.rowIndex !== 22">
                    <td colspan="2">{{texture.Kind}}</td>
                    <td>{{texture.Material}}</td>
                    <td>{{texture.JapaneseName}}</td>
                  </tr>
                  
                  <tr v-else>
                    <td colspan="2">{{texture.Kind}}</td>
                    <td>-</td>
                    <td>{{texture.JapaneseName}}</td>
                    <td style="display:none">{{texture.EnglishName}}</td>
                    <td style="display:none">{{texture.TextureId}}</td>
                    <td style="display:none">{{texture.FilePath}}</td>
                  </tr>
                </template>                  
            </tbody>          
        </table>  
        
      </vue-easy-print>
<!--------------------------------------------> 
<!-------------------------------------------->     
      <template>
        <v-simple-table style="width:100%; margin-top:-5px;">
            <thead>
              <tr>
                <td colspan="2">Kind</td>
                <td>Material</td>
                <td>Texture(JapaneseName)</td>
              </tr>
            </thead>
            <tbody v-for="(texture, textureIndex) in this.gaibulisListTextures" :key="textureIndex.textureIndex">
				        <template v-if="texture.rowIndex >= 0 ">

                  <tr class="highlight" v-if="texture.rowIndex === 41">
                    <template v-if="isParapet" >
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 40">
                    <template v-if="isPorch">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 42">
                    <template v-if="isTerasu">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 43">
                    <template v-if="isSlope">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr v-else-if="texture.rowIndex === 25" >
                      <td colspan="2">玄関戸.{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 44" >
                    <template v-if="isGenkan">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 45" >
                    <template v-if="isGenkan">
                      <td colspan="2">玄関戸.{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 39">
                    <template v-if="isWoodDeck">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>
                  <tr class="highlight" v-else-if="texture.rowIndex === 46">
                    <template v-if="isGenkanUchidoma">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>                  

                  <tr class="highlight" v-else-if="texture.rowIndex === 30 || texture.rowIndex === 31 
                      || texture.rowIndex === 32 || texture.rowIndex === 33">
                    <template v-if="isBalcony2">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>

                  <tr class="highlight2" v-else-if="texture.rowIndex === 34 || texture.rowIndex === 35 
                      || texture.rowIndex === 36 || texture.rowIndex === 37">
                    <template v-if="isBalcony3">
                      <td colspan="2">{{texture.Kind}} </td>
                      <td>{{texture.Material}}</td>
                      <td>{{texture.JapaneseName}}</td>
                    </template>
                  </tr>

                  <tr v-else-if="texture.rowIndex !== 7 && texture.rowIndex !== 9 && 
                     texture.rowIndex !== 11 && texture.rowIndex !== 15 && texture.rowIndex !== 22">
                    <td colspan="2">{{texture.Kind}}</td>
                    <td>{{texture.Material}}</td>
                    <td>{{texture.JapaneseName}}</td>
                  </tr>
                  
                  <tr v-else>
                    <td colspan="2">{{texture.Kind}}</td>
                    <td>-</td>
                    <td>{{texture.JapaneseName}}</td>
                    <td style="display:none">{{texture.EnglishName}}</td>
                    <td style="display:none">{{texture.TextureId}}</td>
                    <td style="display:none">{{texture.FilePath}}</td>
                  </tr>

                </template> 
            </tbody>
            <br>
              <tr>
                <th><v-checkbox v-model="printSummary" label="Print" style="width:100px;"></v-checkbox></th>
                <th colspan="4">
                  <center>
                    <v-btn depressed style="width:300px;margin-left:-200px" color="primary" class="elevation-6" @click="TextureDetails()">SAVE</v-btn>
                  </center> 
                </th>
              </tr>     
         </v-simple-table>

      </template>
      <div>

  </div> 
    <v-dialog v-model="dialog" hide-overlay persistent width="350">
      <v-card color="primary" dark>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Processing</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          {{saveMessage}}
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

<!-- border: .1px dotted grey; -->

<style scoped>
  thead{
   background-color: lightgray;
  }
  label{
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;    
  }
  td{
    border: 0.5px solid grey;
    padding: 5px;
  }
  .header{
    background-color: #d9d9d9;
  }
  .arial{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 90%;
  }
  .head{
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .highlight{background-color : rgb(231, 239, 255);} 
  .highlight2{background-color : rgb(206, 222, 252);}
</style>

<script>

import vueEasyPrint from "vue-easy-print";
import { mapState, mapGetter, mapActions, mapMutations } from 'vuex'
import SelectionMenu from './subcomponents/Menu'

export default {
  name: 'Summary',
  data: () => ({
    saveMessage: '',
    dialog: false,
    dataCount: '',
    selectedTextures : [],
    gaibulisListTextures : [],
	multipleRequest : [ 'changeBalcony2', 
                        'changeBalcony3',
                        'changePorch',
                        'changeGenkanUchidoma',
                        'changeTerasu',
                        'changeSlope',
                        'changeGenkan',
                        'changeWoodDeck'
                      ],
    //add tables here
    tables: [
             { rowIndex: 0, tableName: 'roofmaterial' },
             { rowIndex: 1, tableName: 'solarpanel' },
             { rowIndex: 2, tableName: 'parapetcoping' },
             { rowIndex: 41, tableName: 'parapetcoping2' },
             //{ rowIndex: 3, tableName: 'solarpower' },
             { rowIndex: 4, tableName: 'balconyceiling' },
             { rowIndex: 5, tableName: 'roofceiling' },
             { rowIndex: 6, tableName: 'fascia' },
             { rowIndex: 7, tableName: 'planamadois' },
             { rowIndex: 8, tableName: 'tatetoi' },
             { rowIndex: 9, tableName: 'mizukiri' },
             //{ rowIndex: 10, tableName: 'exteriorwall' },
             { rowIndex: 11, tableName: 'sash' },
             //{ rowIndex: 12, tableName: 'sashglass' },
             { rowIndex: 13, tableName: 'balconysecondfloor' },
             { rowIndex: 14, tableName: 'balconysecondglass' }, 
             //{ rowIndex: 15, tableName: 'balconysecondcoping' },
             { rowIndex: 26, tableName: 'balconysecondhandrail' }, 
             { rowIndex: 30, tableName: 'balconysecondfloor2' },
             { rowIndex: 31, tableName: 'balconysecondglass2' }, 
             { rowIndex: 32, tableName: 'balconysecondhandrail2' },
             //{ rowIndex: 33, tableName: 'balconysecondcoping2' },              
             { rowIndex: 34, tableName: 'balconysecondfloor3' },
             { rowIndex: 35, tableName: 'balconysecondglass3' }, 
             //{ rowIndex: 36, tableName: 'balconysecondcoping3' },
             { rowIndex: 37, tableName: 'balconysecondhandrail3' }, 
             //{ rowIndex: 17, tableName: 'porchsidetile' },
             { rowIndex: 18, tableName: 'porch' },
             { rowIndex: 40, tableName: 'porch2' },
             { rowIndex: 19, tableName: 'genkanuchidoma' },
             { rowIndex: 46, tableName: 'genkanuchidoma2' },
             { rowIndex: 20, tableName: 'balconythirdfloor' },
             { rowIndex: 21, tableName: 'balconythirdglass' }, 
             { rowIndex: 22, tableName: 'balconythirdcoping' }, 
             { rowIndex: 27, tableName: 'balconythirdhandrail' } ,                 
             //{ rowIndex: 23, tableName: 'genkanitem' }, 
             
             { rowIndex: 24, tableName: 'genkantexture' },  
             { rowIndex: 25, tableName: 'genkanhandle' },   
             { rowIndex: 44, tableName: 'genkantexture2' },  
             { rowIndex: 45, tableName: 'genkanhandle2' },   
             { rowIndex: 28, tableName: 'terasu' } ,
             { rowIndex: 42, tableName: 'terasu2' } ,
             { rowIndex: 29, tableName: 'slopeporch' },
             { rowIndex: 43, tableName: 'slopeporch2' },
             { rowIndex: 38, tableName: 'wooddeck' },
             { rowIndex: 39, tableName: 'wooddeck2' }           
            ]
  }),
  methods:{
    loadData(){
      //this.selectedTextures = this.$TexturesObject.selectedInJSON,
      this.gaibulisListTextures = this.$ShiyoushoData.selectedInJSON
    },

    getTableName(Array, x){
      return Array.filter( Array => Array.rowIndex === x ).map(Array => Array.tableName).toString()
    },

    getRows(Array, x){
        return Array.filter( Array => Array.rowIndex === x )
    },

    TextureDetails(){
      //console.log(this.$ShiyoushoData.selectedInJSON)
      this.dataCount = 0
      let insertUpdateUrl  = 'api/insertOrUpdate'
      let uniqueID = this.constructionCode+this.planNumber+this.requestNumber+this.houseType

      //saving plan informations if not exists
      axios.get(`api/checkPlanIfExist/${uniqueID}`).then(res =>{
        if(res.data.length === 0){
          let urlNewPlan = 'api/newplan'
          let dataNewPlan = { constructionCode: this.constructionCode, planNumber: this.planNumber, requestNumber: this.requestNumber, houseType: this.houseType }
          axios.post(urlNewPlan, dataNewPlan).then( res =>{
            //console.log('Successfully inserted new plan')
          })
        }
      })

      //for items
      this.gaibulisListTextures.forEach(item =>{
        let tableName = this.getTableName(this.tables, item.rowIndex)  
        let dataToSave  =  [{ table: tableName, constructionCode: this.constructionCode, planNumber: this.planNumber, unique: uniqueID}, this.getRows(this.gaibulisListTextures, item.rowIndex) ]
        if(tableName != '' && (dataToSave[1][0].JapaneseName != '-' || dataToSave[1][0].JapaneseName != '') ){
          this.dialog = true

            axios.post(insertUpdateUrl, dataToSave)
             .then( res =>{
               this.saveMessage = `Successfully saved ${tableName} data...`
              })
              .then( res =>{
               this.dataCount = this.dataCount + 1
              })
              .catch(err =>{
               this.saveMessage = `Failed saving ${tableName} data...`  
              })
              .then(res =>{
               this.dataCount = this.dataCount + 1
              })

        }
        //delete if no material and texture to be uploaded.
        // if((dataToSave[1][0].JapaneseName == '-' || dataToSave[1][0].JapaneseName == '')
        //    && (dataToSave[1][0].Material == '-' || dataToSave[1][0].Material == '')){
        //    axios.post(deleteItem, dataToSave)
        // }
        this.$ShiyoushoData.clearSelectedInJSON();  
      })  
	  
	    this.multipleRequest.forEach( item =>{
           this.$store.commit(item, false); 
        }) 

     }, 
  },
 
  mounted(){
    this.loadData()
  },

  computed: {
    ...mapState(['constructionCode', 'planNumber', 'houseType','requestNumber','choosenTextures', 'isParapet', 'isPorch', 'isWoodDeck', 'isGenkan', 'isBalcony2', 'isBalcony3', 'isTerasu', 'isSlope', 'isGenkanUchidoma' ]),
    printSummary: {
      get() {
       return this.$store.getters.printSummary
      },
      set(value) {
        this.$store.dispatch('updateprintSummary', value)
      },
    },
  },

  components: {
    vueEasyPrint
  },

  watch:{
    saveMessage: function(){
      //console.log(this.dataCount + 1 + '@' + this.gaibulisListTextures.length)
      if(this.dataCount + 1 === this.gaibulisListTextures.length || this.dataCount > this.gaibulisListTextures.length){
        this.dialog = false  
          if(this.printSummary){  
              this.$refs.easyPrint.print()
          };
        this.$router.push('/menu').catch(()=>{})
      }

    }
   },
}
</script>

