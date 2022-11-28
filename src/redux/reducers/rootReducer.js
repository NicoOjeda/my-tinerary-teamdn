import cardReducer from './cardReducer'
import hotelsReducer from "./hotelsReducer";
import myHotelsReducer from "./myHotelsReducer";
import myShowsReducer from './myShowsReducer';
import myCitiesReducer from './citiesReducer';
import myItinerariesReducer from './itinerariesReducer';
import SignInReducer from './SingInReducer'
import profileReducer from './profileReducer';
import tokenReducer from './tokenReducer';

const rootReducer = {
        card : cardReducer,
        hotelsReducer,
        myHotelsReducer,
        myShowsReducer,
        myCitiesReducer,
        myItinerariesReducer,
        SignInReducer,
        profileReducer,
        tokenReducer
}


export default rootReducer;

