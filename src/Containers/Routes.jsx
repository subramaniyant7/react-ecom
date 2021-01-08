import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ComponentRoutes } from './ComponentRoutes';
import PageNotFound from '../Components/common/pagenotfound';
import { Default } from '../Components/common/applayout';
import 'font-awesome/css/font-awesome.min.css';

const Routes = (props) => {
  const { userInfo } = props;

  const { authenticated } = userInfo;
  
  const WrapperBind = (defaultProps) => {
    const { component: Component, path  } = defaultProps;
    return (
      <Route
        exact
        path={path}
        render={props =>
            <Default {...props}>
              <Component {...props} />
            </Default>
        }
      />
    );
  };
  return (
    <>
        <Switch>
            {
              ComponentRoutes.default.map((item, index) => (
                <WrapperBind key={index} path={item.path} exact component={item.component} />
              ))
            }
            {
              authenticated &&
              ComponentRoutes.authenticate.map((item, index) => (
                <WrapperBind key={index} path={item.path} exact component={item.component} />
              ))
            }
            <Route path='*' exact component={PageNotFound}/>
        </Switch>
    </>
  );
};

const connector = connect(
  (state) => ({
    userInfo: state.userInfo,
  })
);
export default connector(Routes);
