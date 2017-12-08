# vocalize:  create web pages through natural language

vocalize is a tool used to rapidly prototype web pages through natural spoken language.  The output of this tool is a live website (for normal people), or alternatively you may access the HTML, CSS, and Javascript output (for nerds) that is written by vocalize in real-time as you talk to it.

![vocalize screenshot building an application](https://s3.amazonaws.com/responsivetech/assets/vehicles.png "vocalize screenshot building an application")
_Figure 1: screenshot of the web building experience with vocalize_

## table of contents

- introduction
- use vocalize
- technical details
- open source

## introduction

Try it:  [build a web page with vocalize](http://vocalize-3.herokuapp.com/)

vocalize was created for the [Facebook Developer Circles Community Challenge](https://developercircles.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=portfolio).  This application is built on the React.js library and originally developed from the [Create React App project](https://github.com/facebookincubator/create-react-app).

## use vocalize

There are several ways to make use of this tool.  The simplest process is to use vocalize to create web pages that are built, deployed, and viewable on the web in minutes.  This may be useful for weekend projects, small events, or marketing campaigns that need microsites generated quickly.  To do this:

1.  Head to [vocalize](http://vocalize-3.herokuapp.com/) and click "try it"
2.  Tell vocalize what you want to make.  If you need examples of things to say, just ask for "help"
3.  When you are satisfied with your progress you may "save project".  A link to the live website will be available as well as a link to the HTML and CSS.

vocalize may be used to support complex web development processes.  These environments typically require more capability and customization, especially in the digital interactive / web development space.  Technical environments like this are often found at the "enterprise". For these scenarios, vocalize can generate HTML, CSS, and Javascript frontends that teams may then grab and insert into any other project, or continue editing code manually through a text editor.

Prototyping web pages through this natural language process eliminates technical complexity for consumers.  For more complex, enterprise-focused projects this tool may help improve efficiency in the laborious task of writing out HTML, CSS, and Javascript.

## technical details

Vocalize is built using several technologies, but core is the React js library and node.js framework.

Natural language processing makes use of several tools including but not limited to Microsoft Bing Speech API and IBM Watson speech-to-text, text-to-speech, and conversation.

The application front-end is built in [Bootstrap](https://getbootstrap.com/), [React](https://reactjs.org/), HTML, CSS, Javascript.

The web application is deployed onto Heroku servers.  There is a second "background app" that makes this tool run effectively, it is a Ruby on Rails "vocalize" app that is also hosted on heroku.  This "background app" is only necessary for creating/accessing a Database (postgresql) and routing APIs for Vocalize.  If you have even modest development experience, you may be asking yourself, "why would he do that?"  That is a good question.  If I were a good developer who could properly code a backend in node.js, then I suppose the Rails app would be unnecessary.

## open source

This repository contains the vocalize product codebase.  Feel free to poke around and make suggestions, or grab the code and use it for your own needs.  

## Feedback / Questions

Feel free to make any comments, suggestions here or contact me elsewhere.
