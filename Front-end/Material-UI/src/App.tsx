/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { MuiAlert } from "./components/muiAlert";

import { MuiBadge } from "./components/muiBadge";
import { MuiBottomNavigation } from "./components/muiBottomNavigation";
import { MuiBreadCrumbs } from "./components/muiBreadCrumbs";
import { MuiChip } from "./components/muiChip";
import { MuiDrawer } from "./components/muiDrawer";

import { MuiNavbar } from "./components/muiNavbar";
import { MuiSnackbar } from "./components/muiSnackbar";
import { MuiSpeedDial } from "./components/muiSpeedDial";
import { Muitable } from "./components/muiTable";
import { MuiTooltip } from "./components/muiTooltip";
import { MuiDialog } from "./components/muiDialog";
import { MuiProgress } from "./components/muiProgress";
import { MuiSkeleton } from "./components/muiSkeleton";
import { MuiTextfield } from "./components/muiText";
import { MuiSelect } from "./components/muiSelect";
import MuiRadioButton from "./components/muiRadioButton";
import MuiCheckBox from "./components/muiCheckBox";
import { MuiSwitch } from "./components/muiSwitch";
import { MuiLayout2 } from "./components/muiLayout2";
import { MuiAutoComplete } from "./components/muiAutoComplete";
import { MuiRating } from "./components/muiRating";
import { MuiAccordion } from "./components/muiAccordion";
import { MuiCard } from "./components/muiCard";
import { MuiLayout3 } from "./components/muiLayout3";
import { MuiLayout } from "./components/muiLayout";

function App() {
  return (
    <div className="App">
      <MuiTextfield />
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
      <MuiAccordion />
      <MuiNavbar />
      <MuiBreadCrumbs />
      <MuiDrawer />
      <MuiSpeedDial />
      <MuiBottomNavigation />
      <MuiBadge />
      <MuiChip />
      <MuiTooltip />
      <Muitable />
      <MuiAlert />
      <MuiSnackbar />
      <MuiDialog />
      <MuiProgress />
      <MuiSkeleton />
    </div>
  );
}

export default App;
