import { useState } from "react";

function Component() {
  const [inputValue, setInputValue] = useState("");
  const getValue = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);

  
  const [state, setValue] = useState({
    val: "",
  });
  const getValue1 = (e) => {
    setValue({
      val: e.target.value,
    });
    console.log(state);
  };

  const [count, setCount] = useState(0);
  const changeInputValue = (e) => {
    setCount((prevState) => prevState + 1);

   
  };

    console.log(count);

  return (
    <div className="Component">

      <input
        className="input"
        onChange={getValue}
        value={inputValue}
      />
   
<p>{inputValue}</p>
      <input
        className="input"
        onChange={getValue1}
        />
      <p>{state.val}</p>

      <input
        className="input"
        onChange={changeInputValue}
      />
     <p>{count}</p>
    </div>
  );
}

export default Component;
