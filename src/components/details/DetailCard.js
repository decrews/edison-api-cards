import React from "react";

const DetailCard = props => {
    let displayImg = false;
    if (props.img !== undefined) {
        displayImg = true;
    }

    let displayChildren = false;
    if (props.children !== undefined) {
        displayChildren = true;
    }

    return (
        <div className="content-card">
            <div className="row">
                <div className="col.md w-100">
                    <div className="card">
                        <div style={{backgroundColor : props.color}}>
                            <h4 className="card-title">{props.title}</h4>
                        </div>
                        <div className="row no-gutters">

                            <div className="col">
                                <div className="card-block">
                                    <h6 className="card-text">{props.text}</h6>
                                    {displayChildren && <div><hr />{props.children}</div>}
                                </div>
                            </div>

                            <div className="col-auto">
                                {displayImg && <img className="img-fluid" src={props.img} alt="Card cap" />}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard; 