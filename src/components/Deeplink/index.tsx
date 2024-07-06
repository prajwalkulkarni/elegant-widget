import { useState } from "react";
import SHARE_ICON from "../../assets/share.png";
import "./style.css";
export const Deeplink = () => {
  const [show, setShow] = useState(false);
  function copy() {
    const value = window.location.href;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(value);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }

  return (
    <>
      <button
        onClick={copy}
        disabled={show}
        title="Share widget"
        className="share_widget"
      >
        <img src={SHARE_ICON} width={20} />
      </button>
      <Snackbar show={show} />
    </>
  );
};

const Snackbar = ({
  message = "Widget link copied",
  show,
}: {
  message?: string;
  show: boolean;
}) => {
  return (
    <div id="snackbar" className={show ? "show" : ""}>
      {message}
    </div>
  );
};
