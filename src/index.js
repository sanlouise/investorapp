// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';

// Import create-react-app service worker (houses webpack, babel, etc. config)
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './containers/App';
import BaseLayout from './components/BaseLayout';

// Inject global styles
import './globalStyles.css';

// Import reducers and create shape of store
import appReducer from './containers/App/reducer'
const rootReducer = combineReducers({
  app: appReducer,
});


ReactDOM.render((
  <Provider store={createStore(rootReducer)}>
    <BaseLayout>
      <App />
    </BaseLayout>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
