import { useCallback, useEffect, useRef, useState } from "react";
import "./ButtonSearch.css";
import { IconEmptyStar, IconSearch, IconStar } from "./Icons";

const Favorites = ["WINGS", "CVP", "DOT", "MSOL", "JENNER"];

const RenderCoin = ({ name }) => {
  const [favIdx, setFavIdx] = useState();
  const [favCoins, setFavCoins] = useState(Favorites);

  useEffect(() => {
    const index = Favorites.indexOf(name);
    setFavIdx(index);
  }, []);

  const addFavorite = () => {
    if (favIdx === -1) {
      Favorites.push(name);
      setFavCoins(name);
    }
    console.log(Favorites);
  };

  if (name === "" || name === undefined) {
    return null;
  }

  return (
    <div className="list-item" onClick={() => addFavorite()}>
      {favIdx === -1 ? <IconEmptyStar /> : <IconStar />}
      <span>{name}</span>
    </div>
  );
};

export default function ButtonSearch() {
  const [dataCoins, setDataCoins] = useState([]);
  const [favCoins, setFavCoins] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(false);
  const [allCoins, setAllCoins] = useState(Data);
  const [isOpen, setOpen] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  const cleanInput = () => {
    setTextSearch("")
    selectedFilter ? setDataCoins(Favorites) : setDataCoins(Data)
  };

  const selectFilter = (value) => {
    if (selectedFilter) {
      setDataCoins(Data);
      setSelectedFilter(value);
    } else {
      setDataCoins(Favorites);
      setSelectedFilter(value);
    }
  };

  const handleInputChange = (event) => {
    let value = event.target.value;
    let filterCoins = Data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setTextSearch(value);
    setDataCoins(filterCoins);
  };

  const handleClickOutside = useCallback((event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setOpen(false);
     // cleanInput();
    }
  }, []);

  useEffect(() => {
    selectedFilter ? setDataCoins(Favorites) : setDataCoins(Data)
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);
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
            <input
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
              value={textSearch}
            />
            {textSearch && (
              <span className="close" onClick={() => cleanInput()}>
                X
              </span>
            )}
          </div>

          <div className="modal-filter-block">
            <div
              className={
                !selectedFilter
                  ? "fav-filter"
                  : "filter-selected " + "fav-filter"
              }
              onClick={() => selectFilter(true)}
            >
              <IconStar />
              <div className="favorites">Favorites</div>
            </div>
            <div
              className={
                selectedFilter ? "all-coins" : "filter-selected " + "all-coins"
              }
              onClick={() => selectFilter(false)}
            >
              All Coins
            </div>
          </div>

          <div className="modal-list">
            {dataCoins.length > 0 ? (
              dataCoins.map((item, index) => (
                <RenderCoin key={index} name={item} />
              ))
            ) : (
              <div className="noData">Not found...</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

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
