import {
  LayoutRowTwoSplitBottomFilled,
  ClipboardTextEditRegular,
  SettingsRegular,
  NotepadPersonRegular,
  PersonFilled
} from '@fluentui/react-icons'

export const modalProps = {
  keepMounted: true
}

export const dashboardNavigation = [
  {
    section: 'basic',
    category: 'NORMAL',
    nav: [
      {
        icon: <LayoutRowTwoSplitBottomFilled />,
        label: 'Dashboard',
        link: '/dashboard'
      },
      {
        icon:<NotepadPersonRegular />,
        label: 'Learners',
        link: '/dashboard/learners'
      },
      {
        icon: <ClipboardTextEditRegular />,
        label: 'My Modules',
        link: '/dashboard/modules'
      },
      {
        icon: <PersonFilled />,
        label: 'Profile',
        link: '/dashboard/profile'
      },
      {
        icon: <SettingsRegular />,
        label: 'Settings',
        link: '/dashboard/settings'
      }
    ]
  }
]
