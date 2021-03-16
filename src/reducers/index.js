// TODO: ACTION IMPORTS //
import { ADD_FEATURE } from '../actions'

//* STEP 1: create initial state in reducer //
const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

//* STEP 2: create reducer function
export const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        // case statements go here
        // case EXAMPLE_CASE:
        //      return {}
        case ADD_FEATURE: 
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        action.payload
                    ]
                }
            };
        default: 
            return state;
    }
}