import React from "react";

// Accepts the date+time as a string and returns the time a 12 hour format
const TimeDisplay = props => {
    let dateTime = new Date(Date.parse(props.date));
    let hours = ((dateTime.getHours() + 11) % 12 + 1);
    let suffix = (dateTime.getHours() >= 12)? 'PM' : 'AM';
    let minutes = dateTime.getMinutes();
    let isSingle = false;

    // If the number is a single digit, add a an html elment "0"
    // to pad the number.  JSX will reduce it to a single number, even a string.
    if (dateTime.getMinutes() < 10) {
        isSingle = true;
    }

    return(
    <span>{hours}:{isSingle && <span>0</span>}{minutes} {suffix}</span>
    );
}

export default TimeDisplay;