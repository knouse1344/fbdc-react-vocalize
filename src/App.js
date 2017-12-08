import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 
import logo from './logo.svg';
import './App.css';


/////////////////////////////////////// Vocalize Tools


var latestObject = ""
var documentIndex = $("#product .site-container")

//////////// Create html content functions

// Create html section
function addSection(el) {

  var htmlSection = $('<div class="section"><div class="container-fluid"><div class="row"><div class="content col-sm-12"><div class="section-content"></div></div></div></div></div>')
  documentIndex.append(htmlSection)
  latestObject = htmlSection


  // Add completed note to conversation
  if (typeof addMessageToList != "undefined") {
    
    // Create the message html object
      var messageHtml = '<p class="out message response"><span>Section Added.</span></p>'
    
    // prepend to container
    setTimeout(function(){
      $(".response-container").prepend(messageHtml)
    }, 200)
    setTimeout(function() {
        // Move the message
        $(".response-container p.out").removeClass("out")
    }, 350)
  }
  

  // return <div class="section"><div class="container-fluid"><div class="row"><div class="content col-sm-12"><div class="section-content"></div></div></div></div></div>;
}


// Create html banner
function addBanner(el) {

  var htmlBanner = '<div class="banner"><div class="container-fluid"><div class="row"><div class="content col-sm-12"><div class="banner-content"></div></div></div></div></div>'
  $(el).prepend(htmlBanner)
  latestObject = $(".banner").first()

  // Add completed note to conversation
  if (typeof addMessageToList != "undefined") {
    
    // Create the message html object
      var messageHtml = '<p class="out message response"><span>Banner Added.</span></p>'
    
    // prepend to container
    setTimeout(function(){
      $(".response-container").prepend(messageHtml)
    }, 200)
    setTimeout(function() {
        // Move the message
        $(".response-container p.out").removeClass("out")
    }, 350)
  }
}





/////////// Save current project

