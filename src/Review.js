import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, SetIndex] = useState(1) ;
  const {name,job,image,text} = people[index];

  //trying to add the readmore feature here
  const [readMore,setReadmore] = useState(false);
  //trying to add the readmore feature here

  const checkNumber = (number) => {
    if(number >people.length -1){
      return 0;
    }
    if(number < 0){
      return people.length -1;
    }
    return number;
  }

  const nextPerson = () => {
    SetIndex ((index) => {
      let newIndex = index+1;
      return checkNumber(newIndex);
    })
  }
  const prevPerson = () => {
    SetIndex ((index) => {
      let newIndex = index-1;
      return checkNumber(newIndex);
    })
  }
  //Showing Random person
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index){
      randomNumber = index + 1;
    }
    SetIndex(checkNumber(randomNumber));
  }
  return (
  <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className= "person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="aurthor"> {name}</h4>
    <p className="job">{job}</p>
    <p className= "info">{readMore ? text : `${text.substring(0,100)}...`}
    <button onClick={()=> setReadmore(!readMore)}>{readMore?'show less': 'read more'}</button>
    </p>
    <div className="button-container">
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft />
      </button> 
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight />
      </button>       
    </div>
    <button className="random-btn" onClick={randomPerson}> Suprise me</button>
  </article>
  );
};

export default Review;
