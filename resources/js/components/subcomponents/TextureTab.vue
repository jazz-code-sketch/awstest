<template>
  <v-tabs v-model="tab" background-color="white" color="deep-purple accent-4" left center-active show-arrows>
    <v-tab v-for="(item, index) in tabList" :key="index" >
      {{ item.TabName}}
    </v-tab>
  </v-tabs>


</template>

<script>
export default {
  props: ['tabList', 'tab'],

    data(){
        return {
       
        }
    },
 

}





</script>
