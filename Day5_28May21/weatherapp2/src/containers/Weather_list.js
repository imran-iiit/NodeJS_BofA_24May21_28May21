 
import React,{Component} from 'react'
import {connect} from 'react-redux'
class WeatherList extends Component {

renderWeather(cityData){
    return (
        <tr>
            <td>
                {cityData.city.name}
            </td>
        </tr>
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