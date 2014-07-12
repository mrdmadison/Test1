function loadInitialPostData()
{
    var preInitialPostData = "<p>Below is a demo of a tagging and feedback mechanism (<u>disclaimer</u> - there is no persistence layer, i.e., nothing entered will be saved).  Its purpose is to encourage discussion surrounding the evolution of standards which hopefully will govern all next generation content and feedback management frameworks.  Many of us already utilize such frameworks on a regular basis.  But sadly, there is not very much consistency, and often we feel trapped within a particular content management framework.  Just imagine how much better things would be if all frameworks followed a well defined set of policies (e.g., portability, proper identity management, universally available across disparate platforms, etc.).</p>\
    <p>Now keep in mind that the following merely demonstrates a tiny spec in regards to the full breath of functionality which should be available.  And, there are several web sites which already offer such functionality (although implementation and behavior tends to vary).  In fact, the behavior written by experts is far superior to the 'hack' demo I present here.  Still, there is a method to my madness, and I genuinely believe that it is better if we evolve a set of standards which all frameworks adhere to, than it is for me to merely implement something that I think is slick or cool.  Hopefully this will expose behavior which we can all benefit from, and hopefully this will inspire others to read up on the subject and help evolve the very community standards which I crave.</p> \
    <ul> \
        <li><a href='WhatWillTelecosAndCableDoNext.html'>Case study - Where do telecom and cable companies go from here?</a>\
        <li><a href='CollaborationChapter1.htm'>Requirements for a generic feedback management framework (first draft)</a>\
        <li><a href='http://darrellmadison.wordpress.com/'>D. Madison (you can leave a comment).</a>\
    </ul>\
    <p>Instructions (for demo):  <ul>Within the phrase below (the text next to the picture of President Obama), you can select any word (or words) and supply feedback.  There are already 3 sets of replies (notice the choice box contains 3 preloaded tags - each corresponding to a set of feedback items).   You can add feedback to a 'new' tag by merely selecting the word and clicking on the reply link.  Keep in mind that the demo is a browser only implementation (pure javascript) - which means there is absolutely no back end server (or database) collecting anything being typed.  So don't be mad at me if there is no way to save your work (well, you could do a 'Save as').   And, forgive me for the political commentary - but I think feedback mechanisms, especially if well trusted and consistently implemented, can be a major benefit in helping evolve a more socially aware society.</ul></p><br>";
    
    setPreInitialPostData(preInitialPostData);

    var post = "A radical faction of the republican party is attempting to extort the president and ruling party.";
    setInitialPost(post);
}

