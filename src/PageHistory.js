import React from "react";
import DrivingHistory from "./DrivingHistory";

export default class PageHistory extends React.Component {
    render() {
        return (
            <DrivingHistory covoits={this.props.covoits}/>
        );
    }
}
