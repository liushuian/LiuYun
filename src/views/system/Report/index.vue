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
            <span>成绩比率</span>
          </div>
          <div>
            <div style="height: 420px;"></div>
          </div>
        </el-card>
      </el-col>
      <el-col
        :span="24"
        class="study"
      >
        <el-card class="box-card">
          <div slot="header">
            <span>学生来源</span>
          </div>
          <div>
            <div
              ref="studentSource"
              style="height: 620px;"
            ></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import 'echarts/map/js/china'
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
      let myCommarChart = this.$echarts.init(this.$refs.commar);
      let commarOption = {
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

      myCommarChart.setOption(commarOption);
      let studentOption = {
        // 标题
        title: {
          text: '学生生源',
          left: 'center'
        },
        // 地图大小
        geo: {
          zoom: 2.5
        },
        // 触发类型
        tooltip: {
          trigger: 'item',
          textStyle: {
            // 颜色  
            color: '#FF7F50',
            // 字号 ，单位px  
            fontSize: 14,
          }
        },
        legend: {
          show: true,
          orient: 'vertical',
          x: 'left',
          y: 'top',
          itemGap: 10,
          // 图例图形宽度  
          itemWidth: 30,
          // 图例图形高度  
          itemHeight: 15,
          textStyle: {
            align: 'left',
            baseline: 'bottom',
            fontSize: 14
          },
          selectedMode: true,
          // 图例内容数组  
          data: [
            { name: '男学生' },
            { name: '女学生' }
          ]
        },
        dataRange: {
          show: true,
          orient: 'vertical',
          x: 'left',
          y: 'bottom',
          itemGap: 15,
          itemWidth: 20,
          itemHeight: 200,
          min: 0,
          max: 500,
          splitNumber: 10,
          splitList: [
            { start: 120, end: 150, color: '#1874df' },
            { start: 90, end: 120, color: '#f39f98' },
            { start: 60, end: 90, color: '#e5ac53' },
            { start: 30, end: 60, color: '#74e1ca' },
            { start: 0, end: 30, color: '#9fb4e9' }
          ],
          selectedMode: 'multiple',
          calculable: true,
          text: ['高', '低'],
          textStyle: {
            align: 'left',
            baseline: 'bottom',
            fontSize: 16,
          }
        },
        // 工具箱
        toolbox: {
          show: true,
          orient: 'vertical',
          x: 'right',
          y: 'center',
          itemGap: 10,
          itemSize: 15,
          // 启用功能
          feature: {
            // 数据视图
            dataView: {
              show: true,
              title: '数据视图',
              readOnly: false,
              lang: ['数据视图', '关闭', '刷新']
            },
            // 还原，复位原始图表  
            restore: {
              show: true,
              title: '还原'
            },
            // 保存图片
            saveAsImage: {
              show: true,
              title: '保存为图片',
              type: 'png',
              lang: ['点击保存']
            }
          }
        },
        series: [
          {
            type: "map",
            name: "男学生",
            mapType: "china",
            roam: true,
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { label: { show: true } }
            },
            data: [
              { name: '北京', value: 14 },
              { name: '辽宁', value: 57 },
              { name: '湖南', value: 78 },
              { name: '安徽', value: 3 },
              { name: '山东', value: 88 },
              { name: '新疆', value: 54 },
              { name: '江苏', value: 8 },
              { name: '浙江', value: 31 },
              { name: '江西', value: 1 },
              { name: '福建', value: 110 },
              { name: '贵州', value: 86 },
              { name: '广东', value: 56 }
            ]
          },
          {
            type: "map",
            name: "女学生",
            mapType: "china",
            roam: true,
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { label: { show: true } }
            },
            data: [
              { name: '北京', value: 55 },
              { name: '山东', value: 54 },
              { name: '新疆', value: 65 },
              { name: '江苏', value: 22 },
              { name: '浙江', value: 46 },
            ]
          }
        ]
      }
      let myStudentChart = this.$echarts.init(this.$refs.studentSource)
      myStudentChart.setOption(studentOption)
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
.study {
  margin-top: 30px;
}
</style>