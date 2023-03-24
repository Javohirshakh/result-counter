import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    {id: 0, value: 5, name: "Ненужная вещ", price: "200"},
    {id: 1, value: 1, name: "Ложка"},
    {id: 2, value: 2, name: "Вилка"},
    {id: 3, value: 3, name: "Тарелка"},
    {id: 4, value: 5, name: "Набор минималиста"},
  ];
  const [counters, setCounters] = useState(initialState);
  const handleIncrement = (id) => {
    console.log(id);
    const newCounters = counters.map((c) => {
      if (c.id === id) {
        return {...c, value: c.value + 1};
      }
      return c;
    });
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const newCounters = counters.map((c) => {
      if (c.id === id) {
        return {...c, value: c.value - 1};
      }
      return c;
    });
    setCounters(newCounters);
  };
  const handleDelete = (id) => {
    console.log(id);
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    console.log("Resetting counters");
    setCounters(initialState);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
