// import React from "react"

// const Categories = () => {
//   const data = [
//     {
//       cateImg: "./images/category/smart-phone.png",
//       cateName: "Smart Phones",
//       sectionId: "mobile-phones"
      
//     },
//     {
//       cateImg: "./images/category/phone-accessories.png",
//       cateName: "Phone Accessories",
//       sectionId: "phone-accessories"
//     },
//     {
//       cateImg: "./images/category/smart-watch.png",
//       cateName: "Smart Watches",
//       sectionId: "smart-watches"
//     },
//     {
//       cateImg: "./images/category/earphones.png",
//       cateName: "Earphones",
//       sectionId: "earphones"
//     },
//     {
//       cateImg: "./images/category/powerbanks.png",
//       cateName: "Batteries",
//       sectionId: "batteries"
//     },  
//   ]

//   const handleClick = (sectionId) =>{
//     const section = document.getElementById(sectionId);
//     if(section){
//       section.scrollIntoView({behavior: "smooth"});
//     }
//   }

//   return (
//     <>
//       <div className='category '>
//         {data.map((value, index) => {
//           return (
//             <div
//              className='box f_flex' 
//              key={index}
//              onClick={()=>handleClick(value.sectionId)}
//              >
//               <img src={value.cateImg} alt='' />
//               <span>{value.cateName}</span>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }

// export default Categories

import React from "react";

const Categories = ({ handleCategorySelect }) => {
  const data = [
    {
      cateImg: "./images/category/smart-phone.png",
      cateName: "Smart Phones",
      sectionId: "mobile-phones",
    },
    {
      cateImg: "./images/category/phone-accessories.png",
      cateName: "Phone Accessories",
      sectionId: "phone-accessories",
    },
    {
      cateImg: "./images/category/smart-watch.png",
      cateName: "Smart Watches",
      sectionId: "smart-watches"
    },
    {
      cateImg: "./images/category/earphones.png",
      cateName: "Earphones",
      sectionId: "earphones"
    },
    {
      cateImg: "./images/category/powerbanks.png",
      cateName: "Batteries",
      sectionId: "batteries"
    }, 

    
  ];

  const handleClick = (sectionId) => {
    handleCategorySelect(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div
              className="box f_flex"
              key={index}
              onClick={() => handleClick(value.sectionId)}
            >
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
