import React from "react";
import Card from "./Card";
import DateDisplay from "../DateDisplay";
import TimeDisplay from "../TimeDisplay";

const FoodCard = props => {
    return(
        <Card index={props.index} 
        title="Restaurant Reservation" 
        text={props.dat.reservationFor.name}
        color={props.color.Food}
        updateFunc={props.updateFunc}>
            <p><strong>Location:</strong> {props.dat.reservationFor.address}</p>
            <p><strong>When:</strong> <DateDisplay date={props.dat.startTime} /> at <TimeDisplay date={props.dat.startTime} /></p>
        </Card>
    );
}

export default FoodCard;