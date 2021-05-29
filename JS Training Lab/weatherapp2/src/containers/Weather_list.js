import _ from 'lodash'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Sparklines ,SparklinesLine} from 'react-sparklines'
import Chart from '../components/chart'

class WeatherList extends Component {

renderWeather(cityData){
const temps= cityData.list.map(weather => weather.main.temp)
const pressures= cityData.list.map(weather => weather.main.pressure)
const humidity= cityData.list.map(weather => weather.main.humidity)


    return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color='orange' units='K'/></td>
                <td><Chart data={pressures} color='red' units='hPa'/></td>
                <td><Chart data={humidity} color='black' units='%'/></td>
            </tr>

        // <tr key ={cityData.city.name}>
        //     <td> 
                
        //     {cityData.city.name}    
        //     </td>
        //     <td>
        //     <Sparklines height={120} width={180} data={temps}>
        //             <SparklinesLine color='red'/>
        //         </Sparklines>
        //     </td>
        //     <td>
        //     <Sparklines height={120} width={180} data={pressures}>
        //             <SparklinesLine color='red'/>
        //         </Sparklines>
        //     </td>
        //     <td>
        //     <Sparklines height={120} width={180} data={humidity}>
        //             <SparklinesLine color='red'/>
        //         </Sparklines>
        //     </td>
        // </tr>
    )
}

    render() {
        return(
            <div>
                 <table className="table table-hover"> 
                 <thead>
                     <tr>
                         <th>City</th>
                         <th>Temperature</th>
                         <th>Pressure (hPa)</th>
                         <th>Humidity (%)</th>
                     </tr>
                 </thead>
                 <tbody>
                     {this.props.weather.map(this.renderWeather)}
                 </tbody>

                 </table>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        weather:state.weather
    }
}
export default connect(mapStateToProps)(WeatherList)