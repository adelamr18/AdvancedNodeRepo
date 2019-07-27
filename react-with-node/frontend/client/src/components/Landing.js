import React from "react";
import constants from './constants';

export default function Landing() {
  return (
    <div className="text-container" style={{ textAlign:'center'}} >
      <h1>Emaily!</h1>
      {constants.text}
      
    </div>
  );
}
