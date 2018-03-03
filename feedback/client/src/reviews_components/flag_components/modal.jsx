import React from "react";

export function ModalDiv(props) {
  return (
    <div>
      <div className="subTitle">Report Abuse</div>
      <p className="modalText">
        Flagged content is reviewed by Udemy staff to determine whether it
        violates Terms of Service or Community Guidelines. If you have a
        question or technical issue, please contact our{" "}
        <a
          target="blank" // opens a new tab when link is clicked
          href="https://support.udemy.com/hc/en-us?flash_digest=c746089a37590bdef80f6eabbbe529c74a14be49"
        >
          Support team here
        </a>
      </p>
      <button onClick={props.close}>close</button>
    </div>
  );
}
