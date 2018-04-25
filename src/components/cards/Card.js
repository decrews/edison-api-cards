import React from "react";

class Card extends React.Component {

    state = {
        index : this.props.index
    }

    pickDetailedCard = () => {
        this.props.updateFunc(this.state.index);
    }

    render() {
        let displayImg = false;
        if (this.props.img !== undefined) {
            displayImg = true;
        }

        let displayChildren = false;
        if (this.props.children !== undefined) {
            displayChildren = true;
        }

        return (
            <div onClick={this.pickDetailedCard} className="content-card">
                <div className="row">
                    <div className="col.md w-100">
                        <div className="card">
                            <div style={{backgroundColor : this.props.color}}>
                                <h4 className="card-title">{this.props.title}</h4>
                            </div>
                            <div className="row no-gutters">

                                <div className="col">
                                    <div className="card-block">
                                        <h6 className="card-text">{this.props.text}</h6>
                                        {displayChildren && <div><hr />{this.props.children}</div>}
                                    </div>
                                </div>

                                <div className="col-auto">
                                    {displayImg && <img className="img-fluid" src={this.props.img} alt="Card cap" />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;