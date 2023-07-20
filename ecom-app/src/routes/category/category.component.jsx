import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import './category.styles.scss'

import { useParams } from 'react-router-dom';


const Category = () =>{
    const {category} =  useParams();
    const { categoriesMap } = useContext(CategoriesContext);
   

}

export default Category;