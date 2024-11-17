import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GiftExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    console.log(newCategory);
    setCategories([newCategory,...categories]);
  };
  return (
    <>
        <h1>GiftExpertApp</h1>
        <AddCategory 
          //setCategories={ setCategories } 
          onNewCategory={value => onAddCategory(value)}
        />
          {
            categories.map((category) => (
                <GifGrid 
                  key={ category } 
                  category={category} 
                />
              ))
          }
    </>
  )
}
