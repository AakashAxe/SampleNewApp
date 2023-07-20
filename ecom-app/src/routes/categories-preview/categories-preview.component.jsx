import { Fragment, useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { CategoriesContext, CategoriesProvider } from '../../contexts/categories.context';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log("Shop Here")
  
  return (
    
          <Fragment>
            {
              Object.keys(categoriesMap).map((title)=>{
                const products = categoriesMap[title]
                return <CategoryPreview title={title} products={products}/>
              }

              )
            }
          </Fragment>
        
      
  );
};

export default CategoriesPreview;
