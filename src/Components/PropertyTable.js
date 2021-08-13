import React from 'react'
import {Table} from 'react-bootstrap';
import './PropertyTable.css';
import Moment from 'react-moment';


const Contact = ({...props}) => {
    
    let name = '';
    let phone = '';
    let email = '';

    for (let n in props.contacts) {
        console.log(n)
        if (props.contacts[n].tags.includes("PRIMARY")) {
            name = n;
            phone = props.contacts[n].phone;
            email = props.contacts[n].email;
        }
    }

    return (
        <span>
            {name} {phone} {email}
        </span>
    )
}

const PropertyRow = ({ ...props }) => {
    return (
        <tr>
        <td>{props.data.companyName}</td>
        <td><Moment format="MMMM Do YYYY">{props.data.startDate}</Moment></td>
        <td><Moment format="MMMM Do YYYY">{props.data.inclusiveEndDate}</Moment></td>
        <td>{props.data.status}</td>
        <td><Contact contacts={props.data.contacts} /></td>
      </tr>
    );
  };

const PropertyTable = ({ ...props }) => {
    let rows = props.table.map((r, i) => <PropertyRow data={r} key={i} />)
    return (
        <Table bordered hover variant="light" className="property-table">
        <thead>
          <tr>
            <th>Tenant</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Lease Status</th>
            <th>Primarry Contact</th>
          </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
      </Table>
    );
  };

  export default PropertyTable;