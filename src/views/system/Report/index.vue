<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header">
            <span class="card-title">统计命令</span>
          </div>
          <div>
            <div
              ref="commar"
              style="height: 420px;"
            ></div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header">
            <span>ss</span>
          </div>
          <div>
            <div style="height: 420px;"></div>
          </div>
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'report',
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    this.getEcharts()
  },
  methods: {
    getEcharts() {
      let myChart = echarts.init(this.$refs.commar);
      let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
      }
      myChart.setOption(option);
    }
  },
}
</script>
<style lang="scss" scoped>
.el-card {
  margin: 0 15px;
}
.card-title {
  font-size: 16px;
}
</style>