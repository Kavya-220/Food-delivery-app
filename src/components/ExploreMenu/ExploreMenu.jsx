import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

export const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Discover a world of flavors with BiteBuddy. From gourmet dishes to local favorites, our menu has something to satisfy every craving. Browse our selection, featuring the freshest ingredients, and enjoy meals delivered hot and delicious. 
            Find your next favorite dish today!</p>
            <div className="explore-menu-list">
                {menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev==item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                           <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                           <p>{item.menu_name}</p>
                            </div>
                    )
                })}
            </div>
            <hr />
    </div>
  )
}
