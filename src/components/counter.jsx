import React, {useState} from "react";

const Counter = (props) => {
  const {value} = props;

  const formatvalue = () => {
    return value === 0 ? <h1>empty</h1> : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-1 p-1 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatvalue()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onIncrement(props.id)}
      >
        +
      </button>

      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onDecrement(props.id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
