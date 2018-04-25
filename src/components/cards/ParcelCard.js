import React from "react";
import Card from "./Card";
import DateDisplay from "../DateDisplay"

const ParcelCard = props => {
    return(
        <Card index={props.index} 
        title="Package Delivery" 
        text={props.dat.itemShipped[0].name} 
        img={props.dat.itemShipped[0].image}
        color={props.color.Parcel}
        updateFunc={props.updateFunc}>
            <p><strong>Provider:</strong> {props.dat.provider.name}</p>
            <p><strong>Tracking number:</strong> {props.dat.trackingNumber}</p>
            <p><strong>Estimated Arrival:</strong> <DateDisplay date={props.dat.expectedArrivalUntil} /></p>
        </Card>
    );
}

export default ParcelCard;