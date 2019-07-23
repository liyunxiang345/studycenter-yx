<template>
  <div>
    <div
      class="upload-image"
      @mouseover.prevent="$item.is_hover = true"
      @mouseleave.prevent="$item.is_hover = false"
      v-for="($item,$index) in image_list"
      :key="$index"
    >
      <!-- 表单层 -->
      <input class="real-form" type="file" ref="input" @change="getFile($event,$index)" />
      <!-- 上传层 -->
      <div class="upload-ui-wrap" v-if="!$item.is_upload">
        <div class="upload-before">
          <i class="el-icon-plus upload-icon"></i>
        </div>
      </div>
      <!-- 展示层 -->
      <div
        class="upload-done"
        v-if="$item.is_upload"
        :style="{backgroundImage:`url(${$item.temp_url})`}"
      >
        <div class="upload-mask" v-show="$item.is_upload && $item.is_hover">
          <i class="el-icon-delete bin" @click="deleteImage($index)"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * @author Leeyunxiang
 * @param {Function} beforeUpload 上传前的回调
 * @param {String || Function} action 上传图片接口
 * @param {Object} sizelimit 图片长宽限制
 */
export default {
  name: "UploadImage",
  props: {
    beforeUpload: {
      type: Function
    },
    action: [String, Function],
    sizelimit: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      image_list: [
        {
          file_message: null, //文件的信息
          temp_url: "", //测试开发阶段临时图片
          is_upload: false,
          is_hover: false //鼠标是否移动到其中
        }
      ]
    };
  },
  methods: {
    getFile(e, i) {
      if (e.target.files.length > 0) {
        this.image_list[i].file_message = e.target.files[0];
        this.checkSize(this.image_list[i].file_message, i)
          .then(() => {
            this.$message.success("通过验证");
            this.image_list[i].is_upload = true;
            this.upload(this.image_list[i].file_message);
          })
          .catch(err => {
            this.$message.error(err);
          });
      } else {
        return false;
      }
    },
    checkSize(file, i) {
      let _this = this;
      return new Promise((resolve, reject) => {
        if (_this.beforeUpload(file)) {
          let url = window.URL.createObjectURL(file);
          let img = new Image();
          img.src = url;
          img.onload = () => {
            if (img.width > _this.sizelimit.width) {
              reject(`图片宽度不能超过${_this.sizelimit.width}px`);
            }
            if (img.height > _this.sizelimit.height) {
              reject(`图片高度不能超过${_this.sizelimit.height}px`);
            }
            this.image_list[i].temp_url = url;
            resolve();
          };
        } else {
          reject();
        }
      });
    },
    deleteImage(i) {
      this.image_list[i].is_upload = false;
      this.image_list[i].temp_url = "";
    },
    upload() {
      if (typeof this.action === "function") {
        let urls = this.action();
      } else {
        let urls = this.action;
      }
      let obj = {
        file_message: null, //文件的信息
        temp_url: "", //测试开发阶段临时图片
        is_upload: false,
        is_hover: false //鼠标是否移动到其中
      };
      this.image_list.push(obj);
    }
  }
};
</script>
<style lang="less" scoped>
.upload-image {
  width: 148px;
  height: 148px;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  position: relative;
  display: inline-block;
  &:hover {
    border-color: #409eff;
  }
  .upload-ui-wrap {
    width: 148px;
    height: 148px;
    position: absolute;
    top: 0;
    left: 0;
    .upload-before {
      width: 100%;
      height: 100%;
      background-color: #fbfdff;
      text-align: center;
      line-height: 148px;
      .upload-icon {
        font-weight: 400;
        font-family: element-icons !important;
        font-size: 28px;
        color: #8c939d;
      }
    }
  }
  .upload-done {
    width: 148px;
    height: 148px;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    .upload-mask {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      border-radius: 6px;
      top: 0;
      left: 0;
      z-index: 1000;
      cursor: pointer;
      .bin {
        color: #ffffff;
        font-size: 20px;
        position: absolute;
        left: 45%;
        top: 45%;
        z-index: 1000;
      }
    }
  }
  .real-form {
    width: 148px;
    height: 148px;
    opacity: 0;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
  }
}
</style>
