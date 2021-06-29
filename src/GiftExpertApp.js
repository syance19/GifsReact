import { useState } from "react";
import React from 'react';
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'DragonBall'];

    const [categories, setCategories] = useState(['One Punch']);
    
    // const handleAdd=() =>{
    //     setCategories( [...categories,'HunterXHunter']);
    // }

    return (
        <div>
            <h2>GiftExpert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <ol>
                { 
                    categories.map((category)=>(
                        <GifGrid 
                        key={category}
                        category={category}/>
                    ))
                }
            </ol>
        </div>
    )
}
