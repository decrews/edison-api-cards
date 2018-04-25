import React from "react";
import Card from "./Card";
import DateDisplay from "../DateDisplay";
import TimeDisplay from "../TimeDisplay";

const LodgingCard = props => {
    return(
        <Card index={props.index} 
        title="Lodging Reservation" 
        text={props.dat.reservationFor.name}
        color={props.color.Lodging}
        updateFunc={props.updateFunc}>
            <p><strong>Check In:</strong> <DateDisplay date={props.dat.checkinTime} /> at <TimeDisplay date={props.dat.checkinTime}/></p>
        </Card>
    );
}

export default LodgingCard;