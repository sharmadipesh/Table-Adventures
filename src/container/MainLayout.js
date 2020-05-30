import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import {Routes} from 'config/Routes';
import Home from 'views/Home';
import Header from 'views/Header';
import {reduxSetup} from 'redux/actions/Home';
import {connect} from 'react-redux';

class MainLayout extends Component {

    componentDidMount = () =>{
        this.props.reduxSetup();
    }

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <Switch>
                    <Route exact component={Home} path={Routes.Home}/>
                </Switch>
            </div>
        );
    }
}


// export default MainLayout;
function mapStateToProps(state){
    return{

    }
}

export default connect(mapStateToProps,{reduxSetup})(MainLayout);