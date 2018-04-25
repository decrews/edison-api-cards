import React from "react";
import DetailCard from "./DetailCard";
import DateDisplay from "../DateDisplay";
import TimeDisplay from "../TimeDisplay";

const RentalDetail = props => {
    return(
        <DetailCard index={props.index} 
        title="Rental Reservation" 
        text={props.dat.reservationFor.name}
        color={props.color.Rental}>
            <p><strong>Provider:</strong> {props.dat.provider.name}</p>
            <p><strong>Pickup:</strong> <DateDisplay date={props.dat.pickupTime}/> at <TimeDisplay date={props.dat.pickupTime} /></p>
            <p><strong>Pickup Location:</strong> {props.dat.pickupLocation.address}</p>
            <p><strong>Reservation ID:</strong> {props.dat.reservationId}</p>
            <hr/>
            <p><strong>Drop Off Location:</strong> {props.dat.dropoffLocation.address}</p>
            <p><strong>Drop Off Time:</strong> <DateDisplay date={props.dat.dropoffTime}/> at <TimeDisplay date={props.dat.dropoffTime}/></p>
        </DetailCard>
    );
}

export default RentalDetail;