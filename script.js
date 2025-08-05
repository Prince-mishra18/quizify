const container = document.querySelector('.container')
const questionBox = document.querySelector('.question')
const choicesBox = document.querySelector('.choices')
const nextBtn = document.querySelector('.nextBtn')
const Scorecard = document.querySelector('.scoreCard')
const alert = document.querySelector('.alert')
const start = document.querySelector('.startBtn')
const timer = document.querySelector('.timer')
const splashScreen = document.getElementById("splashScreen");
const enterQuizBtn = document.getElementById("enterQuiz");




// An array containing multiple quiz question objects
// 🧠 Top 100 Frontend Developer Questions – Quizify
const quiz = [
  {
    question: "Q. What does HTML stand for?",
    choices: [
      "HighText Machine Language",
      "HyperText and links Markup Language",
      "HyperText Markup Language",
      "None of these"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Q. Which HTML tag is used to define an unordered list?",
    choices: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: "<ul>"
  },
  {
    question: "Q. What is the correct HTML tag for inserting a line break?",
    choices: ["<break>", "<br>", "<lb>", "<line>"],
    answer: "<br>"
  },
  {
    question: "Q. Which attribute is used in HTML to name elements uniquely?",
    choices: ["class", "id", "name", "style"],
    answer: "id"
  },
  {
    question: "Q. Which CSS property controls the text size?",
    choices: ["font-size", "text-style", "text-size", "font-style"],
    answer: "font-size"
  },
  {
    question: "Q. How do you make a background color blue in CSS?",
    choices: [
      "background-color: blue;",
      "bg-color: blue;",
      "color-background: blue;",
      "background: blue-color;"
    ],
    answer: "background-color: blue;"
  },
  {
    question: "Q. Which CSS property is used for changing text color?",
    choices: ["font-color", "text-color", "color", "background-color"],
    answer: "color"
  },
  {
    question: "Q. Which CSS unit is relative to the root element font-size?",
    choices: ["px", "em", "rem", "%"],
    answer: "rem"
  },
  {
    question: "Q. In JavaScript, what does `===` mean?",
    choices: [
      "Assignment",
      "Comparison without type checking",
      "Strict equality",
      "Loose equality"
    ],
    answer: "Strict equality"
  },
  {
    question: "Q. Which JavaScript method is used to select elements by class name?",
    choices: [
      "getElementById",
      "getElementsByClassName",
      "querySelector",
      "querySelectorAll"
    ],
    answer: "getElementsByClassName"
  },
  {
  question: "Q. Which method adds a new element at the end of a JavaScript array?",
  choices: ["push()", "pop()", "shift()", "concat()"],
  answer: "push()"
},
{
  question: "Q. What keyword is used to declare a constant in JavaScript?",
  choices: ["var", "let", "const", "static"],
  answer: "const"
},
{
  question: "Q. What does the DOM stand for?",
  choices: [
    "Document Object Model",
    "Data Object Model",
    "Document Oriented Model",
    "Digital Object Model"
  ],
  answer: "Document Object Model"
},
{
  question: "Q. Which method is used to convert JSON data into a JavaScript object?",
  choices: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toObject()"],
  answer: "JSON.parse()"
},
{
  question: "Q. What is the purpose of the `useState` hook in React?",
  choices: [
    "To fetch data from APIs",
    "To manage side effects",
    "To manage component state",
    "To style components"
  ],
  answer: "To manage component state"
},
{
  question: "Q. In React, which symbol is used to write JSX?",
  choices: ["{}", "<>", "()", "[]"],
  answer: "<>"
},
{
  question: "Q. Which lifecycle method is used in class components to run code after render?",
  choices: [
    "componentDidMount()",
    "componentWillUnmount()",
    "render()",
    "shouldComponentUpdate()"
  ],
  answer: "componentDidMount()"
},
{
  question: "Q. What does CSS stand for?",
  choices: [
    "Computer Style Sheets",
    "Creative Style Sheets",
    "Cascading Style Sheets",
    "Colorful Style Sheets"
  ],
  answer: "Cascading Style Sheets"
},
{
  question: "Q. Which HTML attribute is used to define inline styles?",
  choices: ["style", "class", "css", "id"],
  answer: "style"
},
{
  question: "Q. What does the `z-index` property in CSS control?",
  choices: ["Font weight", "Element stacking order", "Font color", "Width"],
  answer: "Element stacking order"
},
{
  question: "Q. What does `event.preventDefault()` do in JavaScript?",
  choices: [
    "Stops all code execution",
    "Prevents default browser behavior",
    "Reloads the page",
    "Stops event bubbling"
  ],
  answer: "Prevents default browser behavior"
},
{
  question: "Q. Which method is used to delay execution in JavaScript?",
  choices: ["delay()", "setTimeout()", "wait()", "timeout()"],
  answer: "setTimeout()"
},
{
  question: "Q. Which tool is used for version control?",
  choices: ["Git", "Figma", "Webpack", "NPM"],
  answer: "Git"
},
{
  question: "Q. Which of the following is not a semantic HTML tag?",
  choices: ["<header>", "<footer>", "<div>", "<article>"],
  answer: "<div>"
},
{
  question: "Q. Which CSS property sets the space between letters?",
  choices: ["letter-spacing", "word-spacing", "spacing", "text-spacing"],
  answer: "letter-spacing"
},
{
  question: "Q. What is the default position value in CSS?",
  choices: ["relative", "absolute", "fixed", "static"],
  answer: "static"
},
{
  question: "Q. What does `npm` stand for?",
  choices: [
    "Node Package Manager",
    "New Project Module",
    "Next Package Manager",
    "Network Project Manager"
  ],
  answer: "Node Package Manager"
},
{
  question: "Q. In React, what is a component?",
  choices: [
    "A CSS style",
    "An HTML tag",
    "Reusable piece of UI",
    "Database query"
  ],
  answer: "Reusable piece of UI"
},
{
  question: "Q. How do you comment in JSX?",
  choices: ["// comment", "<!-- comment -->", "{/* comment */}", "** comment **"],
  answer: "{/* comment */}"
},
{
  question: "Q. What is a CDN?",
  choices: [
    "Content Delivery Network",
    "Central Data Node",
    "Cascading Data Network",
    "Coding Data Network"
  ],
  answer: "Content Delivery Network"
},

{
  question: "Q. Which tag is used to define a table row in HTML?",
  choices: ["<td>", "<th>", "<tr>", "<table>"],
  answer: "<tr>"
},
{
  question: "Q. What does the `flex` property in CSS do?",
  choices: [
    "Creates grid layout",
    "Applies margin automatically",
    "Controls flexible sizing of flex items",
    "Sets z-index"
  ],
  answer: "Controls flexible sizing of flex items"
},
{
  question: "Q. What is the correct syntax for an arrow function in JavaScript?",
  choices: [
    "function => () {}",
    "() => {}",
    "() => []",
    "=> function()"
  ],
  answer: "() => {}"
},
{
  question: "Q. Which attribute is used to link an external CSS file in HTML?",
  choices: ["src", "href", "link", "rel"],
  answer: "href"
},
{
  question: "Q. Which event occurs when the user clicks on an HTML element?",
  choices: ["onhover", "onclick", "onchange", "onsubmit"],
  answer: "onclick"
},
{
  question: "Q. What is the output of `typeof null` in JavaScript?",
  choices: ["null", "object", "undefined", "boolean"],
  answer: "object"
},
{
  question: "Q. Which method removes the last item from an array?",
  choices: ["shift()", "pop()", "splice()", "remove()"],
  answer: "pop()"
},
{
  question: "Q. What is a stateful component in React?",
  choices: [
    "A component with no UI",
    "A component with routing",
    "A component that manages data using state",
    "A component that imports styles"
  ],
  answer: "A component that manages data using state"
},
{
  question: "Q. What unit is used most commonly for responsive font sizing?",
  choices: ["px", "pt", "em", "vh"],
  answer: "em"
},
{
  question: "Q. What is JSX?",
  choices: [
    "A new JavaScript library",
    "A syntax extension for JavaScript",
    "A JSON object",
    "A new browser"
  ],
  answer: "A syntax extension for JavaScript"
},
{
  question: "Q. What does the `fetch()` method do in JavaScript?",
  choices: [
    "Fetches elements from DOM",
    "Performs mathematical operations",
    "Fetches data from a server",
    "Updates local storage"
  ],
  answer: "Fetches data from a server"
},
{
  question: "Q. Which tag is used to add a line break in HTML?",
  choices: ["<br>", "<lb>", "<break>", "<space>"],
  answer: "<br>"
},
{
  question: "Q. What is the default HTTP method when using fetch()?",
  choices: ["POST", "GET", "PUT", "PATCH"],
  answer: "GET"
},
{
  question: "Q. What does `position: absolute;` do?",
  choices: [
    "Positions an element based on its default flow",
    "Positions an element relative to the browser window",
    "Positions an element relative to its closest positioned ancestor",
    "Fixes the element at the top"
  ],
  answer: "Positions an element relative to its closest positioned ancestor"
},
{
  question: "Q. What does `display: none;` do?",
  choices: [
    "Hides the element but keeps its space",
    "Makes the element visible",
    "Removes the element from the layout flow",
    "Changes opacity to 0"
  ],
  answer: "Removes the element from the layout flow"
},
{
  question: "Q. What is a component library in frontend development?",
  choices: [
    "A set of reusable code snippets",
    "A set of prebuilt UI components",
    "A database tool",
    "A backend tool"
  ],
  answer: "A set of prebuilt UI components"
},
{
  question: "Q. What is the use of the `<meta>` tag in HTML?",
  choices: [
    "Adds scripts to the page",
    "Defines metadata about the HTML document",
    "Adds fonts to the page",
    "Imports external styles"
  ],
  answer: "Defines metadata about the HTML document"
},
{
  question: "Q. What does `this` refer to in JavaScript?",
  choices: [
    "Current file",
    "Global scope",
    "Current function context",
    "Window always"
  ],
  answer: "Current function context"
},
{
  question: "Q. Which of the following is used for debugging in JavaScript?",
  choices: ["debug()", "console.log()", "print()", "alert()"],
  answer: "console.log()"
},
{
  question: "Q. What is the purpose of `map()` in JavaScript?",
  choices: [
    "Loops through objects",
    "Creates a new array from another array",
    "Filters data",
    "Sorts elements"
  ],
  answer: "Creates a new array from another array"
},
{
  question: "Q. What is the difference between == and === in JavaScript?",
  choices: [
    "No difference",
    "== compares value and type, === compares only value",
    "== compares only value, === compares value and type",
    "=== is deprecated"
  ],
  answer: "== compares only value, === compares value and type"
},
{
  question: "Q. What does `z-index` control in CSS?",
  choices: [
    "Text size",
    "Background color",
    "Stacking order of elements",
    "Position of an element"
  ],
  answer: "Stacking order of elements"
},
{
  question: "Q. What is a closure in JavaScript?",
  choices: [
    "A CSS concept",
    "Function with global scope",
    "A function bundled with its lexical environment",
    "A JavaScript event"
  ],
  answer: "A function bundled with its lexical environment"
},
{
  question: "Q. Which HTML tag is used to embed a JavaScript file?",
  choices: ["<link>", "<js>", "<script>", "<style>"],
  answer: "<script>"
},
{
  question: "Q. What is the correct syntax to comment a single line in JavaScript?",
  choices: ["<!-- comment -->", "// comment", "# comment", "** comment **"],
  answer: "// comment"
},
{
  question: "Q. What is the default value of the `flex-direction` property?",
  choices: ["row", "column", "wrap", "inline"],
  answer: "row"
},
{
  question: "Q. What does the `async` keyword do in JavaScript?",
  choices: [
    "Executes code synchronously",
    "Makes a function return a promise",
    "Defines an API",
    "Stops code execution"
  ],
  answer: "Makes a function return a promise"
},
{
  question: "Q. What is the role of the `alt` attribute in the <img> tag?",
  choices: [
    "Defines image source",
    "Adds title to image",
    "Provides alternative text",
    "Changes image style"
  ],
  answer: "Provides alternative text"
},
{
  question: "Q. Which selector targets an element with a specific id in CSS?",
  choices: [".idname", "#idname", "@idname", "idname"],
  answer: "#idname"
},
{
  question: "Q. What does `JSON.stringify()` do?",
  choices: [
    "Converts JSON to HTML",
    "Converts a JavaScript object to a JSON string",
    "Parses a JSON string",
    "Deletes JSON data"
  ],
  answer: "Converts a JavaScript object to a JSON string"
},
{
  question: "Q. Which of the following is not a JavaScript data type?",
  choices: ["undefined", "string", "float", "boolean"],
  answer: "float"
},
{
  question: "Q. What is a media query in CSS?",
  choices: [
    "A query in JavaScript for media files",
    "A CSS technique to apply styles based on screen size",
    "A React hook",
    "An API to fetch images"
  ],
  answer: "A CSS technique to apply styles based on screen size"
},
{
  question: "Q. What does the `addEventListener()` method do?",
  choices: [
    "Adds a script to HTML",
    "Adds an event to the DOM",
    "Adds CSS to the page",
    "Adds a database"
  ],
  answer: "Adds an event to the DOM"
},
{
  question: "Q. Which function is used to delay code execution in JavaScript?",
  choices: ["delay()", "wait()", "setTimeout()", "pause()"],
  answer: "setTimeout()"
},
{
  question: "Q. What does the DOM stand for?",
  choices: [
    "Data Object Model",
    "Document Object Model",
    "Design Object Model",
    "Document Oriented Markup"
  ],
  answer: "Document Object Model"
},
{
  question: "Q. Which tag is used to make text bold in HTML?",
  choices: ["<b>", "<bold>", "<strong>", "<text>"],
  answer: "<b>"
},
{
  question: "Q. What is the use of `localStorage` in web development?",
  choices: [
    "To store user data temporarily",
    "To store data on the server",
    "To store data permanently in the browser",
    "To upload files"
  ],
  answer: "To store data permanently in the browser"
},
{
  question: "Q. Which React hook is used to perform side effects?",
  choices: ["useState", "useRef", "useEffect", "useMemo"],
  answer: "useEffect"
},
{
  question: "Q. What does `Math.floor(5.9)` return in JavaScript?",
  choices: ["5", "6", "9", "undefined"],
  answer: "5"
},
{
  question: "Q. What does `position: fixed;` do in CSS?",
  choices: [
    "Positions the element inside its parent",
    "Keeps the element fixed relative to the viewport",
    "Centers the element",
    "Stretches the element"
  ],
  answer: "Keeps the element fixed relative to the viewport"
},
{
  question: "Q. What does the `useState` hook return in React?",
  choices: [
    "A single state value",
    "An array with state and function to update it",
    "A string",
    "A reducer function"
  ],
  answer: "An array with state and function to update it"
},
{
  question: "Q. Which tag is used to create a dropdown list in HTML?",
  choices: ["<input>", "<dropdown>", "<select>", "<list>"],
  answer: "<select>"
},
{
  question: "Q. What is JSX in React?",
  choices: [
    "A type of CSS",
    "JavaScript XML - syntax extension for JavaScript",
    "A package manager",
    "A testing tool"
  ],
  answer: "JavaScript XML - syntax extension for JavaScript"
},
{
  question: "Q. What does `e.preventDefault()` do in JavaScript?",
  choices: [
    "Prevents user input",
    "Prevents default action of an event",
    "Stops the script",
    "Reloads the page"
  ],
  answer: "Prevents default action of an event"
},
{
  question: "Q. How can you apply a CSS class in JavaScript?",
  choices: [
    "element.setClass('class')",
    "element.className = 'class'",
    "element.style = 'class'",
    "element.class = 'class'"
  ],
  answer: "element.className = 'class'"
},
{
  question: "Q. What is the default HTTP method used in form submission?",
  choices: ["GET", "POST", "PUT", "DELETE"],
  answer: "GET"
},
{
  question: "Q. Which property is used for spacing between lines of text in CSS?",
  choices: ["line-height", "letter-spacing", "word-spacing", "margin"],
  answer: "line-height"
},
{
  question: "Q. What is the virtual DOM?",
  choices: [
    "A replica of browser DOM stored in server",
    "An in-memory representation of real DOM",
    "A database",
    "None of the above"
  ],
  answer: "An in-memory representation of real DOM"
},
{
  question: "Q. How do you declare a constant variable in JavaScript?",
  choices: ["let", "const", "var", "define"],
  answer: "const"
},
{
  question: "Q. Which CSS property makes text italic?",
  choices: ["text-style", "font-weight", "font-style", "text-align"],
  answer: "font-style"
},
{
  question: "Q. Which event occurs when the user clicks on an HTML element?",
  choices: ["onchange", "onmouseover", "onmouseclick", "onclick"],
  answer: "onclick"
},
{
  question: "Q. What is the correct way to link a CSS file to an HTML document?",
  choices: [
    "<link rel='stylesheet' href='style.css'>",
    "<style src='style.css'>",
    "<script href='style.css'>",
    "<css>style.css</css>"
  ],
  answer: "<link rel='stylesheet' href='style.css'>"
},
{
  question: "Q. How can we create a responsive layout in CSS?",
  choices: [
    "Using media queries",
    "Using hover",
    "Using padding",
    "Using margin"
  ],
  answer: "Using media queries"
},
{
  question: "Q. What does `map()` do in JavaScript?",
  choices: [
    "Maps the array to a string",
    "Changes array to object",
    "Creates a new array by transforming elements",
    "Finds a value"
  ],
  answer: "Creates a new array by transforming elements"
},
{
  question: "Q. What does `box-sizing: border-box;` do?",
  choices: [
    "Includes padding and border in element’s total width and height",
    "Excludes padding",
    "Changes margin to border",
    "Removes box-shadow"
  ],
  answer: "Includes padding and border in element’s total width and height"
},
{
  question: "Q. What does the `required` attribute do in an HTML form?",
  choices: [
    "Sends data to the server",
    "Validates field with regex",
    "Prevents form submission if empty",
    "Hides the field"
  ],
  answer: "Prevents form submission if empty"
},
{
  question: "Q. Which lifecycle method runs once after initial render in React (class component)?",
  choices: [
    "componentDidUpdate",
    "componentWillUnmount",
    "componentDidMount",
    "render"
  ],
  answer: "componentDidMount"
},
{
  question: "Q. How can you change the text color of an element in CSS?",
  choices: ["font-color", "text-color", "color", "background"],
  answer: "color"
},
{
  question: "Q. Which CSS unit is relative to the root element?",
  choices: ["em", "%", "rem", "vw"],
  answer: "rem"
},
{
  question: "Q. Which method converts a JSON string into a JavaScript object?",
  choices: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "parseJSON()"],
  answer: "JSON.parse()"
},
{
  question: "Q. What does the `<meta>` tag do in HTML?",
  choices: [
    "Add images",
    "Link CSS",
    "Provide metadata about the HTML document",
    "Create a table"
  ],
  answer: "Provide metadata about the HTML document"
},
{
  question: "Q. What does `git clone` do?",
  choices: [
    "Creates a new repo",
    "Saves changes",
    "Downloads a repo from GitHub",
    "Deletes files"
  ],
  answer: "Downloads a repo from GitHub"
},
{
  question: "Q. Which React feature allows you to manage global state easily?",
  choices: ["Props", "Hooks", "Context API", "Router"],
  answer: "Context API"
},
{
  question: "Q. What is the function of `Array.filter()`?",
  choices: [
    "Sorts the array",
    "Returns elements based on a condition",
    "Merges two arrays",
    "Reverses an array"
  ],
  answer: "Returns elements based on a condition"
},
{
  question: "Q. Which HTML attribute specifies the URL of a link?",
  choices: ["src", "href", "link", "target"],
  answer: "href"
},
{
  question: "Q. What is the purpose of `<noscript>` tag?",
  choices: [
    "To disable script tags",
    "To show content when JavaScript is disabled",
    "To validate JS",
    "To comment JS code"
  ],
  answer: "To show content when JavaScript is disabled"
},
{
  question: "Q. How can you create a hover effect in CSS?",
  choices: [
    "element.hover { ... }",
    ".hover-effect",
    "element:hover { ... }",
    "hover-element"
  ],
  answer: "element:hover { ... }"
},
{
  question: "Q. What does `display: none;` do in CSS?",
  choices: [
    "Hides the element but reserves space",
    "Completely removes the element from layout",
    "Makes the element invisible",
    "Disables CSS"
  ],
  answer: "Completely removes the element from layout"
},
{
  question: "Q. Which tool is commonly used for version control?",
  choices: ["VS Code", "NPM", "Git", "React"],
  answer: "Git"
},
{
  question: "Q. What is `npm` used for?",
  choices: [
    "Package management in JavaScript",
    "Running websites",
    "Styling web pages",
    "Debugging CSS"
  ],
  answer: "Package management in JavaScript"
}

];


