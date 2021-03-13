<template>
  <v-app>
    <v-simple-table class="tg" width="100%">





<!---------------------- TATETOI   T15 -------------------->
      <template v-for="(texture, textureIndex) in $ColorGroups[8][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndex === 0">
          <td class="tg-wgsn" rowspan="22"><v-label>縦樋</v-label></td>
          <td class="tg-0pky" colspan="2" rowspan="11">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="縦樋_material" label="角樋　T15" value="角樋　T15" @change="selectedItem({RowIndex: 8, Kind: '縦樋', Material: '-'}, 縦樋_material, ''), 縦樋_color = ''"/> 
          </td>
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="縦樋_color" :label="$ColorGroups[8][0][textureIndex].JapaneseName" :value="$ColorGroups[8][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 8, Kind: '縦樋', Material: '角樋　T15'}, 縦樋_color, $ColorGroups[8][0][textureIndex]), 縦樋_material = '角樋　T15'"/>   
          </td>
        </tr>
      </template>
      <template v-for="(texture, textureIndex) in $ColorGroups[8][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndex > 0">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="縦樋_color" :label="$ColorGroups[8][0][textureIndex].JapaneseName" :value="$ColorGroups[8][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 8, Kind: '縦樋', Material: '角樋　T15'}, 縦樋_color, $ColorGroups[8][0][textureIndex], 2), 縦樋_material = '角樋　T15'" />
          </td>
        </tr>
      </template>

<!------------------- TATETOI T30 ------------------->
      <template v-for="(texture, textureIndex) in $ColorGroups[8][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndex === 0">
          <td class="tg-0pky" colspan="2" rowspan="9">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="縦樋_material" label="角樋　T30" value="角樋　T30" @change="selectedItem({RowIndex: 8, Kind: '縦樋', Material: '-'}, 縦樋_material,''), 縦樋_color = ''" />
          </td>
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="縦樋_color" :label="$ColorGroups[8][0][textureIndex].JapaneseName" :value="$ColorGroups[8][0][textureIndex].JapaneseName+'2'" @change="selectedItem({RowIndex: 8, Kind: '縦樋', Material: '角樋　T30'}, 縦樋_color, $ColorGroups[8][0][textureIndex], 2), 縦樋_material = '角樋　T30'" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, textureIndex) in $ColorGroups[8][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndex > 0 && textureIndex !== 3 && textureIndex !== 8" >
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="縦樋_color" :label="$ColorGroups[8][0][textureIndex].JapaneseName" :value="$ColorGroups[8][0][textureIndex].JapaneseName+'2'" @change="selectedItem({RowIndex: 8, Kind: '縦樋', Material: '角樋　T30'}, 縦樋_color, $ColorGroups[8][0][textureIndex], 2), 縦樋_material = '角樋　T30'" />
          </td>
        </tr>
      </template>

<!-------------------- TATETOI Nashi ------------------>
      <tr>
        <td class="tg-0pky" colspan="2">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="縦樋_material" label="なし" value="なし"  @change="selectedItem({RowIndex: 8, Kind: '縦樋', Material: 'なし'}, '-', '-'), 縦樋_color = ''" />
        </td>
        <td class="tg-266k"></td>
      </tr>

<!------------  TATETOI Sonohoka  --------------->
      <tr>
        <td class="tg-0pky" colspan="2">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="縦樋_material" label="その他" value="その他" @change="selectedItem({RowIndex: 8, Kind: '縦樋', Material: 'その他'}, '-', '-'), 縦樋_color = ''" />
        </td>
        <td class="tg-266k"></td>
      </tr>

<!--------------------- DODAI MIZUKIRI ---------------->
      <tr>
        <td class="tg-wgsn"><v-label>土台水切り</v-label></td>
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details label="ホワイト" input-value="True" readonly />
        </td>
      </tr>

<!------------------------------- SASH TEXTURE ---------------------------------->
	    <template v-for="(texture, textureIndexSash) in $ColorGroups[10][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndexSash === 0">
          <td class="tg-wgsn" rowspan="2"><v-label>サッシ &emsp; 樹脂：外部</v-label></td>
          <!--<td class="tg-0pky" colspan="2" rowspan="2">樹脂：外部</td>-->
          <td class="tg-0pky" colspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="サッシ_color" :label="$ColorGroups[10][0][textureIndexSash].JapaneseName" :value="$ColorGroups[10][0][textureIndexSash].JapaneseName" @change="selectedItem({RowIndex: 11, Kind: 'サッシ', Material: '樹脂：外部'}, サッシ_color, $ColorGroups[10][0][textureIndexSash], '')" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, colorIndexSash) in $ColorGroups[10][0].length">
        <tr :key="colorIndexSash" v-if="colorIndexSash > 0">
          <td class="tg-0pky" colspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="サッシ_color" :label="$ColorGroups[10][0][colorIndexSash].JapaneseName" :value="$ColorGroups[10][0][colorIndexSash].JapaneseName" @change="selectedItem({RowIndex: 11, Kind: 'サッシ', Material: '樹脂：外部'}, サッシ_color, $ColorGroups[10][0][colorIndexSash], '')" />
          </td>
        </tr>
      </template>

<!-------------------------------2F BALCONY YUKA ---------------------------------->
  <tr>
    <td class="tg-wgsn">
      <v-label>2Fバルコニー床</v-label>
      </td>
    <td class="tg-0pky" colspan="3">
      <v-checkbox class="shrink mt-0" color="orange" hide-details label="タイル仕上げ" input-value="True" readonly />
    </td>
  </tr>

<!-------------------------------2F BALCONY GLASS ---------------------------------->
  <tr>
    <td class="tg-wgsn" rowspan="6">
        <v-label>2Fバルコニー手摺</v-label>
        <br>
          <v-tooltip top>
		        <template v-slot:activator="{ on, attrs }">
              <v-img v-bind="attrs" v-on="on" @click="itemShow('changeBalcony2', true);" class="vImgSize" src="../../images/plus.png"></v-img>
		      	</template>
		      	<span>Add 2F バルコニー (2)</span>
          </v-tooltip>
    </td>
    <td class="tg-0pky" colspan="3">                                                                                                                            
	  <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニーガラス_color" label="ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）" value="ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）" @change="selectedItem({RowIndex: 14, Kind: '2Fバルコニーガラス', Material: ''}, s2Fバルコニーガラス_color, 'ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）',''), s2Fバルコニーガラス_material = ''" />
	</td>                                                                                                                                                                                                                                                   
  </tr>

  <tr>
    <td class="tg-0pky" colspan="3">
	  <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニーガラス_color" label="ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）" value="ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）" @change="selectedItem({RowIndex: 14, Kind: '2Fバルコニーガラス', Material: ''}, s2Fバルコニーガラス_color, 'ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）',''), s2Fバルコニーガラス_material = ''" />
    </td>
  </tr>

<!-------------2F BALCONY TESURI  --------------->
    <template v-for="(texture, textureIndexBalconyTesuri) in $ColorGroups[27][0].length">
      <tr :key="texture.rowIndex" v-if="textureIndexBalconyTesuri === 0" >
          <td class="tg-0pky" colspan="2" :rowspan="$ColorGroups[27][0].length">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー手摺_material" label="アルミ笠木" value="アルミ笠木" @change="selectedItem({RowIndex: 26, Kind: '2Fバルコニー手摺', Material: '-'}, s2Fバルコニー手摺_material, '-'), s2Fバルコニー手摺_color = ''"/>
          </td>
          <td class="tg-0pky" colspan="2">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー手摺_color" :label="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" :value="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" @change="selectedItem({RowIndex: 26, Kind: '2Fバルコニー手摺', Material: 'アルミ笠木'}, s2Fバルコニー手摺_color, $ColorGroups[27][0][textureIndexBalconyTesuri],''), s2Fバルコニー手摺_material = 'アルミ笠木'" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, textureIndexBalconyTesuri) in $ColorGroups[27][0].length">
        <tr :key="texture.rowIndex" v-if="textureIndexBalconyTesuri > 0">
          <td class="tg-0pky" colspan="3">  
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー手摺_color" :label="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" :value="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" @change="selectedItem({RowIndex: 26, Kind: '2Fバルコニー手摺', Material: 'アルミ笠木'}, s2Fバルコニー手摺_color, $ColorGroups[27][0][textureIndexBalconyTesuri]), s2Fバルコニー手摺_material = 'アルミ笠木'" />
          </td>
        </tr>
      </template>
<!-------------2F BALCONY TESURI COPING  --------------->
    <!--<template v-for="(texture, textureIndexBalconyCoping) in $ColorGroups[21][0].length">
      <tr :key="texture.rowIndex" v-if="textureIndexBalconyCoping === 0">
          <td class="tg-wgsn" rowspan="4">
            <v-label>2Fバルコニー袖壁笠木</v-label>
          </td>
          <td class="tg-0pky" colspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー袖壁笠木_color" :label="$ColorGroups[21][0][textureIndexBalconyCoping].JapaneseName" :value="$ColorGroups[21][0][textureIndexBalconyCoping].JapaneseName" @change="selectedItem({RowIndex: 15, Kind: '2Fバルコニー袖壁笠木', Material: ''}, s2Fバルコニー袖壁笠木_color, $ColorGroups[21][0][textureIndexBalconyCoping],''), s2Fバルコニー袖壁笠木_material = ''" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, colorIndexBalconyCoping) in $ColorGroups[21][0].length">
        <tr :key="texture.rowIndex" v-if="colorIndexBalconyCoping > 0">
          <td class="tg-0pky" colspan="3">  
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー袖壁笠木_color" :label="$ColorGroups[21][0][colorIndexBalconyCoping].JapaneseName" :value="$ColorGroups[21][0][colorIndexBalconyCoping].JapaneseName" @change="selectedItem({RowIndex: 15, Kind: '2Fバルコニー袖壁笠木', Material: ''}, s2Fバルコニー袖壁笠木_color, $ColorGroups[21][0][colorIndexBalconyCoping]), s2Fバルコニー袖壁笠木_material = ''" />
          </td>
        </tr>
      </template>-->

<!-------------------------------2F BALCONY YUKA(2) ---------------------------------->
  <template v-if="this.$store.state.isBalcony2" >
  <tr class="highlight">
    <td class="tg-wgsn">
      <v-label>2Fバルコニー床(2)</v-label>    
    </td>
    <td class="tg-0pky" colspan="3">
      <v-checkbox class="shrink mt-0" color="orange" hide-details label="タイル仕上げ" input-value="True" readonly />
    </td>
  </tr>

