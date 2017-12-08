## Table of Contents

- Introduction
- Use Vocalize
- Technical Details

## Introduction

Try it:  [build a web page with vocalize](http://vocalize-3.herokuapp.com/)

Vocalize is a tool used to rapidly prototype web pages through natural spoken language.  The output is a live website (for normal people), or standard HTML, CSS, and Javascript (for nerds) written by Vocalize in real-time as you talk to it.  

Vocalize was created for the Facebook Developer Circles Community Challenge.  This application is built using the React.js library and originally developed from the [Create React App](https://github.com/facebookincubator/create-react-app).

## Use Vocalize

There are several ways to make use of this tool.  The first and simplest is to use Vocalize to create simple landing pages that can be quickly built, deployed, and used on the web.  This may be useful for weekend projects, small events, or marketing campaigns that need microsites generated quickly.

Alternatively, Vocalize may be used to support enterprise web development processes.  These environments typically require more capability and customization, especially in the digital interactive / web development space.  For this, Vocalize can generate HTML, CSS, and Javascript frontends that teams may then easily take and insert into any other project.  When creating a page with Vocalize, you may 'save project' at any time and links to the entire codebase will be provided.

Prototyping web pages through this natural language process eliminates technical complexity for consumers.  For more complex, enterprise-focused projects this tool may help improve efficiency in the laborious task of writing out HTML, CSS, and Javascript.

## Technical Details

Vocalize is built using several technologies, but core is the React js library and node.js.  This project is built from a foundational react codebase that may be accessed here:  https://github.com/facebookincubator/create-react-app

Natural language processing makes use of several tools including but not limited to Microsoft Bing Speech API and IBM Watson.

The application front-end is built in [Bootstrap](https://getbootstrap.com/), [React](https://reactjs.org/), HTML, CSS, Javascript.

The web application is deployed onto Heroku servers.  There is a second "background app" that makes this tool run effectively, it is a Ruby on Rails "vocalize" app that is also hosted on heroku.  This "background app" is only necessary for creating/accessing a Database (postgres) and routing APIs for Vocalize.  You may be asking yourself at this point, "why would you do that?"  That is a good question.  If I were a good developer who could properly code a backend in node.js, then I suppose the Rails app would be pointless.


## Feedback / Questions

Feel free to make any comments, suggestions here or contact me elsewhere.
