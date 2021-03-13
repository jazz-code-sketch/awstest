
<template>
  <v-simple-table>
        <p>{{ calories }}</p>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left"></th>
          <th class="text-left"></th>
          <th class="text-left"></th>
          <th class="text-left"></th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in td1" :key="item.name">
          <td>{{ item.name }}</td>
          <td><v-checkbox v-model="color1" label="□ｶﾞﾙﾊﾞﾘｳﾑ鋼板" value="A"></v-checkbox></td>
          <td><v-checkbox v-model="color2" label="ｵﾘｼﾞﾅﾙ太陽光発電ﾊﾟﾈﾙ搭載屋根" value="A"></v-checkbox></td>
        </tr>

        <tr v-for="item in td2" :key="item.name">
          <td>{{ item.name }}</td>
          <td><v-checkbox v-model="color1" label="□ｶﾞﾙﾊﾞﾘｳﾑ鋼板" value="A"></v-checkbox></td>
          <td></td>
        </tr>        

      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        td1: [
          {
            name: '太陽光ﾊﾟﾈﾙ屋根下地',
            color1: 'けい酸ｶﾙｼｳﾑ板仕様',
            color2: '',
          },
        ],
        td2: [
          {
            name: '屋根材種',
            color1: '□ｶﾞﾙﾊﾞﾘｳﾑ鋼板',
            color2: 'ｵﾘｼﾞﾅﾙ太陽光発電ﾊﾟﾈﾙ搭載屋根',
          },
        ],
      }
    },
  }
</script>