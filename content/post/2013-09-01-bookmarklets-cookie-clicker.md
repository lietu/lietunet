---

layout: post
title: Bookmarklets (Cookie Clicker)
date: "2013-09-01"

---


#### Cookie Clicker Hack

This bookmarklet will make cookie clicker show the prices for items as "price per cookies per second", so which one is the most cost-efficient purchase will be easy to see.

<a href="javascript:(function()%7Bfor(var%20list%3D%5B%5D%2Ci%3D0%2Ccount%3DGame.
ObjectsById.length%3B%0Ai%3Ccount%3B%2B%2Bi)list.push(Game.ObjectsById
%5Bi%5D)%3Bvar%20sortFunc%3Dfunction(a%2Cb)%7B%0Aa.storedPPCPS%3Da.price
%2Fa.storedCps%3Bb.storedPPCPS%3Db.price%2Fb.storedCps%3B%0Areturn%20b.
storedPPCPS-a.storedPPCPS%7D%2Credraw%3Dfunction()%7Blist.sort(sortFunc
)%3B%0Afor(var%20a%3D0%2Cb%3Dlist.length%3Ba%3Cb%3B%2B%2Ba)document.
getElementById(%22product%22%2B%0Alist%5Ba%5D.id).querySelector(%22.price
%22).textContent%3DBeautify(%0Alist%5Ba%5D.storedPPCPS)%7D%3BsetInterval(
redraw%2C250)%3B%7D)()%3B">Cookie Clicker Hack</a>

Drag & Drop that on your bookmarks bar, go to [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/) and click on it.


#### What are bookmarklets?

Bookmarklets are basically snippets of JavaScript code stored in a bookmark. When the bookmark is activated, the JavaScript code is run on the page you are currently on.

These bookmarklets can be used to:
 * Analyze the page contents and do something like [SpriteMe](http://spriteme.org/) 
 * Do something fun like [Katamari Hack](http://kathack.com/)
 * Almost anything else


#### Example: Cookie Clicker Hack

Cookie Clicker is a small browser game made with JavaScript, hacking it a bit is a perfect example of what you can do with bookmarklets. You could easily break the whole game by giving yourself infinite cookies, make everything free, or similar, but that is not the point.

Instead, we will make the prices for items to be shown as "price per cookie per second", that is, how many extra cookies per second you will gain for every cookie invested in it. This way you will be able to spot the most cost-efficient purchases easily.


##### Original code

Step 1 of course is writing the JavaScript code to do what you want. For this example, I have written the code that implements this hack for cookie clicker.

{{< highlight javascript >}}
// Create a new list of the "objects" (cursor, grandma, ...)
// so we don't change game's internal data accidentally
var list = [];
for (var i=0, count=Game.ObjectsById.length; i < count; ++i) {
	list.push(Game.ObjectsById[i]);
};

// Update price per cookies per second (PPCPS) and sort by it
var sortFunc = function(a, b) { 
	a.storedPPCPS = (a.price / a.storedCps);
	b.storedPPCPS = (b.price / b.storedCps);
	return b.storedPPCPS - a.storedPPCPS;
};

// Redraw the prices
var redraw = function() {
	// Recalc + sort by PPCPS
	list.sort(sortFunc);

	// Loop through objects
	for (var i=0, count=list.length; i < count; ++i) {
		// Find their container
		var p = document.getElementById('product' + list[i].id);
		// Get the price element in that
		var el = p.querySelector('.price');
		// Replace price with PPCPS
		el.textContent = Beautify(list[i].storedPPCPS);
	}
};

// Update periodically
setInterval(redraw, 250);
{{< /highlight >}}

It's far from the best piece of JavaScript ever written, but it does the job.

At this point it's useful to make sure the code works by pasting it in your browser's JavaScript console.


##### Compilation

Not a strictly necessary step, but still useful to run. If you don't know how to compile JavaScript, you can use the Closure Compiler Service on the web. Go to http://closure-compiler.appspot.com/ and paste your JavaScript on the left-hand side. Check the settings (advanced optimizations is rarely a good idea) and click "Compile".

Grab the code off the right-hand side and test that it still works with the JavaScript console.

In my case the result was (added line breaks manually):

{{< highlight javascript >}}
for(var list=[],i=0,count=Game.ObjectsById.length;i<count;++i)list.push(
Game.ObjectsById[i]);var sortFunc=function(a,b){a.storedPPCPS=a.price/
a.storedCps;b.storedPPCPS=b.price/b.storedCps;return b.storedPPCPS-
a.storedPPCPS},redraw=function(){list.sort(sortFunc);for(var a=0,b=
list.length;a<b;++a)document.getElementById("product"+list[a].id)
.querySelector(".price").textContent=Beautify(list[a].storedPPCPS)};
setInterval(redraw,250);
{{< /highlight >}}


##### Making the bookmarklet

Often the code is longer and you have to store it in a .js file on the web and instead use a loader for the bookmarklet. This is not the case with our small hack.

Get the code you have from the previous step and wrap it in this:

{{< highlight javascript >}}
javascript:(function(){ PASTE YOUR CODE HERE })();
{{< /highlight >}}

So in my case that becomes:

{{< highlight javascript >}}
javascript:(function(){for(var list=[],i=0,count=Game.ObjectsById.length;
i<count;++i)list.push(Game.ObjectsById[i]);var sortFunc=function(a,b){
a.storedPPCPS=a.price/a.storedCps;b.storedPPCPS=b.price/b.storedCps;
return b.storedPPCPS-a.storedPPCPS},redraw=function(){list.sort(sortFunc);
for(var a=0,b=list.length;a<b;++a)document.getElementById("product"+
list[a].id).querySelector(".price").textContent=Beautify(
list[a].storedPPCPS)};setInterval(redraw,250);})();
{{< /highlight >}}

Now you can either manually create a bookmark in your browser an paste in that as the "URL", or create a link that can also be used for sharing that.

What you need to do to get the link working is first URL encode the code after the "javascript:", e.g. via the JavaScript function encodeURIComponent or at http://meyerweb.com/eric/tools/dencoder/

What you end up will then look something like this:

{{< highlight javascript >}}
javascript:(function()%7Bfor(var%20list%3D%5B%5D%2Ci%3D0%2Ccount%3DGame.
ObjectsById.length%3B%0Ai%3Ccount%3B%2B%2Bi)list.push(Game.ObjectsById
%5Bi%5D)%3Bvar%20sortFunc%3Dfunction(a%2Cb)%7B%0Aa.storedPPCPS%3Da.price
%2Fa.storedCps%3Bb.storedPPCPS%3Db.price%2Fb.storedCps%3B%0Areturn%20b.
storedPPCPS-a.storedPPCPS%7D%2Credraw%3Dfunction()%7Blist.sort(sortFunc
)%3B%0Afor(var%20a%3D0%2Cb%3Dlist.length%3Ba%3Cb%3B%2B%2Ba)document.
getElementById(%22product%22%2B%0Alist%5Ba%5D.id).querySelector(%22.price
%22).textContent%3DBeautify(%0Alist%5Ba%5D.storedPPCPS)%7D%3BsetInterval(
redraw%2C250)%3B%7D)()%3B
{{< /highlight >}}

Now create a HTML link with that as the destination (really make sure there are no newlines in the href="").

{% capture html >}}
<a href="javascript:(function()%7Bfor(var%20list%3D%5B%5D%2Ci%3D0%2Ccount
%3DGame.ObjectsById.length%3B%0Ai%3Ccount%3B%2B%2Bi)list.push(
Game.ObjectsById%5Bi%5D)%3Bvar%20sortFunc%3Dfunction(a%2Cb)%7B%0Aa.
storedPPCPS%3Da.price%2Fa.storedCps%3Bb.storedPPCPS%3Db.price%2Fb.
storedCps%3B%0Areturn%20b.storedPPCPS-a.storedPPCPS%7D%2Credraw
%3Dfunction()%7Blist.sort(sortFunc)%3B%0Afor(var%20a%3D0%2Cb%3D
list.length%3Ba%3Cb%3B%2B%2Ba)document.getElementById(%22product%22
%2B%0Alist%5Ba%5D.id).querySelector(%22.price%22).textContent%3DBeautify
(%0Alist%5Ba%5D.storedPPCPS)%7D%3BsetInterval(redraw%2C250)%3B%7D)()%3B">
Cookie Clicker Hack
</a>
{% endcapture >}}
<code>
{{ html | escape | newline_to_br }}
</code>

