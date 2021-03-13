<template>
  <v-app>
    <v-row>
      <v-col cols="12" md="6">
        <v-card flat class="pa-2">
          <v-simple-table class="arial" >
            <tr v-for="(item, index) in basicSpecsRaising" :key="index">
              <td class="text-center"> {{ item.name }} </td>     
              <td>
                <tr class="arial" v-for="(itemC, index) in item.selections" :key="index">  
                  <v-checkbox class="shrink mt-0" :label="itemC" :value="index" @change="showSubCategories(item,index)" />
                </tr>      
              </td>
    
            <!-- this line is for subcategories -->
            <v-flex v-show="subCategoriesKitchen">
              <td v-for="(itemD, i) in item.subCategories" :key="i">{{itemD.name}}</td>
              <td v-for="(itemE, j) in item.subCategories" :key="j">
                <tr v-for="(itemF, k) in itemE.selections" :key="k" class="arial"> 
                  <v-checkbox class="shrink mt-0" :label="itemF" :value="k" />
                </tr>
              </td>
            </v-flex>

            </tr>  
          </v-simple-table>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card flat class="pa-2">
          <v-simple-table>
            <tr v-for="item in basicSpecsRaising2" :key="item.name" class="arial">
              <td class="text-center"> {{ item.name }} </td>     
              <td>
                <tr class="arial" v-for="(itemC, index) in item.selections" :key="index">   
                  <v-checkbox class="shrink mt-0 arial" :label="itemC" :value="index" />
                </tr>
              </td>          
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
  name: 'BasicSpecs',
  data: () => ({
    basicSpecsRaising: [
      {
        name: '手おこし',      
        selections: [ '未設定', 'なし', 'あり',  'あり(一部）']
      },
      {
        name: '水まわり設備',      
        selections: [ '未設定', '一般A', '準寒冷B1',  '準寒冷B2', '準寒冷C', '一般D', '準寒冷E1', '準寒冷E2','寒冷A','寒冷B']
      },
      {
        name: 'ガス工事',
        selections: ['未設定','都市ガス','集中LPG','LPG','LPG（岩谷産業）','ガス種 '],
        subCategories:[{
          name: 'ガス種',
          selections: ['未設定','4A','4B','4C','5A','5B','5C','6A','6B','6C','7A','7B','7C','12A','13A','集中']
        }], 
      },
      {
        name: '給水工事',
        selections: ['未設定','なし','上水道','簡易水道','共同井戸','私設井戸'],
      },
      {
        name: '汚水工事',
        selections: ['未設定','なし','下水','集中浄化槽','浄化槽','汲み取り']
      },
      {
        name: '雨水工事',
        selections: ['未設定','なし','下水合流','宅内浸透+オーバーフロー分下水合流','宅内浸透+オーバーフロー分下水合流','宅内浸透+オーバーフロー分放流','放流']
      },
      {
        name: '建物用途',
        selections: ['専用住宅(住宅１戸）','併用住宅(住宅１戸+店舗等)','共同住宅(住宅２ト以上）','非住宅','未定'],    
      },
      {
        name: '長期優良住宅',
        selections: ['なし','あり(経由申請)※直接申請の場合は設計部へ要連絡','未定',]    
      },
      {
        name: '設計住宅性能評価申請', 
        selections: ['なし','あり','未定']   
      },
      {
        name: '建設住宅性能評価申請',
        selections: ['なし','あり','未定']
      },
      {
        name: '公的融資',
        selections: ['なし','フラット35','財住金','財住金+フラット35','災害復興','未定'],
      },

    ],
    basicSpecsRaising2: [
      {
        name: 'BELS',
        selections: ['なし','あり','未定']
      },

      {
        name: '確認申請',
        selections: ['なし','あり','未定']
      },
      {
        name: '天空率設計',
        selections: ['なし','あり','未定']
      },
      {
        name: '中間検査(特定工程）',
        selections: ['なし・免除','あり(1回)','あり(2回)','未定']
      },
      {
        name: '保健同等検査',
        selections: ['なし','あり','未定']
      },
      {
        name: '現金取得者向け新築対象住宅証明書',
        selections: ['なし','あり','未定']
      },
      {
        name: '低炭素建築物認定申請',
        selections: ['なし','あり','未定']
      },
      {
        name: 'ZEH補助金',
        selections: ['なし','あり　※営業支援システム「ZEH進捗確認リスト」の情報と一致させてください','未定']
      },
      {
        name: '断熱地域区分',
        selections: ['Ⅰ','Ⅰa','Ⅰb','Ⅱ','Ⅲ','Ⅳ','未定']
      },
      {
        name: '豪雪仕様',
        selections: ['なし','あり','未定']   
      },
      {
        name: '防耐火仕様',
        selections: ['なし','準防火仕様','準耐火仕様','未定']    
      },
      {
        name: '進入可能車両',
        selections: ['4t車(6P)','3tW車(5P)','3t車(4P) ※3t車(4P)は特寸パネル対応となります','未定']    
      },
      {
        name: '吊上重量の壁パネル制限',
        selections: ['なし','あり','未定']  
      },
      {
        name: '屋根板金搬入車両確認',
        selections: ['10t車(12P)','4t車(9.5P)','3t車(7P)　※工事担当者へ要確認','未設定']
      },
    ],
    subCategoriesKitchen: false,

  }),//end data
  methods: {
    showSubCategories(obj, index){  
      if(obj.name === 'ガス工事' && index === 1){
        this.subCategoriesKitchen = !this.subCategoriesKitchen
      }      
    }
  }

}
</script>