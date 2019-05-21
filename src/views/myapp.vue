<template>
  <div>
    <navigator-module></navigator-module>
    <router-view/>
  </div>
</template>
<script>
import navigatorModule from "@/components/navigator";
export default {
  name: "MyApp",
  components: {
    navigatorModule
  }
};
</script>

