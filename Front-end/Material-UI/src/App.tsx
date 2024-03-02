import "./App.css";

import { MuiBadge } from "./components/muiBadge";
import { MuiBottomNavigation } from "./components/muiBottomNavigation";
import { MuiBreadCrumbs } from "./components/muiBreadCrumbs";
import { MuiChip } from "./components/muiChip";
import { MuiDrawer } from "./components/muiDrawer";

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
      <MuiBreadCrumbs />
      <MuiDrawer />
      <MuiSpeedDial />
      <MuiBottomNavigation />

      <MuiBadge />
      <MuiChip />
    </div>
  );
}

export default App;
