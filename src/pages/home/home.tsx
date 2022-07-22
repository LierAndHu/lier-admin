import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { Col, Row } from 'antd'
import './home.less'

const Home: React.FC = () => {
  const option1 = {
    title: {
      text: 'Stacked Line',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  }
  const option2 = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      bottom: 'bottom',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search ' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
          { value: 300, name: 'Video1 Ads' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
    color: [
      '#33ccff',
      '#7EC0EE',
      '#AB82FF',
      '#FF82AB',
      '#FFDAB9',
      '#9AFF9A',
      '#fc8452',
      '#9a60b4',
      '#ea7ccc',
    ],
  }
  const option3 = {
    color: ['#67F9D8', '#56A3F1', '#56A3F1', '#FF917C'],
    title: {
      text: '',
    },
    legend: {
      left: 'left',
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 },
      ],
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4000, 10000, 26000, 28000, 38000, 16000],
            name: 'Allocated Budget',
            areaStyle: {
              color: 'rgba(103, 249, 216, 1)',
            },
          },
          {
            value: [5000, 10000, 20000, 35000, 38000, 16000],
            name: 'Actual Spending',
            areaStyle: {
              color: 'rgba(86, 164, 242, 1)',
            },
          },
        ],
      },
    ],
  }
  const option4 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Email',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
    ],
  }

  return (
    <div className='home'>
      <ReactEcharts option={option1} className='broken'></ReactEcharts>
      <Row>
        <Col span={8} className='homelist'>
          <ReactEcharts option={option2} className='homelistpie'></ReactEcharts>
        </Col>
        <Col span={8}>
          <ReactEcharts option={option3} className='homelistpie'></ReactEcharts>
        </Col>
        <Col span={8}>
          <ReactEcharts option={option4} className='homelistpie'></ReactEcharts>
        </Col>
      </Row>
    </div>
  )
}

export default Home
