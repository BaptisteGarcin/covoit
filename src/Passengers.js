import React from "react";
import './Passengers.scss'

export default class Passengers extends React.Component {
    state = {
        passengers: ["Fedy", "Flo", "Lucille", "Spencer", "Baptiste"],
        selectedPassengers : []
    };


    handleClick(name) {
        console.log(name)
        //this.props.onChange(this.props.id, val);
    }

    render() {
        return (
            <div className="flexRow">
                {this.state.passengers.map((value, index) =>{
                  return <div className="passenger" onClick={() => this.handleClick(value)}>
                      <p>{value}</p>
                      <input type="checkbox" name="passenger" value={value}/>
                  </div>
                })}
            </div>
        );
    }
}
