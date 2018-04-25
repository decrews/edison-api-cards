import React from 'react';
import OrderCard from '../components/cards/OrderCard';
import LodgingCard from '../components/cards/LodgingCard';
import ParcelCard from '../components/cards/ParcelCard';
import RentalCard from '../components/cards/RentalCard';
import FoodCard from '../components/cards/FoodCard';

// ContentFeed and Details components check each element of the json for their category (@type) and render
// the Card component that displays their respective categories data
class ContentFeed extends React.Component {
    
    getCardType = (item, key) => {

        // Contains the colors for each category of item
        let colors = {
            "Order" : "#e57373",
            "Lodging" : "#7986cb",
            "Parcel" : "#4dd0e1",
            "Rental" : "#aed581",
            "Food" : "#ff8a65",
        }

        switch(item['@type']) {
            case "Order":
                return(<OrderCard dat={item} key={key} index={key} color={colors} updateFunc={this.props.updateFunc}/>);
            case "LodgingReservation":
                return(<LodgingCard dat={item} key={key} index={key} color={colors} updateFunc={this.props.updateFunc}/>);
            case "ParcelDelivery":
                return(<ParcelCard dat={item} key={key} index={key} color={colors} updateFunc={this.props.updateFunc}/>);
            case "RentalCarReservation":
                return(<RentalCard dat={item} key={key} index={key} color={colors} updateFunc={this.props.updateFunc}/>);
            case "FoodEstablishmentReservation":
                return(<FoodCard dat={item} key={key} index={key} color={colors} updateFunc={this.props.updateFunc}/>);
            default:
                return(<RentalCard dat={item} key={key} index={key} color={colors} updateFunc={this.props.updateFunc}/>);
        }
    };
    
    render() {
        return (
            <div className="container">
                {this.props.mail.map((item, key) => this.getCardType(item, key))}
            </div>
        );
    }
}

export default ContentFeed;