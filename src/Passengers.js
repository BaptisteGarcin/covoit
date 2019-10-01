import React from "react";
import './Passengers.scss'

export default class Passengers extends React.Component {
    render() {
        return (
            <div className="flexRow">
                <div className="passenger">
                    <p>Fedy</p>
                    <input type="radio" name="passenger" value="Bike"/>
                </div>
                <div className="passenger">
                    <p>Flo</p>
                    <input type="radio" name="passenger" value="Bike"/>
                </div>
                <div className="passenger">
                    <p>Lucille</p>
                    <input type="radio" name="passenger" value="Bike"/>
                </div>
                <div className="passenger">
                    <p>Spencer</p>
                    <input type="radio" name="passenger" value="Bike"/>
                </div>
                <div className="passenger">
                    <p>Baptiste</p>
                    <input type="radio" name="passenger" value="Bike"/>
                </div>
            </div>
        );
    }
}
