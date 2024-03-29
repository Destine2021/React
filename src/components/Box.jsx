import React from "react";

class Box extends React.Component {

  render() {
    let slider = null;
    if (this.props.icon != 'local_drink'){
      slider = <input type="range" step={this.props.unit!="steps"?1:1000} min={this.props.min} max={this.props.max} onChange={this.props.onChange} value={this.props.value}></input>
  } 

    
    return (
      <div id="origine"className="box col-sm-3 col-6">
        <span
          className="material-icons "
          style={{fontSize: 100, color: this.props.color}}
        >
          {this.props.icon}
        </span>
        <p>
          {this.props.value}
          <br />
          {this.props.unit}
        </p>
        {slider}
      </div>
    );
  }
}
export default Box;
        