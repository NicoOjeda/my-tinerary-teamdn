import cardReducer from './cardReducer'
import hotelsReducer from "./hotelsReducer";
import myHotelsReducer from "./myHotelsReducer";
import myShowsReducer from './myShowsReducer';
import myCitiesReducer from './citiesReducer';
import myItinerariesReducer from './itinerariesReducer';
import SignInReducer from './SingInReducer'
import profileReducer from './profileReducer';
import tokenReducer from './tokenReducer';

import activityReactionReducer from './activityReactionReducer'


import commentReducer from './commentReducer';


const rootReducer = {
        card : cardReducer,
        hotelsReducer,
        myHotelsReducer,
        myShowsReducer,
        myCitiesReducer,
        myItinerariesReducer,
        users: SignInReducer,
        profileReducer,
        tokenReducer,
        activityReactionReducer,

        commentReducer

} 


export default rootReducer;