<!-------------------------------2F BALCONY GLASS(2) ---------------------------------->
  <tr class="highlight">
    <td class="tg-wgsn" rowspan="6">
	    <v-tooltip top>
			<template v-slot:activator="{ on, attrs }" >
			<v-img v-bind="attrs" v-on="on" @click="itemShow('changeBalcony2', false);" class="vImgSize" src="../../images/minus.png"></v-img>
        </template>
        <span>Delete 2F バルコニー (2)</span>
      </v-tooltip>  
        <v-label>2Fバルコニー手摺(2)</v-label>
        <br> 
            <v-tooltip top>
			<template v-slot:activator="{ on, attrs }">
                <v-img v-bind="attrs" v-on="on" @click="itemShow('changeBalcony3', true);" class="vImgSize" src="../../images/plus.png"></v-img>
			</template>
			<span>Add 2Fバルコニー床(3)</span>
           </v-tooltip>  
          </td>
    <td class="tg-0pky" colspan="3">  
      <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニーガラス_color2" label="ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）" value="ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）" @change="selectedItem({RowIndex: 31, Kind: '2Fバルコニーガラス(2)', Material: ''}, s2Fバルコニーガラス_color2, 'ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）',''), s2Fバルコニーガラス_material2 = ''" />    	
    </td>                                                                                                                                                                                                                                                   
  </tr>

  <tr class="highlight">
    <td class="tg-0pky" colspan="3">
      <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニーガラス_color2" label="ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）" value="ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）" @change="selectedItem({RowIndex: 31, Kind: '2Fバルコニーガラス(2)', Material: ''}, s2Fバルコニーガラス_color2, 'ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）',''), s2Fバルコニーガラス_material2 = ''" />	
    </td>
  </tr>

<!-------------2F BALCONY TESURI(2)  --------------->
    <template v-for="(texture, textureIndexBalconyTesuri) in $ColorGroups[27][0].length">
      <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexBalconyTesuri === 0">
          <td class="tg-0pky" colspan="2" :rowspan="$ColorGroups[27][0].length">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー手摺_material2" label="アルミ笠木" value="アルミ笠木" @change="selectedItem({RowIndex: 32, Kind: '2Fバルコニー手摺(2)', Material: '-'}, s2Fバルコニー手摺_material2, '-'), s2Fバルコニー手摺_color2 = ''"/>
          </td>
          <td class="tg-0pky" colspan="2">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー手摺_color2" :label="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" :value="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" @change="selectedItem({RowIndex: 32, Kind: '2Fバルコニー手摺(2)', Material: 'アルミ笠木'}, s2Fバルコニー手摺_color2, $ColorGroups[27][0][textureIndexBalconyTesuri]), s2Fバルコニー手摺_material2 = 'アルミ笠木'" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, textureIndexBalconyTesuri) in $ColorGroups[27][0].length">
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexBalconyTesuri > 0">
          <td class="tg-0pky" colspan="3">  
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー手摺_color2" :label="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" :value="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" @change="selectedItem({RowIndex: 32, Kind: '2Fバルコニー手摺(2)', Material: 'アルミ笠木'}, s2Fバルコニー手摺_color2, $ColorGroups[27][0][textureIndexBalconyTesuri]), s2Fバルコニー手摺_material2 = 'アルミ笠木'" />
          </td>
        </tr>
      </template>


 </template>
<!-------------2F BALCONY TESURI COPING(2)  --------------->
   <!-- <template v-for="(texture, textureIndexBalconyCoping) in $ColorGroups[21][0].length">
      <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexBalconyCoping === 0">
          <td class="tg-wgsn" rowspan="4">
            <v-label>2Fバルコニー袖壁笠木(2)</v-label>                       
          </td>
          <td class="tg-0pky" colspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー袖壁笠木_color2" :label="$ColorGroups[21][0][textureIndexBalconyCoping].JapaneseName" :value="$ColorGroups[21][0][textureIndexBalconyCoping].JapaneseName" @change="selectedItem({RowIndex: 33, Kind: '2Fバルコニー袖壁笠木(2)', Material: ''}, s2Fバルコニー袖壁笠木_color2, $ColorGroups[21][0][textureIndexBalconyCoping],''), s2Fバルコニー袖壁笠木_material2 = ''" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, colorIndexBalconyCoping) in $ColorGroups[21][0].length">
        <tr class="highlight" :key="texture.rowIndex" v-if="colorIndexBalconyCoping > 0">
          <td class="tg-0pky" colspan="3">  
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー袖壁笠木_color2" :label="$ColorGroups[21][0][colorIndexBalconyCoping].JapaneseName" :value="$ColorGroups[21][0][colorIndexBalconyCoping].JapaneseName" @change="selectedItem({RowIndex: 33, Kind: '2Fバルコニー袖壁笠木(2)', Material: ''}, s2Fバルコニー袖壁笠木_color2, $ColorGroups[21][0][colorIndexBalconyCoping]), s2Fバルコニー袖壁笠木_material2 = ''" />
          </td>
        </tr>
      </template>-->
   

<!-------------------------------2F BALCONY YUKA(3) ---------------------------------->
	<template v-if="this.$store.state.isBalcony3" >
  <tr class="highlight2">
    <td class="tg-wgsn">
      <v-label>2Fバルコニー床(3)</v-label>
      <br>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }" >
          <v-img v-bind="attrs" v-on="on" @click="itemShow('changeBalcony3', false);" class="vImgSize" src="../../images/minus.png"></v-img>
        </template>
        <span>Delete 2F バルコニー (3)</span>
      </v-tooltip>  
    </td>
    <td class="tg-0pky" colspan="3">
      <v-checkbox class="shrink mt-0" color="orange" hide-details label="タイル仕上げ" input-value="True" readonly />
    </td>
  </tr>

<!-------------------------------2F BALCONY GLASS(3) ---------------------------------->
  <tr class="highlight2">
      <td class="tg-wgsn" rowspan="6"><v-label>2Fバルコニー手摺(3)</v-label></td>
    <td class="tg-0pky" colspan="3">  
      <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニーガラス_color3" label="ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）" value="ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）" @change="selectedItem({RowIndex: 35, Kind: '2Fバルコニーガラス(3)', Material: ''}, s2Fバルコニーガラス_color3, 'ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）',''), s2Fバルコニーガラス_material3 = ''" />	
    </td>                                                                                                                                                                                                                                                   
  </tr>

  <tr class="highlight2">
    <td class="tg-0pky" colspan="3">
	  <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニーガラス_color3" label="ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）" value="ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）" @change="selectedItem({RowIndex: 35, Kind: '2Fバルコニーガラス(3)', Material: ''}, s2Fバルコニーガラス_color3, 'ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）',''), s2Fバルコニーガラス_material3 = ''" />
    </td>
  </tr>

<!-------------2F BALCONY TESURI(3)  --------------->
  <template v-for="(texture, textureIndexBalconyTesuri) in $ColorGroups[27][0].length">
  <tr class="highlight2" :key="texture.rowIndex" v-if="textureIndexBalconyTesuri === 0">
      <td class="tg-0pky" colspan="2" :rowspan="$ColorGroups[27][0].length">
        <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー手摺_material3" label="アルミ笠木" value="アルミ笠木" @change="selectedItem({RowIndex: 37, Kind: '2Fバルコニー手摺(3)', Material: '-'}, s2Fバルコニー手摺_material3, '-'), s2Fバルコニー手摺_color3 = ''"/>
      </td>      
      <td class="tg-0pky" colspan="2">
        <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー手摺_color3" :label="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" :value="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" @change="selectedItem({RowIndex: 37, Kind: '2Fバルコニー手摺(3)', Material: 'アルミ笠木'}, s2Fバルコニー手摺_color3, $ColorGroups[27][0][textureIndexBalconyTesuri]), s2Fバルコニー手摺_material3 = 'アルミ笠木'" />
      </td>
    </tr>
  </template>
  <template v-for="(texture, textureIndexBalconyTesuri) in $ColorGroups[27][0].length">
    <tr class="highlight2" :key="texture.rowIndex" v-if="textureIndexBalconyTesuri > 0">
      <td class="tg-0pky" colspan="3">  
        <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー手摺_color3" :label="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" :value="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" @change="selectedItem({RowIndex: 37, Kind: '2Fバルコニー手摺(3)', Material: 'アルミ笠木'}, s2Fバルコニー手摺_color3, $ColorGroups[27][0][textureIndexBalconyTesuri]), s2Fバルコニー手摺_material3 = 'アルミ笠木'" />
      </td>
    </tr>
  </template>
 </template>

<!-------------2F BALCONY TESURI COPING(3)  --------------->
  <!--<template v-for="(texture, textureIndexBalconyCoping) in $ColorGroups[21][0].length">
  <tr class="highlight2" :key="texture.rowIndex" v-if="textureIndexBalconyCoping === 0">
      <td class="tg-wgsn" rowspan="4">
        <v-label>2Fバルコニー袖壁笠木(3)</v-label>         
      </td>
      <td class="tg-0pky" colspan="3">
        <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー袖壁笠木_color3" :label="$ColorGroups[21][0][textureIndexBalconyCoping].JapaneseName" :value="$ColorGroups[21][0][textureIndexBalconyCoping].JapaneseName" @change="selectedItem({RowIndex: 36, Kind: '2Fバルコニー袖壁笠木(3)', Material: ''}, s2Fバルコニー袖壁笠木_color3, $ColorGroups[21][0][textureIndexBalconyCoping],''), s2Fバルコニー袖壁笠木_material3 = ''" />
      </td>
    </tr>
  </template>
  <template v-for="(texture, colorIndexBalconyCoping) in $ColorGroups[21][0].length">
    <tr class="highlight2" :key="texture.rowIndex" v-if="colorIndexBalconyCoping > 0">
      <td class="tg-0pky" colspan="3">  
        <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s2Fバルコニー袖壁笠木_color3" :label="$ColorGroups[21][0][colorIndexBalconyCoping].JapaneseName" :value="$ColorGroups[21][0][colorIndexBalconyCoping].JapaneseName" @change="selectedItem({RowIndex: 36, Kind: '2Fバルコニー袖壁笠木(3)', Material: ''}, s2Fバルコニー袖壁笠木_color3, $ColorGroups[21][0][colorIndexBalconyCoping]), s2Fバルコニー袖壁笠木_material3 = ''" />
      </td>
    </tr>
  </template>-->

<!-------------------------------3F BALCONY YUKA ---------------------------------->
  <tr>
    <td class="tg-wgsn"><v-label>3Fバルコニー床</v-label></td>
    <td class="tg-0pky" colspan="3">
      <v-checkbox class="shrink mt-0" color="orange" hide-details label="タイル仕上げ" input-value="True" readonly />
    </td>
  </tr>

<!-------------------------------3F BALCONY GLASS ---------------------------------->
  <tr>
    <td class="tg-0pky" rowspan="2"><v-label>3Fバルコニーガラス</v-label></td>
    <td class="tg-0pky" colspan="3">
      <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s3Fバルコニーガラス_material" label="ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）" value="ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）" @change="selectedItem({RowIndex: 21, Kind: '3Fバルコニーガラス', Material: 'ファインバルコニー　パネル部：合わせガラス仕様(透明ガラス）'}, '-', '-') " />
    </td>
  </tr>

  <tr>
    <td class="tg-0pky" colspan="3">
      <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s3Fバルコニーガラス_material" label="ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）" value="ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）" @change="selectedItem({RowIndex: 21, Kind: '3Fバルコニーガラス', Material: 'ファインバルコニー　パネル部：合わせガラス仕様(ミストガラス）'}, '-', '-')" />
    </td>
  </tr>

