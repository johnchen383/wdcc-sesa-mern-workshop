import React from 'react';
import '../styling/index.css';
import '../styling/App.css';



function NoResult() {

    return (
      <div>
        <div className={'noPage'}>
            <h1>No results containing all your search terms were found.</h1>
            
            
            <p>CLICK TO GO BACK <a href={'/'}>here</a></p>
            {/* <Button buttonText={"Find out the meaning of life"} clickAction={getResult} /> */}
        </div>
       
      </div>
  
    );
  }
  
  export default NoResult;