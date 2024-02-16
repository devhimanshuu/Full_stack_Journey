import "./App.css";

// import MuiButton from "./components/muiButton";
import { MuiTextfield } from "./components/muiText";
import { MuiSelect } from "./components/muiSelect";
import MuiRadioButton from "./components/muiRadioButton";
import MuiCheckBox from "./components/muiCheckBox";
import { MuiSwitch } from "./components/muiSwitch";
import { MuiRating } from "./components/muiRating";
function App() {
  return (
    <div className="App">
      <MuiTextfield />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox />
      <MuiSwitch />
      <MuiRating />
    </div>
  );
}

export default App;
