import React from "react";
import { useSelector } from "react-redux";
import {
  Funnel,
  FunnelChart,
  Tooltip,
  LabelList,
} from 'recharts';

import {Grid as MuiGrid} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


  const data = [
    {
      "value": 100,
      "name": "Baseball",

    },
    {
      "value": 80,
      "name": "Basketball",
  
    },
    {
      "value": 50,
      "name": "Football",

    },
    {
      "value": 40,
      "name": "Track and Field",

    },
    {
      "value": 26,
      "name": "Golf",
  
    },
    {
      "value": 26,
      "name": "Soccer",
  
    }
  ]

  const fillArr = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#82ca9d", "#a4de6c"]
function Graph3() {
     // FOR FUTURE USE
  
  const formData = useSelector(state => state.formData.data);
  
 
     const formDataState = useSelector(state => state.gMapsDecodeData.loaded);
 


   console.log("TESTING")
    // console.log(data.forEach((el, index) => el['fill'] = fillArr[index]));
   
     const funnelData = data.map((v, index) => ({ "fill": fillArr[index], ...v}))

     function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }
    console.log(getKeyByValue(formData.sportValue, true))

 console.log(funnelData)
    // .forEach((el, index) => el['fill'] = fillArr[index])
  return (
    <div>
      <MuiGrid container direction="column" alignItems="center" style = {{marginTop: 30}}>
      <div className="divider divider-1"></div>

      <MuiGrid  item style = {{marginBottom: 10, marginTop: 20}} align= "center">
          <Typography variant="h5">
          So a favorite sport of yours is {getKeyByValue(formData.sportValue, true)}? </Typography>
        </MuiGrid>
        <MuiGrid  item style = {{marginBottom: 10}} align= "center">
          <Typography style = {{fontSize: 14}}>
          Your choice stacking up (literally) with the rest...</Typography>
        </MuiGrid>
      <MuiGrid  item style = {{marginTop: 5, marginBottom: 10}}>
          <FunnelChart width={370} height={370}>
      <Tooltip />
      <Funnel
        dataKey="value"
        data={funnelData}
        isAnimationActive
      >
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
      </Funnel>
    </FunnelChart>
    </MuiGrid>
    <MuiGrid  item style = {{marginBottom: 10, marginTop: 10}} align= "center">
          <Typography style = {{fontSize: 13}}>
          Data Last Updated: 10-05-2021 </Typography>
        </MuiGrid>
    <MuiGrid  item style = {{marginBottom: 15, marginTop: 20}} align= "center">
          <Typography style = {{fontSize: 14}}>
          Pretty neat right? I have other projects too! If you'd like to see more, go to my... </Typography>
        </MuiGrid>
        <Link to = "/portfolio">
                    <button
                      className="button button-lg button-primary"
                      data-amplify-analytics-on='click'
                      data-amplify-analytics-name='see_more_button'
                      data-amplify-analytics-attrs='attr1:attr1_value,attr2:attr2_value' >
                      <span className="wave"></span>
                    
                      Portfolio
              

                    </button>
                    </Link>
                    <button className="button button-lg button-light" >
                
                        <a target="_blank" href="https://michaelangrivera.com" rel="noopener noreferrer" className="text text-primary">Follow Me</a>
                
                    </button>
              
      </MuiGrid>
  
    </div>
  );
}

export default Graph3;