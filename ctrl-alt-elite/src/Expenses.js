import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';

  
  export const Expenses = (props) => {
    console.log(props.data)
    const data = [
        {x: 2019, y: 2019103},
        {x: 2020, y: 313810},
        {x: 2021, y: 31334},
        {x: 2022, y: 535421}
      ];
      return (
        <XYPlot className={"expenses"} height={300} width= {300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={data} />
        </XYPlot>
      );
  
  }