import {
  legacy_createStore as createStore, //  to createStore, function to create store (it is an array or an object and ntg more)
  combineReducers, //  we'll have many reducers, to combine all the reucers and store in the store, we use combineReducers
  applyMiddleware, //  to be able to use middleware: b/w action and reducer/recux, to apply the middleware action
  compose, //  to increase readability (read the function from left to right)
} from "redux";
import thunk from "redux-thunk"; //  thunk: a piece of code that does some delayed work
import { restaurantReducer } from "./reducer/restaurantReducer";
import { menuReducer } from "./reducer/menuReducer";
import {
  authReducer,
  forgetPasswordReducer,
  userReducer,
} from "./reducer/userReducer";
import { forgotPassword } from "./actions/userAction";
import { cartReducer } from "./reducer/cartReducer";

const reducer = combineReducers({
  restaurants: restaurantReducer,
  menus: menuReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgetPasswordReducer,
  cart: cartReducer,
});

// allows to apply multiple store enhancer in a row; and is also useful for things like adding the redux dev-tools
const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //  to connect this project with redux dev-tools we have installed

// all the middleware will be handled by the thunk here
const middleware = [thunk];

const store = createStore(
  reducer,
  composeenhancers(applyMiddleware(...middleware))
);

export default store;

//     ----------------------------------   boiler plate of/setup for store end    ----------------------------------
