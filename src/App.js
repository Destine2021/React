import React from "react";
import "./App.css";
import Box from "./components/Box";
import "./styles/global.css";

const waterMin = 1.5
const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepMin = 0
const stepMax = 50000
class App extends React.Component {

  constructor() {
    super();

    this.state = {  // Ne pas oublier "this" !
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,

    };
  };

  onHeartChange = (e) => {
    this.setState({ heart: e.target.value }, this.calculateWater)
   };
   onStepsChange = (e) => {
    this.setState({ steps: e.target.value }, this.calculateWater)
   };
   onTemperatureChange = (e) => {
    this.setState({ temperature: e.target.value }, this.calculateWater)
   };

  calculateWater = () => {
    let waterLevel = 1.5;
    if (this.state.temp > 20) {
      waterLevel = waterLevel + (this.state.temp - 20) * 0.02;
    }
    if (this.state.heart > 120) {
      waterLevel = waterLevel + (this.state.heart - 120) * 0.0008;
    }
    if (this.state.steps > 10000) {
      waterLevel = waterLevel + (this.state.steps - 10000) * 0.00002;
    }
    this.setState({ water: waterLevel });
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          {/*<water/>*/}
          <Box icon="local_drink" color="#3A85FF"   unit="L" value={this.state.water} />
          {/*<Steps/>*/}
          <Box icon="directions_walk" color="black"  unit="steps" value= {this.state.steps}  min = {stepMin} max = {stepMax} onChange = {this.onStepsChange} />
          {/*<Heart/>*/}
          <Box icon="favorite" color="red"  unit="bmp" value= {this.state.heart}   min = {heartMin} max = {heartMax} onChange = {this.onHeartChange}  />
          {/*<Température/>*/}
          <Box icon="wb_sunny" color="yellow" unit="°C"  value= {this.state.temperature}   min = {tempMin} max = {tempMax} onChange = {this.onTemperatureChange} />

        </div>

      </div>
    );
  }
}

export default App;