And you should get something like the link at the top of the page.

#### Loader

If your code is anything longer than our simple little hack, or you want to be able to update it without replacing the bookmark, it's not that convenient to share it in that form.

In this case you want to publish your code in a .js file on the internet, and create a bookmarklet to load that instead. Let's assume your code is already done and published at http://example.com/coolscript.js

The process is fairly similar to what you do above, first write the code:

{{< highlight javascript >}}
// List of scripts to load
var scripts = ['http://example.com/coolscript.js'];
// Loop through them
for (var i = 0; i < scripts.length; ++i) {
	// Create a new script tag
	var script = document.createElement('script');
	// Set it's source
	script.src = scripts[i];
	// Throw it in the document so it will be loaded
	document.body.appendChild(script);
}
{{< /highlight >}}

Then you throw that code through a compiler and get the minified output:

{{< highlight javascript >}}
for(var scripts=["http://example.com/coolscript.js"],i=0;i<scripts.length;
++i){var script=document.createElement("script");script.src=scripts[i];
document.body.appendChild(script)};
{{< /highlight >}}

URL encode + wrap:

{{< highlight javascript >}}
javascript:(function()%7Bfor(var%20scripts%3D%5B%22http%3A%2F%2Fexample.com
%2Fcoolscript.js%22%5D%2Ci%3D0%3Bi%3Cscripts.length%3B%2B%2Bi)
%7Bvar%20script%3Ddocument.createElement(%22script%22)%3Bscript.src
%3Dscripts%5Bi%5D%3Bdocument.body.appendChild(script)%7D%3B%7D)()%3B
{{< /highlight >}}

Create the link:

{% capture html >}}
<a href="javascript:(function()%7Bfor(var%20scripts%3D%5B%22http%3A%2F%2F
example.com%2Fcoolscript.js%22%5D%2Ci%3D0%3Bi%3Cscripts.length%3B%2B%2Bi)
%7Bvar%20script%3Ddocument.createElement(%22script%22)%3Bscript.src%3D
scripts%5Bi%5D%3Bdocument.body.appendChild(script)%7D%3B%7D)()%3B">
Cool script
</a>
{% endcapture >}}
<code>
{{ html | escape | newline_to_br }}
</code>
