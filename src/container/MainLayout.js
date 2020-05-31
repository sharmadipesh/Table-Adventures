import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import {Routes} from 'config/Routes';
import Home from 'views/Home';
import Header from 'views/Header';
import {reduxSetup} from 'redux/actions/Home';
import {connect} from 'react-redux';
import { Table, Tag, Space } from 'antd';
// import {getShipmentInfo} from 'redux/actions/Home';



class MainLayout extends Component {

    componentDidMount = () =>{
        this.props.reduxSetup();
        // this.props.getShipmentInfo();
    }

    render() {
       
        return (
            <div>
                <Header {...this.props}/>
                <Switch>
                    <Route exact component={()=><Home tableData={this.props.tableData}/>} path={Routes.Home}/>
                </Switch>
            </div>
        );
    }
}


// export default MainLayout;
function mapStateToProps(state){
    return{
        // tableData:state.Home.shipInformationData
    }
}

export default connect(mapStateToProps,{
    reduxSetup,
    // getShipmentInfo
})(MainLayout);