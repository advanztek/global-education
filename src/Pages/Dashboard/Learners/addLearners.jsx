import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { typographyCategory } from '../../../Constants/typography'
import { fields, radioData } from './data'
import { UploadImage } from '../../../Component'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
const AddLearners = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#fff',
          minHeight: '100vh',
          borderRadius: 10,
          boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.2)',
          px: { xs: 2, md: 2 },
          py: { xs: 2, md: 4 }
        }}
      >
        <Typography
          variant='h6'
          color='#5A1F7D'
          sx={{
            mb: 1,
            px: { xs: 2, md: 3 },
            pt: { xs: 2, md: 4 },
            fontWeight: 700,
            fontFamily: typographyCategory.base.tertiary
          }}
        >
          Add Learners
        </Typography>

        <Box sx={{ px: { xs: 2, md: 3 } }}>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {fields.map((field, i) => (
              <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} key={i}>
                <TextField
                  fullWidth
                  variant='filled'
                  label={field.label}
                  placeholder={field.placeholder || ''}
                  InputProps={{ disableUnderline: true }}
                  sx={{
                    backgroundColor: '#F5F5F5',
                    borderRadius: 3,
                    fontFamily: typographyCategory.base.tertiary,
                    '& .MuiFilledInput-root': {
                      backgroundColor: '#F5F5F5',
                      borderRadius: 3,
                      py: 0.2,
                      fontFamily: typographyCategory.base.tertiary
                    },
                    '& .MuiInputLabel-root': {
                      color: '#666',
                      borderRadius: 3,
                      fontFamily: typographyCategory.base.tertiary
                    }
                  }}
                />
              </Grid>
            ))}
            <Box
              sx={{
                display: 'flex',
                gap: 4,
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'column',
                  lg: 'row'
                }
              }}
            >
              <Box sx={{ margin: 0, padding: 0 }}>
                <UploadImage />
                 <Button sx={{width: '100%', color:'#fff', fontSize:13, backgroundColor:'#702DFF', py: 2, my:3, borderRadius:4,}}>Submit</Button>
              </Box>
              <Box sx={{ margin: 0, padding: 0 }}>
                {radioData.map((rad, index) => (
                  <Box
                    key={index}
                    display='flex'
                    flexDirection={{ xs:'column', md:'row', }}
                    alignItems='center'
                    justifyContent='space-between'
                    sx={{ gap: 5 }}
                  >
                    <Typography
                      variant='body1'
                      sx={{ fontFamily: typographyCategory.base.tertiary }}
                    >
                      {rad.radioTxt}
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value='yes'
                        control={<Radio />}
                        label='Yes'
                      />
                      <FormControlLabel
                        value='no'
                        control={<Radio />}
                        label='No'
                      />
                    </RadioGroup>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default AddLearners
