import { useState } from "react";

function Square() {
  const [value, setvalue] = useState(null);

  function handleClick (){
    setvalue('X');
  }

  return (
    <button className="square" onClick={handleClick}> 
      {value} 
    </button>
  );
}

export default function Board() {
  return(
   <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
   </> 
  ); 
}

// export function Square1() {
//   return <button className="square">X</button>;
// }
