
import Recyclables from '../recyclables/reducers';
import Profile from '../profile/reducers';
import Pickup from '../pickup/reducers';
import Transaction from '../transaction-history/reducers';
import {combineReducers} from 'redux';

export default combineReducers({
  Recyclables, Profile, Pickup, Transaction
});
