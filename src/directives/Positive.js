/**
 * @author LeeYunxiang
 * @description 限制数字输入格式 int => 正整数 , float => 正数包括小数
 *  */
export default {
  key: "positive",
  func: {
    inserted(el, bind) {
      switch (bind.value) {
        case "int":
          el.addEventListener("keypress", e => {
            e = e || window.event;
            let charcode =
              typeof e.charCode == "number" ? e.charCode : e.keyCode;
            let reg = /\d/;
            if (
              !reg.test(String.fromCharCode(charcode)) &&
              charcode > 9 &&
              !e.ctrlKey
            ) {
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }
            }
          });
          break;
        case "float":
          el.addEventListener("keypress", e => {
            e = e || window.event;
            let charcode =
              typeof e.charCode == "number" ? e.charCode : e.keyCode;
            let re = /\d/;
            if (charcode == 46) {
              if (el.children[0].value.includes(".")) {
                e.preventDefault();
              }
              return;
            } else if (
              !re.test(String.fromCharCode(charcode)) &&
              charcode > 9 &&
              !e.ctrlKey
            ) {
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }
            }
          });
          break;
      }
    }
  }
};