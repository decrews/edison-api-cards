import React from "react";
import DetailCard from "./DetailCard";
import DateDisplay from "../DateDisplay";
import CardButton from "../CardButton";

const ParcelDetail = props => {
    return(
        <DetailCard index={props.index} 
        title="Package Delivery" 
        text={props.dat.itemShipped[0].name} 
        img={props.dat.itemShipped[0].image}
        color={props.color.Parcel}>
            <p><strong>Provider:</strong> {props.dat.provider.name}</p>
            <p><strong>Tracking Number:</strong> {props.dat.trackingNumber}</p>
            <p><strong>Estimated Arrival:</strong> <DateDisplay date={props.dat.expectedArrivalUntil} /></p>
            <hr />
            <p><strong>From Order:</strong> {props.dat.partOfOrder.orderNumber}</p>
            <p><strong>Price:</strong> {props.dat.partOfOrder.acceptedOffer[0].price}</p>
            <hr />
            <CardButton url={props.dat.trackingUrl} text="View on UPS.com" />
        </DetailCard>
    );
}

export default ParcelDetail;