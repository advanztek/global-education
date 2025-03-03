import { typographyCategory } from "../../Constants/typography"

export const styles = (theme, active = false, expand) => ({
  wrap: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: { xs: '10px 8px', md: '10px 10px', xl: '18px 25px' },
    width: { xs: '100%', md: !expand ? 'fit-content' : '100%', xl: '100%' },
    boxSizing: 'border-box',
    mb: 2,
    backgroundColor: active ? '#fff' : 'transparent',
    transition: 'background-color 0.35s ease-in-out',
    borderRadius: '30px 0 0 30px',
    '& .icon': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: active ? '#5A1F7D' : '#fff',
      fontSize: '25px',
      fontWeight: active ? 800 : 600,
    },
    '& .label': {
      fontSize: '13px',
      fontWeight: active ? 800 : 600,
      fontFamily: typographyCategory.base.tertiary,
      color: active ? '#5A1F7D' : '#fff',
      lineHeight: '18.2px'
    },
    '& .label.default': {
      display: { xs: 'block', md: 'none', xl: 'block' }
    },
    '& .label.mini': {
      display: { xs: 'none', md: 'block', xl: 'none' }
    }
  }
})

export default styles
