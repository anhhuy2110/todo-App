import React, { useContext } from 'react'
import './CategoryList.css';
import { CATEGORY_ITEMS } from './constants';
import { AppContext } from '../context/AppProvider';
import { useMemo } from 'react';

const CategoryList = () => {

  const {todoList, selectCategoryId, setSelectCategoryId} =  useContext(AppContext);
  const countByFilterCategory = useMemo(() => 
        todoList.reduce(
          (acc, cur) => {
            console.log(acc[cur.category]);
            console.log([cur.category])
            return {...acc, [cur.category]: acc[cur.category] + 1}
        }, 
        {
          personal: 0,
          company: 0,
          travel: 0, 
          Idea: 0,
        }
      )
        ,[todoList])

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
            <div className="category-item--count">{countByFilterCategory[category.id]}</div>
          </div>
        )   
      })}
    </div>
  )
}

export default CategoryList;
