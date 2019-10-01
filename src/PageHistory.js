import React from "react";
import DrivingHistory from "./DrivingHistory";

export default class PageHistory extends React.Component {
    render() {
        return (
            <div>
                <DrivingHistory covoits={this.props.covoits}/>
            </div>
        );
    }
}
