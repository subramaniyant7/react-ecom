import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/footer';
import Header from './Components/header';
import Routes from './Containers/Routes';
import History from './utils/history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(allReducers, composeWithDevTools());
const App = () => {
  return (
      <Provider store={store}>
        <Router history={History}>
          <Header />
          <Routes />
          <Footer />
        </Router>
      </Provider>
  );
}

export default App;
