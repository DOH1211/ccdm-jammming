import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ className, faIcon, btnText, onClick, miniBtn }) {
  let isMobile = useMediaQuery({ maxWidth: 570 });
  if (btnText !== "Search") {
    isMobile = false;
  }
  if (miniBtn) {
    return (
      <button className={className} onClick={onClick}>
        <FontAwesomeIcon icon={faIcon} />
      </button>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {isMobile ? <FontAwesomeIcon icon={faIcon} /> : btnText}
    </button>
  );
}

export default Button;
