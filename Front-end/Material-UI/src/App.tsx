import "./App.css";

// import MuiButton from "./components/muiButton";
import { MuiTextfield } from "./components/muiText";
import { MuiSelect } from "./components/muiSelect";
import MuiRadioButton from "./components/muiRadioButton";
import MuiCheckBox from "./components/muiCheckBox";
function App() {
  return (
    <div className="App">
      <MuiTextfield />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox />
    </div>
  );
}

export default App;