function loadInitialReplies()
{
    var previousDiv;
    var userNameStr;
    var selectedDi;
    var tagDi;
    var userReplyText;
    var dateStr;
    
    
    // Ruling party
    userNameStr   = "D. Madison";
    selectedDiv   = "TopLevelReplyButton";
    tagDiv        = "ruling_party";
    userReplyText = "To me, this is one of the more outrageous things president Obama has ever expressed.  I think the use of the term \"ruling party\" was an accident - but only in the sense that the president accidentally expressed precisely how he feels.  And it is for this very reason that the phrase concerns me greatly.  Now ironically, I discussed this with several other people and none of them found this phrase to be that offensive (well, not initially).\
<br><br>\
So let's first consider whether the president actually meant to say \"ruling party\" - and if so, let's consider what he could have possibly meant by it.   One option could be that he considers the \"ruling party\" to be the majority party.   And certainly, democrats have a majority in the senate.  But wait a second, republicans have a majority in the house of representatives.  And considering bills must be passed by both houses of congress, the notion of majority party couldn't possibly apply to the congress.\
<br><br>\
Another possible meaning for the phrase ruling party is the party of the president (i.e., Obama is a democrat).  And yes, the party opposite the president is sometimes referred to as the opposition party.  But the interesting thing here is that in the original phrasing, Obama referred to both the president AND ruling party (like they were two different things).  But if the \"ruling\" party is in fact aligned with the presidency, then it would be redundant to say that a radical faction was extorting both the president AND ruling party. \
<br><br>\
Now some likely are reading this and thinking, \"aren't you just mincing words here?\"  Does this detailed analysis on the semantics of words really get us anywhere, and is it really that big a deal?  Well, to address that you have to decide whether you care how the president will behave on a go forward basis.  My premise is that the president's attitudes directly impact his actions, and it is his words which give us a glimpse into his attitudes.   But getting back to the notion of a \"ruling party\",  if we revisit our constitution, it is obvious that the term \"ruling party\" isn't mentioned anywhere.   In fact, I think most in this country would agree with me when I utter the words, \"WE DON'T HAVE A RULING PARTY IN THIS COUNTRY\".  Now forgive me for putting that in all caps, but I think this should be shouted from every roof top in this country (but for now, all caps is about the strongest pronouncement I can make).  But if we consider our history books for a minute, I bet we all can remember a place where there was a ruling party.   Let's not forget that in the former Soviet Union, they actually did have a ruling party.  And it was the elite ruling class which dominated everything in that country, and its impact did a huge amount of harm.  In fact, those living in Russia today haven't completely recovered from the oppressive grip of the so called \"ruling party\". \
<br><br>\
As for Obama using the phrase \"ruling party\", I mentioned above that I think he accidentally expressed what he feels deeply in his heart.  And, the president has said other things, and has acted repeatedly in a manner which is consistent with that phrasing.  It is my belief that our president actually does believe that he is the ruler, and that his will is in fact the will of the people. And even when his will isn't consistent with the will of the people, he still believes he has a moral imperative.  So when the president says \"radical faction\", I say hyperbole.  When he says \"extort\", I say rhetoric.   But when you put those phrases together with \"ruling party\", I think dictator!  Yes, I realize that our president thinks of himself as a benevolent ruler (and not a dictator).  But the sad reality is that regardless of the word you use (i.e., ruler or dictator), history has shown that individual leaders with extreme power do more harm to their country than good.  Now I tend to quote movies quite often, and the quote that comes to mind is by Samuel L. Jackson (in the movie Jumper) - where he says, \"Only god deserves to have such power\".  I mentioned above that the American people don't believe that they live under an absolute ruler, but there are troubling signs which certainly give me some pause.   And the fact that the media (and general public for that matter) aren't more concerned about this phrasing leads me to believe that we perhaps are deceiving ourselves with respect to the form of government that we actually have. \
<br><br>\
But let's look a little bit deeper at the president's behavior.  Let's first consider the number of times the president has either changed the law or refused to enforce the law (i.e., absent consent of the congress).  We know for sure that Obamacare has had major changes and/or delays which completely contradict with the explicit language of the law.   During the government shutdown (when he uttered the phrase \"ruling party\"), the critical issue was in fact Obamacare.  And the language used by the democrats and the president was \"law of the land\" (i.e., Obamacare can't be changed because it is the law of the land).   Well, the concerns raised by those in the republican party (i.e., the radicals if you will) were about the very things the president attempted to change (be presidential decree) after the shutdown was resolved.  So somehow, the republicans were considered extortionists when they wanted to propose changes.  But when the president does it by himself absent consent of congress, the term dictator is never used - I wonder why not?  And certainly, the phrase \"law of the land\" wasn't cited by the media when the president changed Obamacare 30+ times (which makes me wonder exactly what law the media is referring to - perhaps imperial law?). \
<br><br>\
Now clearly the president doesn't have the authority to change law - our form of government just isn't designed that way.  I think Trey Gowdy put it best when he said, \"Congress doesn't make recommendations, they make law.\"  But as long as the media gives cover to the president, I think he will continue to selectively enforce law and interpret it any way he wants.  Now it is somewhat surprising that the media has been so complicit with the policies and actions of the president.   The news media traditionally had a proud history of being distrusting and even adversarial to those in government.   But today, it seems to be more of a cooperative and mutually beneficial arrangement (I guess there is just too much money at stake). \
<br><br>\
As for Obamacare, it isn't the only sign that the president thinks of himself as the \"ruling party\".  Just consider his pronouncement that he was going to bypass congress to get things done (he said this during the State of the Union - remember the comment \"I have a pen and a phone\").  Now let's overlook for a minute the fact that tons of democrat congressman stood up and cheered when he said that.  They are all on video tape, so we know who they are.  And in my opinion, every last one of them should be fired - because if they want the president to ignore them, then they have no business representing the people of this country.  But in regards to ignoring congress, the president obviously is overlooking the fact that the congress is in fact elected by the people, and when he ignores congress, he is actually ignoring the American people.  And this is why I say above that when power is concentrated in a single person, be it by force (as in dictatorship), or in our country, where our president  merely assumes power and defies congress and the American people, the ultimate consequence must be harm.   The rationale behind this is a rather simple phrase taught to me a long time ago: \"Absolute power corrupts absolutely\".  \
<br><br>\
So to sum things up, the phrase \"ruling party\" offends me so much because it exposes some underlying feelings that the president apparently has.  The more I see from our government, and the more I see the president ignoring the will of the American people, the less faith I have.  I struggle every day to separate truth from fiction - and this is getting harder and harder.  In fact, we seem to have evolved to a world where truth is a rather vague and perhaps outdated concept.   And this typically happens about the same time as the notion of a \"ruling party\" (its funny how those two concepts seem to coincide).  I hope I'm wrong about this, but the evidence is fairly dramatic.   I'm not sure why others aren't more concerned, but I certainly hope this trend can be reversed before it is too late.  And by the way, one reason why I'm so keen on evolving an open and portable feedback mechanism is because I want the president to know that the American people also have pens and phones, and we're not afraid to use them either.";

    dateStr       = "June 16, 2014 20:22:11";
    
    addTagToTagList(tagDiv);
    selectedDiv   = commitNewReplyPrivate(tagDiv, selectedDiv, userReplyText, 1, userNameStr, dateStr, 752, 63);

    tagStrings[tagDiv] = 1;    
    
    
    // Extort
    userNameStr       = "Senior Flam";
    selectedDiv       = "TopLevelReplyButton";
    tagDiv            = "extort";
    userReplyText     = "It was the republicans that wanted the government shut down, so isn't that extortion?"; 
    dateStr           = "June 11, 2014 21:07:41";

    addTagToTagList(tagDiv);
    selectedDiv       = commitNewReplyPrivate(tagDiv, selectedDiv, userReplyText, 1, userNameStr, dateStr, 36, 77);


    tagDiv            = "extort";    
    userNameStr       = "D. Madison";    
    userReplyText     = "I'm not really concerned about the term extort since it is more \
                rhetoric than anything else.  But considering the republicans were attempting to raise awareness to the \
                imminent problems with Obamacare, and considering that many democrats started raising the very same concerns \
                after the shutdown was resolved, I think it is safe to say in hindsight that the republicans were actually \
                trying to help this country by preventing a disaster, and the democrats, who behaved like sheep during the \
                shutdown, certainly changed their tune after their rather short lived victory dance. "; 
    dateStr           = "June 16, 2014 20:27:18";
    selectedDiv       = commitNewReplyPrivate(tagDiv, selectedDiv, userReplyText, 1, userNameStr, dateStr, 134,17);

    tagStrings[tagDiv] = 2;


    previousDiv = "ruling_party";     
    setInitialState(previousDiv, tagDiv);

    
    // Radical
    userNameStr   = "Senior Flim";
    selectedDiv   = "TopLevelReplyButton";
    tagDiv        = "radical";
    userReplyText = "If the republican party wants to act like a bunch of radical extremists, what is wrong with \
            the president calling them that?  The quote by the president is perfectly fine.";
    dateStr       = "June 11, 2014 20:22:11";
    
    addTagToTagList(tagDiv);
    selectedDiv       = commitNewReplyPrivate(tagDiv, selectedDiv, userReplyText, 1, userNameStr, dateStr, 3, 19);

    tagDiv            = "radical";    
    userNameStr       = "D. Madison";    
    userReplyText     = "At best the term radical is hyperbole.  \
                Still, it is consistent with a man who pokes fun at republican \
                congressmen by stating that if they don't like it, they should win elections.  I guess the president \
                thinks those in congress got there by winning a radio station contest.  So nice try, but we \
                can all see that the emperor has no clothes."; 
    dateStr           = "June 16, 2014 17:29:21";
    selectedDiv       = commitNewReplyPrivate(tagDiv, selectedDiv, userReplyText, 1, userNameStr, dateStr, 281, 48);

    tagStrings[tagDiv] = 2;

    previousDiv = "extort";     
    setInitialState(previousDiv, tagDiv);
}
