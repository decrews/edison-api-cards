import React from "react";
import Card from "./Card";

const OrderCard = props => {
    return(
        <Card index={props.index} 
        title={props.dat['@type']} 
        text={props.dat.description}
        img={props.dat.acceptedOffer[0].itemOffered.image}
        color={props.color.Order}
        updateFunc={props.updateFunc}>
            <p><strong>Item:</strong> {props.dat.acceptedOffer[0].itemOffered.name}</p>
            <p><strong>Price:</strong> {props.dat.acceptedOffer[0].price}</p>
        </Card>
    );
}

export default OrderCard;