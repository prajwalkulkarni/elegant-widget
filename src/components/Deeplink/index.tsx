import SHARE_ICON from "../../assets/share.png";
import "./style.css";
export const Deeplink = () => {
  function copy() {
    const value = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value);
      alert("Widget link copied");
    }
  }

  return (
    <button onClick={copy} title="Share widget" className="share_widget">
      <img src={SHARE_ICON} width={20} />
    </button>
  );
};
