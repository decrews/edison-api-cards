import React from "react";
import DetailCard from "./DetailCard";
import DateDisplay from "../DateDisplay";
import TimeDisplay from "../TimeDisplay";

const LodgingDetail = props => {
    return(
        <DetailCard index={props.index} 
        title="Lodging Reservation" 
        text={props.dat.reservationFor.name}
        color={props.color.Lodging}>
            <p><strong>Check In:</strong> <DateDisplay date={props.dat.checkinTime} /> at <TimeDisplay date={props.dat.checkinTime}/></p>
            <p><strong>Address:</strong> {props.dat.reservationFor.address}</p>
            <p><strong>Phone:</strong> {props.dat.reservationFor.telephone}</p>
            <p><strong>Number of nights:</strong> {props.dat.reservationFor["x-rooms"]}</p>
            <p><strong>Check Out:</strong> <DateDisplay date={props.dat.checkoutTime} /> at <TimeDisplay date={props.dat.checkoutTime}/></p>
            <hr/>
            <p><strong>Reservation ID:</strong> {props.dat.reservationId}</p>


        </DetailCard>
    );
}

export default LodgingDetail;