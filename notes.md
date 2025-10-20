# CS 260 Notes

# Midterm 1 Note Dump

# Amur's Exercises

## Midterm-exercise-1

### email.js PRE
// how to get a form from the html file
// how to get a message from html file


form.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = document.getElementById('email').value;
  if (email.includes('@')){
    message.textContent = "Eamil accepted";
    message.style.color = 'green'
  }
  else{
    // how to set a message to "Please, enter valid email"
    // how to get a red color to the message
  }
  
})

### email.js ANSWER
const form = document.getElementById('emailForm')
const message = document.getElementById('message')


form.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = document.getElementById('email').value;
  if (email.includes('@')){
    message.textContent = "Eamil accepted";
    message.style.color = 'green'
  }
  else{
    message.textContent = "Please, enter valid email"
    message.style.color = 'red'
  }
  
})

### index.html PRE

<!-- how to initialize html file -->
  <head>
    <meta charset="fill it here">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Form Example</title>
    <!-- <link >  how to do a link to the css files -->
  </head>

  <body>
    <form id="emailForm">
      <h2>Put your email below</h2>
      <input type="text" id="email" placeholder="Enter your email">
      <button type="submit">Submit</button>
    </form>

    <p id="message"></p>

    
    <!-- how to do a link to javascript -->
  </body>

### index.html ANSWER
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Form Example</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <form id="emailForm">
      <h2>Put your email below</h2>
      <input type="text" id="email" placeholder="Enter your email">
      <button type="submit">Submit</button>
    </form>

    <p id="message"></p>

    <!-- ✅ JS goes at the end -->
    <script src="email.js"></script>
  </body>
</html>

### style.css PRE
body{
  font-family: Arial;
  padding:20px;
  background-color: grey;
}

/* how to make  message bold? */

### stlye.css ANSWER
body {
  font-family: Arial;
  padding: 20px;
  background-color: grey;
  font-weight: bold;    /* <------ */
}

#message{
  font-weight: bold;
}

## Midterm-exercise-2

### counter.js PRE
const form = document.getElementById('counterForm')
const number = document.getElementById('number')

let count = 0
console.log(number)

// how to make +1 for counter onclick?


document.getElementById("minus").onclick = () => {
    if(count < 1){
        number.textContent = count
    }
    else {
    count--
    number.textContent = count
    }
}

document.getElementById("minus5").onclick = () => {
    if(count < 5){
        number.textContent = count
    }
    else {
    count = count -5;
    number.textContent = count
    }
}

//  how to make +5?

### counter.js ANSWER
const form = document.getElementById('counterForm')
const number = document.getElementById('number')

let count = 0
console.log(number)

document.getElementById("plus").onclick = () => {
    count++
    number.textContent = count
}

document.getElementById("minus").onclick = () => {
    if(count < 1){
        number.textContent = count
    }
    else {
    count--
    number.textContent = count
    }
}

document.getElementById("minus5").onclick = () => {
    if(count < 5){
        number.textContent = count
    }
    else {
    count = count -5;
    number.textContent = count
    }
}

document.getElementById("plus5").onclick = () => {
    count = count +5;
    number.textContent = count
}

### index.js PRE
<!-- how to set up html file -->
    <!-- put head here -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Click Counter</title>
        <!-- how to make a link to the style.css -->
    <!-- put head here -->
    <body>
        <!-- how to make a form with id counterForm-->
            <p id="number">0</p>
            <button type="button" id="plus">+</button>
            <button type="button" id="minus">-</button>
            <button type="button" id="minus5">-5</button>
            <!-- make +5 button -->
        <!-- form goes here -->

        <!-- how to initilize javascript file here -->
    </body>
<!-- how to set up html -->

### index.js ANSWER
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Click Counter</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <form type="click" id="counterForm">
            <p id="number">0</p>
            <button type="button" id="plus">+</button>
            <button type="button" id="minus">-</button>
            <button type="button" id="minus5">-5</button>
            <button type="button" id="plus5">+5</button>
        </form>

        <script src="counter.js"></script>
    </body>
</html>

### style.css PRE
/* how to make body arail and padding 20px? */
#message{
  font-weight: bold;
}

### style.css ANSWER
body{
  font-family: Arial;
  padding:20px;
  background-color: grey;
}
#message{
  font-weight: bold;
}

## Midterm-exercise-3

### background.js PRE
const colors = document.getElementById('background')

// maake event listener

### background.js ANSWER
const colors = document.getElementById('background')

colors.addEventListener('change', () =>{
    const color = colors.value;
    console.log(color)
    
    document.body.style.background = color;
    document.body.style.color = 'yellow'
})

