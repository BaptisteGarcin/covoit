import React from "react";
import './Passengers.scss'

export default class Passengers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            passengers: ["Fedy", "Flo", "Lucille", "Spencer", "Baptiste"],
            selectedPassengers: new Map()
        };
    }



    handleClick(name) {
        console.log(name)
        //this.props.onChange(this.props.id, val);
    }

    handleChange(e) {
        const item = e.target.value;
        const isChecked = e.target.checked;
        this.setState(prevState => ({selectedPassengers: prevState.selectedPassengers.set(item, isChecked)}),
            () => this.props.onChange(this.state.selectedPassengers));
    }

    render() {
        return (
            <div className="flexRow">
                {this.state.passengers.map((value, index) =>{
                  return <div className="passenger" onClick={() => this.handleClick(value)}>
                      <p>{value}</p>
                      <input
                          type="checkbox"
                          name="passenger"
                          value={value}
                          checked={this.state.selectedPassengers.get(value) ? this.state.selectedPassengers.get(value) : false}
                          onChange={(e) => this.handleChange(e)}
                      />
                  </div>
                })}
            </div>
        );
    }
}