<!-------------3F BALCONY TESURI  --------------->
    <template v-for="(texture, textureIndexBalconyTesuri) in $ColorGroups[27][0].length">
      <tr :key="texture.rowIndex" v-if="textureIndexBalconyTesuri === 0">
          <td class="tg-wgsn" rowspan="4"><v-label>3Fバルコニー手摺</v-label></td>
          <td class="tg-0pky" colspan="2" :rowspan="$ColorGroups[27][0].length">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s3Fバルコニー手摺_material" label="アルミ笠木" value="アルミ笠木" @change="selectedItem({RowIndex: 27, Kind: '3Fバルコニー手摺', Material: '-'}, s3Fバルコニー手摺_material, '-'), s3Fバルコニー手摺_color = ''"/>
          </td>
          <td class="tg-0pky" colspan="2">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s3Fバルコニー手摺_color" :label="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" :value="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" @change="selectedItem({RowIndex: 27, Kind: '3Fバルコニー手摺', Material: 'アルミ笠木'}, s3Fバルコニー手摺_color, $ColorGroups[27][0][textureIndexBalconyTesuri]), s3Fバルコニー手摺_material = 'アルミ笠木'" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, textureIndexBalconyTesuri) in $ColorGroups[27][0].length">
        <tr :key="texture.rowIndex" v-if="textureIndexBalconyTesuri > 0">
          <td class="tg-0pky" colspan="3">  
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s3Fバルコニー手摺_color" :label="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" :value="$ColorGroups[27][0][textureIndexBalconyTesuri].JapaneseName" @change="selectedItem({RowIndex: 27, Kind: '3Fバルコニー手摺', Material: 'アルミ笠木'}, s3Fバルコニー手摺_color, $ColorGroups[27][0][textureIndexBalconyTesuri]), s3Fバルコニー手摺_material = 'アルミ笠木'" />
          </td>
        </tr>
      </template>

<!-------------3F BALCONY TESURI COPING  --------------->
      <!--<template v-for="(texture, textureIndexBalconyCoping2) in $ColorGroups[21][0].length">
        <tr style="display:none" :key="texture.rowIndex" v-if="textureIndexBalconyCoping2 === 0">
          <td class="tg-wgsn" rowspan="4"><v-label>3Fバルコニー袖壁笠木</v-label></td>
          <td class="tg-0pky" colspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s3Fバルコニー袖壁笠木_color" :label="$ColorGroups[21][0][textureIndexBalconyCoping2].JapaneseName" :value="$ColorGroups[21][0][textureIndexBalconyCoping2].JapaneseName" @change="selectedItem({RowIndex: 22, Kind: '3Fバルコニー袖壁笠木', Material: 'アルミ笠木'}, s3Fバルコニー袖壁笠木_color, $ColorGroups[21][0][textureIndexBalconyCoping2],''), s3Fバルコニー袖壁笠木_material = ''" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, colorIndexBalconyCoping2) in $ColorGroups[21][0].length">
      <tr style="display:none" :key="texture.rowIndex" v-if="colorIndexBalconyCoping2 > 0">
          <td class="tg-0pky" colspan="3">  
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="s3Fバルコニー袖壁笠木_color" :label="$ColorGroups[21][0][colorIndexBalconyCoping2].JapaneseName" :value="$ColorGroups[21][0][colorIndexBalconyCoping2].JapaneseName" @change="selectedItem({RowIndex: 22, Kind: '3Fバルコニー袖壁笠木', Material: 'アルミ笠木'}, s3Fバルコニー袖壁笠木_color, $ColorGroups[21][0][colorIndexBalconyCoping2]), s3Fバルコニー袖壁笠木_material = ''" />
          </td>
        </tr>
      </template>
    </tr> -->

<!----------------- PORCH ----------------------->
    <template v-for="(texture, textureIndexPorch) in $ColorGroups[18][0].length" >
      <tr :key="texture.rowIndex" v-if="textureIndexPorch === 0">
        <td class="tg-wgsn" :rowspan="$ColorGroups[18][0].length + 2">
          <v-label>ポーチ</v-label>
			    <br>
			    <v-tooltip top>
				    <template v-slot:activator="{ on, attrs }">
             <v-img v-bind="attrs" v-on="on" @click="itemShow('changePorch', true);" class="vImgSize" src="../../images/plus.png"></v-img>
            </template>
				    <span>Add ポーチ (2)</span>
            </v-tooltip>          
        </td>
        <td class="tg-0pky" colspan="2" :rowspan="$ColorGroups[18][0].length">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="ポーチ_material" label="ヨーロピアンタイル" value="ヨーロピアンタイル" @change="selectedItem({RowIndex: 18, Kind: 'ポーチ', Material: '-'}, ポーチ_material, '-'), ポーチ_color = ''"/>
        </td>
        <td class="tg-0pky">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="ポーチ_color" :label="$ColorGroups[18][0][textureIndexPorch].JapaneseName" :value="$ColorGroups[18][0][textureIndexPorch].JapaneseName" @change="selectedItem({RowIndex: 18, Kind: 'ポーチ', Material: 'ヨーロピアンタイル'}, ポーチ_color, $ColorGroups[18][0][textureIndexPorch],''), ポーチ_material = 'ヨーロピアンタイル'" />
        </td>
      </tr>
    </template>
    <template v-for="(texture, colorIndexPorch) in $ColorGroups[18][0].length" >
      <tr :key="texture.rowIndex" v-if="colorIndexPorch > 0">
        <td class="tg-0pky">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="ポーチ_color" :label="$ColorGroups[18][0][colorIndexPorch].JapaneseName" :value="$ColorGroups[18][0][colorIndexPorch].JapaneseName" @change="selectedItem({RowIndex: 18, Kind: 'ポーチ', Material: 'ヨーロピアンタイル'}, ポーチ_color, $ColorGroups[18][0][colorIndexPorch],''), ポーチ_material = 'ヨーロピアンタイル'" />
        </td>
      </tr>
    </template>
    <tr>
      <td class="tg-0pky" colspan="3">
        <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="ポーチ_material" label="なし" value="なし" @change="selectedItem({RowIndex: 18, Kind: 'ポーチ', Material: 'なし'}, ポーチ_material,''), ポーチ_color = ''" />
      </td>
    </tr>
    <tr>
      <td class="tg-0pky" colspan="3">
        <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="ポーチ_material" label="その他" value="その他" @change="selectedItem({RowIndex: 18, Kind: 'ポーチ', Material: 'その他'}, ポーチ_material,''), ポーチ_color = ''" /> 
      </td>
    </tr>

	  <!----------------- PORCH 2 ----------------------->
    	<template v-if="this.$store.state.isPorch" >
      <template v-for="(texture, textureIndexPorch) in $ColorGroups[18][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexPorch === 0">
          <td class="tg-wgsn" :rowspan="$ColorGroups[18][0].length + 2">
            <v-label>ポーチ(2)</v-label>
            <br>
		        <v-tooltip top>
              <template v-slot:activator="{ on, attrs }" >
                <v-img v-bind="attrs" v-on="on" @click="itemShow('changePorch', false);" class="vImgSize" src="../../images/minus.png"></v-img>
              </template>
              <span>Delete ポーチ (2)</span>
            </v-tooltip>  
          </td>
          <td class="tg-0pky" colspan="2" :rowspan="$ColorGroups[18][0].length">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="ポーチ_material2" label="ヨーロピアンタイル" value="ヨーロピアンタイル" @change="selectedItem({RowIndex: 40, Kind: 'ポーチ(2)', Material: '-'}, ポーチ_material2, '-'), ポーチ_color2 = ''"/>
          </td>
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="ポーチ_color2" :label="$ColorGroups[18][0][textureIndexPorch].JapaneseName" :value="$ColorGroups[18][0][textureIndexPorch].JapaneseName" @change="selectedItem({RowIndex: 40, Kind: 'ポーチ(2)', Material: 'ヨーロピアンタイル'}, ポーチ_color2, $ColorGroups[18][0][textureIndexPorch],''), ポーチ_material2 = 'ヨーロピアンタイル'" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, colorIndexPorch) in $ColorGroups[18][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="colorIndexPorch > 0">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="ポーチ_color2" :label="$ColorGroups[18][0][colorIndexPorch].JapaneseName" :value="$ColorGroups[18][0][colorIndexPorch].JapaneseName" @change="selectedItem({RowIndex: 40, Kind: 'ポーチ(2)', Material: 'ヨーロピアンタイル'}, ポーチ_color2, $ColorGroups[18][0][colorIndexPorch],''), ポーチ_material2 = 'ヨーロピアンタイル'" />
          </td>
        </tr>
      </template>
      <tr class="highlight">
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="ポーチ_material2" label="なし" value="なし" @change="selectedItem({RowIndex: 40, Kind: 'ポーチ(2)', Material: 'なし'}, ポーチ_material2,''), ポーチ_color2 = ''" />
        </td>
      </tr>
      <tr class="highlight">
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="ポーチ_material2" label="その他" value="その他" @change="selectedItem({RowIndex: 40, Kind: 'ポーチ(2)', Material: 'その他'}, ポーチ_material2,''), ポーチ_color2 = ''" /> 
        </td>
      </tr>
      </template>

<!---------- GENKAN DOMA DYNAMIC OK ------------------->
      <template v-for="(texture, textureIndexDoma) in $ColorGroups[18][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndexDoma === 0">
          <td class="tg-wgsn" :rowspan="$ColorGroups[18][0].length + 2">
            <v-label>玄関内土間</v-label>
            <br>
			      <v-tooltip top>
				    <template v-slot:activator="{ on, attrs }">
             <v-img v-bind="attrs" v-on="on" @click="itemShow('changeGenkanUchidoma', true);" class="vImgSize" src="../../images/plus.png"></v-img>
            </template>
				    <span>Add 玄関内土間 (2)</span>
            </v-tooltip>
          </td>
          <td class="tg-0pky" colspan="2" :rowspan="$ColorGroups[18][0].length">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="玄関内土間_material" label="ヨーロピアンタイル" value="ヨーロピアンタイル" @change="selectedItem({RowIndex: 19, Kind: '玄関内土間', Material: 'ヨーロピアンタイル'}, 玄関内土間_material,''), 玄関内土間_color = ''" />
          </td> 
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="玄関内土間_color" :label="$ColorGroups[19][0][textureIndexDoma].JapaneseName" :value="$ColorGroups[19][0][textureIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 19, Kind: '玄関内土間', Material: 'ヨーロピアンタイル'}, 玄関内土間_color, $ColorGroups[19][0][textureIndexDoma],''), 玄関内土間_material='ヨーロピアンタイル'" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, colorIndexDoma) in $ColorGroups[19][0].length" >
        <tr :key="texture.rowIndex" v-if="colorIndexDoma > 0" >
          <td v-if="colorIndexDoma !== 3" class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="玄関内土間_color" :label="$ColorGroups[19][0][colorIndexDoma].JapaneseName" :value="$ColorGroups[19][0][colorIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 19, Kind: '玄関内土間', Material: 'ヨーロピアンタイル'}, 玄関内土間_color, $ColorGroups[19][0][colorIndexDoma],''), 玄関内土間_material='ヨーロピアンタイル'" />
          </td>
          <td v-else class="tg-0pky">
            <v-checkbox disabled class="shrink mt-0" color="orange" hide-details v-model="玄関内土間_color" :label="$ColorGroups[19][0][colorIndexDoma].JapaneseName" :value="$ColorGroups[19][0][colorIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 19, Kind: '玄関内土間', Material: 'ヨーロピアンタイル'}, 玄関内土間_color, $ColorGroups[19][0][colorIndexDoma],''), 玄関内土間_material='ヨーロピアンタイル'" />
          </td>
        </tr>
      </template>

