import React, { useContext } from 'react'
import './CategoryList.css';
import { CATEGORY_ITEMS } from './constants';
import { AppContext } from '../context/AppProvider';

const CategoryList = () => {

  const {selectCategoryId, setSelectCategoryId} =  useContext(AppContext);

  return (
    <div className='category-list'>
      <p className='category-title'>Category</p>
      {CATEGORY_ITEMS.map((category) => {
        return (
          <div 
            className={`category-item
             ${
                category.id === selectCategoryId ? "selected" : ""
              }
            `} 
            key={category.id} 
            onClick={() => {
              setSelectCategoryId(category.id);
            }}
          >
            <div className="name-item">
                <img src="./public/folder.svg" alt="folder" />
                <p>{category.label}</p>
            </div>
            <div className="category-item--count">2</div>
          </div>
        )   
      })}
    </div>
  )
}

export default CategoryList;
