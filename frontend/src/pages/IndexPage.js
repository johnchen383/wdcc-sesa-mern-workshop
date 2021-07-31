import React from 'react';
import '../styling/index.css';
import Button from '../components/Button';
import exampleCall from '../api/exampleCall';
//import CatGif from '../components/cat.js';

function showAlert() {
  alert('You just clicked the button!');
}

async function callServer() {
  const response = await exampleCall();
  if (response.success) {
    alert(`Server says: ${JSON.stringify(response.data)}`);
  } else {
    alert(`Server had an error: ${JSON.stringify(response.error)}`);
  }
}

function IndexPage() {
  return (
    <div id={'index-container'}>
      <div className={'spacer'} />
      <div className={'content'}>
        
        
        <img className={'logo'} src="./noodle.png"/>
        {/* <p>You have reached the default index page of the WDCC x SESA Mern Hackathon.</p>
        <p>This block of text is vertically centered through the magic of <b>CSS flexbox</b></p> */}
        {/* <p>Go to another page <a href={'/another'}>here</a></p> */}
        
        <input className={'search_input'} type="search" placeholder="Search" id="site-search" name="q" aria-label="Search through data"></input>
        <button className={'search_button'}>Click to feed me</button>
        {/* <CatGif></CatGif> */}
        <img className={'cat'} src="https://media.tenor.com/images/dab9fdca9a4f9125b5fae019ec84550c/tenor.gif"/>
        
                <form class="noodle_form">
                  <div class="cust_grid">
                  <label for="key">Keyword:</label>
                <input type="text" id="key" placeholder="Enter keyword"/>
                <label for="type">Type:</label>
                <select id="country" name="country">
                  <option value="joke">Joke</option>
                  <option value="fact">Fact</option>
                  <option value="video">Video</option>
                  <option value="gif">Gif</option>
                </select>
                <label for="content">Content:</label>
                <input type="text" id="content" placeholder="Enter content"/>
                  </div>
                
                {/* <div></div> */}
                <div>
                <button className={'add'} type="submit">Add</button>
                </div>
                
              </form>

        {/* <Button buttonText={'Click me!'} clickAction={showAlert} />
        <Button buttonText={'Say hello to the server!'} clickAction={callServer} /> */}
      </div>
      <div className={'spacer'} />
    </div>
  );
}

export default IndexPage;
