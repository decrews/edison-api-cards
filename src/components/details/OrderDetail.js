import React from "react";
import DetailCard from "./DetailCard";
import DateDisplay from "../DateDisplay";

const OrderDetail = props => {
    return(
        <DetailCard index={props.index} 
        title={props.dat['@type']} 
        text={props.dat.description}
        img={props.dat.acceptedOffer[0].itemOffered.image}
        color={props.color.Order}>
            <p><strong>Item:</strong> {props.dat.acceptedOffer[0].itemOffered.name}</p>
            <p><strong>Price:</strong> {props.dat.acceptedOffer[0].price}</p>
            <p><strong>Order Number:</strong> {props.dat.orderNumber}</p>
            <p><strong>Order Date:</strong> <DateDisplay date={props.dat.orderDate}/></p>
        </DetailCard>
    );
}

export default OrderDetail;