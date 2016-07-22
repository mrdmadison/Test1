// This script supports definition of fly over help (hover behavior) for common terms/phrases.   It exists to 
// minimize the need for users to define fly over help all over the place.  Instead, the user merely needs to 
// add some sort of visual emphasis to text (via html tags defined below).   Then, merely define (or use) 
// terms defined in this common glossary.
//
// To use this functionality, include this javascript file AND some version of jquery (e.g., jquery-2.1.1.js)
// in an html doc.  Then, add an html tag for emphasis to some text in your doc.  At present, this script defines 
// tags for emphasis as: i,b,u,em,a,code (see code below).
//
// It is recommended that entries be recorded in alphabetic order so as to reduce the possibility of duplicates.  
//
// Title attribute will only be overridden if not explicitly set by the user in the source html doc.
//
// This script also supports glossary lookup via text selection.  But for that behavior, a dynamic division is
// added to the document (behaves much like a popup which would have to be closed explicitly by the user). 
//
// Note that the following window events will be used:
//
//   double click - this can be used for any single word text
//   right click - if multiple words need to be checked in the glossary, select with mouse and then use right click                 
// 
// Another benefit of using the text selection feature is the ability to link any word/phrase with any other documents.  This 
// truly is where the notion of "hyperwords" comes into the picture.   Although it may not be possible to incorporate
// hyperwords into the culture of a company (well, that migtht take some time), it certainly is possible to link otherwise unrelated
// documents by virtue of this glossary file.   The second element in the list (associated with the given word or phrase)
// can be rich html text.  This means that any word or phrase can be linked with any number of other documents.  The first
// element in the list is required, and is always the fly over text (used for title attribute, and thus should not
// contain any html tags).  The second element in the list is optional and can be anything you want.  Of course, don't go
// overboard - if there is anything substantial, it is recommended that a separate html document be created and then merely 
// reference as a link.

// Known bugs - There is an unfortunate consequence if user selects a link and then invokes glossary popup.  The problem is
// that the popup glossary element is added as a child element to its parent - this allows the popup to be displayed in 
// close proximity to the selected text.  But the problem for links is that the inherited attributes cause the popup to
// behave like its parent link, and thus clicking anywhere in the popup activates the parents link (so the close popup
// control wouldn't work).  As a work around, merely reload the main page and the popup will close.  There probably is a modestly
// easy way to fix this, but at present, it is a known bug.

var glossary = {};
  
glossary['annotation'] = ['An annotation is nothing more than a note or a tag about something.  The concept is relevant in the context of the internet because it allows users to attach notes and/or links to things of interest.  This allows the users to augment web content without changing the original source.  And when annotations are used as tags, it allows web content to be found and shared much more easily.', 'See <a href=\'https://en.wikipedia.org/wiki/Web_annotation\'>web annotations</a> for more information.'];

glossary['glossary.js'] = ['Glossary.js is a javascript powered dictionary which injects fly over help in html elements.'];

glossary['hyperwords'] = ['Hyperwords is a browser based plugin which allows easy access to secondary repositories of information (via selection of text and right click, then user picks the desired external repository from a drop down list).  Hyperwords allows user to install custom scripts - so a company can leverage their own custom search engines.', 'Two challenges exist with Hyperwords.  For one, a company has to figure out how to get Hyperwords installed on all of their employee\'s computers (i.e., Hyperwords is a browser plugin).  And secondly, a company would have to manage their own server side scripts and repositories.  See <a href=\'http://www.liquidinformation.org/hyperwords-intro.html\'>hyperwords</a> for more information.'];

glossary['it'] = ['Information Technology'];

glossary['portability'] = ['Portability is the notion of being able to freely move around from place to place.  This is relevant for social networks on the web because at present, it is not typically easy for a users, especially those with large networks, to be able to move from one social network to another.', 'See <a href=\'http://mrdmadison.github.io/Test1/Prototype1/CollaborationChapter2.htm#R12-Portability\'>Portability requirements</a> for more information.'];

glossary['sme'] = ['Subject Matter Expert'];



var openPopup = null;
var containerElement = null;
var originalSelectedText = null;  // This won't be converted to lower case 

// Electing to use double click for single word glossary lookup and right click for multi word selection.
// This will be the least intrusive.  It is necessary to have a solution for multi word selection because it certainly
// makes sense to have glossary terms which are more than one word (although that perhaps will be the less common case).

document.ondblclick = doSomethingWithSelectedText;
window.oncontextmenu = doSomethingWithSelectedText;

$(document).ready(function(){
    $("i,b,u,em,a,code").hover(function(){
        setHoverHelp(this);
    });
});
 
function setHoverHelp(obj)
{
    var glossaryValue = glossary[obj.textContent.toLowerCase()];
  
    if (glossaryValue != null) 
    {
        var hoverText = glossaryValue[0];
        if (obj.getAttribute('title') == null)
        {
            obj.setAttribute('title', hoverText);
        }
    }
}

function doSomethingWithSelectedText()
{
    if (openPopup === null)
    {
        var selectedText = getSelectionTextAndContainerElement();

        var glossaryValue = glossary[selectedText];

        if (selectedText.length > 0) {
            showPopup(originalSelectedText, glossaryValue);
        }
    }

    return true;
}

function getSelectionTextAndContainerElement() 
{
    var text = "";
	
    if (typeof window.getSelection != "undefined") 
    {
        var sel = window.getSelection();
		
        if (sel.rangeCount) 
        {
            var node = sel.getRangeAt(0).commonAncestorContainer;
            containerElement = node.nodeType == 1 ? node : node.parentNode;
            text = sel.toString();
        }
    } 
    else 
    if (typeof document.selection != "undefined" && document.selection.type != "Control") 
    {
        var textRange = document.selection.createRange();
        containerElement = textRange.parentElement();
        text = textRange.text;
    }
    
    originalSelectedText = text;
    
    return text.trim().toLowerCase();
}

function showPopup(msg, glossaryValue)
{
    openPopup = document.createElement("div");
    openPopup.setAttribute("style","position:relative;top:40%;left:5%;background-color:yellow;");
    openPopup.style.fontStyle = "normal";
    openPopup.style.fontSize = "medium";
    openPopup.style.fontWeight = "normal";
	openPopup.style.width = "80%";
    openPopup.innerHTML = getBaseAlert(msg, glossaryValue);
	
    containerElement.appendChild(openPopup);
}

function getBaseAlert(msg, glossaryValue)
{
    var resultText = "No glossary entry available.";

    if (glossaryValue) 
    {
        resultText = glossaryValue[0];
        
        if (glossaryValue[1]) 
        {
            resultText = resultText + "<p>" + glossaryValue[1];
        }
    }
    
    var alertHtml = "<br>" +
                    "<ul>" +
                    "<b>" + msg + "</b>" +
                    "<ul>" +
                    resultText +
                    "</ul>" +
                    "<br>" + 
                    "<b onClick='closePopup()'>Close glossary (popup)</b>" +
                    "<br><br>" +
                    "</ul>";
		
    return alertHtml;
}

function closePopup()
{
    openPopup.parentNode.removeChild(openPopup);
    openPopup = null;
}
