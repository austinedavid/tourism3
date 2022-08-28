import React from 'react'
import { Grid, Box, Stack, Typography, Paper } from '@mui/material';
import {FoodApi} from '../ApiCollection/Food'
import { motion } from 'framer-motion';

const Foodpage = () => {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    className='common-padding'>
    <Grid container spacing={2}>
       {
         FoodApi.map((food)=>{
           return(
             <Grid item key={food.id} xs='12' sm='6' md='4' lg='3'>
                 <Stack sx={{height: "250px", position: 'relative', borderRadius: '10px', overflow: 'hidden'}}>
                   <img src={food.image} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                   <Box  style={{position: 'absolute', bottom: '0px', padding: '15px',width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', color: 'white'}}>
                     <Typography variant='body2'>{food.name}</Typography>
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

export default Foodpage