import React from "react";
import "./App.css";
import Box from "./components/Box";
import "./styles/global.css";


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

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          {/*<water/>*/}
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          
          {/*<Steps/>*/}
          <Box icon="directions_walk" color="black" value={3000} unit="steps" />
          {/*<Heart/>*/}
          <Box icon="favorite" color="red" value={120} unit="bmp" />
          {/*<Heart/>*/}
          <Box icon="wb_sunny" color="yellow" value={-10} unit="°C" />

        </div>

      </div>
    );
  }
}

export default App;