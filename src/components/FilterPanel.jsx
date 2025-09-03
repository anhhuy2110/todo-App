import "./FilterPanel.css";
// import ProTypes from 'prop-type';

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

const FilterPanel = ({selectedFilterId,setSelectedFilterId}) => {
  // const [selectedFilterId, setSelectedFilterId] = useState("all");

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
              <strong>15</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// FilterPanel.prototype = {
//   selectedFilterId: ProTypes.string,
//   setSelectedFilterId: ProTypes.func,
// }

export default FilterPanel;