### index.js PRE
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>background-change</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

### index.js ANSWER
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>background-change</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

### style.css PRE
body{
    font-family:Arial, Helvetica, sans-serif;
    padding: 5%;
}

select {
  background-color: yellowgreen; /* changes the box color */
  color: black;                /* keeps the text readable */
  border: 1px solid gray;      /* optional: makes it look nicer */
  padding: 5px;
  border-radius: 5px;
}
select:focus {
  background-color: skyblue;
}

### style.css ANSWER
same as pre

## Web Development Midterm Study Guide 2

### What does a div tag do?
<div> is a container element used to group other HTML elements together. It has no visual
effect by itself, but helps structure the page for styling and layout using CSS. Commonly used
for sections, wrappers, and layout blocks.
<div>
 <p>This is inside a div</p>
</div>
In this example, the paragraph is grouped inside a div, which can be styled or positioned together.


### What does the following padding CSS do?
div {
 padding: 20px;
}
This adds 20 pixels of space inside the div, between its content and its border. Padding increases the
internal spacing, unlike margin which affects the space outside the element.


### What does the following code using arrow syntax function declaration do?
const greet = (name) => {
 return 'Hello, ' + name;
}
console.log(greet('Amur'));
This defines an arrow function named greet that takes one argument name and returns a greeting
string.
const square = x => x * x;
console.log(square(5));
Here, square takes a number and returns its square. The arrow syntax allows concise one-line
functions.
const add = (a, b) => a + b;
console.log(add(2, 3));
This function takes two arguments and returns their sum. Arrow functions are common in modern JS,
especially with array methods.


### What does the following code using map with an array output?
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
Output: [2, 4, 6] — The map() function applies a transformation to each element, returning a new array.
const students = [{name: 'Amy'}, {name: 'Ben'}];
const names = students.map(s => s.name);
console.log(names);
Output: ['Amy', 'Ben'] — This extracts the 'name' property from each object. Map doesn't change the
original array.


### What does the following code output using getElementById and addEventListener?
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
 alert('Button clicked!');
});
getElementById() selects the HTML element with the specified id. addEventListener() waits for an event
(like a click) and runs the provided function when triggered. It doesn’t execute immediately—it listens
for the event.
const input = document.getElementById('username');
input.addEventListener('change', () => {
 console.log('Input changed');
});
Listens for a change in an input field and logs a message when the value changes.
const form = document.getElementById('loginForm');
form.addEventListener('submit', e => {
 e.preventDefault();
 console.log('Form submitted');
});
Prevents form refresh on submit and handles the event using JS.
const heading = document.getElementById('title');
heading.style.color = 'green';
This example changes the text color of an element with id='title' to green.


### How would you display an image with a hyperlink in HTML?
<a href="https://www.example.com">
 <img src="images/photo.jpg" alt="Example image">
</a>
This code wraps an image inside a hyperlink. Clicking the image takes the user to the linked page.
Your folder structure could look like this:
project-folder/
■■■ index.html
■■■ images/
■ ■■■ photo.jpg
You can also use an external image URL:
<a href="https://openai.com">
 <img src="https://example.com/image.png" alt="External image">
</a>








## Web Development Midterm Study Guide 1
Good luck on your midterm! Study smart, understand each concept deeply, and practice coding
examples — you’ve got this!

### In the following code, what does the link element do?
It links an external resource (usually a CSS file) to the HTML document. Example: `<link rel="stylesheet"`
href="styles.css"> applies styles from styles.css to the page.
**💡 Extra Insight:**
**It must go inside the <head> tag.**
**You can also link to icons (rel="icon") or prefetch resources.**

### In the following code, what does a div tag do?
A `<div>`; is a block-level container that groups other elements. It's used for structure and layout.
Examples (use in layouts):
`<div class="header"> ... </div>`
`<div class="content"> ... </div>`
Divs have default display:block and take full width. They don't add behavior by themselves.
**💡 Extra Insight:**
**Divs are “structure only” – no visual appearance by default.**

### In the following code, what is the difference between the #title and .grid selector?
#title selects an element by ID (unique). .grid selects elements by class (can apply to multiple elements).
**💡 Extra Tip:**
**You can mix them: #title.grid means an element with both that ID and class.**
**IDs should be unique; classes are reusable.**

### In the following code, what is the difference between padding and margin?
Padding: space inside the element (between content and border). Margin: space outside the element (between
border and other elements).
**💡 Example:**
**div {**
  **margin: 10px;  /* pushes away from neighbors */**
  **padding: 20px; /* adds space inside border */**
**}**
**Think: Content → Padding → Border → Margin.**

