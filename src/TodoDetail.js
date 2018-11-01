import React from "react";

const TodoDetail = props => {
  return (
    <div>
      <Descript desc={props.desc} />
      <Dones done={props.done} />
      <Deletes deleteTodo={() => props.deleteTodo(props.index)} />
    </div>
  );
};

const Descript = props => {
  return <div>Description : {props.desc}</div>;
};

const Dones = props => {
  return <div>Done : {props.done}</div>;
};

const Deletes = props => {
  return <button onClick={props.deleteTodo}>X</button>;
};

export default TodoDetail;
