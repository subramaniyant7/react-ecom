import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Containers/Routes';
import history from './utils/history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());
const App = () => {
  return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
  );
}

export default App;
