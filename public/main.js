
$(document).ready(function() {


	// Deal with typed instead of spoken
    $("#readout").on('keyup', function (e) {

        if (e.keyCode == 13) {
            
            // submit query
            var output = $("#readout").val()
			dialogue(output)
        }
    });
})




// Sinewaves

function makeWaves(el) {

	var embed = '<canvas id="waves"></canvas>'
	
	$(el).append(embed)

	var waves = new SineWaves({
		el: document.getElementById('waves'),

		speed: 4,

		width: 1600,

		height: 175,

		ease: 'SineInOut',

		wavesWidth: '100%',

		waves: [
		// {
		//   timeModifier: 4,
		//   lineWidth: 1,
		//   amplitude: -25,
		//   wavelength: 25
		// },
		// {
		//   timeModifier: 2,
		//   lineWidth: 2,
		//   amplitude: -50,
		//   wavelength: 50
		// },
		{
		  timeModifier: 1.75,
		  lineWidth: .5,
		  amplitude: -25,
		  wavelength: 40
		},
		{
		  timeModifier: 1,
		  lineWidth: 6,
		  amplitude: -60,
		  wavelength: 120
		},
		{
		  timeModifier: 0.5,
		  lineWidth: 2,
		  amplitude: -40,
		  wavelength: 200
		}
		],

		// Called on window resize
		resizeEvent: function() {
		var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
		gradient.addColorStop(0,"rgba(255, 255, 255, 0)");
		gradient.addColorStop(0.3,"rgba(255, 255, 255, .5)");
		gradient.addColorStop(0.5,"rgba(255, 255, 255, .75)");
		gradient.addColorStop(1,"rgba(255, 255, 255, 1)");

		var index = -1;
		var length = this.waves.length;
		  while(++index < length){
		  this.waves[index].strokeStyle = gradient;
		}

		// Clean Up
		index = void 0;
		length = void 0;
		gradient = void 0;
		}
	});
}




/////////////////////////////////////// Vocalize Tools


var latestObject = ""
var documentIndex = ""

//////////// Create html content functions

// Create html section
function addSection(el) {

	var htmlSection = $('<div class="section"><div class="container-fluid"><div class="row"><div class="content col-sm-12"><div class="section-content"></div></div></div></div></div>')
	$(el).append(htmlSection)
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
}

