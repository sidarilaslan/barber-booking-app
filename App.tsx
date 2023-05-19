import React from "react";
import { View, Text } from "react-native";
import Register from "./src/pages/register";
import Login from "./src/pages/login";
import Intro from "./src/pages/intro";


import PhoneControl from "./src/pages/phoneControl";

import { NativeBaseProvider } from "native-base";
import Home from "./src/pages/home";
const App = () => {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  )
}

export default App;
