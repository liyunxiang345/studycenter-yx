<template>
  <div class="upload-image">
    <input class="real-form" type="file" ref="input" :value="file" @change="getFile($event)" />
    <div class="upload-ui-wrap">
      <div class="upload-before">
        <i class="el-icon-plus upload-icon"></i>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * @author Leeyunx
 * @param {Object} file
 * @param {String || Function} action
 * @param {Array} sizelimit
 */
export default {
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
  name: "UploadImage",
  data() {
    return {
      file: null, //文件
      file_message: null //文件的信息
    };
  },
  methods: {
    getFile(e) {
      let _this = this;
      _this.file_message = e.target.files[0];
      return new Promise((resolve, reject) => {
        if (_this.beforeUpload(_this.file_message)) {
          resolve();
        } else {
          reject();
        }
      })
        .then(() => {
          // 校验图片长宽是否满足参数限制
          let url = window.URL.createObjectURL(_this.file_message);
          let img = new Image();
          img.src = url;
          img.onload = () => {
            if (img.width > _this.sizelimit.width) {
              this.$message.error(`图片宽度不能超过${_this.sizelimit.width}px`);
              return false;
            }
            if (img.height > _this.sizelimit.height) {
              this.$message.error(
                `图片高度不能超过${_this.sizelimit.height}px`
              );
              return false;
            }
            this.$message.success("通过");
          };
        })
        .catch(err => {
          this.$message.error(err);
        });
      this.upload();
    },
    upload() {
      if (typeof this.action === "function") {
        const url = this.action();
      } else {
        const url = this.action;
      }
      return new Promise((resolve, reject) => {});
    }
  }
};
</script>
<style lang="less" scoped>
.upload-image {
  width: 148px;
  height: 148px;
  border: 1px dashed #c0ccda;
  position: relative;
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
