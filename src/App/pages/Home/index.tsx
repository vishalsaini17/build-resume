import { Typography } from "@mui/material";
import { useState } from "react";

type props = {};

const Home: React.FC<props> = () => {
  const [counter, setCounter] = useState(0)

  function inc() {
    setCounter(counter + 1);
  }
  function dec() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
  }

  return (
    <>
      <Typography variant="h1" component={`h1`} sx={{ textAlign: "center", mt: 5 }}>
        Under Development!!!
      </Typography>

      <h2>{counter}</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
export default Home;
