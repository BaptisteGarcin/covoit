import React from "react";
import './Passengers.scss'

export default class Passengers extends React.Component {
    render() {
        return (
            <div className="flexRow">
                <div className="passenger">
                    Fedy
                    <input type="checkbox" name="vehicle" value="Bike"/>
                </div>
                <div className="passenger">
                    Flo
                    <input type="checkbox" name="vehicle" value="Bike"/>
                </div>
                <div className="passenger">
                    Lucille
                    <input type="checkbox" name="vehicle" value="Bike"/>
                </div>
                <div className="passenger">
                    Spencer
                    <input type="checkbox" name="vehicle" value="Bike"/>
                </div>
                <div className="passenger">
                    Baptiste
                    <input type="checkbox" name="vehicle" value="Bike"/>
                </div>
            </div>
        );
    }
}
