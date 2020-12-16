import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ComponentRoutes } from './ComponentRoutes';

const Routes = (props) => {
  return (
    <>
        <Switch>
            {ComponentRoutes.default.map((item, index) => (
                <Route key={index} path={item.path} exact component={item.component} />
            ))}

            <Route path='*' component={() => 'Not Found'}/>
        </Switch>
    </>
  );
};

export default Routes;
