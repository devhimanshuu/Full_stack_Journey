import "./App.css";
import { MuiAvatar } from "./components/muiAvatar";
import { MuiBadge } from "./components/muiBadge";
import { MuiBottomNavigation } from "./components/muiBottomNavigation";
import { MuiBreadCrumbs } from "./components/muiBreadCrumbs";
import { MuiDrawer } from "./components/muiDrawer";
import { MuiLink } from "./components/muiLink";
import { MuiList } from "./components/muiList";
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
      <MuiAvatar />
      <MuiBadge />
      <MuiList />
    </div>
  );
}

export default App;
