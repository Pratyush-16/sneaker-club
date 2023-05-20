import React, { useContext } from 'react'
import Filter from '../Components/Filters/Filter'
import { DataContext } from '../Context/DataContext'

export const  AllProduct =()=> {

  const{sneakers}  = useContext(DataContext)
  console.log(sneakers)



  return (
    <div>
        <h1>This is the product page</h1>

        <Filter/>
        <div className="productCard">
        {
          sneakers ?.map((shoes)=> 
            
              <div key={shoes.id} className="prod-card">
                <img  src={shoes.image} alt="shoes"/>
                <p>{shoes.name}</p>
                <p>{shoes.rating}</p>
                
               
              
              <p>{shoes.original_price }</p>

              <p>{shoes. discounted_price}</p>
            
              
              
              <p>{shoes.categoryName}</p>
              <button className="addtocart">Add to Cart</button>

              </div>
          )
        }

        </div>

       
      
    </div>
  )
}
