import React from 'react'
import { FoodApi } from '../ApiCollection/Food'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import styled from 'styled-components';
import { Fooddetails } from '../ApiCollection/Fooddetails';
import { motion } from 'framer-motion';


const Popularfood = () => {
 
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    className='common-padding'>
        <h3 style={{marginBottom: '1rem'}}>trending meals</h3>
        <Splide 
        options={{
           arrows: false,
           
          
           
        }}
         >
            {
                FoodApi.map((food)=>{
                    return(
                        <SplideSlide key={food.id}>
                            <div style={{height: '300px', borderRadius: '15px', overflow: 'hidden', width: '100%', position: 'relative' }}>
                            <div style={{position: 'absolute', width: '100%', padding: '5px',  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', fontWeight: 'bold', background: 'rgba(0,0,0,0.6)'}}>
                                <p>{food.name}</p>
                                </div>
                                <img src={food.image} style={{ height: '100%', width: '100%', objectFit: 'cover'}}/>
                                
                            </div>
                        </SplideSlide>
                    )
                })
            }
        </Splide>

        <div style={{marginTop: '2rem', marginBottom: '2rem'}}>
            <h3>About Elite tourism</h3>
            <p>Elite tourism is one of the best host for those in adventures, those that want to move around the world. we are just here to navigate you to the 
                 place of your choice, we always keep to our promises, in which your satisfaction is our concern. </p>
        </div>
        <div>
            <h3 style={{marginBottom: '1rem'}}>We offer the following:-</h3>
            <ul className='popular-food'>
                <li><span className='span'>ACCOMMDATIONS:</span> we are the best in giving you your very best choice</li>
                <li><span className='span'>HOUSING:</span> most of our clients who came for just visitation always end up getting a wonderful home. We give you your very best choice</li>
                <li><span className='span'>RECIPES:</span> We offer the best meal, with wide range of variaties, ranging from cultural food to foreign meal. We are sure you will definately love this.</li>
                <li><span className='span'>SHIPS:</span> For the love of oceans, we always have a beautify ship, this helps in takin gour clients around to see the beauty of nature.</li>
                <li><span className='span'>TOURISM:</span> This aspect was added to our very list in <span className='span'>december 2012</span> and we are very happy with peoples response about it</li>
            </ul>
        </div>
    </motion.div>
  )
}

export default Popularfood