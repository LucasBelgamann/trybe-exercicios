import React from "react";

class ImputRadio extends React.Component {
  render() {
    return (
      <>
        <label>
          <input type="radio">Casa</input>
        </label>
        <label>
          <input type="radio">Apartamento</input>
        </label>
      </>
    );
  }
}

export default ImputRadio;
