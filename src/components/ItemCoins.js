import { IconEmptyStar, IconStar } from "./Icons";
import "./ButtonSearch.css";



export default function ItemCoins({ name, favorite, addFavorite }) {
    const index = favorite.indexOf(name);    
  
    if (name === "" || name === undefined) {
      return null;
    }
  
    return (
      <div className="list-item" onClick={() => addFavorite()}>
        {index === -1 ? <IconEmptyStar /> : <IconStar />}
        <span>{name}</span>
      </div>
    );
  };