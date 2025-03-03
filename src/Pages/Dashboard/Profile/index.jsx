import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { typographyCategory } from '../../../Constants/typography'
import { ProfileOverview } from '../../../Component'
import { fields } from './data'

export default function Profile () {
  return (
    <ProfileOverview
      title="Overview"
      avatarSrc="/Image/profile.png"
      avatarAlt="Chinwe Edwards"
      avatarName="Chinwe Edwards"
      avatarEmail="chinweedwards@gmail.com"
      editButtonText="Edit my Profile Picture"
      onEditProfile={() => alert('Editing Profile Picture')}
      fields={fields}
      emailSectionTitle="My email Address"
      emailValue="chinweedwards@gmail.com"
      emailTimestamp="1 month ago"
      emailIcon="/Image/sms.png"
    />
  )
}
