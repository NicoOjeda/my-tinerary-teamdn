import cardReducer from './cardReducer'
import hotelsReducer from "./hotelsReducer";
import myHotelsReducer from "./myHotelsReducer";
import myShowsReducer from './myShowsReducer';

const rootReducer = {
        card : cardReducer,
        hotelsReducer,
        myHotelsReducer,
        myShowsReducer
}


export default rootReducer;

