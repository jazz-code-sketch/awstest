<template>
  <v-app>
    <v-row >
      <v-col cols="12" md="12" class="text-center">
        <v-card flat class="pa-2 mx-auto" max-width="800">
          <v-simple-table>
            <tr v-for="item in internalFinish" :key="item.name">
              <td class="text-center arial"> {{ item.name }} </td>     
              <td>
                <tr class="arial" v-for="(itemC, index) in item.selections" :key="index">   
                  <v-checkbox class="shrink mt-0 arial" :label="itemC" :value="index" @change="showSubCategories(item, index);" />
                </tr>      
              </td>
            
              <div v-if="item.name === 'フローリング色'" v-show="subCategoriesFlooringColor">
                <td v-for="(itemE, j) in item.subCategories" :key="j">
                  <tr v-for="(itemF, f) in itemE.selections" :key="f"> 
                    <v-checkbox class="shrink mt-0 arial" :label="itemF" :value="k"/>
                  </tr>
                </td>
              </div> 

              <!-- this is for the subcategories 1 in kamidana -->
              <div v-if="item.name === '神棚'" v-show="subCategoriesKamidanaType1">
                <td v-for="(itemE, j) in item.subCategories" :key="j">
                  <template v-if="j === 0"> 
                  <tr v-for="(itemF, f) in itemE.selections" :key="f"> 
                    <v-checkbox class="shrink mt-0 arial" :label="itemF" :value="k"/>
                  </tr>
                </template>

                </td>
              </div>

              <!-- this is for the subcategories 2 in kamidana -->
              <div v-if="item.name === '神棚'" v-show="subCategoriesKamidanaType2">
                <td v-for="(itemE, j) in item.subCategories" :key="j">
                  <template v-if="j === 1">
                  <tr v-for="(itemF, f) in itemE.selections" :key="f"> 
                    <v-checkbox class="shrink mt-0 arial" :label="itemF" :value="k"/>
                  </tr>
                </template>
                </td>
              </div> 
            </tr> 
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-app> 
</template>
<style scoped>
  td,tr{
    border: .1px dotted grey;
    padding: 5px;
    /* font-family: Arial, Helvetica, sans-serif; */
    /* font-size: 90%; */
  }
  .header{
    background-color: #d9d9d9;
  }
  .arial{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 90%;
  }
</style>

<script>
  export default {
    name: 'InternalFinish',
    data: () => ({
   
        showMe : false,
        internalFinish: [
          {
            name: '造作色',
            selections: [ 'ピュアメイプル（PM)', 'ショコラブラウン（CB)', 'なし' ]
          },
          {
            name: 'フローリング色',
            selections: [ '高耐久フローリング', 'その他', '未定'],
            subCategories: [
              {
                selections: [ 'ナチュラルブラウン(N)/ピュアハード塗装','プレーン(P/)ピュアハード塗装','ショコラブラウン(CB)/ ピュアハード塗装' ]   
              }
            ]
          },
          {
            name: '銘木色',
            selections: ['白木', 'なし', '未設定'] 
          },
          {
            name: '神棚',
            selections: ['神棚ユニットタイプ','一枚板タイプ'], 
            subCategories: [
              {
                selections: ['雲幕板タイプ(3.0尺×1.2尺)　KG3012','雲幕板タイプ(4.5尺×1.2尺)　KG4512','雲幕板タイプ(6.0尺×1.2尺)　KG6012'],  
              },
              {
                selections: ['檜集成(2.0尺×1.2尺)　KB2012','檜集成(3.0尺×1.2尺)　KB3012','檜集成(4.5尺×1.2尺)　KB4512','檜集成(6.0尺×1.2尺)　KB6012'],
              }
            ]  

          },
          {
            name: '階段　色',
            selections: ['ライト','ビター'],     
          }
        ],
        subCategoriesFlooringColor: false,
        subCategoriesKamidanaType1: false,
        subCategoriesKamidanaType2: false,

    }),//end data 
    methods: {
      showSubCategories(obj, index){  
        if(obj.name === 'フローリング色' && index === 0){
          this.subCategoriesFlooringColor = !this.subCategoriesFlooringColor
        }
        if(obj.name === '神棚' && index === 0){
          this.subCategoriesKamidanaType1 = !this.subCategoriesKamidanaType1
        }
        if(obj.name === '神棚' && index === 1){
          this.subCategoriesKamidanaType2 = !this.subCategoriesKamidanaType2
        }       
      }
    }




  
  } //end export default
</script>