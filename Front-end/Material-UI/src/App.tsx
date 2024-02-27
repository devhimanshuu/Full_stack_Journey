import "./App.css";
import { MuiBreadCrumbs } from "./components/muiBreadCrumbs";
import { MuiDrawer } from "./components/muiDrawer";
import { MuiLink } from "./components/muiLink";

import { MuiNavbar } from "./components/muiNavbar";
import { MuiSpeedDial } from "./components/muiSpeedDial";

function App() {
  return (
    <div className="App">
      {/* <MuiTextfield />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutoComplete />
      <MuiLayout2 />
      <MuiLayout />
      <MuiLayout3 />
      <MuiCard />
  <MuiAccordion />*/}
      <MuiNavbar />
      <MuiLink />
      <MuiBreadCrumbs />
      <MuiDrawer />
      <MuiSpeedDial />
    </div>
  );
}

export default App;
