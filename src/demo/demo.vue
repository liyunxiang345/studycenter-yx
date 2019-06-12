<template>
  <div class="demo">
    <draggable
      :options="{group:'people',animation:150,ghostClass:'sortable-ghost',chosenClass:'chosenClass',scroll:true,scrollSensitivity:200}"
      v-model="list"
      @end="dragEnd"
      @start="dragStart"
    >
      <div class="box-item" v-for="($item,$index) in list" :key="$index">{{$item.name}}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: { draggable },
  data() {
    return {
      list: [
        { name: "one" },
        { name: "two" },
        { name: "three" },
        { name: "four" }
      ]
    };
  },
  methods: {
    dragStart(e) {
      console.log(e);
    },
    dragEnd(e) {
      console.log(e);
    }
  }
};
</script>
<style lang="less" scoped>
.demo {
  width: 404px;
  margin: 0 auto;
  &:after {
    display: block;
    content: "";
    clear: both;
  }
  .box-item {
    width: 200px;
    height: 200px;
    border: 1px solid #ffffff;
    background-color: black;
    color: white;
    float: left;
    text-align: center;
    line-height: 200px;
    font-size: 20px;
  }
}
</style>
