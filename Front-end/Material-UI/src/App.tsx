import "./App.css";
import { MuiAlert } from "./components/muiAlert";

import { MuiBadge } from "./components/muiBadge";
import { MuiBottomNavigation } from "./components/muiBottomNavigation";
import { MuiBreadCrumbs } from "./components/muiBreadCrumbs";
import { MuiChip } from "./components/muiChip";
import { MuiDrawer } from "./components/muiDrawer";

import { MuiNavbar } from "./components/muiNavbar";
import { MuiSpeedDial } from "./components/muiSpeedDial";
import { Muitable } from "./components/muiTable";
import { MuiTooltip } from "./components/muiTooltip";

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
      <MuiTooltip />
      {/* <Muitable /> */}
      <MuiAlert />
    </div>
  );
}

export default App;
