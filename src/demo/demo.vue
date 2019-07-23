<template>
  <div class="demo">
    <upload-image
      class="upload-img"
      :action="uploadUrl"
      :sizelimit="{width:200,height:200}"
      :limit="4"
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
      return "http://console-api-dev.crs.dev-test.vchangyi.com/upload";
    }
  }
};
</script>
<style lang="less" scoped>
.upload-img {
  position: absolute;
  top: 200px;
  left: 200px;
}
</style>
