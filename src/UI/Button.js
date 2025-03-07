import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ className, faIcon = null, btnText, onClick }) {
  let isMobile = useMediaQuery({ maxWidth: 560 });
  if (btnText !== "Search") {
    isMobile = false;
  }

  return (
    <button className={className} onClick={onClick}>
      {isMobile ? <FontAwesomeIcon icon={faIcon} /> : btnText}
    </button>
  );
}

export default Button;
