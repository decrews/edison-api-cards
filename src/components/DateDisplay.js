import React from "react";

// Accepts the date+time as a string and returns the date in a "Month Day" format.
const DateDisplay = props => {

    let months = ['January', 'February', 'March', 'April', 'May', 
        'June', 'July', 'August', 'September', "October", "November", "December"];
        
    let dateTime = new Date(Date.parse(props.date));
    
    return(
        <span>{months[dateTime.getMonth()]} {dateTime.getDate()}</span>
    );
}

export default DateDisplay;