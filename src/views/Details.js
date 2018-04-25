import React from "react";
import OrderDetail from '../components/details/OrderDetail';
import LodgingDetail from '../components/details/LodgingDetail';
import ParcelDetail from '../components/details/ParcelDetail';
import RentalDetail from '../components/details/RentalDetail';
import FoodDetail from '../components/details/FoodDetail';

class Details extends React.Component {

    getDetailCard = (cardType) => {
        let selectedCard = this.props.mail[this.props.index];

        let colors = {
            "Order" : "#e57373",
            "Lodging" : "#7986cb",
            "Parcel" : "#4dd0e1",
            "Rental" : "#aed581",
            "Food" : "#ff8a65",
        };

        switch(cardType) {
            case "Order":
                return(<OrderDetail dat={selectedCard} color={colors} />);
            case "LodgingReservation":
                return(<LodgingDetail dat={selectedCard} color={colors} />);
            case "ParcelDelivery":
                return(<ParcelDetail dat={selectedCard} color={colors} />);
            case "RentalCarReservation":
                return(<RentalDetail dat={selectedCard} color={colors} />);
            case "FoodEstablishmentReservation":
                return(<FoodDetail dat={selectedCard} color={colors} />);
            default:
                return(<RentalDetail dat={selectedCard} color={colors} />);
        }
    }
    
    render() {
        return (
            <div className="container">
                {this.getDetailCard(this.props.mail[this.props.index]['@type'])}
            </div>
        );
    }
}

export default Details