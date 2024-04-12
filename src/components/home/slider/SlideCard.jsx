import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link, useNavigate } from "react-router-dom"


const SlideCard = () => {

  const navigateToProducts=useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }

  const handleClick=(id)=>{
    console.log(id);
    if(id===1){
      navigateToProducts("/mobilephones")
    } else if(id===2){
      navigateToProducts("/smartwatches")
    } else if(id===3){
      navigateToProducts("/earphones")
    } else if(id===4){
      navigateToProducts("/batteries")
    }
  }

  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
                <div className='left'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  {/* <Link to='/mobilephones'> */}
                  <button  onClick={()=>handleClick(value.id)} className='btn-primary'>Visit Collections</button>
                  {/* </Link> */}
                </div>
                <div className='right'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
