import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend

} from 'recharts';

import {useSelector} from 'react-redux';

import {Grid as MuiGrid} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';

import Prompt from '../graphPrompt';


const data2 = [
  { name: 'Pizza', value: 400 },
  { name: 'Burger', value: 300 },
  { name: 'Tea', value: 300 },
  { name: 'Home Cookin', value: 200 },
];

const COLORS = ['#00e676', '#db4737'];

const COLORS2 = ['#bfa721', '#db4737', '#00C49F', '#768dcf'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Graph1() {
  const foodAnswerState = useSelector( state => state.formData.data )
  console.log("testing")
  console.log(foodAnswerState)

  const foodPrompt = Prompt( foodAnswerState,  'foodPrompt')
  
  const responseWhoData = useSelector(state => state.s3Data.data)

  return (
    <div>
      <MuiGrid container justifyContent = "center" direction="column" alignItems="center" style = {{marginTop: 30}}>
      <div className="divider divider-1"></div>
        <MuiGrid  item>
          <Typography variant="h5">
            Strangers vs Friends</Typography>
        </MuiGrid>
        <MuiGrid  item>
          <Typography align= "center" >
            Let's see who knows me here...</Typography>
        </MuiGrid>
        <MuiGrid item style = {{marginTop: 10}}>

          <PieChart width={250} height={280}>
            <Tooltip/>
            <Pie
              dataKey="value"
              startAngle={360}
              endAngle={0}
              data={responseWhoData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill  = "#00e676"
            
              label/>
       
          
          </PieChart>

        </MuiGrid>
        <MuiGrid style = {{maxWidth: 300}} item>
       
            {foodPrompt}
         
        </MuiGrid>
        <MuiGrid item style = {{marginTop: 10}}>
        <PieChart width={250} height={280}>
          <Pie
            data={data2}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            
            dataKey="value"
          >
            {data2.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS2[index]} />
            ))}
          </Pie>
          <Tooltip/>
<Legend/>
        </PieChart>
    </MuiGrid>
        </MuiGrid>

    </div>
  );
}

export default Graph1;