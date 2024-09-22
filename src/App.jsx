import React, {useState} from "react";
import styled from "styled-components";

const Counter = () => {
   
    const [state, setState] = useState(0);
  
    return (
      <div>
        <h1>State 값 : {state}</h1>
        {/* setState를 사용하여 state의 값을 1씩 증가시킴 */}
        <button onClick={() => setState(state + 1)}>1씩 증가</button>
      </div>
    );
  };