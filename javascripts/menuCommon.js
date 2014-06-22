/***********************************************
* AnyLink Drop Down Menu- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

//Contents for menu 1
var helpMenu=new Array()
helpMenu[0]='<a href="CollaborationChapter1.htm">Chapter 1 - Introduction</a>'
helpMenu[1]='<a href="CollaborationChapter2.htm">Chapter 2 - High Level Requirements</a>'
helpMenu[2]='<a href="CollaborationChapter3.htm">Chapter 3 - Real World Case Studies</a>'
helpMenu[3]='<a href="CollaborationChapter4.htm">Chapter 4 - Detailed Requirements</a>'


var dlrMenu=new Array()
dlrMenu[0]='<a href="CollaborationChapter4.htm#1-Creating_feedback_item">1 - Creating feedback item</a>'
dlrMenu[1]='<a href="CollaborationChapter4.htm#2-Displaying_feedback_item">2 - Displaying feedback item</a>'
dlrMenu[2]='<a href="CollaborationChapter4.htm#3-Editing_feedback_item">3 - Editing feedback item</a>'
dlrMenu[3]='<a href="CollaborationChapter4.htm#4-Replying_to_feedback_item">4 - Replying to feedback item</a>'
dlrMenu[4]='<a href="CollaborationChapter4.htm#5-Feedback_items_advanced_topic">5. Feedback items (advanced topic)</a>'
dlrMenu[5]='<a href="CollaborationChapter4.htm#6-Searchability">6 - Searchability</a>'
dlrMenu[6]='<a href="CollaborationChapter4.htm#7-Managing_change_advanced_topic">7. Managing change to existing content</a>'
dlrMenu[7]='<a href="CollaborationChapter4.htm#8-Managing_system_users">8 - Managing system users</a>'
dlrMenu[8]='<a href="CollaborationChapter4.htm#9-Managing_groups_and_hierarchies">9. Managing groups and hierarchies</a>'
dlrMenu[9]='<a href="CollaborationChapter4.htm#10-Work_flows_and_notificaitons">10. Work flows and notifications</a>'
dlrMenu[10]='<a href="CollaborationChapter4.htm#11-Giving_content_publishers_a_voice">11. Giving content publishers a voice</a>'
dlrMenu[11]='<a href="CollaborationChapter4.htm#12-Feedback_assessments">12. Feedback assessments</a>'
dlrMenu[12]='<a href="CollaborationChapter4.htm#13-Content_tagging">13. Content tagging</a>'
dlrMenu[13]='<a href="CollaborationChapter4.htm#14-Historical_identity_integrity">14. Managing historical identity integrity</a>'
dlrMenu[14]='<a href="CollaborationChapter4.htm#15-Portability">15. Portability</a>'
dlrMenu[15]='<a href="CollaborationChapter4.htm#16-General_requirements_and_assumptions">16. General requirements and assumptions</a>'

	
var hlrMenu=new Array()
hlrMenu[0]='<a href="CollaborationChapter2.htm#R1-GivingPublisherAVoice">R1: Giving publisher a voice</a>'
hlrMenu[1]='<a href="CollaborationChapter2.htm#R2-GeneralAvailability">R2: General availability</a>'
hlrMenu[2]='<a href="CollaborationChapter2.htm#R3-ManagingIdentity">R3: Managing identity</a>'
hlrMenu[3]='<a href="CollaborationChapter2.htm#R4-IndividualMetaData">R4: Individual meta data</a>'
hlrMenu[4]='<a href="CollaborationChapter2.htm#R5-PrivacyGuidelines">R5: Privacy guidelines</a>'
hlrMenu[5]='<a href="CollaborationChapter2.htm#R6-ManagingGroups">R6: Managing groups</a>'
hlrMenu[6]='<a href="CollaborationChapter2.htm#R7-ManagingFeedback">R7: Managing feedback</a>'
hlrMenu[7]='<a href="CollaborationChapter2.htm#R8-UserInterface">R8: User interface</a>'
hlrMenu[8]='<a href="CollaborationChapter2.htm#R9-Searchability">R9: Searchability</a>'
hlrMenu[9]='<a href="CollaborationChapter2.htm#R10-NotificationsAndMessages">R10: Notifications and messages</a>'
hlrMenu[10]='<a href="CollaborationChapter2.htm#R11-Analytics">R11: Analytics</a>'
hlrMenu[11]='<a href="CollaborationChapter2.htm#R12-Portability">R12: Portability</a>'
hlrMenu[12]='<a href="CollaborationChapter2.htm#R13-ContentManagement">R13: Content management</a>'
hlrMenu[13]='<a href="CollaborationChapter2.htm#R14-ManagingChangeToContent">R14: Managing change to content</a>'


var caseStudyMenu=new Array()
caseStudyMenu[0]='<a href="CollaborationChapter3.htm#1-AuthorPublisher">1 - Author/Publisher </a>'   
caseStudyMenu[1]='<a href="CollaborationChapter3.htm#2-ClassRoom">2 - Class room setting</a>'   
caseStudyMenu[2]='<a href="CollaborationChapter3.htm#3-CorporateAmerica">3 - Corporate America</a>'   
caseStudyMenu[3]='<a href="CollaborationChapter3.htm#4-Consumers_watching_video_content">4 - Consumers watching TV</a>'   

   
   
   

		
var menuwidth='5000px' //default menu width
var menubgcolor='lightyellow'  //menu bgcolor
var disappeardelay=250  //menu disappear speed onMouseout (in miliseconds)
var hidemenu_onclick="yes" //hide menu when user clicks within menu?

/////No further editting needed

var ie4=document.all
var ns6=document.getElementById&&!document.all

if (ie4||ns6)
document.write('<div id="dropmenudiv" style="visibility:hidden;width:'+menuwidth+';background-color:'+menubgcolor+'" onMouseover="clearhidemenu()" onMouseout="dynamichide(event)"></div>')

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}


function showhide(obj, e, visible, hidden, menuwidth){
if (ie4||ns6)
dropmenuobj.style.left=dropmenuobj.style.top="-500px"
if (menuwidth!=""){
dropmenuobj.widthobj=dropmenuobj.style
dropmenuobj.widthobj.width=menuwidth
}
if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
obj.visibility=visible
else if (e.type=="click")
obj.visibility=hidden
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=0
if (whichedge=="rightedge"){
var windowedge=ie4 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
}
else{
var topedge=ie4 && !window.opera? iecompattest().scrollTop : window.pageYOffset
var windowedge=ie4 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure){ //move up?
edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
if ((dropmenuobj.y-topedge)<dropmenuobj.contentmeasure) //up no good either?
edgeoffset=dropmenuobj.y+obj.offsetHeight-topedge
}
}
return edgeoffset
}

function populatemenu(what){
if (ie4||ns6)
dropmenuobj.innerHTML=what.join("")
}


function dropdownmenu(obj, e, menucontents, menuwidth){
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
clearhidemenu()
dropmenuobj=document.getElementById? document.getElementById("dropmenudiv") : dropmenudiv
populatemenu(menucontents)

if (ie4||ns6){
showhide(dropmenuobj.style, e, "visible", "hidden", menuwidth)
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
}

return clickreturnvalue()
}

function clickreturnvalue(){
if (ie4||ns6) return false
else return true
}

function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function dynamichide(e){
if (ie4&&!dropmenuobj.contains(e.toElement))
delayhidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
delayhidemenu()
}

function hidemenu(e){
if (typeof dropmenuobj!="undefined"){
if (ie4||ns6)
dropmenuobj.style.visibility="hidden"
}
}

function delayhidemenu(){
if (ie4||ns6)
delayhide=setTimeout("hidemenu()",disappeardelay)
}

function clearhidemenu(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}

if (hidemenu_onclick=="yes")
document.onclick=hidemenu