<!--------------------- --------- GENKAN DOMA NASHI --------------------------------->
      <tr>
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="玄関内土間_material" label="なし" value="なし" @change="selectedItem({RowIndex: 19, Kind: '玄関内土間', Material: 'なし'}, 玄関内土間_material,''),  玄関内土間_color = ''" />
        </td>
      </tr>
      <tr>
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="玄関内土間_material" label="その他" value="その他" @change="selectedItem({RowIndex: 19, Kind: '玄関内土間', Material: 'その他'}, 玄関内土間_material,''), 玄関内土間_color = ''" />  
        </td>
      </tr>

<!---------- GENKAN DOMA DYNAMIC 2 ------------------->
      <template v-if="this.$store.state.isGenkanUchidoma" >
      <template v-for="(texture, textureIndexDoma) in $ColorGroups[18][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexDoma === 0">
          <td class="tg-wgsn" :rowspan="$ColorGroups[18][0].length + 2">
            <v-label>玄関内土間(2)</v-label>   
            <br>
		        <v-tooltip top>
              <template v-slot:activator="{ on, attrs }" >
                <v-img v-bind="attrs" v-on="on" @click="itemShow('changeGenkanUchidoma', false);" class="vImgSize" src="../../images/minus.png"></v-img>
              </template>
              <span>Delete 玄関内土間 (2)</span>
            </v-tooltip>  
          </td>
          <td class="tg-0pky" colspan="2" :rowspan="$ColorGroups[18][0].length">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="玄関内土間_material2" label="ヨーロピアンタイル" value="ヨーロピアンタイル" @change="selectedItem({RowIndex: 46, Kind: '玄関内土間(2)', Material: 'ヨーロピアンタイル'}, 玄関内土間_material2,''), 玄関内土間_color2 = ''" />
          </td> 
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="玄関内土間_color2" :label="$ColorGroups[19][0][textureIndexDoma].JapaneseName" :value="$ColorGroups[19][0][textureIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 46, Kind: '玄関内土間(2)', Material: 'ヨーロピアンタイル'}, 玄関内土間_color2, $ColorGroups[19][0][textureIndexDoma],''), 玄関内土間_material2='ヨーロピアンタイル'" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, colorIndexDoma) in $ColorGroups[19][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="colorIndexDoma > 0" >
          <td v-if="colorIndexDoma !== 3" class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="玄関内土間_color2" :label="$ColorGroups[19][0][colorIndexDoma].JapaneseName" :value="$ColorGroups[19][0][colorIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 46, Kind: '玄関内土間(2)', Material: 'ヨーロピアンタイル'}, 玄関内土間_color2, $ColorGroups[19][0][colorIndexDoma],''), 玄関内土間_material2='ヨーロピアンタイル'" />
          </td>
          <td v-else class="tg-0pky">
            <v-checkbox disabled class="shrink mt-0" color="orange" hide-details v-model="玄関内土間_color2" :label="$ColorGroups[19][0][colorIndexDoma].JapaneseName" :value="$ColorGroups[19][0][colorIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 46, Kind: '玄関内土間(2)', Material: 'ヨーロピアンタイル'}, 玄関内土間_color2, $ColorGroups[19][0][colorIndexDoma],''), 玄関内土間_material2='ヨーロピアンタイル'" />
          </td>
        </tr>
      </template>


<!--------------------- --------- GENKAN DOMA 2 NASHI --------------------------------->
      <tr class="highlight">
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="玄関内土間_material2" label="なし" value="なし" @change="selectedItem({RowIndex: 46, Kind: '玄関内土間(2)', Material: 'なし'}, 玄関内土間_material2,''),  玄関内土間_color2 = ''" />
        </td>
      </tr>
      <tr class="highlight">
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="玄関内土間_material2" label="その他" value="その他" @change="selectedItem({RowIndex: 46, Kind: '玄関内土間(2)', Material: 'その他'}, 玄関内土間_material2,''), 玄関内土間_color2 = ''" />  
        </td>
      </tr>
    </template>          

<!---------- TERASU DYNAMIC ------------------->
      <template v-for="(texture, textureIndexDoma) in $ColorGroups[28][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndexDoma === 0">
          <td class="tg-wgsn" :rowspan="$ColorGroups[28][0].length + 5">
            <v-label>テラス</v-label>
            <br>
			      <v-tooltip top>
				      <template v-slot:activator="{ on, attrs }">
                <v-img v-bind="attrs" v-on="on" @click="itemShow('changeTerasu', true);" class="vImgSize" src="../../images/plus.png"></v-img>
              </template>
				      <span>Add テラス (2)</span>
            </v-tooltip> 
          </td>
          <td class="tg-0pky" colspan="2" :rowspan="$ColorGroups[28][0].length">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="テラス_material" label="ヨーロピアンタイル" value="ヨーロピアンタイル" @change="selectedItem({RowIndex: 28, Kind: 'テラス', Material: ''}, テラス_material,''), テラス_color = ''" />
          </td> 
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="テラス_color" :label="$ColorGroups[28][0][textureIndexDoma].JapaneseName" :value="$ColorGroups[28][0][textureIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 28, Kind: 'テラス', Material: 'ヨーロピアンタイル'}, テラス_color, $ColorGroups[28][0][textureIndexDoma],''), テラス_material='ヨーロピアンタイル'" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, colorIndexDoma) in $ColorGroups[28][0].length" >
        <tr :key="texture.rowIndex" v-if="colorIndexDoma > 0" >
          <td v-if="colorIndexDoma !== 3" class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="テラス_color" :label="$ColorGroups[28][0][colorIndexDoma].JapaneseName" :value="$ColorGroups[28][0][colorIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 28, Kind: 'テラス', Material: 'ヨーロピアンタイル'}, テラス_color, $ColorGroups[28][0][colorIndexDoma],''), テラス_material='ヨーロピアンタイル'" />
          </td>
        </tr>
        <tr :key="texture.rowIndex" v-if="colorIndexDoma > 0"  >
          <td v-if="colorIndexDoma == 3" class="tg-0pky" colspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="テラス_color" :label="$ColorGroups[28][0][colorIndexDoma].JapaneseName" :value="$ColorGroups[28][0][colorIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 28, Kind: 'テラス', Material: ''}, テラス_color, $ColorGroups[28][0][colorIndexDoma],''), テラス_material=''" />
          </td>
        </tr>
      </template>
	  
<!--------------------- --------- TERASU NASHI --------------------------------->
      <tr>
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="テラス_material" label="なし" value="なし" @change="selectedItem({RowIndex: 28, Kind: 'テラス', Material: 'なし'}, テラス_material,''),  テラス_color = ''" />
        </td>
      </tr>
      <tr>
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="テラス_material" label="その他" value="その他" @change="selectedItem({RowIndex: 28, Kind: 'テラス', Material: 'その他'}, テラス_material,''), テラス_color = ''" />  
        </td>
      </tr>

<!---------- TERASU DYNAMIC 2------------------->
	    <template v-if="this.$store.state.isTerasu" >
      <template v-for="(texture, textureIndexDoma) in $ColorGroups[28][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexDoma === 0">
          <td class="tg-wgsn" :rowspan="$ColorGroups[28][0].length + 5">
            <v-label>テラス(2)</v-label>
            <br>
		        <v-tooltip top>
              <template v-slot:activator="{ on, attrs }" >
                <v-img v-bind="attrs" v-on="on" @click="itemShow('changeTerasu', false);" class="vImgSize" src="../../images/minus.png"></v-img>
              </template>
              <span>Delete テラス (2)</span>
            </v-tooltip>  
          </td>
          <td class="tg-0pky" colspan="2" :rowspan="$ColorGroups[28][0].length">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="テラス_material2" label="ヨーロピアンタイル" value="ヨーロピアンタイル" @change="selectedItem({RowIndex: 42, Kind: 'テラス(2)', Material: ''}, テラス_material2,''), テラス_color2 = ''" />
          </td> 
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="テラス_color2" :label="$ColorGroups[28][0][textureIndexDoma].JapaneseName" :value="$ColorGroups[28][0][textureIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 42, Kind: 'テラス(2)', Material: 'ヨーロピアンタイル'}, テラス_color2, $ColorGroups[28][0][textureIndexDoma],''), テラス_material2='ヨーロピアンタイル'" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, colorIndexDoma) in $ColorGroups[28][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="colorIndexDoma > 0" >
          <td v-if="colorIndexDoma !== 3" class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="テラス_color2" :label="$ColorGroups[28][0][colorIndexDoma].JapaneseName" :value="$ColorGroups[28][0][colorIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 42, Kind: 'テラス(2)', Material: 'ヨーロピアンタイル'}, テラス_color2, $ColorGroups[28][0][colorIndexDoma],''), テラス_material2='ヨーロピアンタイル'" />
          </td>
        </tr>
        <tr class="highlight" :key="texture.rowIndex" v-if="colorIndexDoma > 0"  >
          <td v-if="colorIndexDoma == 3" class="tg-0pky" colspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="テラス_color2" :label="$ColorGroups[28][0][colorIndexDoma].JapaneseName" :value="$ColorGroups[28][0][colorIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 42, Kind: 'テラス(2)', Material: ''}, テラス_color2, $ColorGroups[28][0][colorIndexDoma],''), テラス_material2=''" />
          </td>
        </tr>
      </template>

<!--------------------- --------- TERASU 2 NASHI --------------------------------->
      <tr class="highlight">
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="テラス_material2" label="なし" value="なし" @change="selectedItem({RowIndex: 42, Kind: 'テラス(2)', Material: 'なし'}, テラス_material2,''),  テラス_color2 = ''" />
        </td>
      </tr>
      <tr class="highlight">
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="テラス_material2" label="その他" value="その他" @change="selectedItem({RowIndex: 42, Kind: 'テラス(2)', Material: 'その他'}, テラス_material2,''), テラス_color2 = ''" />  
        </td>
      </tr>
    </template>
      
<!---------- SLOPE PORCH DYNAMIC OK ------------------->
      <template v-for="(texture, textureIndexDoma) in $ColorGroups[29][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndexDoma === 0">
          <td class="tg-wgsn" :rowspan="$ColorGroups[29][0].length + 5">
            <v-label>スロープ</v-label>
            <br>
			      <v-tooltip top>
				      <template v-slot:activator="{ on, attrs }">
                <v-img v-bind="attrs" v-on="on" @click="itemShow('changeSlope', true);" class="vImgSize" src="../../images/plus.png"></v-img>
              </template>
			    	  <span>Add スロープ (2)</span>
            </v-tooltip>  
          </td>
          <td class="tg-0pky" colspan="2" :rowspan="$ColorGroups[29][0].length">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="スロープ_material" label="ヨーロピアンタイル" value="ヨーロピアンタイル" @change="selectedItem({RowIndex: 29, Kind: 'スロープ', Material: '-'}, スロープ_material,''), スロープ_color = ''" />
          </td> 
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="スロープ_color" :label="$ColorGroups[29][0][textureIndexDoma].JapaneseName" :value="$ColorGroups[29][0][textureIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 29, Kind: 'スロープ', Material: 'ヨーロピアンタイル'}, スロープ_color, $ColorGroups[29][0][textureIndexDoma],''), スロープ_material='ヨーロピアンタイル'" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, colorIndexDoma) in $ColorGroups[29][0].length" >
        <tr :key="texture.rowIndex" v-if="colorIndexDoma > 0" >
          <td v-if="colorIndexDoma !== 3" class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="スロープ_color" :label="$ColorGroups[29][0][colorIndexDoma].JapaneseName" :value="$ColorGroups[29][0][colorIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 29, Kind: 'スロープ', Material: 'ヨーロピアンタイル'}, スロープ_color, $ColorGroups[29][0][colorIndexDoma],''), スロープ_material='ヨーロピアンタイル'" />
          </td>
        </tr>
        <tr :key="texture.rowIndex" v-if="colorIndexDoma > 0"  >
          <td v-if="colorIndexDoma == 3" class="tg-0pky" colspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="スロープ_color" :label="$ColorGroups[29][0][colorIndexDoma].JapaneseName" :value="$ColorGroups[29][0][colorIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 29, Kind: 'スロープ', Material: ''}, スロープ_color, $ColorGroups[29][0][colorIndexDoma],''), スロープ_material=''" />
          </td>
        </tr>        
      </template>

