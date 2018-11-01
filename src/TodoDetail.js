import React from "react";

const TodoDetail = props => {
  return (
    <div>
      <Descript desc={props.desc} />
      <Dones done={props.done} />
    </div>
  );
};

const Descript = props => {
  return <div>Description : {props.desc}</div>;
};

const Dones = props => {
  return <div>Done : {props.done}</div>;
};

export default TodoDetail;
