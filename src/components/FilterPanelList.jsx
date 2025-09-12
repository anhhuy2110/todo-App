import React from "react";
import useAppContext from "../context/useAppContext";

const FilterPanelList = ({
  countByFilterType,
}) => {
  const {selectedFilterId, setSelectedFilterId} = useAppContext();
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
  

  return (
    <div className="filter-items">
      {FILTER_ITEMS.map((filterItem) => {
        return (
          <div
            key={filterItem.id}
            className={`item 
              ${filterItem.id === selectedFilterId ? "selected" : ""}
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
  );
};

export default FilterPanelList;
