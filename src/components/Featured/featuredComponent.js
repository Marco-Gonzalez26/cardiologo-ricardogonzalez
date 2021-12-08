import React from 'react'
import {FeaturedButton, FeaturedContainer} from './featuredElements'


function Featured() {
    return (
        
        <FeaturedContainer>
            <h1>Pizza of the day</h1>
            <p>Italian sauce, chicken, mozarella,
             olives and tomatoes</p>
             <FeaturedButton>Order Now</FeaturedButton>
        </FeaturedContainer>
    )
}

export default Featured