function saveProject() {

    // Copy data to form
    var htmlContent = $("#product .site-container").html()
    var cssContent = "#site h1,#site h3,#site p,.site-container h1,.site-container h3,.site-container p{font-family:Barlow,sans-serif;color:#333}#site .panel h4,#site .red-gradient-bg,.site-container .panel h4,.site-container .red-gradient-bg{filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#dd2f46', endColorstr='#870044', GradientType=1 )}#site .section,.site-container .section{font-size:1rem}#site .banner,.site-container .banner{display:block;padding:6em 0;min-height:60vh;background:url(/assets/doodles.png) center #ccc;font-size:3em;transition:background-image 1s ease-in-out}#site h1,.site-container h1{font-size:6rem;line-height:9rem;margin:0 0 .25em}#site h3,.site-container h3{font-size:4rem;line-height:6rem;margin:0 0 .5em}#site p,.site-container p{font-size:2.5rem;line-height:3rem;margin:0 0 1em}#site i,.site-container i{display:inline-block;margin:.5rem;font-size:4rem;color:#333}#site #wavesContainer,.site-container #wavesContainer{position:relative;left:0;top:0;width:100%}#site #wavesContainer canvas,.site-container #wavesContainer canvas{width:100%}#site .red-gradient-bg,.site-container .red-gradient-bg{background:#dd2f46;background:-moz-linear-gradient(-45deg,#dd2f46 0,#870044 100%);background:-webkit-linear-gradient(-45deg,#dd2f46 0,#870044 100%);background:linear-gradient(135deg,#dd2f46 0,#870044 100%)}#site .section,.site-container .section{padding:4em 0;border:0;background:#fff}#site .section h3,.site-container .section h3{font-size:4rem;margin:0 0 .5em;color:#870044}#site .section p,.site-container .section p{font-size:1.75rem;line-height:1.5em;margin:0 0 1em}#site .section p a i,.site-container .section p a i{display:inline-block;font-size:1.5em;margin-right:.25em;vertical-align:middle}#site .section i,.site-container .section i{display:inline-block;font-size:12em}#site .text-center,.site-container .text-center{text-align:center}#site .text-left,.site-container .text-left{text-align:left}#site .text-right,.site-container .text-right{text-align:right}#site .panel,.site-container .panel{display:inline-block;vertical-align:top;width:30%;outline:0;border:0;margin:1em 1.25%;border-radius:8px;box-shadow:0 0 5px rgba(0,0,0,.25)}#site .panel h4,.site-container .panel h4{margin:0;font-weight:600;padding:1.5rem;background:#dd2f46;background:-moz-linear-gradient(-45deg,#dd2f46 0,#870044 100%);background:-webkit-linear-gradient(-45deg,#dd2f46 0,#870044 100%);background:linear-gradient(135deg,#dd2f46 0,#870044 100%);font-size:2rem;color:#fff}#site .panel p,.site-container .panel p{font-size:1.75rem;padding:1.5rem;margin:0;min-height:8em}#site .font-color-white a,#site .font-color-white div,#site .font-color-white h1,#site .font-color-white h2,#site .font-color-white h3,#site .font-color-white h4,#site .font-color-white h5,#site .font-color-white i,#site .font-color-white p,#site .font-color-white span,.site-container .font-color-white a,.site-container .font-color-white div,.site-container .font-color-white h1,.site-container .font-color-white h2,.site-container .font-color-white h3,.site-container .font-color-white h4,.site-container .font-color-white h5,.site-container .font-color-white i,.site-container .font-color-white p,.site-container .font-color-white span{color:#fff}#site .unicorn,.site-container .unicorn{position:relative}#site .unicorn img,.site-container .unicorn img{display:block;width:auto;max-width:100%}"
    var jsContent = ""
    
    // // Deal with HTML bullshit
    // htmlContent.replace("&quot;", "'")
    // cssContent.replace("&quot;", "'")
    // jsContent.replace("&quot;", "'")
    
    // Set content to form
    $("form#new_page .html-input").val(htmlContent)
    $("form#new_page .css-input").val(cssContent)
    $("form#new_page .js-input").val("")
    
    // Get data and prepare for sending
    var codeData = $("form#new_page").serialize()
    
    // Send via API TO SAVE TO RAILS POSTGRES DATABASE
    var endpoint = "https://vocalize-3.herokuapp.com/savepage"

    // console.log(codeData)

    $.post(endpoint, codeData).done(function(data) {
    responseMessage("Project saved.  Site available here: <a target='_blank' href='https://vocalize-3.herokuapp.com/site?url=" + data + "'>https://vocalize-3.herokuapp.com/sites?url=" + data + "</a>.<br><br> Your code is available here: <a target='_blank' href='https://vocalize-3.herokuapp.com/codebase?url=" + data + "'>https://vocalize-3.herokuapp.com/sites?url=" + data + "</a>.")
    })
}


////////// Add response message to dialogue list

function responseMessage(text) {
  // Add completed note to conversation
    
  // Create the message html object
  var messageHtml = '<p class="out message response"><span>' + text + '</span></p>'
  
  // prepend to container
  setTimeout(function(){
    $(".response-container").prepend(messageHtml)
  }, 200)
  setTimeout(function() {
      // Move the message
      $(".response-container p.out").removeClass("out")
      // responsiveVoice.speak(text, "UK English Female", {rate: 1});
  }, 350)
}






// Query bing image api
var queryInput = $("#query input#term")
queryInput.val("forest")




function imageSearch(query) {
  
  $("#query input#term").val(query)
  $("#imageSearchForm").submit()

}

function imageFromQuery(num) {

  var image = $("#_results p.images nobr a").first().attr("href")
  return image
}





// Add section react element

class Addsection extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    ////// MAKE FUNCTIONS HERE AND JUST SPOOF THE FUCKING ONCLICKS 
    //////

    addSection(documentIndex)
  }

  render() {

    return (
      <button id="addSection" onClick={this.handleClick}></button>
    );
  }
}


// Add banner react element

class Addbanner extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    addBanner(documentIndex)
  }

  render() {

    return (
      <button id="addBanner" onClick={this.handleClick}></button>
    );
  }
}




class Board extends React.Component {
  render() {
    return (
      <div>
        <Addsection />
        <Addbanner />
      </div>
    )
  }
}


ReactDOM.render(
  <Board />,
  document.getElementById('root')
);







