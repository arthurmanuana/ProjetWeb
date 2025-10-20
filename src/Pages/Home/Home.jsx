
import React, { useState } from 'react';
import './Home.css'
import Header from '../../Composant/Header/Header';
import ExplorerMenu from '../../Composant/ExploreMenu/ExplorerMenu';
import FoodDisplay from '../../Composant/FoodDisplay/FoodDisplay';
import Cookspace from '../../Composant/Cookspace/Cookspace';

const Home = () => {

    const [category, setCategory] = useState("All")

    return (
        <div>
           <Header />
           <ExplorerMenu category={category} setCategory={setCategory} /> 
           <FoodDisplay category={category} />
           <Cookspace />
        </div>
    );
};

export default Home;