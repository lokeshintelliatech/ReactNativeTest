/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';

import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

// Modify to add persistor
import {store, persistor} from './src/redux/store';

store.getState();

const App = () => {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
