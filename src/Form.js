import React from "react";

const Form = props => {
  return (
    <React.Fragment>
      <input
        type="text"
        name="inputDescription"
        onChange={props.handleOnChange}
        value={props.inputDescription}
        onKeyUp={e => {
          if (e.keyCode === 13) {
            props.submitTodo();
          }
        }}
      />
      <button onClick={props.submitTodo}>submit</button>
    </React.Fragment>
  );
};

export default Form;
