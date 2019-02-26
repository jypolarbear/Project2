import React from 'react';

function Pages(props){
  return(
    <div>
      <form>
        <button onClick={props.prevPage}>Previous</button>
        <button onClick={(e) => {
          e.preventDefault();
          const page = parseInt(e.target.value);
          props.resetCharacter();
          props.selectPage(page);
        }} value={props.pageNumber}>{props.pageNumber + 1}</button>

        <button onClick={(e) => {
          e.preventDefault();
          const page = parseInt(e.target.value);
          props.resetCharacter();
          props.selectPage(page);
        }} value={props.pageNumber + 1}>{props.pageNumber + 2}</button>

        <button onClick={(e) => {
          e.preventDefault();
          const page = parseInt(e.target.value);
          props.resetCharacter();
          props.selectPage(page);
        }} value={props.pageNumber + 2}>{props.pageNumber + 3}</button>

        <button onClick={(e) => {
          e.preventDefault();
          const page = parseInt(e.target.value);
          props.resetCharacter();
          props.selectPage(page);
        }} value={props.pageNumber + 3}>{props.pageNumber + 4}</button>

        <button onClick={(e) => {
          e.preventDefault();
          const page = parseInt(e.target.value);
          props.resetCharacter();
          props.selectPage(page);
        }} value={props.pageNumber + 4}>{props.pageNumber + 5}</button>

        <button onClick={props.nextPage}>next</button>


        {/*Do this repeating code for now and clean up (Functions) after your finish with other things such as inputs and detail components
          -- have the previous numbers after incrementing.
          -- characters should refresh when going from characters to other other page to characters.
           */}

        {/*<button onClick={props.selectPage} value={props.pageNumber + 2}>{props.pageNumber + 3}</button>*/}
      </form>
    </div>
  )
}

export default Pages;