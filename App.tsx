import React from 'react';
import AppNavigator from './src/navigation/navigation';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
