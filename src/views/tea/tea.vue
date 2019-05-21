<template>
  <div class="tea">
    <menu-module :type_list="type_list" :flavor_list="flavor_list"></menu-module>
  </div>
</template>
<script>
import menuModule from "@/components/menu";
export default {
  components: {
    menuModule
  },
  data() {
    return {
      type_list: [
        { name: "全部分类" },
        { name: "蛋糕" },
        { name: "冰淇淋" },
        { name: "咖啡下午茶" },
        { name: "面包" },
        { name: "设计师礼品" }
      ],
      flavor_list: [
        { name: "全部口味" },
        { name: "乳脂奶油" },
        { name: "巧克力" },
        { name: "乳酪" },
        { name: "慕斯" },
        { name: "抹茶" },
        { name: "含酒" },
        { name: "咖啡" },
        { name: "冰淇淋" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.tea {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
}
</style>