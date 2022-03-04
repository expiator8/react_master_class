import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    // ES6문법
    // ==const value = event.currentTarget.value;

    // const value = event.currentTarget.value;
    // const tagName = event.currentTarget.tagName;
    // const width = event.currentTarget.width;
    // const id = event.currentTarget.id;
    // ==
    // const{
    //   cuttentTarget:{value,tagName,width,id}
    // } = event;

    // const x = event.x;
    // const y = event.y;
    // ==
    // const { x, y } = event;

    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <div>
      <Container>
        <H1>protected</H1>
      </Container>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
