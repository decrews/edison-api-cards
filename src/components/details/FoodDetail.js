import React from "react";
import DetailCard from "./DetailCard";
import DateDisplay from "../DateDisplay";
import TimeDisplay from "../TimeDisplay";
import CardButton from "../CardButton";

const FoodDetail = props => {
    return(
        <DetailCard index={props.index} 
        title="Restaurant Reservation" 
        text={props.dat.reservationFor.name}
        color={props.color.Food}>
            <p><strong>Location:</strong> {props.dat.reservationFor.address}</p>
            <p><strong>Phone:</strong> {props.dat.reservationFor.telephone}</p>
            <p><strong>When:</strong> <DateDisplay date={props.dat.startTime} /> at <TimeDisplay date={props.dat.startTime} /></p>
            <hr />
            <CardButton url={props.dat.provider.url} text="View on Opentable" /> 
        </DetailCard>
    );
}

export default FoodDetail;