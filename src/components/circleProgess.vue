<template>
  <div class="progess-container">
    <canvas :id="params.id" width="200" height="200"></canvas>
  </div>
</template>
<script>
export default {
  props: {
    params: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    // canvas属性初始化
    init: function() {
      this.ele = document.getElementById(this.params.id);
      this.ctx = this.ele.getContext("2d");
      this.percent = this.params.percent;
      this.forecolor = this.params.forecolor;
      this.bgcolor = this.params.bgcolor;
      this.center_x = this.ele.width / 2;
      this.center_y = this.ele.height / 2;
      this.speed = 0;
      this.rad = (Math.PI * 2) / 100;
    },
    //画背景圆圈
    drawBackgroundCircle: function() {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.lineWidth = 18;
      var radius = this.center_x - this.ctx.lineWidth;
      this.ctx.strokeStyle = this.bgcolor;
      this.ctx.arc(this.center_x, this.center_y, radius, 0, Math.PI * 2, true);
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.restore();
    },
    //画前景圆圈
    drawfrontCircle: function(n) {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.lineWidth = 18;
      var radius = this.center_x - this.ctx.lineWidth;
      this.ctx.lineCap = "round";
      this.ctx.strokeStyle = this.forecolor;
      this.ctx.arc(
        this.center_x,
        this.center_y,
        radius,
        Math.PI / 2,
        Math.PI / 2 - n * this.rad,
        true
      ); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.restore();
    },
    // 绘制百分比方法
    drawText: function(n) {
      this.ctx.save();
      this.ctx.fillStyle = "#000000";
      var font_size = 35;
      this.ctx.font = font_size + "px Helvetica";
      var text_width = this.ctx.measureText(n.toFixed(1) + "%").width;
      this.ctx.fillText(
        n.toFixed(1) + "%",
        this.center_x - text_width / 2,
        this.center_y + font_size / 4
      );
      this.ctx.restore();
    },
    //动态渲染方法
    animation: function() {
      this.ctx.clearRect(0, 0, this.ele.width, this.ele.height);
      this.drawBackgroundCircle();
      this.drawfrontCircle(this.speed);
      this.drawText(this.speed);
      if (this.speed >= this.percent) {
        this.speed = this.percent;
        return false;
      }
      this.speed++;
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style>
.progess-container {
  position: relative;
  text-align: center;
  width: 3.75rem;
  margin-top: 0.45rem;
}
canvas {
  width: 2rem;
  height: 2rem;
}
</style>    