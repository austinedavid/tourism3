import React from 'react'
import {HousingApi} from '../ApiCollection/House';
import { Grid, Box, Stack, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Housepage = () => {
  console.log(HousingApi)
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    className='common-padding'>
        <Grid container spacing={2}>
            {
              HousingApi.map((houses)=>{
                return(
                  <Grid item key={houses.id} xs='12' sm='6' md='4' lg='3'>
                      <Stack sx={{height: "250px", position: 'relative', borderRadius: '10px', overflow: 'hidden'}}>
                        <img src={houses.image} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                        <Box  style={{position: 'absolute', bottom: '0px', padding: '15px',width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', color: 'white'}}>
                          <Typography variant='body2'>{houses.location}</Typography>
                        </Box>
                        </Stack>
                      
                  </Grid>
                )
              })
            }
        </Grid>
    </motion.div>
  )
}

export default Housepage