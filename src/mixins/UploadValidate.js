import {
  Loading
} from "element-ui";

// 文件类型映射
const file_type = {
  png: ["image/png", "图片"],
  jpg: ["image/jpeg", "图片"],
  gif: ["image/gif", "图片"],
  xls: ["", "文件"],
  csv: ["", "文件"]
};

// 简易文件上传验证
export default {
  methods: {
    _uploadValidate(file, validate) {
      let target = null;
      // 选中验证规则
      for (let i = 0, len = validate.length; i < len; i++) {
        if (file_type[validate[i].type][0] === file.type) {
          target = validate[i];
          break;
        }
      }
      if (!target) {
        this.$message.error(`文件类型错误，请上传 ${validate.map(item => item.type).join(" 或 ")} 类型的文件！`);
        return false;
      }
      if (target.limit) {
        if (parseInt(file.size / 1024) > target.limit) {
          if (target.type === "gif") {
            this.$message.error("为保证小程序流畅度，GIF图片建议不超过1.5M");
            return false;
          }
          this.$message.error(`${file_type[target.type][1]}超出 ${target.limit}kb 上传限制，禁止上传！`);
          return false;
        }
      }
      if (target.suggest) {
        if (parseInt(file.size / 1024) > target.suggest) {
          if (target.type === "gif") {
            this.$message.warning("为保证小程序流畅度，GIF图片建议不超过1.5M");
          } else {
            this.$message.warning(`建议${file_type[target.type][1]}上传大小为 ${target.suggest}kb！`);
          }
        }
      }
      Loading.service({
        fullscreen: true,
        text: "图片上传中,请稍后"
      });
      Loading.service({
        fullscreen: true
      }).close();
      return true;
    }
  }
};

/*

 let url = window.URL.createObjectURL()
* */