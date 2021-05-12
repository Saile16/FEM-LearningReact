import React from "react";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };

const Pet = (props) => {
  const { name, animal, breed } = props;
  return (
    <div id="blah">
      <h2>{name}</h2>
      <h3>{animal}</h3>
      <h3>{breed}</h3>
    </div>
  );
};
export default Pet;
