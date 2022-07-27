import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';

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
  
  export const Summary = (props) => {
    let data = JSON.parse(props.data)
    console.log(data);
    let expenses = data.Companies[0].Expenses;
    let income = data.Companies[0].Income;
    
    const years = ['2019', '2020', '2021', '2022']
    let graphData = []
    let exGraphData = []
    let inGraphData = []
    years.forEach( (year) => {
        let y = getTotalForYear(expenses, year)
        let dataObj = {
            x: year,
            y: y
        }
        exGraphData.push(dataObj)
    })

    years.forEach( (year) => {
        let y = getTotalForYear(income, year)
        let dataObj = {
            x: year,
            y: y
        }
        inGraphData.push(dataObj)
    })

    for (let i in years) {
        let dataObj = {
            x: exGraphData[i].x,
            y: inGraphData[i].y - exGraphData[i].y
        }
        graphData.push(dataObj)
    }


    console.log(graphData)
      return (
        <>
        <XYPlot className={"expenses"} height={300} width= {500} yDomain={[-500000,5000000]}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis tickTotal={4} tickFormat={(d) => d}
                        title='Year'/>
            <YAxis title='Money (£)' tickFormat={(d) => d} tickLabelAngle={-90}/>
            <LineSeries data={graphData} />
        </XYPlot>
        <div style={{'float': 'right', 'padding-right':'100px' }}>
            <p >
            total profit for 2022: £{inGraphData[3].y - exGraphData[3].y}
        </p>
        <p >
            total profit for 2021: £{inGraphData[2].y - exGraphData[2].y}
        </p>
        <p >
            total profit for 2020: £{inGraphData[1].y - exGraphData[1].y}
        </p>
        <p >
            total profit for 2019: £{inGraphData[0].y - exGraphData[0].y}
        </p>
        </div>
        
        </>
      );
  
  }