import React from "react";
import Card from "./Card";
import DateDisplay from "../DateDisplay";
import TimeDisplay from "../TimeDisplay";

const RentalCard = props => {
    return(
        <Card index={props.index} 
        title="Rental Reservation" 
        text={props.dat.reservationFor.name}
        color={props.color.Rental}
        updateFunc={props.updateFunc}>
            <p><strong>Provider:</strong> {props.dat.provider.name}</p>
            <p><strong>Pickup:</strong> <DateDisplay date={props.dat.pickupTime} /> at <TimeDisplay date={props.dat.pickupTime} /></p>
        </Card>
    );
}

export default RentalCard;