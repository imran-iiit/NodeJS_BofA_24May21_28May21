import React, { Component } from "react";
import WeatherList from "../containers/Weather_list";
import SearchBar from "../containers/SearchBar";

export default class MainApp extends Component{
    render(){
        return(
            <div>
                <SearchBar/>
                <WeatherList/>
            </div>
        )
    }
}