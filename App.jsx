import { StatusBar, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { Navigation } from "@src/navigation";
import { store } from "@src/store";

export default App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </SafeAreaProvider>
  </Provider>
);