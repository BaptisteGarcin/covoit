import React from "react";

export default class DatePicker extends React.Component {
    render() {
        return (
            <div className="flexRow">
                <input type="date" onChange={event => this.props.onChange(event.target.value) }/>
            </div>
        );
    }
}
