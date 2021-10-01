import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Sector,
  Cell,
  ResponsiveContainer
} from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip as Tooltip2 } from 'recharts';

import {Grid as MuiGrid} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';

const data = [
  {
    name: 'Visitor',
    value: 400
  }, {
    name: 'Friend',
    value: 300
  }
];


const data2 = [
    {
      name: 'iPhone',
      people: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Macbook',
      people: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'PC',
      people: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Android',
      people: 2780,
      pv: 3908,
      amt: 2000,
    }
  ];

function Graph1() {
  return (
    <div>
      <MuiGrid container direction="column" alignItems="center" style = {{marginTop: 30}}>
      <div className="divider divider-1"></div>
        <MuiGrid justify="center" item>
          <Typography variant="h5">
            Strangers vs Friends</Typography>
        </MuiGrid>
        <MuiGrid justify="center" item>
          <Typography >
            Let's see who knows me here...</Typography>
        </MuiGrid>
        <MuiGrid item style = {{marginTop: 10}}>

          <PieChart width={250} height={280}>
            <Tooltip/>
            <Pie
              dataKey="value"
              startAngle={360}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#00e676"
            
              label/>
          </PieChart>

        </MuiGrid>

        <MuiGrid justify="center" item>
          <Typography >
            Let's check what devices people are using to view this</Typography>
        </MuiGrid>
        <MuiGrid item>
        <BarChart
          width={370}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          animationBegin = {6700}
        >
         
          <XAxis dataKey="name"  fill="#00e676"/>
         
          <Tooltip labelStyle = {{color: "black"}}/>
       
         
          <Bar dataKey="people" fill="#8884d8" />
        </BarChart>
        </MuiGrid>
      </MuiGrid>
    </div>
  );
}

export default Graph1;