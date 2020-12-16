import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ComponentRoutes } from './ComponentRoutes';
import PageNotFound from '../Components/common/pagenotfound';

const Routes = (props) => {
  const { isAuthenticated } = props;
  
  return (
    <>
        <Switch>
            {
              ComponentRoutes.default.map((item, index) => (
                <Route key={index} path={item.path} exact component={item.component} />
              ))
            }
            {
              isAuthenticated &&
              ComponentRoutes.authenticate.map((item, index) => (
                <Route key={index} path={item.path} exact component={item.component} />

              ))
            }

            <Route path='*' component={PageNotFound}/>
        </Switch>
    </>
  );
};

const connector = connect(
  (state) => ({
    isAuthenticated: state.isAuthenticated,
  })
);
export default connector(Routes);
