import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Provider } from "react-redux";
import store from "./store";
import Banner from "./pages/Banner";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        DEMO @REDUXJS/TOOLKIT
        <Banner/>
        <div style={{ border: "1px solid black" }}>
          <Profile />
        </div>
        <div style={{ border: "1px solid black" }}>
          <Home />
        </div>
      </div>
    </Provider>
  );
}

export default App;
