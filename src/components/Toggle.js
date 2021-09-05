// import React from "react";
import React, { useState } from "react";

function Toggle() {
  let [isOn, setIsOn] = useState(false);

  function handleClick(){
    setIsOn((isOn) => !isOn);
  }

  return (
  <button style={{ background: "red" }} onClick={handleClick}>{isOn ? "ON" : "OFF"}
  </button>
  )
}

export default Toggle;

// import React, { useState } from "react";

// function Toggle() {
//   const [isOn, setIsOn] = useState(false);

//   function handleClick() {
//     setIsOn((isOn) => !isOn);
//   }

//   const color = isOn ? "red" : "white";

//   return (
//     <button style={{ background: color }} onClick={handleClick}>
//       {isOn ? "ON" : "OFF"}
//     </button>
//   );
// }

// export default Toggle;
