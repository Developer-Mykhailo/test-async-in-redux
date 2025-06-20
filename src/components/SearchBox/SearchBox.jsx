import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDebouncedCallback } from "use-debounce";

// const SearchBox = () => {
//   const dispatch = useDispatch();
//   return (
//     <div className={s.search_wrap}>
//       <p>Find contacts by name</p>
//       <input
//         type="text"
//         id="search"
//         name="search"
//         onChange={(e) => dispatch(changeFilter(e.target.value))}
//       />
//     </div>
//   );
// };

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const debounced = useDebouncedCallback(
    (value) => dispatch(changeFilter(value)),
    300
  );

  //JSX
  return (
    <div className={s.search_wrap}>
      <p>Find contacts by name</p>
      <input
        type="text"
        id="search"
        name="search"
        defaultValue={filterValue}
        onChange={(e) => debounced(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

// const SearchBox = () => {
//   const dispatch = useDispatch();
//   const filterValue = useSelector(selectNameFilter);

//   const [text, setText] = useState(filterValue);
//   const [debounceText] = useDebounce(text, 300);

//   useEffect(() => {
//     dispatch(changeFilter(debounceText));
//   }, [dispatch, debounceText]);

//   return (
//     <div className={s.search_wrap}>
//       <p>Find contacts by name</p>
//       <input
//         type="text"
//         id="search"
//         name="search"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </div>
//   );
// };
