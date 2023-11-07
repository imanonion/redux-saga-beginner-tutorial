interface CounterProps {
  value: number;
  onIncrement: React.MouseEventHandler<HTMLButtonElement>;
  onDecrement: React.MouseEventHandler<HTMLButtonElement>;
  onIncrementAsync: React.MouseEventHandler<HTMLButtonElement>;
  onDecrementAsync: React.MouseEventHandler<HTMLButtonElement>;
}

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onDecrementAsync,
}: CounterProps) => (
  <div>
    <h1>Counter</h1>
    <p>Value: {value}</p>
    <div>
      <button onClick={onIncrement}>Increment</button>{" "}
      <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
    </div>
    <div>
      <button onClick={onDecrement}>Decrement</button>{" "}
      <button onClick={onDecrementAsync}>Decrement after 1 second</button>
    </div>
    <hr />
  </div>
);

export default Counter;
