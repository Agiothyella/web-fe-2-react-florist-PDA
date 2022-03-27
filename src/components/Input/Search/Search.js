import classes from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../../assets/icon/svg/magnifying-glass.svg";

function Search({ className: classProp, placeholder, onSubmit }) {
  const mergedClass = `${classes["form"]} ${classProp || ""}`.trim();

  return (
    <form onSubmit={onSubmit} className={mergedClass}>
      <input type="text" placeholder={placeholder} />
      <button>
        <SearchIcon title="Search" />
      </button>
    </form>
  );
}

export default Search;
