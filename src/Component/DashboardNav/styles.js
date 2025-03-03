import { dashboardDrawerWidth, dashboardLayoutPad, dashboardNavHeight } from "../../Constants/dimensions"
import { typographyCategory } from "../../Constants/typography"

export const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: {
      xs: 0,
      md: `calc(${dashboardDrawerWidth}px - 40px)`,
      lg: `calc(${dashboardDrawerWidth}px - 40px)`,
      xl: `calc(${dashboardDrawerWidth}px + 40px)`,
    }, 
    right: { xs: 0, md: "40px" }, 
    pl: { xs: dashboardLayoutPad + "px", md: "20px" },
    pr: { xs: dashboardLayoutPad + "px", md: "20px" },
    height: dashboardNavHeight + "px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: { xs: "100%", md: "auto" }, 
    zIndex: 99,
    backgroundColor: "white",
    filter: "drop-shadow(2px 0 1px rgba(100, 100, 100, 0.5))",
    borderBottomLeftRadius: { xs: 0, md: "20px" },
    borderBottomRightRadius: { xs: 0, md: "20px" },
  },
  

  navLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logo: {
    display: { xs: 'block', md: 'none' },
    height: '24px'
  },
  navTitle: {
    fontSize: { xs: '14px', md: '16px' },
    fontWeight: 600,
    fontFamily: typographyCategory.base.tertiary,
  },
  actionWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }
}
