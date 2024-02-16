import "./App.css";

// import MuiButton from "./components/muiButton";
import { MuiTextfield } from "./components/muiText";
import { MuiSelect } from "./components/muiSelect";
import MuiRadioButton from "./components/muiRadioButton";
function App() {
  return (
    <div className="App">
      <MuiTextfield />
      <MuiSelect />
      <MuiRadioButton />
    </div>
  );
}

export default App;
