import React, {useState} from 'react'
import FrontPage from "../front"
import Description from "../description"
import { HiChevronLeft, HiChevronRight} from "react-icons/hi"

// Array of all the pages on this portfolio
let pages = [
  {
    "name":FrontPage,
    "status":false
  },
  {
    "name":Description,
    "status":true
  }
]

const PageSlider = () =>{
  let Page = null
  const [currentIndex, setCurrentIndex]=useState(0)//variable to control the pages index in the array of pages
  const length = pages.length

  const nextSlide=()=>{ // function to pass to the next page
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);//checking if we are in the last page or not to change it
  }
  const prevSlide=()=>{// function to pass to the previuos page
    setCurrentIndex(currentIndex === 0 ? length - 1: currentIndex - 1)//checking if we are in the first page or not to change it
  }
  pages.forEach((slide, index) =>{// running by all the pages
    if (index === currentIndex){// checking is this is the one how is active
      Page = slide.name
        // console.log(Page)
      }
  })
  
  
  return (
    <div className="slider">
        <HiChevronLeft className="left-arrow" onClick={prevSlide}/>
        <HiChevronRight className="right-arrow" onClick={nextSlide}/>
        {/* <Page className="slider active"/> */}
        {/* {pages.map((slide, index) =>{
          return (
            <div className={currentIndex===index ? "slide active": "slide"} key={index}> */}
        <Page className="slide active"/>
            {/* </div>
          )
        })} */}
    </div>
  )
}

export default PageSlider