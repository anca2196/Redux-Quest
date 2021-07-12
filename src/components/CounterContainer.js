import { connect } from "react-redux";
import { incrementAction, decrementAction, incrementBy10Action, decrementBy10Action, resetAction } from "../actions/counter.actions";

const mapStateToProps = state => ({
  counter: state
});


const mapDispatchToProps = dispatch => ({
    onClickIncrement: () => dispatch(incrementAction),
    onClickDecrement: () => dispatch(decrementAction),
    onClickIncrementBy10: () => dispatch(incrementBy10Action),
    onClickDecrementBy10: () => dispatch(decrementBy10Action),
    onClickReset: () => dispatch(resetAction)
});
  

  
  const CounterComponent = ({ counter, onClickIncrement, onClickDecrement, onClickIncrementBy10, onClickDecrementBy10, onClickReset}) => (
    <div>
      <p>{counter}</p>
      <button onClick={onClickIncrement}>Increment</button>
      <button onClick={onClickDecrement}>Decrement</button>
      <br />
      <br />
      <button onClick={onClickIncrementBy10}>Increment By 10</button>
      <button onClick={onClickDecrementBy10}>Decrement By 10</button>
      <br />
      <br />
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CounterComponent);