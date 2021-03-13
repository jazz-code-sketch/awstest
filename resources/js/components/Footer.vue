<template>
  <v-card height="150" class="secondAppBar" style="position: fixed">
    <v-footer absolute class="font-weight-medium">
      <v-col
        class="text-center"
        cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-card>
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
    top: -48px;
    z-index: 1;
 }
</style>

