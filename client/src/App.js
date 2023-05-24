import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";
import {createTheme} from "@mui/material";
import {useMemo} from "react";
import { useSelector } from "react-redux";
import {themeSettings} from "theme";
import Announcement from "scenes/announcement";
import ManageFacultys from "scenes/manageFaculty";
import AssignMentors from "scenes/assignMentor";
import AssignPanels from "scenes/assignPanel";
import GroupManages from "scenes/groupmanage";
import Submissions from "scenes/submission";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const userRole = useSelector((state) => state.global.userRole);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* For admin and superadmin routes */}
              {userRole === "admin" || userRole === "superadmin" ? (
                <>
                  <Route path="/announcement" element={<Announcement />} />
                  <Route path="/managefaculty" element={<ManageFacultys />} />
                  <Route path="/assignmentors" element={<AssignMentors />} />
                  <Route path="/assignpanels" element={<AssignPanels />} />
                  <Route path="/groupmanage" element={<GroupManages />} />
                  <Route path="/submission" element={<Submissions />} />
                  
                  
                </>
              ) : null}

              {/* For student routes */}
              {userRole === "student" ? (
                <Route path="/announcement" element={<Announcement />} />
              ) : null}
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
