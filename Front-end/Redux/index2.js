const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducer = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

//first actions creator in redux
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function restockedCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}
function restockedIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}
// const initialState = {
//   numsOfCakes: 10,
//   numsOfIcecream: 20,
// };

const initialCakeState = {
  numsOfCakes: 10,
};

const initialIceCreamState = {
  numsOfIcecream: 20,
};

//(previousState , action ) => newState

//first reducer function in redux
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numsOfCakes: state.numsOfCakes - 1 };

    case CAKE_RESTOCKED:
      return { ...state, numsOfCakes: state.numsOfCakes + action.payload };

    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return { ...state, numsOfIcecream: state.numsOfIcecream - 1 };

    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numsOfIcecream: state.numsOfIcecream + action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state ", store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// store.dispatch(restockedCake(3));
const action = bindActionCreators(
  { orderCake, restockedCake, orderIcecream, restockedIcecream },
  store.dispatch
);
action.orderCake();
action.orderCake();
action.orderCake();
action.restockedCake(3);
action.orderIcecream();
action.orderIcecream();
action.orderIcecream();
action.restockedIcecream(2);
unsubscribe();