// Create html banner
function addBanner(el) {

	var htmlBanner = '<div class="banner"><div class="container-fluid"><div class="row"><div class="content col-sm-12"><div class="banner-content"></div></div></div></div></div>'
	$(el).prepend(htmlBanner)
	latestObject = $(".banner").first()

	console.log(latestObject)

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
// Create html text box
function addTextBox(el) {

	var htmlTextBox = '<div class="col-sm-12"><div class="text-box">Sample Text Box</div></div>'
	$(el).append(htmlTextBox)
	
}
// Add heading to something
function addHeading(el, text) {
	var htmlParagraph = '<h1>' + text + '</h1>'
	var container = $(el).find(".content").children(":first")
	$(container).prepend($(htmlParagraph))
	responseMessage(text + " added.")
}
// Add subheading to something
function addSubHeading(el, text) {
	var htmlParagraph = '<h3>' + text + '</h3>'
	var container = $(el).find(".content").children(":first")
	if ($(container).find("h1").length > 0) {
		$(htmlParagraph).insertAfter($(container).find("h1"))
	} else {
		$(container).prepend($(htmlParagraph))
	}
}
// Add paragraph to something
function addParagraph(el, text) {
	var htmlParagraph = '<p>' + text + '</p>'
	var container = $(el).find(".content").children(":first")
	$(container).append(htmlParagraph)
	responseMessage("Text added.")
}
// Add icon
function addIcon(el, text) {
	var html = '<i class="fa fa-' + text + '"></i>'
	var container = $(el).find(".content").children(":first")
	$(container).append(html)
}
function addPanel(el, text) {
	var panel = '<div class="panel"><h4>Title</h4><p>' + text + '</p></div>'
	var container = $(el).find(".content").children(":first")
	$(container).append(panel)
}
// Change text
function changeText(el, text) {
	$(el).html(text)
}
// Change font colors
function fontColors(color) {
	$(".banner").addClass(color)
	$(".section").addClass(color)
	responseMessage("Font color updated.")
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




/////// Image search


// Grab first image
// $("#_results p.images img").first().attr("src")



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





var intents = []
var quantity = 0

function dialogue(text) {

	// Reset intent
	intents = []

	// Prepare dailogue text by downcasing
	var preparedText = text.toLowerCase()

	// Set document index if it isn't yet
	documentIndex = $("#product .site-container")

	// Set latest or most recent object
	if (latestObject == "") {
		latestObject = $(documentIndex)
	}


	///// Run through to find intent
	// Text wants to "create", so unify for add, new, create, start
	if (preparedText.includes("create") || preparedText.includes("add") || preparedText.includes("new") || preparedText.includes("start") || preparedText.includes("make")) {
		intents.push("add")
	} else if (preparedText.includes("save") || preparedText.includes("get code") || preparedText.includes("export code") || preparedText.includes("show code")) {
		intents.push("save")
	} else if (preparedText.includes("hello") || preparedText.includes("hey")) {
		intents.push("hello")
	} else if (preparedText.includes("help")) {
		intents.push("help")
	} else if (preparedText.includes("change") || preparedText.includes("edit")) {
		intents.push("change")
	} else if (preparedText.includes("find")) {
		intents.push("find")
	} else if (preparedText.includes("get code") || preparedText.includes("export code") || preparedText.includes("show code")) {
		intents.push("export")
	} else if (preparedText.includes("align") || preparedText.includes("text align") || preparedText.includes("align text")) {
		intents.push("text-align")
	}

	if (preparedText.includes("gettysburg address")) {
		intents.push("gettysburg")

		if (preparedText.includes("unicorn")) {
			intents.push("unicorn")
		} else {

		}
	}

	//// Determine if there is a quantity mentioned
	if (preparedText.includes("first") || preparedText.includes("second") || preparedText.includes("third") || preparedText.includes("1") || preparedText.includes("2") || preparedText.includes("3")) {

		if (preparedText.includes("first") || preparedText.includes("1")) {
			quantity = 1
		} else if (preparedText.includes("second") || preparedText.includes("2")) {
			quantity = 2
		} else if (preparedText.includes("third") || preparedText.includes("3")) {
			quantity = 3
		} else if (preparedText.includes("fourth") || preparedText.includes("4")) {
			quantity = 4
		} else if (preparedText.includes("fifth") || preparedText.includes("5")) {
			quantity = 5
		} else if (preparedText.includes("sixth") || preparedText.includes("6")) {
			quantity = 6
		} else if (preparedText.includes("seventh") || preparedText.includes("7")) {
			quantity = 7
		}

	} else if (preparedText.includes("one") || preparedText.includes("two") || preparedText.includes("three")) {
		console.log("yo")
		if (preparedText.includes("one")) {
			quantity = 1
		} else if (preparedText.includes("two")) {
			quantity = 2
		} else if (preparedText.includes("three")) {
			quantity = 3
		} else if (preparedText.includes("four")) {
			quantity = 4
		} else if (preparedText.includes("five")) {
			quantity = 5
		} else if (preparedText.includes("six")) {
			quantity = 6
		} else if (preparedText.includes("seven")) {
			quantity = 7
		}
	}


	/////////////////// Control intents here

	/////////////////// Change font color
	if (intents.indexOf("change") > -1) {

		if (preparedText.includes("font color")) {

			// let's change font color

			if (preparedText.includes("white")) {
				fontColors("font-color-white")
			}
		}

		if (preparedText.includes("change text")) {

			if (preparedText.includes("says")) {
				var dictation = preparedText.split("says ")[1]
				changeText(latestObject, dictation)
			} else if (preparedText.includes("reads")) {
				var dictation = preparedText.split("reads ")[1]
				changeText(latestObject, dictation)
			}			
		}
	}


	///////////////////// Text Align
	if (intents.indexOf("text-align") > -1) {
		
		// left
		if (preparedText.includes("left")) {
			latestObject.addClass("text-left")
			responseMessage("Text left aligned.")
		} else if (preparedText.includes("right")) {
			latestObject.addClass("text-right")
			responseMessage("Text right aligned.")
		} else if (preparedText.includes("center")) {
			latestObject.addClass("text-center")
			responseMessage("Text center aligned.")
		} else {

		}
	}


	//////////////////// This is where we add things
	if (intents.indexOf("add") > -1) {

		if (preparedText.includes("section")) {

			if (quantity != 0) {

				for (var i = 0; i < quantity; i++) {
					// add section
					// addSection(documentIndex)
					$("#addSection").click()
  					latestObject = $(".section").last()
				}

			} else {
				// add section
				// addSection(documentIndex)
				$("#addSection").click()
  				latestObject = $(".section").last()
			}

		} else if (preparedText.includes("add a banner") || preparedText.includes("add banner")) {

			if (preparedText.includes("background image")) {

				// add background image to banner
				var searchQuery = preparedText.split("search for")[1]

				// add first result from image search 
				imageSearch(searchQuery)

				setTimeout(function() {
					var firstResult = $("#_results p.images nobr a").first().attr("href")
					$(".banner").css("background-image", 'url("' + firstResult + '")').css("background-size", "cover").css("background-position", "center").css("background-repeat", "no-repeat")
				}, 2000)

			} else {

				// add banner
				// addBanner(documentIndex)
				$("#addBanner").click()
  				latestObject = $(".banner").first()

			}

		} else if (preparedText.includes("text")) {

			// add text box
			addTextBox(latestObject)

		} else if (preparedText.includes("paragraph")) {

			// add paragraph

			if (preparedText.includes("says")) {
				var dictation = preparedText.split("says ")[1]
				addParagraph(latestObject, dictation)
			} else if (preparedText.includes("reads")) {
				var dictation = preparedText.split("reads ")[1]
				addParagraph(latestObject, dictation)
			}

		} else if (preparedText.includes(" heading")) {

			// Add heading

			if (preparedText.includes("says")) {
				var dictation = preparedText.split("says ")[1]
				addHeading($(latestObject), dictation)
			} else if (preparedText.includes("reads")) {
				var dictation = preparedText.split("reads ")[1]
				addHeading($(latestObject), dictation)
			}

		} else if (preparedText.includes("subtitle") || preparedText.includes(" subheading")) {

			// Add subheading

			if (preparedText.includes("says")) {
				var dictation = preparedText.split("says ")[1]
				addSubHeading($(latestObject), dictation)
			} else if (preparedText.includes("reads")) {
				var dictation = preparedText.split("reads ")[1]
				addSubHeading($(latestObject), dictation)
			}

		} else if (preparedText.includes("icon")) {

			// Add icon
			if (preparedText.includes("icon of")) {
				var type = preparedText.split("icon of ")[1]
				addIcon($(latestObject), type)				
			}

		} else if (preparedText.includes("gradient background")) {

			// Add gradient background
			if (preparedText.includes("red")) {

				if ($(latestObject).parents(".section").length > 0) {
					$(latestObject).parents(".section").addClass("red-gradient-bg")
			  		responseMessage("Background updated.")
				} else if ($(latestObject).parents(".banner").length > 0) {
					$(latestObject).parents(".banner").addClass("red-gradient-bg")
			  		responseMessage("Background updated.")
			  	} else {
					$(latestObject).addClass("red-gradient-bg")
			  		responseMessage("Background updated.")
			  	}
			}

		} else if (preparedText.includes("panel")) {

			// Add a panel
			if (preparedText.includes("says")) {
				var dictation = preparedText.split("says ")[1]
				addPanel($(latestObject), dictation)
			} else if (preparedText.includes("reads")) {
				var dictation = preparedText.split("reads ")[1]
				addPanel($(latestObject), dictation)
			}

		} else if (preparedText.includes("waves")) {

			// Add waves
			if (preparedText.includes("banner")) {

				if ($(".banner h1").length > 0) {
			    	$('<div id="wavesContainer"></div>').insertAfter(".banner h1")
			    	makeWaves("#wavesContainer")
				} else if ($(".banner .banner-content").length > 0) {
			    	$('.banner .banner-content').append('<div id="wavesContainer"></div>')
			    	makeWaves("#wavesContainer")
				} else {
			    	$(".banner").append('<div id="wavesContainer"></div>')
			    	makeWaves("#wavesContainer")
				}

			} else {

				// If it's including banner...
				if ($(".banner").length > 0) {

					if ($(".banner h1").length > 0) {
				    	$('<div id="wavesContainer"></div>').insertAfter(".banner h1")
				    	makeWaves("#wavesContainer")
					} else if ($(".banner .banner-content").length > 0) {
				    	$('.banner .banner-content').append('<div id="wavesContainer"></div>')
				    	makeWaves("#wavesContainer")
					} else {
				    	$(".banner").append('<div id="wavesContainer"></div>')
				    	makeWaves("#wavesContainer")
					}
				} else if ($(latestObject).parents(".section").length > 0) {
					$(latestObject).parents(".section").append('<div id="wavesContainer"></div>')
					makeWaves("#wavesContainer")
				} else if ($(latestObject).parents(".banner").length > 0) {
					$(latestObject).parents(".banner").append('<div id="wavesContainer"></div>')
					makeWaves("#wavesContainer")
			  	} else {
					$(latestObject).append('<div id="wavesContainer"></div>')
				    makeWaves("#wavesContainer") 
				}
			}

		} else if (preparedText.includes("")) {

			// ...

		} else if (preparedText.includes("")) {

			// ...

		} else if (preparedText.includes("")) {

			// ...

		}


		// We want to add, but let's check if we have any other intents present
		if (intents.indexOf("gettysburg") > -1) {

			var gettyHtml = "<div class='col-sm-6'><p>Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.</p><p>Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.</p><p>But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.</p></div>"

			if (intents.indexOf("unicorn") > -1) {

				// add first result from image search 
				imageSearch("unicorns photo")

				setTimeout(function() {

					var firstResult = $("#_results p.images nobr a").first().attr("href")
					var unicornHtml = "<div class='unicorn col-sm-6'><img src='" + firstResult + "' />"
					
					// Append the gettysburg address and unicorns
					$(latestObject).append('<div class="row">' + gettyHtml + unicornHtml + '</div>')

				}, 2000)
			} else {

				// just append the address
				$(latestObject).append('<div class="row">' + gettyHtml + '</div>')
			}
		}
	}

	/////////////////// Find element
	if (intents.indexOf("find") > -1) {

		if (preparedText.includes("text")) {

			// let's find text

			if (preparedText.includes("says")) {
				
				// Find text that says...

				var dictation = preparedText.split("says ")[1]
				var el = $('*:contains("' + dictation + '")').last()
				
				latestObject = $(el)

				$('html, body').animate({
				    scrollTop: $(el).offset().top - 200
				}, 750)
			}
		}
	}

	// Deal with saving the active project
	if (intents.indexOf("save") > -1) {
		saveProject()
	}

	// Deal with hello case
	if (intents.indexOf("hello") > -1) {
		responseMessage("Hi there.")
		responsiveVoice.speak("Hi there.", "UK English Female", {rate: 1});
	}

	// Deal with help case
	if (intents.indexOf("help") > -1) {
		responseMessage("Here are some things you can say: <br><br><b>To add a banner, say:</b><br><em>add a banner</em> <br><br><b>To add a background image to the banner, say:</b><br><em>add a background image to the banner search for lamborghini background</em><br><br><b>To add a heading, say:</b><br><em>add a heading that says My Website Heading</em><br><br><b>To add a paragraph, say:</b><br><em>add a paragraph that says Hello world this is my website!</em><br><br><b>To add a section, say:</b><br><em>add a section</em><br><br><b>To save the project, say:</b><br><em>save</em><br><br>For a comprehensive list of capabilities, go <a href='https://vocalize-3.herokuapp.com/help'>to the help page.</a>")
	}



	// Banner dialogues
	if (preparedText.includes("banner")) {	

	}

	// Text boxe dialogues
	if (preparedText.includes("text box") && preparedText.includes("latest section")) {					

	}


	// Image
	if (preparedText.includes("add") && preparedText.includes("image")) {

		var searchQuery = preparedText.split("search for")[1]

		// add first result from image search 
		imageSearch(searchQuery)

		setTimeout(function() {
			var firstResult = $("#_results p.images nobr a").first().attr("href")
			$(".banner").css("background-image", 'url("' + firstResult + '")').css("background-size", "cover").css("background-position", "center").css("background-repeat", "no-repeat")
		}, 2000)
	
	}





  // If we're in a place where we want the user input to show as a message...

  if (typeof addMessageToList != "undefined") {

    // Create the message html object
    var messageHtml = '<p class="out message"><span>' + preparedText + '</span></p>'
    
    // Append to conversation list
    $(".response-container").prepend(messageHtml)

    // Turn on new message
    setTimeout(function() {
      
      // Move the message
      $(".response-container p.out").removeClass("out")

      // Clear input box
      $(".conversation #readout").val("")

    }, 150)
  }


	// Clear dialogue stuffs
	intents = []
	quantity = 0
}