<!--------------------- --------- SLOPE PORCH NASHI --------------------------------->
      <tr>
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="スロープ_material" label="なし" value="なし" @change="selectedItem({RowIndex: 29, Kind: 'スロープ', Material: 'なし'}, スロープ_material,''),  スロープ_color = ''" />
        </td>
      </tr>
      <tr>
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="スロープ_material" label="その他" value="その他" @change="selectedItem({RowIndex: 29, Kind: 'スロープ', Material: 'その他'}, スロープ_material,''), スロープ_color = ''" />  
        </td>
      </tr>

<!---------- SLOPE PORCH DYNAMIC 2------------------->
	    <template v-if="this.$store.state.isSlope" >
      <template v-for="(texture, textureIndexDoma) in $ColorGroups[29][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexDoma === 0">
          <td class="tg-wgsn" :rowspan="$ColorGroups[29][0].length + 5">
            <v-label>スロープ(2)</v-label>
            <br>
		        <v-tooltip top>
              <template v-slot:activator="{ on, attrs }" >
                <v-img v-bind="attrs" v-on="on" @click="itemShow('changeSlope', false);" class="vImgSize" src="../../images/minus.png"></v-img>
              </template>
              <span>Delete スロープ (2)</span>
            </v-tooltip>  
          </td>
          <td class="tg-0pky" colspan="2" :rowspan="$ColorGroups[29][0].length">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="スロープ_material2" label="ヨーロピアンタイル" value="ヨーロピアンタイル" @change="selectedItem({RowIndex: 43, Kind: 'スロープ(2)', Material: '-'}, スロープ_material2,''), スロープ_color2 = ''" />
          </td> 
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="スロープ_color2" :label="$ColorGroups[29][0][textureIndexDoma].JapaneseName" :value="$ColorGroups[29][0][textureIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 43, Kind: 'スロープ(2)', Material: 'ヨーロピアンタイル'}, スロープ_color2, $ColorGroups[29][0][textureIndexDoma],''), スロープ_material2='ヨーロピアンタイル'" />
          </td>
        </tr>
      </template>
      <template v-for="(texture, colorIndexDoma) in $ColorGroups[29][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="colorIndexDoma > 0" >
          <td v-if="colorIndexDoma !== 3" class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="スロープ_color2" :label="$ColorGroups[29][0][colorIndexDoma].JapaneseName" :value="$ColorGroups[29][0][colorIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 43, Kind: 'スロープ(2)', Material: 'ヨーロピアンタイル'}, スロープ_color2, $ColorGroups[29][0][colorIndexDoma],''), スロープ_material2='ヨーロピアンタイル'" />
          </td>
        </tr>
        <tr class="highlight" :key="texture.rowIndex" v-if="colorIndexDoma > 0"  >
          <td v-if="colorIndexDoma == 3" class="tg-0pky" colspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="スロープ_color2" :label="$ColorGroups[29][0][colorIndexDoma].JapaneseName" :value="$ColorGroups[29][0][colorIndexDoma].JapaneseName" @change="selectedItem({RowIndex: 43, Kind: 'スロープ(2)', Material: ''}, スロープ_color2, $ColorGroups[29][0][colorIndexDoma],''), スロープ_material2=''" />
          </td>
        </tr>        
      </template>

<!--------------------- --------- SLOPE PORCH 2 NASHI --------------------------------->
      <tr class="highlight">
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="スロープ_material2" label="なし" value="なし" @change="selectedItem({RowIndex: 43, Kind: 'スロープ(2)', Material: 'なし'}, スロープ_material2,''),  スロープ_color2 = ''" />
        </td>
      </tr>
      <tr class="highlight">
        <td class="tg-0pky" colspan="3">
          <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="スロープ_material2" label="その他" value="その他" @change="selectedItem({RowIndex: 43, Kind: 'スロープ(2)', Material: 'その他'}, スロープ_material2,''), スロープ_color2 = ''" />  
        </td>
      </tr>
    </template>

<!---------------------- GENKAN COLOR TEXTURE ------------------------------>
     <template v-for="(texture, textureIndexGenkanColor) in $ColorGroups[24][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndexGenkanColor === 0">
          <td class="tg-wgsn" rowspan="25">
            <v-label>玄関戸</v-label>
            <br>
            <v-tooltip top>
				      <template v-slot:activator="{ on, attrs }">
                <v-img v-bind="attrs" v-on="on" @click="itemShow('changeGenkan', true);" class="vImgSize" src="../../images/plus.png"></v-img>
              </template>
				    <span>Add 玄関戸(2)</span>
            </v-tooltip>   
          </td>
          <td class="tg-0pky" colspan="2" rowspan="4">
               色<!-- <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="色_material" label="色" value="色" @change="selectedItem({RowIndex: 24, Kind: '玄関戸', Material: '色'}, 色_material,''), 色_color = ''" /> -->
          </td> 
           <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="色_color" :label="$ColorGroups[24][0][textureIndexGenkanColor].JapaneseName" :value="$ColorGroups[24][0][textureIndexGenkanColor].JapaneseName" @change="selectedItem({RowIndex: 24, Kind: '玄関戸', Material: '色'}, 色_color, $ColorGroups[24][0][textureIndexGenkanColor],''), 色_material=''" />
          </td> 
        </tr>
      </template>
      <template v-for="(texture, colorIndexGenkanColor) in $ColorGroups[24][0].length" >
        <tr :key="texture.rowIndex" v-if="colorIndexGenkanColor > 0">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="色_color" :label="$ColorGroups[24][0][colorIndexGenkanColor].JapaneseName" :value="$ColorGroups[24][0][colorIndexGenkanColor].JapaneseName" @change="selectedItem({RowIndex: 24, Kind: '玄関戸', Material: '色'}, 色_color, $ColorGroups[24][0][colorIndexGenkanColor],''), 色_material=''" />
          </td>
        </tr>
      </template>

