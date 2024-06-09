import { useEffect, useRef, useState } from "react";
import "./ButtonSearch.css";
import { IconEmptyStar, IconSearch, IconStar } from "./Icons";

function RenderCoin({ name }) {
  
  return (
    <div>
      <IconEmptyStar />
      {name}
    </div>
  );
}

function ButtonSearch() {
  const [isOpen, setOpen] = useState(false);
  const [textSearch, setTextSearch] = useState('')
  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  const handleInputChange = (event) => {
    setTextSearch(event.target.value)
  };

  const handleClickOutside = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setOpen(false)
      setTextSearch('')
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="searchBtn">
      <button
        ref={buttonRef}
        className={isOpen ? "button-open" : null}
        onClick={() => setOpen(!isOpen)}
      >
        <IconSearch />
        Search
      </button>
      {isOpen && (
        <div className="modal" ref={modalRef}>
          <div className="input">
            <span>
              <IconSearch />
            </span>
            <input type="text" placeholder="Search..." onChange={handleInputChange} value={textSearch}/>
            <span className="close" onClick={() => setOpen(false)}>
              X
            </span>
          </div>

          <div className="modal-filter-block">
            <div className="fav-filter">
              <IconStar />
              <div className="favorites">Favorites</div>
            </div>
            <div className="all-coins">All Coins</div>
          </div>

          <div className="modal-list">
            {Data.map((item, index) => (
              <RenderCoin key={index} name={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default ButtonSearch;

const Data = [
  "WINGS",
  "STARL",
  "CVP",
  "DOT",
  "ONG",
  "MSOL",
  "JENNER",
  "LXT",
  "ORBR",
  "CMP",
  "KP3R",
  "BNBBULL",
  "HPT",
  "AERGO",
  "MONA",
  "CANDY",
  "MAGE",
  "PLY",
  "MMF",
  "JAPAN225IX",
  "RSR",
  "HARD",
  "UOS",
  "DAD",
  "POA",
  "EVX",
  "NFT",
  "B2M",
  "ANTEX",
  "",
  "RPX",
  "MOTHER",
  "GYEN",
  "PAAL",
  "RVN",
  "ID",
  "EURCV",
  "CERE",
  "MUSD",
  "PYR",
];
