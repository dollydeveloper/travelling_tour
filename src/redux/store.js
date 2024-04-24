import { createStore } from "redux";
import BookingReducer from "./BookingReducer";

const store = createStore(BookingReducer);
export default store;