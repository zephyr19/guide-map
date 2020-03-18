//此js文件用于存储地图组件上的所有坐标点
//由home.js调用

//标题栏
var init = [
  {
    head:'发热门诊',
    varName:'menzhen'
  },
  {
    head:'定点医院',
    varName:'yiyuan'
  },
  {
    head: '快递点',
    varName: 'kuaididian'
  },
  {
    head: '宿舍',
    varName: 'sushe'
  },
  {
    head: '食堂',
    varName: 'shitang'
  },
  {
    head: '教学实验楼',
    varName: 'jiaoxuelou'
  },
  {
    head: '打印店',
    varName: 'dayindian'
  },
  {
    head: '业务办理点',
    varName: 'yewu'
  },
  {
    head: '失物招领处',
    varName: 'shiwuzhaoling'
  },
  {
    head: '体育场馆',
    varName: 'tiyuchangguan'
  },
  {
    head: '医疗点',
    varName: 'yiliaodian'
  },
  {
    head: '图书馆',
    varName: 'tushuguan'
  },
  {
    head: '自习室',
    varName: 'zixishi'
  },
  {
    head: '礼堂',
    varName: 'litang'
  },
  {
    head: '其他',
    varName: 'qita'
  }
]
var sushe = [{
  head: '宿舍',
  content: [{
      id: 'a1',
      name: '升华1栋',
      longitude: 112.937340,  // 经度
      latitude: 28.155760,  // 纬度
      iconPath: '../../img/location.png',
      // 控制icon大小
      width: 27, height: 40,
    },
    {
      id: 'a2',
      name: '升华2栋',
      longitude: 112.937270,
      latitude: 28.156450,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a3',
      name: '升华3栋',
      longitude: 112.936900,
      latitude: 28.156060,
      iconPath: '../../img/location.png',
      width: 27, height: 40,

    },
    {
      id: 'a4',
      name: '升华4栋',
      longitude: 112.936840,
      latitude: 28.156400,
      iconPath: '../../img/location.png',
      width: 27, height: 40,

    },
    {
      id: 'a5',
      name: '升华5栋',
      longitude: 112.936325,
      latitude: 28.156627,
      iconPath: '../../img/location.png',
      width: 27, height: 40,

    },
    {
      id: 'a6',
      name: '升华6栋',
      longitude: 112.935944,
      latitude: 28.156802,
      iconPath: '../../img/location.png',
      width: 27, height: 40,

    },
    {
      id: 'a7',
      name: '升华7栋',
      longitude: 112.935800,
      latitude: 28.157140,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a8',
      name: '升华8栋',
      longitude: 112.93684,
      latitude: 28.157213,
      iconPath: '../../img/location.png',
      width: 27, height: 40,

    },
    {
      id: 'a9',
      name: '升华9栋',
      longitude: 112.937200,
      latitude: 28.157210,
      iconPath: '../../img/location.png',
      width: 27, height: 40,

    },
    {
      id: 'a10',
      name: '升华10栋',
      longitude: 112.936271,
      latitude: 28.157128,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a11',
      name: '升华11栋',
      longitude: 112.936120,
      latitude: 28.157540,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a12',
      name: '升华12栋',
      longitude: 112.935769,
      latitude: 28.15745,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a13',
      name: '升华13栋',
      longitude: 112.935777,
      latitude: 28.157738,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a14',
      name: '升华14栋',
      longitude: 112.934950,
      latitude: 28.158230,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a15',
      name: '升华15栋',
      longitude: 112.934620,
      latitude: 28.158610,
      iconPath: '../../img/location.png',
      width: 27, height: 40,

    },
    {
      id: 'a16',
      name: '升华16栋',
      longitude: 112.934290,
      latitude: 28.158890,
      iconPath: '../../img/location.png',
      width: 27, height: 40,

    },
    {
      id: 'a17',
      name: '升华17栋',
      longitude: 112.936580,
      latitude: 28.157720,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a18',
      name: '升华18栋',
      longitude: 112.936150,
      latitude: 28.157840,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a19',
      name: '升华19栋',
      longitude: 112.935646,
      latitude: 28.158013,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a20',
      name: '升华20栋',
      longitude: 112.936010,
      latitude: 28.158400,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a21',
      name: '升华21栋',
      longitude: 112.936020,
      latitude: 28.158740,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a22',
      name: '升华24栋',
      longitude: 112.936060,
      latitude: 28.159090,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a23',
      name: '升华25栋',
      longitude: 112.935620,
      latitude: 28.159420,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a24',
      name: '升华26栋',
      longitude: 112.934980,
      latitude: 28.159390,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a25',
      name: '升华27栋',
      longitude: 112.933870,
      latitude: 28.159270,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a26',
      name: '升华28栋',
      longitude: 112.933780,
      latitude: 28.159590,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a27',
      name: '升华29栋',
      longitude: 112.934850,
      latitude: 28.159730,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a28',
      name: '升华30栋',
      longitude: 112.934680,
      latitude: 28.160070,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a29',
      name: '升华31栋',
      longitude: 112.934660,
      latitude: 28.160460,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a30',
      name: '升华32栋',
      longitude: 112.933660,
      latitude: 28.160330,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a31',
      name: '升华33栋',
      longitude: 112.933610,
      latitude: 28.160670,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a32',
      name: '留学生公寓1栋',
      longitude: 112.933311,
      latitude: 28.161455,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a33',
      name: '留学生公寓2栋',
      longitude: 112.933440,
      latitude: 28.161840,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a34',
      name: '南1舍',
      longitude: 112.937935,
      latitude: 28.159792,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a35',
      name: '南2舍',
      longitude: 112.937988,
      latitude: 28.159546,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a36',
      name: '南3舍',
      longitude: 112.938042,
      latitude: 28.159231,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a37',
      name: '南5舍',
      longitude: 112.938606,
      latitude: 28.159687,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a38',
      name: '南6舍',
      longitude: 112.938693,
      latitude: 28.159254,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a39',
      name: '南7舍',
      longitude: 112.938644,
      latitude: 28.158844,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a40',
      name: '南8舍',
      longitude: 112.938187,
      latitude: 28.158335,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'a41',
      name: '南9舍',
      longitude: 112.938477,
      latitude: 28.158537,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
  ]
}]
var shitang = [{
  head: '食堂',
  content: [{
      id: 'b1',
      name: '南校区二食堂',
      longitude: 112.935240,
      latitude: 28.158780,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'b2',
      name: '南校区七食堂',
      longitude: 112.937580,
      latitude: 28.158820,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'b3',
      name: '南校区八食堂',
      longitude: 112.936830,
      latitude: 28.156910,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'b4',
      name: '新校区B座食堂',
      longitude: 112.942069,
      latitude: 28.149825,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'b5',
      name: '本部学生三五食堂',
      longitude: 112.929314,
      latitude: 28.173225,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'b6',
      name: '本部教工食堂',
      longitude: 112.932360,
      latitude: 28.167990,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    }
  ]
}]
var jiaoxuelou = [{
  head: '教学实验楼',
  content: [{
      id: 'c1',
      name: '新校区A座',
      longitude: 112.941643,
      latitude: 28.150583,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'c2',
      name: '新校区B座',
      longitude: 112.942069,
      latitude: 28.149825,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'c3',
      name: '新校区C座',
      longitude: 112.941556,
      latitude: 28.149011,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'c4',
      name: '新校区D座',
      longitude: 112.941561,
      latitude: 28.148754,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'c5',
      name: '外语网络楼',
      longitude: 112.938895,
      latitude: 28.149782,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'c6',
      name: '民主楼',
      longitude: 112.930490,
      latitude: 28.170540,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
      imgsrc: "https://7265-release-rr1dn-1301509296.tcb.qcloud.la/minzhu.jpg?sign=f942d736de05279e603c33d2869bdc3c&t=1583934978",
    },
    {
      id: 'c7',
      name: '物理与电子学院',
      longitude: 112.945730,
      latitude: 28.146980,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
      imgsrc: "https://7265-release-rr1dn-1301509296.tcb.qcloud.la/dizhi.jpg?sign=fe9de99f5849b1837eab48091cf8d877&t=1583935031",
    },
    {
      id: 'c8',
      name: '化学化工学院',
      longitude: 112.946609,
      latitude: 28.147697,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'c9',
      name: '机电工程学院',
      longitude: 112.940580,
      latitude: 28.147450,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'c10',
      name: '综合实验楼',
      longitude: 112.939850,
      latitude: 28.150380,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'c11',
      name: '科教南楼',
      longitude: 112.928533,
      latitude: 28.170156,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'c12',
      name: '科教北楼',
      longitude: 112.928350,
      latitude: 28.171270,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'c13',
      name: '科技楼',
      longitude: 112.930800,
      latitude: 28.167640,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
  ]
}]
var dayindian = [{
  head: '打印店',
  content: [{
      id: 'd1',
      name: '佳美图文',
      longitude: 112.936355,
      latitude: 28.156755,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'd2',
      name: '云印社1',
      longitude: 112.935285,
      latitude: 28.159713,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'd3',
      name: '云印社2',
      longitude: 112.936390,
      latitude: 28.156670,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'd4',
      name: '万佳图文',
      longitude: 112.935853,
      latitude: 28.157060,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
		},
		{
			id: 'd5',
			name: '新晨文印',
			longitude: 112.936615,
			latitude: 28.159164,
			iconPath: '../../img/location.png',
			width: 27, height: 40,
		},
		{
			id: 'd6',
			name: '南艺图文',
      longitude: 112.935360,
      latitude: 28.157539, 
			iconPath: '../../img/location.png',
			width: 27, height: 40,
		},
    {
      id: 'd7',
      name: '矿山复印社',
      longitude: 112.937218,
      latitude: 28.158916,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
  ]
}]
var kuaididian = [{
  head: '快递点',
  content: [{
      id: 'e1',
      name: '菜鸟驿站 (24栋旁)',
      longitude: 112.936707,
      latitude: 28.158988,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'e2',
      name: '菜鸟驿站 (极速网吧)',
      longitude: 112.937497,
      latitude: 28.158355,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
		},
		{
			id: 'e3',
			name: '妈妈驿站（7栋）',
			longitude: 112.935801,
			latitude: 28.157052,
			iconPath: '../../img/location.png',
			width: 27, height: 40,
		},
		{
			id: 'e4',
			name: '妈妈驿站（12栋）',
			longitude: 112.935550,
			latitude: 28.157140,
			iconPath: '../../img/location.png',
			width: 27, height: 40,
		},
    {
      id: 'e5',
      name: '邮政 (南校教工16栋)',
      longitude: 112.936485,
      latitude: 28.162159,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'e6',
      name: '韵达快递 (南3舍109室)',
      longitude: 112.938014,
      latitude: 28.159235,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'e7',
      name: '韵达快递 (升华7栋)',
      longitude: 112.935734,
      latitude: 28.157069,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
		},
    {
      id: 'e8',
      name: '韵达快递（小栈之家)',
      longitude: 112.936855,
      latitude: 28.15888,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
		{
			id: 'e9',
			name: '申通快递',
			longitude: 112.937580,
			latitude: 28.158170,
			iconPath: '../../img/location.png',
			width: 27, height: 40,
		},
		{
			id: 'e10',
			name: '顺丰快递（24栋旁）',
			longitude: 112.936707,
			latitude: 28.158988,
			iconPath: '../../img/location.png',
			width: 27, height: 40,
    }, {
      id: 'e14',
      name: ' 顺丰快递(八食堂旁)',
      longitude: 112.937441,
      latitude: 28.156910,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    }, 
		{
			id: 'e11',
			name: '天天快递（24栋旁）',
			longitude: 112.936655,
			latitude: 28.159187,
			iconPath: '../../img/location.png',
			width: 27, height: 40,
		},
		{
			id: 'e12',
			name: '乐派服务站（12栋）',
			longitude: 112.935120,
			latitude: 28.157543,
			iconPath: '../../img/location.png',
			width: 27, height: 40,
		},
		{
			id: 'e13',
			name: '南一舍东头快递点',
			longitude: 112.938311,
			latitude: 28.159828,
			iconPath: '../../img/location.png',
			width: 27, height: 40,
    },
  ]
}]
var yewu = [{
  head: '业务办理点',
  content: [{
      id: 'f1',
      name: '通信业务办理点',
      longitude: 112.935371,
      latitude: 28.158097, 
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'f2',
      name: '电费充值处',
      longitude: 112.935449,  
      latitude: 28.158007,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'f3',
      name: '空调办理点',
      longitude: 112.93507,
      latitude: 28.157741,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'f4',
      name: '火车票代售点',
      longitude: 112.936200,
      latitude: 28.157390,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
  ]
}]
var shiwuzhaoling = [{
  head: '失物招领处',
  content: [{
      id: 'g1',
      name: '南校区升华6栋保安室',
      longitude: 112.935982,
      latitude: 28.156736,
      iconPath: '../../img/location.png',
      width: 27, height: 40,    },
    {
      id: 'g2',
      name: '新校区B座119',
      longitude: 112.942069,
      latitude: 28.149825,
      iconPath: '../../img/location.png',
      width: 27, height: 40,    },
    {
      id: 'g3',
      name: '校本部门口雷锋岗岗亭',
      longitude: 112.932297,
      latitude: 28.164070,
      iconPath: '../../img/location.png',
      width: 27, height: 40,    },
    {
      id: 'g4',
      name: '南校区电动车丢失(南校保安室)',
      longitude: 112.935821,
      latitude: 28.158059,
      iconPath: '../../img/location.png',
      width: 27, height: 40,    },
    {
      id: 'g5',
      name: '新校区电动车丢失(A座保安室)',
      longitude: 112.941643,
      latitude: 28.150583,
      iconPath: '../../img/location.png',
      width: 27, height: 40,    }
  ]
}]
var tiyuchangguan = [{
  head: '体育场馆',
  content: [{
      id: 'h1',
      name: '乒羽馆',
      longitude: 112.937930,
      latitude: 28.158820,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'h2',
      name: '台球馆',
      longitude: 112.937891,
      latitude: 28.158736,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'h3',
      name: '南校区体育场',
      longitude: 112.938738,
      latitude: 28.160586,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'h4',
      name: '南校区足球场',
      longitude: 112.938703,
      latitude: 28.160718,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'h5',
      name: '南校区篮球场',
      longitude: 112.937524,
      latitude: 28.160095,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'h6',
      name: '新校区排球场',
      longitude: 112.933668,
      latitude: 28.154474,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'h7',
      name: '鸟巢体育场',
      longitude: 112.934189,
      latitude: 28.153191,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'h8',
      name: '新校区篮球场',
      longitude: 112.934052,
      latitude: 28.155117,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'h9',
      name: '新校区网球场',
      longitude: 112.933662,
      latitude: 28.155895,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    }
  ]
}]
var yiliaodian = [{
  head: '医疗点',
  content: [{
      id: 'i1',
      name: '校医院门诊部',
      longitude: 112.936240,
      latitude: 28.157880,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'i2',
      name: '南校区校医院',
      longitude: 112.939200,
      latitude: 28.161520,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'i3',
      name: '本部校医院',
      longitude: 112.932070,
      latitude: 28.171920,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    }
  ]
}]
var tushuguan = [{
  head: '图书馆',
  content: [{
      id: 'j1',
      name: '新校区图书馆',
      longitude: 112.944477,
      latitude: 28.149475,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'j2',
      name: '南校区图书馆',
      longitude: 112.937576,
      latitude: 28.162352,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'j3',
      name: '本部图书馆(档案室)',
      longitude: 112.931490,
      latitude: 28.169090,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
  ]
}]
var zixishi = [{
  head: '自习室',
  content: [{
      id: 'k1',
      name: '第三教学楼(马院)',
      longitude: 112.935490,
      latitude: 28.160850,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'k2',
      name: '毓秀楼书香斋',
      longitude: 112.932331,
      latitude: 28.157910,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'k3',
      name: '新校区A座特定教室',
      longitude: 112.941643,
      latitude: 28.150583,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'k4',
      name: '新校区B座特定教室',
      longitude: 112.942069,
      latitude: 28.149825,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
		},
		{
			id: 'k5',
			name: '新校区C座特定教室',
			longitude: 112.941556,
			latitude: 28.149011,
			iconPath: '../../img/location.png',
			width: 27, height: 40,
		},
  ]
}]
var litang = [{
  head: '礼堂',
  content: [{
      id: 'l1',
      name: '南校礼堂',
      longitude: 112.937152,
      latitude: 28.163270,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'l2',
      name: '中南讲堂',
      longitude: 112.944390,
      latitude: 28.149040,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'l3',
      name: '国际报告厅',
      longitude: 112.928790,
      latitude: 28.170620,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
  ]
}]
var qita = [{
  head: '其他',
  content: [{
      id: 'm1',
      name: '校园书店',
      longitude: 112.935468,
      latitude: 28.157384,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'm2',
      name: '弘道书店',
      longitude: 112.931960,
      latitude: 28.163330,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'm3',
      name: '毓秀楼(素质教育大楼)',
      longitude: 112.932331,
      latitude: 28.157910,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'm4',
      name: '青年街',
      longitude: 112.932370,
      latitude: 28.162220,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'm5',
      name: '大学生成长辅导室',
      longitude: 112.935946,
      latitude: 28.158339,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
    {
      id: 'm6',
      name: '南校治安执勤点',
      longitude: 112.935821,
      latitude: 28.158059,
      iconPath: '../../img/location.png',
      width: 27, height: 40,
    },
  ]
}]

var yiyuan = [{
  head: '定点医院',
  content: [{
      id: 'n1',
      name: '长沙市公共卫生救治医院',
      longitude: 113.007619,
      latitude: 28.302902,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    
    },
    {
      id: 'n2',
      name: '长沙县第一人民医院',
      longitude: 113.288846,
      latitude: 28.397869,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    
    },
    {
      id: 'n3',
      name: '望城区人民医院',
      longitude: 112.813890,
      latitude: 28.372000,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    
    },
    {
      id: 'n4',
      name: '浏阳市人民医院',
      longitude: 113.630569,
      latitude: 28.139177,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    
    },
    {
      id: 'n5',
      name: '宁乡市人民医院',
      longitude: 112.546885,
      latitude: 28.266113,
      iconPath: '../../img/location2.png',
      width: 27,
      height: 40,
    
    }
  ]
}]
var menzhen = [{
  head: '发热门诊',
  content: [
    {
      id: 'o1',
      name: '中南大学湘雅二医院',
      longitude: 112.993823,
      latitude: 28.186460,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o2',
      name: '湖南省人民医院(马王堆院区)',
      longitude: 113.029300,
      latitude: 28.204640,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o3',
      name: '长沙市中医医院(东院)',
      longitude: 113.009126,
      latitude: 28.193351,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o4',
      name: '湖南旺旺医院',
      longitude: 113.032330,
      latitude: 28.183135,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o5',
      name: '湖南省人民医院(天心阁院区)',
      longitude: 112.981815,
      latitude: 28.190463,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o6',
      name: '长沙市第三医院',
      longitude: 112.977770,
      latitude: 28.175727,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o7',
      name: '长沙融城医院',
      longitude: 112.985330,
      latitude: 28.017100,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o8',
      name: '中南大学湘雅三医院',
      longitude: 112.945534,
      latitude: 28.220068,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o9',
      name: '湖南省中医药研究院附属医院',
      longitude: 112.949342,
      latitude: 28.195530,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o10',
      name: '长沙市第四医院',
      longitude: 112.949825,
      latitude: 28.194280,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o11',
      name: '湖南航天医院',
      longitude: 112.902056,
      latitude: 28.206457,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o12',
      name: '长沙长好医院',
      longitude: 112.904789,
      latitude: 28.133094,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o13',
      name: '中南大学湘雅医院',
      longitude: 112.984940,
      latitude: 28.212003,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o14',
      name: '湖南省妇幼保健院',
      longitude: 112.983430,
      latitude: 28.208064,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o15',
      name: '湖南中医药大学第二附属医院',
      longitude: 112.980946,
      latitude: 28.203367,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o16',
      name: '长沙市第一医院',
      longitude: 112.981720,
      latitude: 28.204430,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o17',
      name: '湖南省脑科医院',
      longitude: 112.985971,
      latitude: 28.155176,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o18',
      name: '湖南省儿童医院',
      longitude: 112.988440,
      latitude: 28.173370,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o19',
      name: '湖南中医药大学第一附属医院',
      longitude: 112.995669,
      latitude: 28.165096,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o20',
      name: '长沙市中心医院',
      longitude: 112.998556,
      latitude: 28.142469,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o21',
      name: '长沙县第一人民医院',
      longitude: 113.288846,
      latitude: 28.397869,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o22',
      name: '长沙县第二人民医院',
      longitude: 113.110657,
      latitude: 28.182668,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o23',
      name: '长沙县星沙医院',
      longitude: 113.089140,
      latitude: 28.245880,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o24',
      name: '长沙县妇幼保健院',
      longitude: 113.126184,
      latitude: 28.244083,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o25',
      name: '长沙县中医院',
      longitude: 113.113890,
      latitude: 28.375020,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o26',
      name: '长沙市第八医院(本部)',
      longitude: 113.086649,
      latitude: 28.235420,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o27',
      name: '望城区人民医院',
      longitude: 112.813890,
      latitude: 28.372000,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o28',
      name: '望城区桥驿镇中心卫生院',
      longitude: 112.931990,
      latitude: 28.406270,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o29',
      name: '望城区白箬铺镇中心卫生院',
      longitude: 112.755610,
      latitude: 28.200930,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o30',
      name: '望城区茶亭镇中心卫生院',
      longitude: 112.925970,
      latitude: 28.494800,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o31',
      name: '望城区靖港镇中心卫生院',
      longitude: 112.739640,
      latitude: 28.450770,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o32',
      name: '浏阳市人民医院',
      longitude: 113.630569,
      latitude: 28.139177,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o33',
      name: '浏阳市中医医院',
      longitude: 113.628993,
      latitude: 28.142893,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o34',
      name: '浏阳市集里医院',
      longitude: 113.614472,
      latitude: 28.152790,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o35',
      name: '浏阳市妇幼保健院',
      longitude: 113.627185,
      latitude: 28.149315,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o36',
      name: '浏阳市精神病医院',
      longitude: 113.633040,
      latitude: 28.128740,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o37',
      name: '浏阳市官渡镇中心卫生院',
      longitude: 113.884350,
      latitude: 28.343140,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o38',
      name: '浏阳市古港镇中心卫生院',
      longitude: 113.753056,
      latitude: 28.278481,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o39',
      name: '浏阳市镇头镇中心卫生院',
      longitude: 113.333499,
      latitude: 28.009809,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o40',
      name: '浏阳市北盛镇中心卫生院',
      longitude: 113.412380,
      latitude: 28.260140,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o41',
      name: '浏阳市永安镇中心卫生院',
      longitude: 113.287872,
      latitude: 28.211427,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o42',
      name: '宁乡市人民医院',
      longitude: 112.546885,
      latitude: 28.266113,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o43',
      name: '宁乡市中医医院',
      longitude: 112.545090,
      latitude: 28.251370,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o44',
      name: '长沙南雅医院',
      longitude: 112.540562,
      latitude: 28.254549,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o45',
      name: '宁乡市妇幼保健院',
      longitude: 112.546760,
      latitude: 28.237900,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    },
    {
      id: 'o46',
      name: '宁乡县双凫铺中心卫生院',
      longitude: 112.290810,
      latitude: 28.133100,
      iconPath: '../../img/location2.png',
      width: 27, height: 40,
    }
  ]
}]

//为数据的使用留好接口
module.exports = {
  init: init,
  sushe: sushe,
  shitang: shitang,
  jiaoxuelou: jiaoxuelou,
  dayindian: dayindian,
  kuaididian: kuaididian,
  yewu: yewu,
  shiwuzhaoling: shiwuzhaoling,
  tiyuchangguan: tiyuchangguan,
  yiliaodian: yiliaodian,
  zixishi: zixishi,
  tushuguan: tushuguan,
  litang: litang,
  qita: qita,
  menzhen:menzhen,
  yiyuan:yiyuan
}