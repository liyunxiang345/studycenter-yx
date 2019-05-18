import FormatDate from "./FormatDate";
import FormatMoney from "./FormatMoney";

const filters = [FormatDate, FormatMoney];
export default {
  install: Vue => {
    if (filters.length && filters.length > 0) {
      filters.map(item => {
        Vue.filter(item.key, item.func);
      });
    }
  }
};