### Given this HTML and this CSS how will the images be displayed using flex?
If the container uses display: flex;, the images will be displayed in a row by default, side by side, unless
flex-direction: column; is specified.

### What does the following padding CSS do?
Example: padding: 10px 20px; adds 10px top/bottom and 20px left/right inside the element.
**💡 Mnemonic:**
**padding: top/bottom left/right;**

### What does the following code using arrow syntax function declaration do?
Arrow functions are a compact function syntax. (a, b) => a + b means a function with parameters a and b that
returns a+b.

Examples:
const add = (a, b) => a + b;
const greet = name => `Hi ${name}`;
const square = x => { return x * x; } // block form
Note: arrow functions do not bind their own 'this' and are not suitable as constructors.
**💡 Extra Insight:**
**Arrow functions don’t have their own this.**
**Perfect for short callbacks like map, filter, or event handlers.**

### What does the following code using map with an array output?
map() transforms every element of an array and returns a new array without mutating the original.
Examples:
const nums = [1,2,3];
const doubled = nums.map(n => n * 2); // [2,4,6]
const names = ['Amy','Bob'];
const greetings = names.map(n => `Hi ${n}`); // ['Hi Amy','Hi Bob']

### What does the following code output using getElementByID and addEventListener?
Typical pattern:
const btn = document.getElementById('btn');
btn.addEventListener('click', () => console.log('Clicked!'));
Behavior: When user clicks the element with id 'btn', the callback runs and prints 'Clicked!'.
**💡 Extra Insight:**
**You can listen for other events: 'mouseover', 'keydown', etc.**
**'click'	When user clicks	buttons, images**
**'mouseover'	When mouse enters element	tooltips**
**'mouseout'	When mouse leaves	hover effects**
Hover effect using JS:
const box = document.querySelector('.box');
box.addEventListener('mouseover', () => box.style.background = 'lightblue');
box.addEventListener('mouseout', () => box.style.background = 'white');

**'keydown'	When key is pressed	games, shortcuts**
document.addEventListener('keydown', event => {
  console.log('You pressed:', event.key);
});

**'submit'	When form submitted	form validation**
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault(); // stop page reload
  console.log('Form submitted!');
});

**'change'	When input value changes	dropdowns**
**'input'	On every keystroke	live search**

### What does the following line of Javascript do using a # selector?
document.querySelector('#title') selects the first element that matches the CSS selector #title (element querySelector accepts any CSS selector (classes, attributes, pseudos).
**💡 Example:**
**document.querySelector('.btn'); // first element with class 'btn'**

### Which of the following are true? (mark all that are true about the DOM)
The DOM represents the HTML document as a tree of objects. You can use JavaScript to access and modify
DOM elements. Each HTML element is a node in the DOM.
**What it is:**
**The DOM is a live tree structure that represents your HTML page in memory.**

**When the browser loads HTML, it turns it into objects (nodes).**
**JavaScript can then read, change, add, or remove those nodes.**

🧩 Example:
<body>
  <h1 id="title">Hello</h1>
  <p class="desc">This is a paragraph</p>
</body>


The DOM looks like this:

Document
 └── html
      └── body
           ├── h1#title
           └── p.desc
**You can access it with:**
**document.getElementById('title').textContent = 'Hi there!';**
**document.querySelector('.desc').style.color = 'blue';**
**💡 Extra Insight:**
**DOM changes happen instantly — you see them without reloading.**
**The DOM isn’t HTML text — it’s an object model (data structure).**
**You can create or remove elements dynamically:**

### By default, the HTML span element has a default CSS display property value of:
inline
**A <span> is an inline container used to style or manipulate small parts of text without breaking a line.**

**🧩 Example:**
<p>I love <span class="highlight">coding</span> so much!</p>

.highlight {
  color: red;
  font-weight: bold;
}

*💡 Inline vs Block:**
**Tag	          Display Type         Example**
**<div>	        block	               starts on a new line**
**<span>	      inline	             stays in same line**
**You’d use <span> for styling or targeting a specific word or phrase.**
**Example of multiple <span>s:**
**<p><span style="color:red;">Error:</span> Something went wrong.</p>**


### How would you use CSS to change all the div elements to have a background color of red?
div { background-color: red; }