// console.log(quiz.length);

//Making Variables
let cueerntQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeleft = 15;
let timerID = null;

//Arrow function to show questions
const showQuestions = () => {
  const questionDetails = quiz[cueerntQuestionIndex]
  questionBox.textContent = questionDetails.question;

  choicesBox.textContent = "";
  for (let i = 0; i < questionDetails.choices.length; i++) {
    const cueerntChoice = questionDetails.choices[i];
    const choiceDiv = document.createElement('div');
    choiceDiv.textContent = cueerntChoice;
    choiceDiv.classList.add('choice');
    choicesBox.appendChild(choiceDiv)

   choiceDiv.addEventListener('click', () => {
  // Remove 'selected' from all choices
  const allChoices = document.querySelectorAll('.choice');
  allChoices.forEach(choice => choice.classList.remove('selected'));

  // Add 'selected' to the clicked choice only
  choiceDiv.classList.add('selected');
});


  }
  if (cueerntQuestionIndex < quiz.length)
    startTimer();
}

//function to check answers
const checkAnswer = () => {
  const selectedChoice = document.querySelector('.choice.selected');
  if (selectedChoice.textContent === quiz[cueerntQuestionIndex].answer) {
    displayAlert("Correct Answer!")
    score++;
  }
  else {
    displayAlert(`Wrong Answer!  ${quiz[cueerntQuestionIndex].answer} is the correct Answer`)
  }
  timeleft = 15;
  cueerntQuestionIndex++;
  if (cueerntQuestionIndex < quiz.length) {
    showQuestions();
  }
  else {
    showScore();
    stopTimer();
  }

}


