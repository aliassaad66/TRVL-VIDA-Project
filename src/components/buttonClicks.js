const React = require("react");

const { useState } = require("react");

function ButtonClicks() {
  const [count, setCount] = useState(0);
  function onButtonClick() {
    setCount(count + 1); // start counting with 1
  }
  return (
    <div>
      <h3>You have liked {count} times</h3>
      <button onClick={onButtonClick}>Like</button>
    </div>
  );
}

module.exports = ButtonClicks;