### How would you display an image with a hyperlink in HTML?
Wrap the &lt;img&gt; element with an &lt;a&gt; tag. Ensure the image file is in the correct folder (public or
images/) and the src path points to it.
`Example:`
`<a href="https://example.com">`
`<img src="images/logo.png" alt="Logo">`
`</a>`
Folder scheme example:
project/
index.html
images/
logo.png
css/
styles.css
If using a framework, the image may need to be in a 'public' or 'static' folder so it is served directly.

### In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

Order: Content -> Padding -> Border -> Margin
Diagram:
+----------------+
| Margin |
| +------------+ |
| | Border | |
| | +--------+ | |
| | |Padding | | |
| | |Content | | |
| | +--------+ | |
| +------------+ |
+----------------+

Padding increases size inside border; margin creates space between elements.

### Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
Given <p><span class="trouble">trouble</span> double</p>, use .trouble { color: green; }

### What will the following code output when executed using a for loop and console.log?
for (let i = 0; i < 3; i++) { console.log(i); }
This initializes i=0, checks i<3 each loop, runs body and increments i++ after each iteration. Output

### How would you use JavaScript to select an element with the id of “byu” and change the text
color of that element to green?
Option 1 (direct):
document.getElementById('byu').style.color = 'green';
Option 2 (variable):
const byu = document.getElementById('byu');
byu.style.color = 'green';
Explanation: getElementById returns the DOM element. Assigning to variable avoids querying repeatedly.
**💡 Alternative:**
**const el = document.querySelector('#byu');**
**el.style.color = 'green';**

### What is the opening HTML tag for a paragraph, ordered list, unordered list, second level
heading, first level heading, third level heading?
Paragraph: <p>, Ordered list: <ol>, Unordered list: <ul>, h2: <h2>, h1: <h1>, h3: <h3>

### How do you declare the document type to be html?
<!DOCTYPE html>

### What is valid javascript syntax for if, else, for, while, switch statements?
if (x > 5) { ... } else { ... } for (...) { ... } while (...) { ... } switch (x) { case 1: ...; break; default: ... }

### What is the correct syntax for creating a javascript object?
const person = { name: "John", age: 30 };
**💡 Access with person.name or person["age"].**

### Is it possible to add new properties to javascript objects?
Yes. Example: person.city = "Provo";

### If you want to include JavaScript on an HTML page, which tag do you use?
<script src="script.js"></script>


### Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and
leave the "fish" text unaffected?
HTML:
<p id="animal">animal</p>
<p id="fish">fish</p>
Option 1 (direct):
document.getElementById('animal').textContent = 'crow';
Option 2 (variable):
const animal = document.getElementById('animal');
animal.textContent = 'crow';
Both work; second is clearer if reusing element.

### Which of the following correctly describes JSON?
JSON (JavaScript Object Notation) is a text-based format for structured data using key-value pairs. Example: {
"name": "John", "age": 25 }

### What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps,
wget, sudo do?
chmod - change permissions, pwd - print working directory, cd - change directory, ls - list files, vim/nano - text
editors, mkdir - make directory, mv - move/rename, rm - remove, man - manual, ssh - remote shell, ps -
processes, wget - download files, sudo - run as admin

### Which of the following console command creates a remote shell session?
ssh
**ssh username@host**
### Which of the following is true when the -la parameter is specified for the ls console command?
ls -la lists all files (including hidden) in long format

### Which of the following is true for the domain name banana.fruit.bozo.click, which is the top
level domain, which is a subdomain, which is a root domain?
TLD: .click, root domain: bozo.click, subdomain: fruit.bozo.click (and banana.fruit.bozo.click is a nested
subdomain)
**🧠 Examples:**
**Full Domain	               Root Domain	              Subdomain(s)**
**example.com	                example.com	                (none)**
**shop.example.com	           example.com	                shop**
**us.shop.example.com	         example.com	                us.shop**
**banana.fruit.bozo.click	     bozo.click	                  banana.fruit**

### Is a web certificate is necessary to use HTTPS.
Yes, HTTPS requires a valid SSL/TLS certificate.

### Can a DNS A record can point to an IP address or another A record.
A DNS A record points to an IP address; it should not point to another A record.

### Port 443, 80, 22 is reserved for which protocol?
443 -> HTTPS, 80 -> HTTP, 22 -> SSH
**💡 Remember: https:// → port 443 automatically.**

### What will the following code using Promises output when executed?
Many possibilities depending on promise behavior. Examples:
1) Promise.resolve('Done').then(console.log) -> 'Done'
2) Promise.reject('Error').catch(console.error) -> 'Error'
3) new Promise(res => setTimeout(() => res('Hi'),1000)).then(console.log) -> 'Hi' after 1s
4) Async function returns value -> printed when awaited or .then
5) Promise chain: Promise.resolve(2).then(x=>x*2).then(x=>x+1).then(console.log) -> 5
6) Reject handled -> shows error via catch.
**💡 Extra Insight:**
**Promises handle async code.**
**.then() for success, .catch() for errors, .finally() for cleanup.**
**Common in fetching data:**
**fetch('data.json').then(res => res.json()).then(data => console.log(data));**


