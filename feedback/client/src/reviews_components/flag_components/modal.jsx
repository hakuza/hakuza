import React from "react";

export function ModalDiv(props) {
  return (
    <div>
      <button onClick={props.close}>close</button>
    </div>
  );
}
