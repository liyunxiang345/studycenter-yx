// 格式化金钱
export default {
  key: "formatMoney",
  func: money => (money ? (money / 100).toFixed(2) : 0)
};
