Ben Stokes Counter

<h2>Aim</h2>

I came across a timer counting down days to the Rugby World Cup 2019, as still in awe at the result of the Headingley test I thought it'd be cool to create something similar, but for Ben Stokes heroics. Using dates and time in JavaScript is not something I've done a lot of, so I thought it'd be healthy to have a go. 


<h2> Tech </h2>
  <ul>
  <li>HTML5</li>
  <li>SCSS</li>
  <li>JS (with moment.js)</li>
  </ul>




<h2>Method</h2>
<p>In all honestly it's a very simple app, and as stated above my main goal was to give myself some practise at using time in JS and to do something fun. </p>
<p>A few collegues of mine from my General Assembly course had used moment.js in their projects but I never needed to. Now was a good a time as ever. As this is a very basic app with no backend, I popped their CDN link into my HTML head and started reading the documentation. </p>
<p>Getting the current time was simple enough with moment().now(), then I had to manually 'set' the time of Ben's most recent heroic event. By breaking the methods out onto separate lines made the code much more readable, and looking forward, clearer to edit when needed. Initially I'd also used moment.js' 'format' methods. However, when it came to using the 'diff' method to calucate the time passed between my two dates, it didn't work. Quickly realising that I didn't actually need to display either of my dates, I removed any formatting and had the 'diff' method working. For simplicity and readability I separated these functions into separate variables as, inline with my design plan, I would need four separate numbers, for days, hours, minutes and seconds. </p>



<p> Having grabbed the elements I wanted to display the numbers in, I now had the time since Ben's most recent event displayed in the desktop, but obviously only displaying the time at the point of loading. By wrapping the lot in a setTimeout(), 1000 function, the seconds then ticked along nicely on the page. </p>
<p> Lastly, I added some basic functions so that if any time unit was on 1, the label would be singular. Nothing worse than seeing '1 days' for 24 hours! </p>



<p> Styling was next, and I wanted to ensure that it worked well on mobile too. As ever, I used flexboxes and %s where I could which gave the page a head start, and meant that after only a few media queries the site looks good on mobile.</p>


<h2> Next steps </h2>
<p> One thing that is tricky with timers is that even though my setTimeout is a second, but the time the function runs and the screen loads, it's never perfectly in sync. This means that every now and again it seems like my timer skips a second. I'll look into this and see if there's a way to perfectly sync up the timer to the real world. </p>
<p>I'd be interested to perhaps add a second page that would list Ben's moments, again using moment.js to see how long ago they were and perhaps embed some highlights too.</p>


