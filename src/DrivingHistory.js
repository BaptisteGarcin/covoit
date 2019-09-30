import React from "react";
import './DrivingHistory.scss';

export default class DrivingHistory extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Driver</th>
                        <th>Passengers</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>Baptiste Garcin</td>
                        <td>[Lucille, Spencer, Fedy, Flo]</td>
                        <td>Jeudi 23 Septembre</td>
                    </tr>
                    <tr>
                        <td>Baptiste Garcin</td>
                        <td>[Lucille, Spencer, Fedy, Flo]</td>
                        <td>Jeudi 23 Septembre</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
