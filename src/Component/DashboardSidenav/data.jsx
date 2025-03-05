import {
  LayoutRowTwoSplitBottomFilled,
  ClipboardTextEditRegular,
  SettingsRegular,
  NotepadPersonRegular,
  MailInboxAddRegular,
  PersonFilled
} from '@fluentui/react-icons';

export const modalProps = {
  keepMounted: true
};

export const dashboardNavigation = {
  learning: [
    {
      icon: <LayoutRowTwoSplitBottomFilled />,
      label: 'Dashboard',
      link: '/dashboard/learning'
    },
    {
      icon: <MailInboxAddRegular />,
      label: 'Messages',
      link: '/dashboard/learning/messages'
    },
    {
      icon: <ClipboardTextEditRegular />,
      label: 'My Modules',
      link: '/dashboard/learning/modules'
    },
    {
      icon: <PersonFilled />,
      label: 'Profile',
      link: '/dashboard/learning/profile'
    },
    {
      icon: <SettingsRegular />,
      label: 'Settings',
      link: '/dashboard/learning/settings'
    }
  ],
  facilitator: [
    {
      icon: <LayoutRowTwoSplitBottomFilled />,
      label: 'Dashboard',
      link: '/dashboard/facilitator'
    },
    {
      icon: <NotepadPersonRegular />,
      label: 'Learners',
      link: '/dashboard/facilitator/learners'
    },
    {
      icon: <MailInboxAddRegular />,
      label: 'Messages',
      link: '/dashboard/facilitator/messages'
    },
    {
      icon: <PersonFilled />,
      label: 'Profile',
      link: '/dashboard/facilitator/profile'
    },
    {
      icon: <SettingsRegular />,
      label: 'Settings',
      link: '/dashboard/facilitator/settings'
    },
  ],
  me: [
    {
      icon: <LayoutRowTwoSplitBottomFilled />,
      label: 'Dashboard',
      link: '/dashboard/me'
    },
    {
      icon: <ClipboardTextEditRegular />,
      label: 'Facilitators',
      link: '/dashboard/me/facilitators'
    },
    {
      icon: <NotepadPersonRegular />,
      label: 'Learners',
      link: '/dashboard/me/learners'
    },
    {
      icon: <MailInboxAddRegular />,
      label: 'Messages',
      link: '/dashboard/me/messages'
    },
    {
      icon: <PersonFilled />,
      label: 'Profile',
      link: '/dashboard/me/profile'
    },
    {
      icon: <SettingsRegular />,
      label: 'Settings',
      link: '/dashboard/me/settings'
    },
  ],
  'cluster-manager': [
    {
      icon: <LayoutRowTwoSplitBottomFilled />,
      label: 'Dashboard',
      link: '/dashboard/cluster-manager'
    },
    {
      icon: <ClipboardTextEditRegular />,
      label: 'Facilitators',
      link: '/dashboard/cluster-manager/facilitators'
    },
    {
      icon: <NotepadPersonRegular />,
      label: 'Learners',
      link: '/dashboard/cluster-manager/learners'
    },
    {
      icon: <ClipboardTextEditRegular />,
      label: 'M and E',
      link: '/dashboard/cluster-manager/m-e'
    },
    {
      icon: <MailInboxAddRegular />,
      label: 'Messages',
      link: '/dashboard/cluster-manager/messages'
    },
    {
      icon: <PersonFilled />,
      label: 'Profile',
      link: '/dashboard/cluster-manager/profile'
    },
    {
      icon: <SettingsRegular />,
      label: 'Settings',
      link: '/dashboard/cluster-manager/settings'
    },
  ]
};
