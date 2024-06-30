export function AlertClock() {
  function buttonClick() {
    const currentTime = new Date();
    alert(`The current time is ${currentTime.toLocaleTimeString()}`);
  }
  return (
    <div>
      <p>Click the button below to show the current time.</p>
      <button onClick={buttonClick}>Click me!</button>
    </div>
  );
}