<!--------------------------------- GENKAN HANDLE ----------------------------------->
  
      <!-------シリンダー--------->
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===0">
          <td class="tg-0pky" rowspan="21">シリンダー</td>
          <td class="tg-0pky" rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'シリンダー'}, シリンダー_material ,''), シリンダー_color = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndex ===0">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'シリンダー'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='シリンダー'" />
          </td>
        </tr>
        <tr :key="texture.rowIndex" v-if="textureIndex ===1">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'シリンダー'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='シリンダー'" />
          </td>
        </tr>
      </template>

      <!-------e-エントリー別体型/CP不可--------->
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===1">
          <td class="tg-0pky"  rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー別体型/CP不可'}, シリンダー_material ,''), シリンダー_color = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndex ===2">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー別体型/CP不可'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='e-エントリー別体型/CP不可'" />
          </td>
        </tr>
        <tr :key="texture.rowIndex" v-if="textureIndex ===3">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー別体型/CP不可'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='e-エントリー別体型/CP不可'" />
          </td>
        </tr>
      </template>


      <!-------e-エントリー別体型(操作スイッチ） /CP不可--------->
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===2">
          <td class="tg-0pky"  rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー別体型(操作スイッチ） /CP不可'}, シリンダー_material ,''), シリンダー_color = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndex ===4">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー別体型(操作スイッチ） /CP不可'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='e-エントリー別体型(操作スイッチ） /CP不可'" />
          </td>
        </tr>
        <tr :key="texture.rowIndex" v-if="textureIndex ===5">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー別体型(操作スイッチ） /CP不可'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='e-エントリー別体型(操作スイッチ） /CP不可'" />
          </td>
        </tr>
      </template>


      <!-------e-エントリー別体型(インターホン） /CP不可--------->
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===3">
          <td class="tg-0pky"  rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー別体型(インターホン） /CP不可'}, シリンダー_material ,''), シリンダー_color = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndex ===6">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー別体型(インターホン） /CP不可'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='e-エントリー別体型(インターホン） /CP不可'" />
          </td>
        </tr>
        <tr :key="texture.rowIndex" v-if="textureIndex ===7">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー別体型(インターホン） /CP不可'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='e-エントリー別体型(インターホン） /CP不可'" />
          </td>
        </tr>
      </template>

      <!-------e-エントリー一体型/CP不可---------> 
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===4">
          <td class="tg-0pky"  rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー一体型/CP不可'}, シリンダー_material,''), シリンダー_color = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndex ===8">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー一体型/CP不可'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='e-エントリー一体型/CP不可'" />
          </td>
        </tr>
        <tr :key="texture.rowIndex" v-if="textureIndex ===9">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー一体型/CP不可'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='e-エントリー一体型/CP不可'" />
          </td>
        </tr>
      </template>   

       <!-------e-エントリー一体型(操作スイッチ） /CP不可---------> 
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===5">
          <td class="tg-0pky"  rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー一体型(操作スイッチ） /CP不可'}, シリンダー_material ,''), シリンダー_color = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndex ===10">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー一体型(操作スイッチ） /CP不可'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='e-エントリー一体型(操作スイッチ） /CP不可'" />
          </td>
        </tr>
        <tr :key="texture.rowIndex" v-if="textureIndex ===11">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー一体型(操作スイッチ） /CP不可'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='e-エントリー一体型(操作スイッチ） /CP不可'" />
          </td>
        </tr>
      </template>     


       <!-------e-エントリー一体型(インターホン） /CP不可--------->  
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===6">
          <td class="tg-0pky"  rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー一体型(インターホン） /CP不可'}, シリンダー_material ,''), シリンダー_color = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndex ===12">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー一体型(インターホン） /CP不可'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='e-エントリー一体型(インターホン） /CP不可'" />
          </td>
        </tr>
        <tr :key="texture.rowIndex" v-if="textureIndex ===13">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: 'e-エントリー一体型(インターホン） /CP不可'}, シリンダー_color, $ColorGroups[26][0][textureIndex],''), シリンダー_material='e-エントリー一体型(インターホン） /CP不可'" />
          </td>
        </tr>
      </template>  

<!---------------------- GENKAN COLOR TEXTURE 2 v-if="!isGenkan"------------------------------>
     <template v-if="this.$store.state.isGenkan" >
     <template v-for="(texture, textureIndexGenkanColor) in $ColorGroups[24][0].length">
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexGenkanColor === 0">
          <td class="tg-wgsn" rowspan="25">
            <v-label>玄関戸(2)</v-label>
            <br>
          	<v-tooltip top>
              <template v-slot:activator="{ on, attrs }" >
                <v-img v-bind="attrs" v-on="on" @click="itemShow('changeGenkan', false);" class="vImgSize" src="../../images/minus.png"></v-img>
              </template>
              <span>Delete 玄関戸(2)</span>
            </v-tooltip>    
          </td>
          <td class="tg-0pky" colspan="2" rowspan="4">
               色<!-- <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="色_material2" label="色" value="色" @change="selectedItem({RowIndex: 44, Kind: '玄関戸(2)', Material: '色'}, 色_material2,''), 色_color2 = ''" /> -->
          </td> 
           <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="色_color2" :label="$ColorGroups[24][0][textureIndexGenkanColor].JapaneseName" :value="$ColorGroups[24][0][textureIndexGenkanColor].JapaneseName" @change="selectedItem({RowIndex: 44, Kind: '玄関戸(2)', Material: '色'}, 色_color2, $ColorGroups[24][0][textureIndexGenkanColor],''), 色_material2=''" />
          </td> 
        </tr>
      </template>
      <template v-for="(texture, colorIndexGenkanColor) in $ColorGroups[24][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="colorIndexGenkanColor > 0">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="色_color2" :label="$ColorGroups[24][0][colorIndexGenkanColor].JapaneseName" :value="$ColorGroups[24][0][colorIndexGenkanColor].JapaneseName" @change="selectedItem({RowIndex: 44, Kind: '玄関戸(2)', Material: '色'}, 色_color2, $ColorGroups[24][0][colorIndexGenkanColor],''), 色_material2=''" />
          </td>
        </tr>
      </template>

<!--------------------------------- GENKAN HANDLE 2----------------------------------->
  
      <!-------シリンダー(2)--------->
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===0">
          <td class="tg-0pky" rowspan="21">シリンダー(2)</td>
          <td class="tg-0pky" rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material2" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'シリンダー'}, シリンダー_material2 ,''), シリンダー_color2 = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===0">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'シリンダー'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='シリンダー'" />
          </td>
        </tr>
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===1">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'シリンダー'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='シリンダー'" />
          </td>
        </tr>
      </template>

      <!-------e-エントリー別体型/CP不可--------->
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===1">
          <td class="tg-0pky"  rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material2" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー別体型/CP不可'}, シリンダー_material2 ,''), シリンダー_color2 = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===2">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー別体型/CP不可'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='e-エントリー別体型/CP不可'" />
          </td>
        </tr>
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===3">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー別体型/CP不可'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='e-エントリー別体型/CP不可'" />
          </td>
        </tr>
      </template>


      <!-------e-エントリー別体型(操作スイッチ） /CP不可--------->
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===2">
          <td class="tg-0pky"  rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material2" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー別体型(操作スイッチ） /CP不可'}, シリンダー_material2 ,''), シリンダー_color2 = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===4">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー別体型(操作スイッチ） /CP不可'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='e-エントリー別体型(操作スイッチ） /CP不可'" />
          </td>
        </tr>
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===5">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー別体型(操作スイッチ） /CP不可'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='e-エントリー別体型(操作スイッチ） /CP不可'" />
          </td>
        </tr>
      </template>


      <!-------e-エントリー別体型(インターホン） /CP不可--------->
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===3">
          <td class="tg-0pky"  rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material2" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー別体型(インターホン） /CP不可'}, シリンダー_material2 ,''), シリンダー_color2 = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===6">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー別体型(インターホン） /CP不可'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='e-エントリー別体型(インターホン） /CP不可'" />
          </td>
        </tr>
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===7">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー別体型(インターホン） /CP不可'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='e-エントリー別体型(インターホン） /CP不可'" />
          </td>
        </tr>
      </template>

      <!-------e-エントリー一体型/CP不可---------> 
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===4">
          <td class="tg-0pky"  rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material2" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー一体型/CP不可'}, シリンダー_material2,''), シリンダー_color2 = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===8">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー一体型/CP不可'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='e-エントリー一体型/CP不可'" />
          </td>
        </tr>
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===9">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー一体型/CP不可'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='e-エントリー一体型/CP不可'" />
          </td>
        </tr>
      </template>   

       <!-------e-エントリー一体型(操作スイッチ） /CP不可---------> 
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===5">
          <td class="tg-0pky"  rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material2" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー一体型(操作スイッチ） /CP不可'}, シリンダー_material2 ,''), シリンダー_color2 = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===10">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー一体型(操作スイッチ） /CP不可'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='e-エントリー一体型(操作スイッチ） /CP不可'" />
          </td>
        </tr>
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===11">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー一体型(操作スイッチ） /CP不可'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='e-エントリー一体型(操作スイッチ） /CP不可'" />
          </td>
        </tr>
      </template>     


       <!-------e-エントリー一体型(インターホン） /CP不可--------->  
      <template v-for="(texture, textureIndexGenkanHandle) in $ColorGroups[25][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexGenkanHandle ===6">
          <td class="tg-0pky"  rowspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_material2" :label="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" :value="$ColorGroups[25][0][textureIndexGenkanHandle].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー一体型(インターホン） /CP不可'}, シリンダー_material2 ,''), シリンダー_color2 = ''" />
          </td>
        </tr>
      </template>

      <template v-for="(texture, textureIndex) in $ColorGroups[26][0].length" >
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===12">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー一体型(インターホン） /CP不可'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='e-エントリー一体型(インターホン） /CP不可'" />
          </td>
        </tr>
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndex ===13">
          <td class="tg-0pky">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="シリンダー_color2" :label="$ColorGroups[26][0][textureIndex].JapaneseName" :value="$ColorGroups[26][0][textureIndex].JapaneseName" @change="selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: 'e-エントリー一体型(インターホン） /CP不可'}, シリンダー_color2, $ColorGroups[26][0][textureIndex],''), シリンダー_material2='e-エントリー一体型(インターホン） /CP不可'" />
          </td>
        </tr>
      </template>
      
      </template>  


<!------------------------------- WOOD DECK TEXTURE ---------------------------------->
	    <template v-for="(texture, textureIndexSash) in $ColorGroups[30][0].length" >
        <tr :key="texture.rowIndex" v-if="textureIndexSash === 0">
          <td class="tg-wgsn" rowspan="3">
            <v-label>WPCウッドデッキ</v-label>
            <br>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-img v-bind="attrs" v-on="on" @click="itemShow('changeWoodDeck', true);" class="vImgSize" src="../../images/plus.png"></v-img>
                </template>
              <span>Add WPCウッドデッキ(2)</span>
              </v-tooltip>           
           </td>
          <td class="tg-0pky" colspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="WPCウッドデッキ_color" :label="$ColorGroups[30][0][textureIndexSash].JapaneseName" :value="$ColorGroups[30][0][textureIndexSash].JapaneseName" @change="selectedItem({RowIndex: 38, Kind: 'WPCウッドデッキ', Material: '-'}, WPCウッドデッキ_color, $ColorGroups[30][0][textureIndexSash], '')" />
          </td>
        </tr>
        <tr :key="texture.rowIndex" v-if="textureIndexSash > 0">
          <td class="tg-0pky" colspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="WPCウッドデッキ_color" :label="$ColorGroups[30][0][textureIndexSash].JapaneseName" :value="$ColorGroups[30][0][textureIndexSash].JapaneseName" @change="selectedItem({RowIndex: 38, Kind: 'WPCウッドデッキ', Material: '-'}, WPCウッドデッキ_color, $ColorGroups[30][0][textureIndexSash], '')" />
          </td>
        </tr>
      </template>

<!------------------------------- WOOD DECK 2 TEXTURE ---------------------------------->
	    <template v-if="this.$store.state.isWoodDeck" >
      <template v-for="(texture, textureIndexSash) in $ColorGroups[30][0].length">
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexSash === 0" >
          <td class="tg-wgsn" rowspan="3">
            <v-label>WPCウッドデッキ(2)</v-label>
            <br>
              <v-tooltip top>
              <template v-slot:activator="{ on, attrs }" >
                <v-img v-bind="attrs" v-on="on" @click="itemShow('changeWoodDeck', false);" class="vImgSize" src="../../images/minus.png"></v-img>
              </template>
              <span>Delete WPCウッドデッキ(2)</span>
              </v-tooltip>  
          </td>
          <td class="tg-0pky" colspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="WPCウッドデッキ_color2" :label="$ColorGroups[30][0][textureIndexSash].JapaneseName" :value="$ColorGroups[30][0][textureIndexSash].JapaneseName" @change="selectedItem({RowIndex: 39, Kind: 'WPCウッドデッキ(2)', Material: '-'}, WPCウッドデッキ_color2, $ColorGroups[30][0][textureIndexSash], '')" />
          </td>
        </tr>
        <tr class="highlight" :key="texture.rowIndex" v-if="textureIndexSash > 0">
          <td class="tg-0pky" colspan="3">
            <v-checkbox class="shrink mt-0" color="orange" hide-details v-model="WPCウッドデッキ_color2" :label="$ColorGroups[30][0][textureIndexSash].JapaneseName" :value="$ColorGroups[30][0][textureIndexSash].JapaneseName" @change="selectedItem({RowIndex: 39, Kind: 'WPCウッドデッキ(2)', Material: '-'}, WPCウッドデッキ_color2, $ColorGroups[30][0][textureIndexSash], '')" />
          </td>
        </tr>
        </template>
      </template>      
     
        
  </v-simple-table>
  </v-app>
</template>

<style scoped>
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:dotted;border-width:1px;font-family:Arial, sans-serif;
  overflow:hidden;padding:5px 5px;word-break:normal;}
.tg th{border-color:black;border-style:dotted;border-width:1px;font-family:Arial, sans-serif;
  font-weight:normal;overflow:hidden;padding:5px 5px;word-break:normal;}
.tg .tg-wgsn{border-color:inherit;text-align:left;vertical-align:center;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:center;}
.highlight{background-color : rgb(231, 239, 255);} 
.highlight2{background-color : rgb(206, 222, 252);}
.vImgSize{width:20px;}


</style>
<script>

// import Condition from './Condition'
import { mapState, mapGetter, mapActions, mapMutations } from 'vuex'


export default {
  components:{
    // Condition,
  },
  
  data: () =>({
    hover: false,
    selected: [],
    colorGroups: [],
 
    //for yane OK
    屋根材種_material: '', 
    屋根材種_color: '',

    //Parapet 
    パラペット壁笠木_material: '',
    パラペット壁笠木_color   : '',

    //Parapet 2
    パラペット壁笠木_material2: '',
    パラペット壁笠木_color2   : '',    

    //BalconyCeiling
    軒天仕上げ_material: '',
    軒天仕上げ_color: '',

    軒天水切り_material:'',
    軒天水切り_color:'',

    破風鼻隠し仕上げ_material:'',
    破風鼻隠し仕上げ_color:'',

    //Gutter OK
    軒樋_material:'',
    軒樋_color:'',

    //tatetoi
    縦樋_material:'',
    縦樋_color: '',

    土台水切り_material: '',
    土台水切り_color: '',

    サッシ_color: '',

    外壁タイル_material: '',
    外壁タイル_color: '',
    外壁タイル_color1: '',
    外壁タイル_color2: '',
    外壁タイル_color3: '',

    サッシ_color: '',
    サッシガラス仕様_material: '',

    s2Fバルコニーガラス_color:'',
    s2Fバルコニーガラス_material:'',
    s2Fバルコニー手摺_color:'',
    s2Fバルコニー手摺_material:'', 
    s2Fバルコニー袖壁笠木_color:'',
    s2Fバルコニー袖壁笠木_material:'',

    s2Fバルコニーガラス_color2:'',
    s2Fバルコニーガラス_material2:'',
    s2Fバルコニー手摺_color2:'',
    s2Fバルコニー手摺_material2:'', 
    s2Fバルコニー袖壁笠木_color2:'',
    s2Fバルコニー袖壁笠木_material2:'',

    s2Fバルコニーガラス_color3:'',
    s2Fバルコニーガラス_material3:'',
    s2Fバルコニー手摺_color3:'',
    s2Fバルコニー手摺_material3:'', 
    s2Fバルコニー袖壁笠木_color3:'',
    s2Fバルコニー袖壁笠木_material3:'',

    s3Fバルコニーガラス_color:'',
    s3Fバルコニーガラス_material:'',
    s3Fバルコニー手摺_color:'',
    s3Fバルコニー手摺_material:'', 
    s3Fバルコニー袖壁笠木_color:'',
    s3Fバルコニー袖壁笠木_material:'',

    ポーチ_material: '',
    ポーチ_color:'',

    ポーチ_material2: '',
    ポーチ_color2:'',

    玄関内土間_material: '',
    玄関内土間_color: '',

    玄関内土間_material2: '',
    玄関内土間_color2: '',

    テラス_color:'',
    テラス_material:'',

    テラス_color2:'',
    テラス_material2:'',    

    スロープ_color:'',
    スロープ_material:'',

    スロープ_color2:'',
    スロープ_material2:'',    

    玄関戸_material:'',
    玄関戸_color:'',
    玄関戸_color1:'',
   
    色_color:'',
    色_material:'',

    色_color2:'',
    色_material2:'',

    シリンダー_material:'',
    シリンダー_color:'',

    シリンダー_material2:'',
    シリンダー_color2:'',    

    携帯器_color:'',

    WPCウッドデッキ_color: '',
    WPCウッドデッキ_color2: '',

  }),
  
  mounted(){
    //console.log(this.$ShiyoushoData.selectedInJSON);
    //console.log(this.retainSelected(0, 'True'));
    
    if(this.$ShiyoushoData.selectedInJSON.length === 0){ 

      //for Roof Material
      this.selectedItem({RowIndex: 0, Kind: '屋根材種', Material: '-'}, '-', '-')

      //for fixed パラペット壁笠木
      this.selectedItem({RowIndex: 2, Kind: 'パラペット壁笠木', Material: '-'}, '-', this.$ColorGroups[2][0][0])

      //for fixed パラペット壁笠木
      //this.selectedItem({RowIndex: 41, Kind: 'パラペット壁笠木(2)', Material: '-'}, '-', this.$ColorGroups[2][0][0])

      //for fixed 軒天仕上げ
      this.selectedItem({RowIndex: 4, Kind: '軒天仕上げ', Material: '塗装板サイディング'}, '-', this.$ColorGroups[16][0][0])
  
      //for fixed 軒天水切り
      this.selectedItem({RowIndex: 5, Kind: '軒天水切り', Material: 'アルミニウム'}, '-', this.$ColorGroups[17][0][0])

      //for fixed 破風鼻隠し仕上げ
      this.selectedItem({RowIndex: 6, Kind: '破風鼻隠し仕上げ', Material: 'ガルバリウム鋼板'}, '-', this.$ColorGroups[15][0][0])

      //for fixed 軒樋
      this.selectedItem({RowIndex: 7, Kind: '軒樋', Material: '-'}, '-', this.$ColorGroups[7][0][0])

      //for fixed 縦樋
      this.selectedItem({RowIndex: 8, Kind: '縦樋', Material: '-'}, '-', this.$ColorGroups[8][0][0])

      //for fixed 土台水切り
      this.selectedItem({RowIndex: 9, Kind: '土台水切り', Material: '土台水切り'}, 'White', 'ホワイト')

      //for fixed サッシ
      this.selectedItem({RowIndex: 11, Kind: 'サッシ', Material: '-'}, '-', '-')

     //for fixed 2Fバルコニー床
      this.selectedItem({RowIndex: 13, Kind: '2Fバルコニー床', Material: 'タイル仕上げ'}, '-', '-')

      //for fixed 2Fバルコニーガラス
      this.selectedItem({RowIndex: 14, Kind: '2Fバルコニーガラス', Material: '-'}, '-', '-')  

    //for fixed 2Fバルコニー袖壁笠木
    //this.selectedItem({RowIndex: 15, Kind: '2Fバルコニー袖壁笠木', Material: '-'}, '-', this.$ColorGroups[21][0][0]) 

    //for fixed 2Fバルコニー手摺
    this.selectedItem({RowIndex: 26, Kind: '2Fバルコニー手摺', Material: '-'}, '-', '-')  

    //for fixed 2Fバルコニー床(2)
    this.selectedItem({RowIndex: 30, Kind: '2Fバルコニー床(2)', Material: 'タイル仕上げ'}, '-', '-')

    //for fixed 2Fバルコニーガラス(2)
    this.selectedItem({RowIndex: 31, Kind: '2Fバルコニーガラス(2)', Material: '-'}, '-', '-')  

    //for fixed 2Fバルコニー袖壁笠木(2)
    //this.selectedItem({RowIndex: 33, Kind: '2Fバルコニー袖壁笠木(2)', Material: '-'}, '-', this.$ColorGroups[21][0][0]) 

    //for fixed 2Fバルコニー手摺(2)
    this.selectedItem({RowIndex: 32, Kind: '2Fバルコニー手摺(2)', Material: '-'}, '-', '-')  

    //for fixed 2Fバルコニー床(3)
    this.selectedItem({RowIndex: 34, Kind: '2Fバルコニー床(3)', Material: 'タイル仕上げ'}, '-', '-')

    //for fixed 2Fバルコニーガラス(3)
    this.selectedItem({RowIndex: 35, Kind: '2Fバルコニーガラス(3)', Material: '-'}, '-', '-')  

    //for fixed 2Fバルコニー袖壁笠木(3)
    //this.selectedItem({RowIndex: 36, Kind: '2Fバルコニー袖壁笠木(3)', Material: '-'}, '-', this.$ColorGroups[21][0][0]) 

    //for fixed 2Fバルコニー手摺(3)
    this.selectedItem({RowIndex: 37, Kind: '2Fバルコニー手摺(3)', Material: '-'}, '-', '-')      

    //for fixed 3Fバルコニー床
    this.selectedItem({RowIndex: 20, Kind: '3Fバルコニー床', Material: 'タイル仕上げ'}, '-', '-')

    //for fixed 3Fバルコニーガラス
  /this.selectedItem({RowIndex: 21, Kind: '3Fバルコニーガラス', Material: '-'}, '-', '-')  

    //for fixed 3Fバルコニー袖壁笠木
    //this.selectedItem({RowIndex: 22, Kind: '3Fバルコニー袖壁笠木', Material: '-'}, '-', this.$ColorGroups[21][0][0]) 

    //for fixed 3Fバルコニー手摺
    this.selectedItem({RowIndex: 27, Kind: '3Fバルコニー手摺', Material: '-'}, '-', '-')  

    //for fixed ポーチ側面タイル
   // this.selectedItem({RowIndex: 17, Kind: 'ポーチ側面タイル', Material: '-'}, '-', '-')

   //for fixed ポーチ
     this.selectedItem({RowIndex: 18, Kind: 'ポーチ', Material: '-'}, '-', '-')

   //for fixed ポーチ
     this.selectedItem({RowIndex: 40, Kind: 'ポーチ(2)', Material: '-'}, '-', '-')     

    //for fixed 玄関内土間
    this.selectedItem({RowIndex: 19, Kind: '玄関内土間', Material: '-'}, '-', '-')

    //for fixed 玄関内土間 2
    this.selectedItem({RowIndex: 46, Kind: '玄関内土間(2)', Material: '-'}, '-', '-')

    //for fixed テラス
    this.selectedItem({RowIndex: 28, Kind: 'テラス', Material: '-'}, '-', '-')

    //for fixed テラス 2
    this.selectedItem({RowIndex: 42, Kind: 'テラス(2)', Material: '-'}, '-', '-')

    //for fixed スロープ
    this.selectedItem({RowIndex: 29, Kind: 'スロープ', Material: '-'}, '-', '-')
 
    //for fixed スロープ(2)
    this.selectedItem({RowIndex: 43, Kind: 'スロープ(2)', Material: '-'}, '-', '-') 

    //this.selectedItem({RowIndex: 23, Kind: '品番', Material: '-'}, '-', '-')
    
    this.selectedItem({RowIndex: 24, Kind: '玄関戸', Material: '色'}, '-', '-')

    // for genkan handle
    this.selectedItem({RowIndex: 25, Kind: 'シリンダー', Material: '-'}, '-', '-')

    this.selectedItem({RowIndex: 44, Kind: '玄関戸(2)', Material: '色'}, '-', '-')

    // for genkan handle
    this.selectedItem({RowIndex: 45, Kind: 'シリンダー(2)', Material: '-'}, '-', '-')    

    //for fixed WPCウッドデッキ
    this.selectedItem({RowIndex: 38, Kind: 'WPCウッドデッキ', Material: '-'}, '-', '-')  
    this.selectedItem({RowIndex: 39, Kind: 'WPCウッドデッキ(2)', Material: '-'}, '-', '-')  

  }else{
    //roof material
    this.屋根材種_material = this.retainSelected(0, 'True')
    this.屋根材種_color    = this.retainSelected(0, 'False')

    //Parapet
    this.パラペット壁笠木_material = this.retainSelected(2, 'True')
    this.パラペット壁笠木_color    = this.retainSelected(2, 'False')

    //Parapet 2
    this.パラペット壁笠木_material2 = this.retainSelected(41, 'True')
    this.パラペット壁笠木_color2    = this.retainSelected(41, 'False')    

    //軒天仕上げ
    this.軒天仕上げ_material = this.retainSelected(4, 'True')
    this.軒天仕上げ_color = this.retainSelected(4, 'False')   
    
    //軒天水切り
    this.軒天水切り_color    =  this.retainSelected(5, 'False') 
    this.軒天水切り_material =  this.retainSelected(5, 'True') 

    //破風鼻隠し仕上げ
    this.破風鼻隠し仕上げ_color    =  this.retainSelected(6, 'False') 
    this.破風鼻隠し仕上げ_material =  this.retainSelected(6, 'True') 

    //軒樋
    this.軒樋_material =  this.retainSelected(7, 'True') 
    this.軒樋_color    =  this.retainSelected(7, 'False') 

    //縦樋
    this.縦樋_material =  this.retainSelected(8, 'True') 
    this.縦樋_color =  this.retainSelected(8, 'False') 

    //土台水切り
    this.土台水切り_material =  this.retainSelected(9, 'True') 
    this.土台水切り_color =  this.retainSelected(9, 'False') 

    //サッシ
    this.サッシ_material =  this.retainSelected(11, 'True') 
    this.サッシ_color =  this.retainSelected(11, 'False') 

    //バルコニー床
    this.s2Fバルコニー床 =  this.retainSelected(13, 'True') 
    this.s2Fバルコニー床 =  this.retainSelected(13, 'False')  

    //バルコニー手摺
    this.s2Fバルコニーガラス_material =  this.retainSelected(14, 'True')  
    this.s2Fバルコニーガラス_color =  this.retainSelected(14, 'False') 

    this.s2Fバルコニー手摺_material = this.retainSelected(26, 'True') 
    this.s2Fバルコニー手摺_color = this.retainSelected(26, 'False') 
    
    //バルコニー手摺Coping
    this.s2Fバルコニー袖壁笠木_material =  this.retainSelected(15, 'True')
    this.s2Fバルコニー袖壁笠木_color =  this.retainSelected(15, 'False')

    //3Fバルコニー床
    this.s3Fバルコニー床 =  this.retainSelected(20, 'True') 
    this.s3Fバルコニー床 =  this.retainSelected(20, 'False') 
    
    //3Fバルコニーガラス
    this.s3Fバルコニーガラス_material =  this.retainSelected(21, 'True')  
    this.s3Fバルコニーガラス_color =  this.retainSelected(21, 'False')
 
    this.s3Fバルコニー手摺_material = this.retainSelected(27, 'True') 
    this.s3Fバルコニー手摺_color = this.retainSelected(27, 'False') 

    //3FバルコニーガラスCoping
    this.s3Fバルコニー袖壁笠木_material =  this.retainSelected(22, 'True')
    this.s3Fバルコニー袖壁笠木_color =  this.retainSelected(22, 'False')

    //ポーチ   
    this.ポーチ_material =  this.retainSelected(18, 'True') 
    this.ポーチ_color =  this.retainSelected(18, 'False') 
    //ポーチ 2  
    this.ポーチ_material2 =  this.retainSelected(40, 'True') 
    this.ポーチ_color2 =  this.retainSelected(40, 'False') 


    //玄関内土間
    this.玄関内土間_material =  this.retainSelected(19, 'True') 
    this.玄関内土間_color =  this.retainSelected(19, 'False') 

    //玄関内土間 2
    this.玄関内土間_material2 =  this.retainSelected(46, 'True') 
    this.玄関内土間_color2 =  this.retainSelected(46, 'False') 

    //テラス
    this.テラス_material =  this.retainSelected(28, 'True') 
    this.テラス_color =  this.retainSelected(28, 'False') 

    //テラス 2
    this.テラス_material2 =  this.retainSelected(42, 'True') 
    this.テラス_color2 =  this.retainSelected(42, 'False') 

    //玄関内土間
    this.スロープ_material =  this.retainSelected(29, 'True') 
    this.スロープ_color =  this.retainSelected(29, 'False') 

    //玄関内土間 2
    this.スロープ_material2 =  this.retainSelected(43, 'True') 
    this.スロープ_color2 =  this.retainSelected(43, 'False') 

    //色
    this.色_material =  this.retainSelected(24, 'True') 
    this.色_color =  this.retainSelected(24, 'False') 

    //シリンダー
    this.シリンダー_material =  this.retainSelected(25, 'True') 
    this.シリンダー_color =  this.retainSelected(25, 'False') 

    //色 2
    this.色_material2 =  this.retainSelected(44, 'True') 
    this.色_color2 =  this.retainSelected(44, 'False') 

    //シリンダー 2
    this.シリンダー_material2 =  this.retainSelected(45, 'True') 
    this.シリンダー_color2 =  this.retainSelected(45, 'False') 


    //バルコニー床2
    this.s2Fバルコニー床 =  this.retainSelected(30, 'True') 
    this.s2Fバルコニー床 =  this.retainSelected(30, 'False')  

    //バルコニー手摺2
    this.s2Fバルコニーガラス_material2 =  this.retainSelected(31, 'True')  
    this.s2Fバルコニーガラス_color2 =  this.retainSelected(31, 'False') 

    this.s2Fバルコニー手摺_material2 = this.retainSelected(32, 'True') 
    this.s2Fバルコニー手摺_color2 = this.retainSelected(32, 'False') 
    
    //バルコニー手摺Coping2
    //this.s2Fバルコニー袖壁笠木_material2 =  this.retainSelected(33, 'True')
    //this.s2Fバルコニー袖壁笠木_color2 =  this.retainSelected(33, 'False') 
    
    //バルコニー床3
    this.s2Fバルコニー床 =  this.retainSelected(34, 'True') 
    this.s2Fバルコニー床 =  this.retainSelected(34, 'False')  

    //バルコニー手摺3
    this.s2Fバルコニーガラス_material3 =  this.retainSelected(35, 'True')  
    this.s2Fバルコニーガラス_color3 =  this.retainSelected(35, 'False') 

    this.s2Fバルコニー手摺_material3 = this.retainSelected(37, 'True') 
    this.s2Fバルコニー手摺_color3 = this.retainSelected(37, 'False') 
    
    //バルコニー手摺Coping3
   // this.s2Fバルコニー袖壁笠木_material3 =  this.retainSelected(36, 'True')
    //this.s2Fバルコニー袖壁笠木_color3 =  this.retainSelected(36, 'False') 

    //WPCウッドデッキ
    this.WPCウッドデッキ_color =  this.retainSelected(38, 'False') 
    this.WPCウッドデッキ_color2 =  this.retainSelected(38, 'False') 
    
  }
},

  methods:{
    selectedItem(value, isTrue, textureObject, colorCount){
      if(colorCount === undefined){
        colorCount = ''
      }

      if(this.$ShiyoushoData.selectedInJSON.length === 0){
        this.パラペット壁笠木_color = '外壁合せ' 
        this.パラペット壁笠木_material = 'アルミニウム' 
        this.軒天仕上げ_color      = '外壁合せ'
        this.軒天水切り_color      = '直上(下)笠木又は土台水切合せ'
        this.軒樋_color           = '破風色合わせ'
        this.縦樋_color           = 'パターン色'
        this.軒天仕上げ_material   = '塗装板サイディング'
        this.軒天水切り_material   = 'アルミニウム'
        this.ポーチ_material      = 'ヨーロピアンタイル'
        this.ポーチ_material2      = 'ヨーロピアンタイル'
        this.玄関内土間_material      = 'ヨーロピアンタイル'
        this.玄関内土間_material2      = 'ヨーロピアンタイル'
        
      }
      
      if(isTrue !== '' && isTrue !== null && textureObject !== ''){
        this.$ShiyoushoData.setSelected(value.RowIndex, value.Kind, value.Material,textureObject,colorCount)
      }else{
        this.$ShiyoushoData.selectedInJSON.forEach( item =>{ 
          if(value.RowIndex === item.rowIndex){
            //this.$ShiyoushoData.removeSelected(item)  
            this.$ShiyoushoData.setSelected(value.RowIndex, value.Kind, '-' ,'-','-')  
          }
        })
      }
      console.log(this.$ShiyoushoData.selectedInJSON)
    },

    retainSelected(rowIndex, isMaterial ){
      let temp = this.$ShiyoushoData.selectedInJSON.filter(item => item.rowIndex === rowIndex )
      let colorCount = temp.map(item => item.colorCount)
      if( isMaterial === 'True' ){
         temp = temp.map(item => item.Material).toString()
      }else{
        if(colorCount[0] === null || colorCount[0] === '0' ){
          temp = temp.map(item => (item.JapaneseName )).toString() 
        }else{
            temp = temp.map(item => (item.JapaneseName + item.colorCount )).toString() 
        }
      }
      //console.log(temp)
      return temp
   },

   itemShow(item, val){
    
    if(item == 'changeWoodDeck'){
      let sVal = val //!this.$store.state.isWoodDeck
      this.$store.commit(item, sVal)
    }else if(item == 'changeGenkan' ){
      let sVal = val
      this.$store.commit(item, sVal)   
    }else if(item == 'changeParapet' ){
      let sVal = val
      this.$store.commit(item, sVal)   
    }else if(item == 'changeBalcony2' ){
      let sVal = val
      this.$store.commit(item, sVal)   
    }else if(item == 'changeBalcony3' ){
      let sVal = val
      this.$store.commit(item, sVal)   
    }else if(item == 'changePorch' ){
      let sVal = val
      this.$store.commit(item, sVal)   
    }else if(item == 'changeTerasu' ){
      let sVal = val
      this.$store.commit(item, sVal)   
    }else if(item == 'changeSlope' ){
      let sVal = val
      this.$store.commit(item, sVal)   
    }else if(item == 'changeGenkanUchidoma' ){
      let sVal = val
      this.$store.commit(item, sVal)   
    }
    //console.log(item, this.sVal)   
   },
}
}

</script>