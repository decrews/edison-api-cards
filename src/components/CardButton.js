import React from "react";

const CardButton = props => {
    return(
        <form action={props.url}>
            <button type="submit" className="btn btn-info">{props.text}</button>
        </form>
    );
}

export default CardButton; 