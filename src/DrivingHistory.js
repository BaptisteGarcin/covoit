import React from "react";
import shortid from 'shortid';

import './DrivingHistory.scss';

export default class DrivingHistory extends React.Component {
    state = {
        covoits: []
    };


    componentDidMount() {
        this.props.covoits.then(covoits => this.setState({covoits: covoits}))
    }

    render() {
        return (
            <div id="mainArticleTop">
            <table>
                <tbody>
                    <tr>
                        <th>Driver</th>
                        <th>Passengers</th>
                        <th>Date</th>
                    </tr>
                    {this.state.covoits.map((covoit, index) => {
                      return <tr key={shortid.generate()}>
                          <td>{covoit.driver}</td>
                          <td>{covoit.passengers}</td>
                          <td>{covoit.date}</td>
                      </tr>
                    })}
                </tbody>
            </table>
            </div>
        );
    }
}