// Function to show score
const showScore = () => {
  questionBox.textContent = ""
  choicesBox.textContent = ""
  Scorecard.textContent = `You Scored ${score} out of ${quiz.length}!`;
  displayAlert("You have completed this quiz!")
  nextBtn.textContent = "🎮 Restart Quiz";
  quizOver = true;
  timer.style.display = 'none';
}

//Function to show alert
const displayAlert = (msg) => {
  alert.style.display = "block";
  alert.textContent = msg;
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000)

}

// Function to Start Timer
const startTimer = () => {
  timer.textContent = timeleft
  clearInterval(timerID);
  const countDown = () => {
    timeleft--;
    timer.textContent = timeleft

    if (timeleft === 0) {
      const confirmUser = confirm("Time Up!!! Do you want to play the quiz again")
      if (confirmUser) {
        timeleft = 15;
        startQuiz();
      } else {
        start.style.display = "block"
        container.style.display = "none"
        return;
      }
    }
  }
  timerID = setInterval(countDown, 1000);
}


//Function to start timer
const stopTimer = () => {
  clearInterval(timerID); // check for any exist timers
}





//Function to shuffle question
const shuffleQuestions = () => {
  for (let i = quiz.length - 1; i > 0; i--) {
    const j = Math.floor((Math.random() * (i + 1)));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
  }

  cueerntQuestionIndex = 0;
  showQuestions();
}

//Function to start quiz
const startQuiz = () => {
  timeleft = 15;
  timer.style.display = "flex";
  shuffleQuestions()

}

enterQuizBtn.addEventListener("click", () => {
  splashScreen.style.display = "none";
  start.style.display = "block"; // show start button after splash
});


//Adding Event Listener to start button
start.addEventListener('click', () => {
  start.style.display = "none"
  container.style.display = "block"
  startQuiz();
})




//showQuestions
nextBtn.addEventListener('click', () => {
  const selectedChoice = document.querySelector('.choice.selected')
  if (!selectedChoice && nextBtn.textContent === "Next") {
    // alert("Select your answer")
    displayAlert("Select your answer")
    return;
  }
  if (quizOver) {
    nextBtn.textContent = "Next";
    Scorecard.textContent = "";
    cueerntQuestionIndex = 0;
    quizOver = false;
    score = 0;
    startQuiz();
  }
  else {
    checkAnswer();
  }

})






