interface CounterProps {
  value: number;
  onIncrement: React.MouseEventHandler<HTMLButtonElement>;
  onDecrement: React.MouseEventHandler<HTMLButtonElement>;
  onIncrementAsync: React.MouseEventHandler<HTMLButtonElement>;
}

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
}: CounterProps) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onDecrement}>Decrement</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

export default Counter;
