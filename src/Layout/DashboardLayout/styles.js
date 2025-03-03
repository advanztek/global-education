import { dashboardDrawerWidth, dashboardLayoutPad, dashboardNavHeight } from "../../Constants/dimensions";


export const styles = {
  content: {
    flexGrow: 1,
    boxSizing: 'border-box',
    pl: {
      xs: `${dashboardLayoutPad}px`,
      md: `calc(${dashboardDrawerWidth}px - 60px + ${dashboardLayoutPad}px)`,
      lg: `calc(${dashboardDrawerWidth}px - 60px + ${dashboardLayoutPad}px)`,
      xl: `calc(${dashboardDrawerWidth}px + 20px + ${dashboardLayoutPad}px)`,
    },
    pr: {
      xs: `${dashboardLayoutPad}px`,
      md: "43px"
    },
    pt: `${dashboardNavHeight + dashboardLayoutPad}px`,
    pb: `${dashboardLayoutPad}px`,
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#faf1ff',
  },
  
  wrap:{
    display: 'flex',
    backgroundColor:'whitesmoke'
  }
}