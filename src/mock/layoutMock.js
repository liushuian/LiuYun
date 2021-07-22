import Mock from 'mockjs'
// 导航菜单
Mock.mock('/api/sidebar', 'get', {
  "aside": [
    {
      "id": 1000,
      "title": "角色管理",
      "children": [
        {
          "id": 10001,
          "title": "权限管理",
          "path": "/roles"
        }
      ]
    },
    {
      "id": 1100,
      "title": "考试管理",
      "children": [
        {
          "id": 11001,
          "title": "考室排班",
          "path": "/class"
        },
        {
          "id": 11002,
          "title": "考试监督安排",
          "path": "/class1"
        }
      ]
    },
    {
      "id": 1200,
      "title": "成绩管理",
      "children": [
        {
          "id": 12001,
          "title": "期中考试",
          "path": "/class2"
        },
        {
          "id": 12002,
          "title": "期末考试",
          "path": "/class3"
        }
      ]
    },
    {
      "id": 1300,
      "title": "实验实践教学管理",
      "children": [
        {
          "id": 13001,
          "title": "义务劳动",
          "path": "/class4"
        }
      ]
    },
    {
      "id": 1400,
      "title": "教学评价",
      "children": [
        {
          "id": 14001,
          "title": "学生评价",
          "path": "/class5"
        },
        {
          "id": 14002,
          "title": "老师评价",
          "path": "/class6"
        }
      ]
    },
    {
      "id": 1500,
      "title": "宿舍管理",
      "children": [
        {
          "id": 15001,
          "title": "男生宿舍",
          "path": "/class7"
        },
        {
          "id": 15002,
          "title": "女生宿舍",
          "path": "/class8"
        }
      ]
    },
    {
      "id": 1600,
      "title": "统计报表",
      "children": [
        {
          "id": 16001,
          "title": "教学质量报表",
          "path": "/report"
        },
        {
          "id": 16002,
          "title": "老师评价报表",
          "path": "/class10"
        }
      ]
    }
  ],
  "code": 200
})

