import React from 'react';
// Redux imports
import { connect } from 'react-redux';


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


//* STEP : Redux Action Imports
// TODO Actions to go here

const App = ( props ) => {
  console.log(props)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//* STEP 6: map our state(shape of state set by initialState in reducer) to props
const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
  }
}

//* STEP 7: set up connect function, passing mapStateToProps, object with actions, and a second invocation with Component
export default connect(mapStateToProps)(App);