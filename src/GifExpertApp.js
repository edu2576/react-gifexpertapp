import React, { useState } from "react";
import PropTypes from "prop-types"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);
    return (   
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category} />
                    })
                }
            </ol> 
        </>
    );
}

export default GifExpertApp;