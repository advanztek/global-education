import {
  dashboardDrawerWidth,
  dashboardLayoutPad,
  dashboardNavHeight
} from '../../Constants/dimensions'

export const styles = {
  sideNav:{
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#5A1F7D',
    height: '100vh'
  },
  paper:(expand) => ({
    height: '100%',
    '& .MuiDrawer-paper': {
      backgroundColor: 'transparent',
      boxSizing: 'border-box',
      width: {
        xs: dashboardDrawerWidth,
        md: !expand ? 'fit-content' : dashboardDrawerWidth,
        xl: dashboardDrawerWidth
      },
      border: 'none',
      overflowY: 'visible',
    }
  }),
  navigationWrap: {
    position: 'relative',
    height: '100%',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '5px',
      borderRadius: '999px'
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      borderRadius: '999px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '999px'
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555'
    }
  },
  header:{
    height: dashboardNavHeight + 'px',
    px: dashboardLayoutPad + 'px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5.87px',
  },

  logo: {
    height: '80px',
  },

  sectionWrap: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    left: 0,
    bottom: 0,
    right: 0
  }
}
