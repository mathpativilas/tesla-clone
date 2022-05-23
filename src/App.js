import "./App.css";
import { store } from "./app/store";
import Header from "./components/Header";
import Home from "./components/Home";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
