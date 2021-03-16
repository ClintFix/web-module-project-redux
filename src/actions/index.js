//* STEP 8: Write actions 

// export const DESIRED_ACTION = 'DESIRED_ACTION';
// export const desiredAction = (arg) => {
//     return {
//         type: DESIRED_ACTION,
//         payload: arg
//     }
// }

export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = (feature) => {
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}