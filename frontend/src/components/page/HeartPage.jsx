import useStore from "../../service/store";
import "./styles.css";
import React, { FunctionComponent } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
`;


const data = [
  {
    name: "00:00",
    // uv: 4000,
    temperature: 36.3,
    amt: 2400
  },
  {
    name: "01:00",
    // uv: 4000,
    temperature: 36.5,
    amt: 2400
  },
  {
    name: "02:00",
    // uv: 4000,
    temperature: 36.3,
    amt: 2400
  },
  {
    name: "03:00",
    // uv: 4000,
    temperature: 36.2,
    amt: 2400
  },
  {
    name: "04:00",
    // uv: 4000,
    temperature: 36.7,
    amt: 2400
  },
  {
    name: "05:00",
    // uv: 4000,
    temperature: 37.0,
    amt: 2400
  },
  {
    name: "06:00",
    // uv: 4000,
    temperature: 37.3,
    amt: 2400
  },
  {
    name: "07:00",
    // uv: 4000,
    temperature: 37.5,
    amt: 2400
  },
  {
    name: "08:00",
    // uv: 4000,
    temperature: 38.0,
    amt: 2400
  },
  {
    name: "09:00",
    // uv: 4000,
    temperature: 36.6,
    amt: 2400
  },
  {
    name: "10:00",
    // uv: 4000,
    temperature: 36.8,
    amt: 2400
  },
  {
    name: "11:00",
    // uv: 4000,
    temperature: 36.4,
    amt: 2400
  },
  {
    name: "12:00",
    // uv: 4000,
    temperature: 36.2,
    amt: 2400
  },
  // {
  //   name: "13:00",
  //   // uv: 3000,
  //   temperature: 36.3,
  //   amt: 2210
  // },
  // {
  //   name: "14:00",
  //   // uv: 2000,
  //   temperature: 36.4,
  //   amt: 2290
  // },
  // {
  //   name: "15:00",
  //   // uv: 2780,
  //   temperature: 37.6,
  //   amt: 2000
  // },
  // {
  //   name: "16:00",
  //   // uv: 1890,
  //   temperature: 36.6,
  //   amt: 2181
  // },
  // {
  //   name: "17:00",
  //   // uv: 2390,
  //   temperature: 36.3,
  //   amt: 2500
  // },
  // {
  //   name: "18:00",
  //   // uv: 3490,
  //   temperature: 36.9,
  //   amt: 2100
  // },
  // {
  //   name: "19:00",
  //   // uv: 3490,
  //   temperature: 36.3,
  //   amt: 2100
  // },
  // {
  //   name: "20:00",
  //   // uv: 3490,
  //   temperature: 36.7,
  //   amt: 2100
  // },
  // {
  //   name: "21:00",
  //   // uv: 3490,
  //   temperature: 36.9,
  //   amt: 2100
  // },
  // {
  //   name: "22:00",
  //   // uv: 3490,
  //   temperature: 37.0,
  //   amt: 2100
  // },
  // {
  //   name: "23:00",
  //   // uv: 3490,
  //   temperature: 36.5,
  //   amt: 2100
  // }
];

const data2 = [ // 영유아 평균 심박수 140~160
  {
  name: "00:00",
  // uv: 4000,
  bpm: 140,
  amt: 2400
  },
  {
  name: "01:00",
  // uv: 4000,
  bpm: 143,
  amt: 2400
  },
  {
  name: "02:00",
  // uv: 4000,
  bpm: 142,
  amt: 2400
  },
  {
  name: "03:00",
  // uv: 4000,
  bpm: 145,
  amt: 2400
  },
  {
  name: "04:00",
  // uv: 4000,
  bpm: 146,
  amt: 2400
  },
  {
  name: "05:00",
  // uv: 4000,
  bpm: 144,
  amt: 2400
  },
  {
  name: "06:00",
  // uv: 4000,
  bpm: 147,
  amt: 2400
  },
  {
  name: "07:00",
  // uv: 4000,
  bpm: 143,
  amt: 2400
  },
  {
  name: "08:00",
  // uv: 4000,
  bpm: 142,
  amt: 2400
  },
  {
  name: "09:00",
  // uv: 4000,
  bpm: 145,
  amt: 2400
  },
  {
  name: "10:00",
  // uv: 4000,
  bpm: 141,
  amt: 2400
  },
  {
  name: "11:00",
  // uv: 4000,
  bpm: 140,
  amt: 2400
  },
  {
    name: "12:00",
    // uv: 4000,
    bpm: 145,
    amt: 2400
  },
  {
    name: "13:00",
    // uv: 3000,
    bpm: 148,
    amt: 2210
  },
  {
    name: "14:00",
    // uv: 2000,
    bpm: 150,
    amt: 2290
  },
  {
    name: "15:00",
    // uv: 2780,
    bpm: 153,
    amt: 2000
  },
  {
    name: "16:00",
    // uv: 1890,
    bpm: 156,
    amt: 2181
  },
  {
    name: "17:00",
    // uv: 2390,
    bpm: 135,
    amt: 2500
  },
  {
    name: "18:00",
    // uv: 3490,
    bpm: 165,
    amt: 2100
  },
  {
    name: "19:00",
    // uv: 4000,
    bpm: 150,
    amt: 2400
    },
    {
    name: "20:00",
    // uv: 4000,
    bpm: 153,
    amt: 2400
    },
    {
    name: "21:00",
    // uv: 4000,
    bpm: 157,
    amt: 2400
    },
    {
    name: "22:00",
    // uv: 4000,
    bpm: 154,
    amt: 2400
    },
    {
    name: "23:00",
    // uv: 4000,
    bpm: 150,
    amt: 2400
    }
];

const data3 = [ // 산소포화도 평균 95%, 95%이하면 저산소증 주의, 90%이하면 저산소증
  {
  name: "00:00",
  // uv: 4000,
  o2_percent: 96,
  amt: 2400
  },
  {
  name: "01:00",
  // uv: 3000,
  o2_percent: 98,
  amt: 2210
  },
  {
  name: "02:00",
  // uv: 2000,
  o2_percent: 93,
  amt: 2290
  },
  {
  name: "03:00",
  // uv: 2780,
  o2_percent: 91,
  amt: 2000
  },
  {
  name: "04:00",
  // uv: 1890,
  o2_percent: 89,
  amt: 2181
  },
  {
  name: "05:00",
  // uv: 2390,
  o2_percent: 88,
  amt: 2500
  },
  {
  name: "06:00",
  // uv: 3490,
  o2_percent: 94,
  amt: 2100
  },
  {
    name: "07:00",
    // uv: 4000,
    o2_percent: 95,
    amt: 2400
  },
  {
    name: "08:00",
    // uv: 3000,
    o2_percent: 98,
    amt: 2210
  },
  {
    name: "09:00",
    // uv: 2000,
    o2_percent: 94,
    amt: 2290
  },
  {
    name: "10:00",
    // uv: 2780,
    o2_percent: 92,
    amt: 2000
  },
  {
    name: "11:00",
    // uv: 1890,
    o2_percent: 97,
    amt: 2181
  },
  {
    name: "12:00",
    // uv: 2390,
    o2_percent: 91,
    amt: 2500
  },
  {
    name: "13:00",
    // uv: 3490,
    o2_percent: 89,
    amt: 2100
  },
  {
    name: "14:00",
    // uv: 4000,
    o2_percent: 95,
    amt: 2400
  },
  {
    name: "15:00",
    // uv: 3000,
    o2_percent: 98,
    amt: 2210
  },
  {
    name: "16:00",
    // uv: 2000,
    o2_percent: 94,
    amt: 2290
  },
  {
    name: "17:00",
    // uv: 2780,
    o2_percent: 92,
    amt: 2000
  },
  {
    name: "18:00",
    // uv: 1890,
    o2_percent: 97,
    amt: 2181
  },
  {
    name: "19:00",
    // uv: 2390,
    o2_percent: 91,
    amt: 2500
  },
  {
    name: "20:00",
    // uv: 3490,
    o2_percent: 89,
    amt: 2100
  },
  {
    name: "21:00",
    // uv: 4000,
    o2_percent: 95,
    amt: 2400
  },
  {
    name: "22:00",
    // uv: 3000,
    o2_percent: 98,
    amt: 2210
  },
  {
    name: "23:00",
    // uv: 2000,
    o2_percent: 94,
    amt: 2290
  }
];

const CustomizedDot = (props) => {
  const { cx, cy, value } = props;

  if (value < 37.0) {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="blue"
        viewBox="0 0 1024 1024"
      >
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
    );
  }

  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill="red"
      viewBox="0 0 1024 1024"
    >
      <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
    </svg>
  );
};

const CustomizedDot2 = (props) => {
  const { cx, cy, value } = props;

  if (value < 140 || value > 160) {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="red"
        viewBox="0 0 1024 1024"
      >
        <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z
" />
      </svg>
    );
  }

  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill="blue"
      viewBox="0 0 1024 1024"
    >
      <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
    </svg>
  );
};

const CustomizedDot3 = (props) => {
  const { cx, cy, value } = props;

  if (value < 95 && value >= 90) {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="orange"
        viewBox="0 0 1024 1024"
      >
        <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
      </svg>
    );
  }
  else if (value < 90) {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="red"
        viewBox="0 0 1024 1024"
      >
        <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
      </svg>
    );
  }
  
  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill="blue"
      viewBox="0 0 1024 1024"
    >
      <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
    </svg>
  );
}; 

export default function HeartPage() {
  const {heartBeat, oxygen, temperature} = useStore();

  const data_1 = [
    {
      temperature: temperature
    }
  ];

  return (
    <Container>
    <ResponsiveContainer width="100%" height="100%">
    <LineChart // 체온 차트
      width={1800}
      height={300}
      data={data_1}
      margin={{
        top: 20,
        right: 200,
        left: 200,
        bottom: 20
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis 
          label={{ value: '℃', angle: 0, position: 'top' }} 
          // type="number" 
          domain={[36, 40]}
      />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="temperature"
        stroke="#8884d8"
        dot={<CustomizedDot />}
      />
    </LineChart>
    </ResponsiveContainer>
    <br />
    <ResponsiveContainer width="100%" height="100%">
    <LineChart // 심박수 차트
      width={1800}
      height={300}
      data={data2}
      margin={{
        top: 20,
        right: 200,
        left: 200,
        bottom: 20
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis 
          dataKey="name"
      />
      <YAxis 
          label={{ value: 'bpm', offset: 8, angle: 0, position: 'top' }}
          type="number" 
          domain={[130, 170]}
          
      />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="bpm"
        stroke="#8884d8"
        dot={<CustomizedDot2 />}
      />
    </LineChart>
    </ResponsiveContainer>
    <br />
    <ResponsiveContainer width="100%" height="100%">
    <LineChart // 산소포화도 차트
      width={1800}
      height={300}
      data={data3}
      margin={{
        top: 20,
        right: 200,
        left: 200,
        bottom: 20
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis 
            label={{ value: '%', offset: 8, angle: 0, position: 'top' }}
            type="number" 
            domain={[80, 100]}
      />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="o2_percent"
        stroke="#8884d8"
        dot={<CustomizedDot3 />}
      />
    </LineChart>
    </ResponsiveContainer>
    </Container> 
  );
}

// export default HeartPage;


