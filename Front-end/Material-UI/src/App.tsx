import "./App.css";

// import MuiButton from "./components/muiButton";
import { MuiTextfield } from "./components/muiText";
import { MuiSelect } from "./components/muiSelect";
import MuiRadioButton from "./components/muiRadioButton";
import MuiCheckBox from "./components/muiCheckBox";
import { MuiSwitch } from "./components/muiSwitch";
import { MuiRating } from "./components/muiRating";
import { MuiAutoComplete } from "./components/muiAutoComplete";
import { MuiLayout } from "./components/muiLayout";
import { MuiLayout2 } from "./components/muiLayout2";
function App() {
  return (
    <div className="App">
      {/* <MuiTextfield />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutoComplete /> */}
      <MuiLayout2 />
    </div>
  );
}

export default App;
