import Menu from "./Menu";
import React,{useState} from "react";

const Gallery = () => {

    const[items,setItems]=useState(Menu);

    const myfilter=(categItem)=>{
       const updatedItems=Menu.filter((curElem)=>{
            return curElem.category === categItem;
       });
       setItems(updatedItems)
    }








  return (
    <div>
         <h3 className="text-center text-danger">Order Your Food And Enjoy</h3>
      <div className="container mt-5 d-flex justify-content-evenly">
         
        <button className="btn btn-outline-danger" onClick={()=>myfilter('breakfast')}>Breakfast</button>
        <button className="btn btn-outline-danger" onClick={()=>myfilter('lunch')}>Lunch</button>
        <button className="btn btn-outline-danger" onClick={()=>myfilter('evening')}>Evening</button>
        <button className="btn btn-outline-danger" onClick={()=>myfilter('dinner')}>Dinner</button>
        <button className="btn btn-outline-danger" onClick={()=>setItems(Menu)} >All</button>
      </div>




      <div className="container mt-5">
        <div className="row">

            {
                items.map((elem)=>{
                   const{id,name,Image,description,price}=elem;
                   return(
                    <div className="col-md-4 mt-2 mb-2">
                    <div className="card shadow-lg text-center rounded border border-danger">
               
                      <img src={Image} className="card-img-top img-fluid w-25 rounded mx-auto mt-3" alt="..." />
                      <div className="card-body">
                 
                        <h5 className="card-title">{name}</h5>
                   
                        <p className="description">
                            {description}
                         </p>
        
                
                        <h5 className="price">{price}</h5>
        
                        <a href="#" className="btn btn-outline-danger btn-sm">
                          OrderNow
                        </a>
                      </div>
                    </div>
                  </div>
                   )
                })
            }





        
        </div>
      </div>
    </div>
  );
};

export default Gallery;
