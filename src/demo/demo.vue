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
    <upload-image
      class="upload-img"
      :action="uploadUrl"
      :sizelimit="{width:200,height:200}"
      :before-upload="file => _uploadValidate(file,[{type:'png',limit:500,suggest:200},{type:'jpg',limit:500,suggest:200},{type:'gif',limit:1536,suggest:1024}])"
    ></upload-image>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import uploadImage from "@/components/uploadImage";
import UploadValidate from "@/mixins/UploadValidate.js";
export default {
  components: { draggable, uploadImage },
  mixins: [UploadValidate],
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
    },
    beforeAvatarUpload(file) {
      console.log(file);
    },
    uploadUrl() {
      return "https://jsonplaceholder.typicode.com/posts/";
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
  .upload-img {
    position: absolute;
    top: 500px;
    left: 200px;
  }
}
</style>
