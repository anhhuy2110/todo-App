import "./FilterPanel.css";
// import PropTypes from 'prop-types';

const FILTER_ITEMS = [
  {
    id: "all",
    label: "All",
    iconPath: "./public/inbox.png",
  },

  {
    id: "important",
    label: "Important",
    iconPath: "/public/flag.png",
  },

  {
    id: "completed",
    label: "Completed",
    iconPath: "./public/check.png",
  },

  {
    id: "deleted",
    label: "Deleted",
    iconPath: "./public/delete.png",
  },
];

const FilterPanel = ({selectedFilterId,setSelectedFilterId, todoList}) => {
  // const [selectedFilterId, setSelectedFilterId] = useState("all");

  const countByFilterType = todoList.reduce((acc, cur) => {
    let newAcc = {...acc};
    if(cur.isCompleted === true)
      newAcc = {...newAcc, completed: newAcc.completed + 1};
    if(cur.isImportant === true) 
      newAcc = {...newAcc, important: newAcc.important + 1};
    if(cur.isDeleted === true)
      newAcc = {...newAcc, deleted: newAcc.deleted + 1};
    return newAcc; 
  },{all: todoList.length, important: 0, completed: 0, deleted: 0});

  console.log(countByFilterType);

  return (
    <div className="filter-panel">
      <div className="search">
        <input type="text" placeholder="Search" name="search-icon" />
      </div>
      <div className="filter-items">
        {FILTER_ITEMS.map((filterItem) => {
          return (
            <div 
            key={filterItem.id}  
            className={`item 
              ${filterItem.id === selectedFilterId ? "selected" : ''}
              `}
              onClick={() => setSelectedFilterId(filterItem.id)}
              >
              <div className="item-name">
                <div className="img">
                  <img src={filterItem.iconPath} alt="All" />
                </div>
                <p>{filterItem.label}</p>
              </div>
              <strong>{countByFilterType[filterItem.id]}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// FilterPanel.prototype = {
//   selectedFilterId: PropTypes.string,
//   setSelectedFilterId: PropTypes.func,
//   todoList: PropTypes.array,
// }

export default FilterPanel;
