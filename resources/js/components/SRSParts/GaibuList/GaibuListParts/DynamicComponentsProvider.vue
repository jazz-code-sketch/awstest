<template>
  <component :is="componentFile" />
</template>
<script>
export default {
  props:{
    componentName: {
      required: true
    }
  },
  computed:{
    componentFile(){
      return () => import(`./${this.componentName}.vue`);   
    }
  },
}
</script>