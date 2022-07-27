import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, RadialChart} from 'react-vis';
import moment from 'moment'

const getTotalForYear = (expenses, year) => {
    let total = 0
    let exInYear = expenses.filter((expense) => {
        return expense.Date === year
    } );
    exInYear.forEach( (ex) => {
        console.log(ex)
        total += parseInt(ex.Value)
    })
    return total;
}
  
  export const Income = (props) => {
    let data = JSON.parse(props.data)
    let expenses = data.Companies[0].Income;
    
    const data1 = [
        {x: 2019, y: 2019103},
        {x: 2020, y: 313810},
        {x: 2021, y: 31334},
        {x: 2022, y: 535421}
      ];
      let expenses2022 = expenses.filter( (ex) => {
        return ex.Date === '2022'
    })

    let totalData =[]
    expenses2022.forEach((expense) => {
        totalData.push({
            label: expense.Name,
            angle: expense.Value
        })
    })
    const years = ['2019', '2020', '2021', '2022']
    let graphData = []
    years.forEach( (year) => {
        let y = getTotalForYear(expenses, year)
        let dataObj = {
            x: year,
            y: y
        }
        graphData.push(dataObj)
    })
    console.log(graphData)
      return (
        <>
        <XYPlot className={"expenses"} height={300} width= {500} yDomain={[0,5000000]}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis tickTotal={4} tickFormat={(d) => d}
                        title='Year'/>
            <YAxis title='Money (£)' tickFormat={(d) => d} tickLabelAngle={-90}/>
            <LineSeries data={graphData} color={'green'} />
        </XYPlot>
        <RadialChart showLabels={true} data={totalData} width={300} height={300}/>
        </>
      );
  
  }