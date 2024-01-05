import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Main from "./components/Main";

function App() {
  return (
    <Provider store={appStore}>
      <Main />
    </Provider>
  );
}

export default App;