### PROMISES
🧩 Example:
Promise.resolve(2)
  .then(num => {
    console.log('Step 1:', num);
    return num * 3;
  })
  .then(result => {
    console.log('Step 2:', result);
    return result + 5;
  })
  .then(final => {
    console.log('Step 3:', final);
  })
  .catch(error => {
    console.error('Error:', error);
  });

🧠 What’s Happening Step-by-Step

1️⃣ Promise.resolve(2)
Starts a promise that instantly resolves with the value 2.

2️⃣ First .then()

Receives that value (num = 2)

Logs: Step 1: 2

Returns num * 3 → which is 6.

3️⃣ Second .then()

Receives what the previous then returned (result = 6)

Logs: Step 2: 6

Returns result + 5 → which is 11.

4️⃣ Third .then()

Receives final = 11

Logs: Step 3: 11

5️⃣ If any step throws an error, it jumps straight to .catch().

✅ Output:

Step 1: 2
Step 2: 6
Step 3: 11

🧩 Example with Async Behavior
new Promise(resolve => {
  setTimeout(() => resolve(10), 1000);
})
.then(x => {
  console.log('First then:', x); // after 1s
  return x * 2;
})
.then(y => {
  console.log('Second then:', y);
  return y - 4;
})
.then(z => console.log('Final result:', z));


Timeline of events:

After 1 second → first .then() runs (x = 10)

Then → second .then() gets 20 (y = 20)

Then → third .then() gets 16 (z = 16)

🕐 Output after 1 second:

First then: 10
Second then: 20
Final result: 16

⚠️ If an error happens:
Promise.resolve('ok')
  .then(val => {
    throw new Error('Something went wrong!');
  })
  .then(() => console.log('This will NOT run'))
  .catch(err => console.error('Caught:', err.message));


Output:

Caught: Something went wrong!


💡 Once an error happens, the chain skips all later .then() calls and jumps straight to .catch().

🧠 Summary of Promise Chain Flow
Step	What Happens
.then(fn)	Runs when the promise resolves successfully
.catch(fn)	Runs if any error occurs above
.finally(fn)	Always runs, success or error
Each .then() returns a new promise	That’s why chaining works
🪄 Bonus: Visual Flow
Promise.resolve(2)
   ↓
.then(num => num * 3)
   ↓
.then(result => result + 5)
   ↓
.then(final => console.log(final))

Each .then() takes the previous return value and passes it to the next one.

















# End of Midterm 1 Note Dump



## Deploying files to website
`./deployFiles.sh -k ~/.ssh/thekeypair.pem -h mora11do.click -s startup`

## CSS
Man who knows lol, just find other code that works and then use it and modify small things to make it work how you want.

## HTML
- Hyperlink: `<a href="https://www.example.com">How It Appears To Users</a>`
- Image : `<img src="https://example.com/horse.jpg" alt="Horse" width="500">`
- There are also body, p (paragraph), header, h1, nav, div, main, and other tags which I am still experimenting around with.

## Markdown
# first-level heading `#`
## second-level heading `## (up to 6 #)`
- `** bold` **bold**
- `_ italics` _italcs_
- `~~ strikethrough` ~~strikethrough~~
- `<sub> </sub>` <sub>subscript</sub>  
- `<sup> </sup>` <sup>superscript</sup>  
- `<ins> </ins>` <ins>underline</ins>
- `> quote` > quoted text
- backticks for quoting code like `this`
- triple backticks for quoting code like this:
```
This is in its own block
```

## Keypair
**USE __GIT BASH__, NOT POWERSHELL**
- Stored in `~/.ssh
> This is in a hidden directory
- **thekeypair.pem**
> You will need this to...access...something, I think


## GitHub Notes
- Commands
  - git pull #this will update VSCode to match what it looks like on GitHub
  - git add . #this will add changes to the queue, waiting to be pushed (BUT ONLY AFTER YOU ctrl+s in VSCode)
  - git commit -m ["insert message"] #this will...also add changes to the queue, I guess
  - git push #this will send the changes to GitHub
  - cry #this is not a command for the computer but it will be necessary in the future

[My startup - Simon](https://simon.cs260.click)





# Fake Notes

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
