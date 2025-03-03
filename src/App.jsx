import { ThemeProvider } from '@mui/material';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import theme from './Themes/theme';
import PublicRoutes from './Routes/PublicRoutes';
import DashboardRoutes from './Routes/DashboardRoutes';
function App () {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path='/*' element={<PublicRoutes />} />
            <Route path='/dashboard/*' element={<DashboardRoutes />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
