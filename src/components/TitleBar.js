import React from "react";

class TitleBar extends React.Component {

    goHome = () => {
        this.props.updateFunc(undefined);
    }

    render() {
        return(
            <nav className="navbar fixed-top navbar-dark bg-dark">
                <a className="navbar-brand" onClick={this.goHome}>Email Explorer</a>
            </nav> 
        );
    }
}

export default TitleBar;