import cardReducer from './cardReducer'
import hotelsReducer from "./hotelsReducer";
import myHotelsReducer from "./myHotelsReducer";
import myShowsReducer from './myShowsReducer';
import myCitiesReducer from './citiesReducer';
import myItinerariesReducer from './itinerariesReducer';
import SignInReducer from './SingInReducer'
import profileReducer from './profileReducer';

const rootReducer = {
        card : cardReducer,
        hotelsReducer,
        myHotelsReducer,
        myShowsReducer,
        myCitiesReducer,
        myItinerariesReducer,
        SignInReducer,
        profileReducer
}


export default rootReducer;

