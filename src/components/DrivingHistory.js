import React from "react";
import shortid from 'shortid';
import moment from 'moment';
import 'moment/locale/fr'

import './DrivingHistory.scss';

export default class DrivingHistory extends React.Component {
    render() {
        return (
            <div style={{overflowX: 'auto'}}>
            <table>
                <tbody>
                    <tr>
                        <th>Driver</th>
                        <th>Passengers</th>
                        <th>Date</th>
                    </tr>
                    {this.props.covoits.map((covoit, index) => {
                      return <tr key={shortid.generate()}>
                          <td>{covoit.driver}</td>
                          <td>
                          {covoit.passengers.map((passenger, index) => {
                             return <p key={shortid.generate()}>{passenger}</p>
                          })}
                          </td>
                          <td>{moment(covoit.date).locale('fr').format('dddd LL')}</td>
                      </tr>
                    })}
                </tbody>
            </table>
            </div>
        );
    }
}
