import React, { Component } from 'react';
import ReactTable from "react-table";
import {connect} from 'react-redux';
import {getShipmentInfo} from 'redux/actions/Home';
// import "react-table/react-table.css";

class Home extends Component {


    componentDidMount = () =>{
        this.props.getShipmentInfo();
    }

    render() {
        return (
            <div className="mt-80 plr-35">
                Hello
            </div>
        );
    }
}

// export default Home;
function mapStateToProps(state){
    return{

    }
}

export default connect(mapStateToProps,{
    getShipmentInfo
})(Home);