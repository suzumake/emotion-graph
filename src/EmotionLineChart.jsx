import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { datetime: '2024-07-10 10:00', joy: 0.7, anger: 0.1, sadness: -0.2 },
  { datetime: '2024-07-10 10:15', joy: 0.5, anger: 0.0, sadness: -0.1 },
  { datetime: '2024-07-10 10:30', joy: 0.2, anger: 0.0, sadness: -0.5 },
  { datetime: '2024-07-10 10:45', joy: 0.9, anger: -0.1, sadness: -0.3 },
  { datetime: '2024-07-10 11:00', joy: 0.9, anger: -0.1, sadness: -0.3 },
  { datetime: '2024-07-10 11:15', joy: 2, anger: -0.9, sadness: 0.6 },
  { datetime: '2024-07-10 11:30', joy: -0.5, anger: -0.1, sadness: 0.9 },
  { datetime: '2024-07-10 11:45', joy: -0.9, anger: 1, sadness: -0.7 },
];

export default function EmotionLineChart() {
  return (
    <div style={{ width: '100%', height: 600 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="10 10" />
          <XAxis dataKey="datetime" />
          <YAxis domain={[-1, 3]} tickCount={5}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="joy" name="喜び" stroke="#82ca9d" strokeWidth={2} dot={true} />
          <Line type="monotone" dataKey="anger" name="怒り" stroke="#ff7300" strokeWidth={2} dot={true} />
          <Line type="monotone" dataKey="sadness" name="悲しみ" stroke="#8884d8" strokeWidth={2} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
