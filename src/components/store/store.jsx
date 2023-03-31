import {configureStore} from '@reduxjs/toolkit'
import {setCard} from './reduser/Card'
const store = configureStore(
    {
        reducer:{
            storeCard:setCard   
        }
    }
)
export {store}
