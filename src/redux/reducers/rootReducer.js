import cardReducer from './cardReducer'
import hotelsReducer from "./hotelsReducer";
import myHotelsReducer from "./myHotelsReducer";
import myShowsReducer from './myShowsReducer';
import myCitiesReducer from './citiesReducer';
import myItinerariesReducer from './itinerariesReducer';

const rootReducer = {
        card : cardReducer,
        hotelsReducer,
        myHotelsReducer,
        myShowsReducer,
        myCitiesReducer,
        myItinerariesReducer
}


export default rootReducer;

