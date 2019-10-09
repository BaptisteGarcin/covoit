import React from "react";
import './Passengers.scss'
import shortid from "shortid";

export default class Passengers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            passengers: ["fedy salah", "florian pires", "lucille moise", "florian leblanc", "baptiste garcin"],
            selectedPassengers: new Map()
        };
    }

    handleClick(name) {
        //TODO : enlarge radio button to the div
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
                  return <div className="passenger" key={shortid.generate()} onClick={() => this.handleClick(value)}>
                      <div className="flexRow">
                          <p>{value}</p>
                      </div>
                      <div className="flexRow">
                        <input
                            type="checkbox"
                            name="passenger"
                            value={value}
                            checked={this.state.selectedPassengers.get(value) ? this.state.selectedPassengers.get(value) : false}
                            onChange={(e) => this.handleChange(e)}
                        />
                      </div>
                  </div>
                })}
            </div>
        );
    }
}
