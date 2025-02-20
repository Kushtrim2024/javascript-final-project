import readlineSync from "readline-sync";
import chalk from "chalk";

// Das Objekt questions enthält Quizdaten für verschiedene Kategorien/Themen
const questions = {
  React: [
    // Kategorie für React-Fragen
    {
      question: "What is the correct command to create a new React project?",
      options: [
        "A) npm create-react-app",
        "B) npm create-react-app myReactApp",
        "C) npx create-react-app myReactApp",
        "D) npx create-react-app",
      ],
      answer: "C",
    },
    {
      question:
        "What command is used to start the React local development server?",
      options: [
        "A) npm start",
        "B) npm build",
        "C) npm run dev",
        "D) npm serve",
      ],
      answer: "A",
    },
    {
      question:
        "What is the default local host port that a React development server uses?",
      options: ["A) 8080", "B) 3000", "C) 3500", "D) 5000"],
      answer: "B",
    },
    {
      question: "To develop and run React code, Node.js is required.",
      options: ["A) True", "B) False"],
      answer: "A",
    },
    {
      question: "What is the children prop?",
      options: [
        "A) A property that lets you nest components in other components  ",
        "B) A property that adds child values to state",
        "C) A property that lets you set an object as a property",
        "D) A property that lets you pass data to child components",
      ],
      answer: "A",
    },
    {
      question: "Which keyword creates a constant in JavaScript?",
      options: ["A) let", "B) constant", "C) var", "D) const"],
      answer: "D",
    },
    {
      question:
        "A copy of the 'real' DOM that is kept in memory is called what?",
      options: ["A) DOM", "B) Virtual DOM", "C) Shadow DOM", "D) React DOM"],
      answer: "B",
    },
    {
      question: "React component names must begin with an uppercase letter.",
      options: ["A) False", "B) True"],
      answer: "B",
    },
    {
      question:
        "Which operator can be used to conditionally render a React component?",
      options: ["A) ||", "B) &&", "C) ::", "D) ??"],
      answer: "B",
    },
    {
      question:
        "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
      options: ["A) data", "B) key", "C) index", "D) id"],
      answer: "B",
    },
    {
      question: "What tool does React use to compile JSX?",
      options: [
        "A) React Router",
        "B) JSX Compiler",
        "C) ReactDOM",
        "D) Babel",
      ],
      answer: "D",
    },
    {
      question:
        "How can you optimize performance for a function component that always renders the same way?",
      options: [
        "A) Use the useReducer Hook.",
        "B) Use the shouldComponentUpdate lifecycle method.",
        "C) Use the useMemo Hook.",
        "D) Wrap it in the React.memo higher-order component.",
      ],
      answer: "D",
    },
    {
      question:
        "What props will be available to the following component? <Car {...props} />",
      options: [
        "A) all of them",
        "B) only updated ones",
        "C) children",
        "D) only static ones",
      ],
      answer: "A",
    },
    {
      question: "What is a common use case for ref?",
      options: [
        "A) To refer to another JavaScript file",
        "B) To directly access a DOM node",
        "C) To bind the function",
        "D) To refer to a function",
      ],
      answer: "B",
    },
    {
      question: "React can only render elements in the root document element.",
      options: ["A) True", "B) False"],
      answer: "B",
    },
    {
      question: "What is the correct syntax to import a Component from React?",
      options: [
        "A) import React.Component from 'react'",
        "B) import Component from 'react'",
        "C) import { Component } from 'react' ",
        "D) import [ Component ] from 'react'",
      ],
      answer: "C",
    },
    {
      question:
        "React separates the user interface into components. How are components combinded to create a user interface?",
      options: [
        "A) By nesting components ",
        "B) With code splitting",
        "C) With webpack",
        "C) By putting them in a folder structure",
      ],
      answer: "A",
    },
    {
      question:
        "Although React Hooks generally replace class components, there are no plans to remove classes from React.",
      options: ["A) True", "B) False"],
      answer: "A",
    },
    {
      question: "Which of the following is NOT a rule for React Hooks?",
      options: [
        "A) Hooks can only be called inside React Function components",
        "B) Hooks can be called in Class or Function components  ",
        "C) Hooks can only be called at the top level of a component",
        "D) Hooks cannot be conditional",
      ],
      answer: "B",
    },
    {
      question:
        "How can you combine the following arrays using the spread operator? const array1 = [1, 2, 3]; const array2 = [4, 5, 6];",
      options: [
        "A) const combined = ...array1 + ...array2;",
        "B) const combined = [...array1, ...array2]; ",
        "C) const combined = array1 + array2;",
        "D) const combined = [array1, array2];",
      ],
      answer: "B",
    },
  ],
  Javascript: [
    // Kategorie für JavaScript-Fragen
    {
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["A) <js>", "B) <javascript>", "C) <scripting>", "D) <script>"],
      answer: "D",
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      options: [
        "A) Both the <head> section and the <body> section are correct",
        "B) The <head> section",
        "C) The <body> section",
      ],
      answer: "A",
    },
    {
      question:
        "What is the correct syntax for referring to an external script called xxx.js?",
      options: [
        'A) <script src ="xxx.js"',
        'B) <script href ="xxx.js"',
        'C) <script name ="xxx.js"',
      ],
      answer: "A",
    },
    {
      question: "The external JavaScript file must contain the <script> tag.",
      options: ["A) True", "B) False"],
      answer: "B",
    },
    {
      question: "How do you create a function in JavaScript?",
      options: [
        "A) function:myFunction()",
        "B) function = myFunction()",
        "C) function myFunction()",
      ],
      answer: "C",
    },
    {
      question: "How do you call a function named myFunction?",
      options: [
        "A) call function myFunction()",
        "B) myFunction()",
        "C) call myFunction()",
      ],
      answer: "B",
    },
    {
      question: "How to write an IF statement in JavaScript?",
      options: [
        "A) if (i == 5)",
        "B) if i = 5",
        "C) if i = 5 then",
        "D) if i == 5 then",
      ],
      answer: "A",
    },
    {
      question:
        "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
      options: [
        "A) if i <> 5",
        "B) if i =! 5 then",
        "C) if (i != 5)",
        "D) if (i <> 5) then",
      ],
      answer: "C",
    },
    {
      question: "How does a WHILE loop start?",
      options: [
        "A) while (i <= 10)",
        "B) while (i <= 10; i++)",
        "C) while i = 1 to 10",
      ],
      answer: "A",
    },
    {
      question: "How does a FOR loop start?",
      options: [
        "A) for (i = 0; i <=5)",
        "B) for (i = 0; i <=5; i++)",
        "C) for i = 1 to 5",
        "D) for (i <= 5; i ++)",
      ],
      answer: "B",
    },
    {
      question: "How can you add a comment in a JavaScript?",
      options: [
        "A) <!--This is a comment-->",
        "B) //This is a comment",
        "C) 'This is a comment",
      ],
      answer: "B",
    },
    {
      question: "How to insert a comment that has more than one line?",
      options: [
        "A) <!--This is a comment has more than one line -->",
        "B) //This is a comment has more than one line// ",
        "C) /*This is a comment has more than one line*/",
      ],
      answer: "C",
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      options: [
        'A) var colors = 1 = ("red"),2 = ("green"), 3 = ("blue")',
        'B) for (1:"red",2:"green",3:"blue")',
        'C) var colors = ["red", "green", "blue"]',
      ],
      answer: "C",
    },
    {
      question: "How do you round the number 7.25, to the nearest integer?",
      options: [
        "A) round(7.25)",
        "B) Math.rnd(7.25)",
        "C) Math.round(7.25)",
        "D) rnd(7.25)",
      ],
      answer: "C",
    },
    {
      question: "How do you find the number with the highest value of x and y?",
      options: [
        "A) Math.max(x,y)",
        "B) Math.ceil(x,y)",
        "C) top(x,y)",
        "D) ceil(x,y)",
      ],
      answer: "A",
    },
    {
      question: "JavaScript is the same as Java.",
      options: ["A) True", "B) False"],
      answer: "B",
    },
    {
      question: "How do you declare a JavaScript variable?",
      options: ["A) v carName", "B) var carName", "C) variable carName "],
      answer: "B",
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["A) *", "B) x", "C) -", "D) ="],
      answer: "D",
    },
    {
      question: "Is JavaScript case-sensitive?",
      options: ["A) No", "B) Yes"],
      answer: "B",
    },
    {
      question: "What will the following code return: Boolean(10 > 9)",
      options: ["A) true", "B) false", "C) NaN "],
      answer: "A",
    },
  ],
  CSS: [
    // Kategorie für CSS-Fragen
    {
      question: "What does CSS stand for?",
      options: [
        "A) Computer Style Sheets",
        "B) Cascading Style Sheets",
        "C) Creative Style Sheets ",
        "D) Colorful Style Sheets ",
      ],
      answer: "B",
    },
    {
      question:
        "What is the correct HTML for referring to an external style sheet?",
      options: [
        'A) <link rel="stylesheet" type="text/css" href="mystyle.css">',
        "B) <stylesheet>mystyle.css</stylesheet>",
        'C) <style src="mystyle.css"> ',
      ],
      answer: "A",
    },
    {
      question:
        "Where in an HTML document is the correct place to refer to an external style sheet?",
      options: [
        "A) In the <body> section",
        "B) In the <head> section  ",
        "C) At the end of the document ",
      ],
      answer: "B",
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["A) <css>", "B) <script>", "C) <style>  "],
      answer: "C",
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["A) font", "B) style ", "C) class ", "D) styles"],
      answer: "B",
    },
    {
      question: "Which is the correct CSS syntax?",
      options: [
        "A) body:color=black;",
        "B) body {color: black;}  ",
        "C) {body:color=black;} ",
        "D) {body;color:black;} ",
      ],
      answer: "B",
    },
    {
      question: "How do you insert a comment in a CSS file?",
      options: [
        "A) // this is a comment //",
        "B) /* this is a comment */  ",
        "C) // this is a comment ",
        "D) 'this is a comment ",
      ],
      answer: "B",
    },
    {
      question: "Which property is used to change the background color?",
      options: ["A) background-color", "B) bgcolor", "C) color"],
      answer: "A",
    },
    {
      question: "How do you add a background color for all <h1> elements?",
      options: [
        "A) h1.all {background-color:#FFFFFF;}",
        "B) all.h1 {background-color:#FFFFFF;}",
        "C) h1 {background-color:#FFFFFF;}",
      ],
      answer: "C",
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      options: ["A) color", "B) fgcolor", "C) text-color"],
      answer: "A",
    },
    {
      question: "Which CSS property controls the text size?",
      options: [
        "A) font-size",
        "B) text-size",
        "C) text-style",
        "D) font-style",
      ],
      answer: "A",
    },
    {
      question:
        "What is the correct CSS syntax for making all the <p> elements bold?",
      options: [
        'A) <p style="font-size:bold;">',
        'B) <p style="text-size:bold;">',
        "C) p {text-size:bold;}",
        "D) p {font-weight:bold;}  ",
      ],
      answer: "D",
    },
    {
      question: "How do you display hyperlinks without an underline?",
      options: [
        "A) a {decoration:no-underline;}",
        "B) a {text-decoration:no-underline;}",
        "C) a {underline:none;}",
        "D) a {text-decoration:none;} ",
      ],
      answer: "D",
    },
    {
      question:
        "How do you make each word in a text start with a capital letter?",
      options: [
        "A) You can't do that with CSS",
        "B) transform:capitalize",
        "C) text-style:capitalize",
        "D) text-transform:capitalize",
      ],
      answer: "D",
    },
    {
      question: "Which property is used to change the font of an element?",
      options: ["A) font-family", "B) font-weight", "C) font-style"],
      answer: "A",
    },
    {
      question: "How do you make the text bold?",
      options: ["A) font:bold;", "B) style:bold;", "C) font-weight:bold; "],
      answer: "C",
    },
    {
      question:
        "Which property is used to change the left margin of an element?",
      options: ["A) indent", "B) margin-left", "C) padding-left"],
      answer: "B",
    },
    {
      question: "How do you make a list that lists its items with squares?",
      options: [
        "A) list-style-type: square;",
        "B) list: square;",
        "C) list-type: square;",
      ],
      answer: "A",
    },
    {
      question: "How do you select all p elements inside a div element?",
      options: ["A) div.p", "B) div p", "C) div + p "],
      answer: "B",
    },
    {
      question: "How do you group selectors?",
      options: [
        "A) Separate each selector with a plus sign",
        "B) Separate each selector with a comma",
        "C) Separate each selector with a space",
      ],
      answer: "B",
    },
  ],
  HTML: [
    // Kategorie für HTML-Fragen
    {
      question: "What does HTML stand for?",
      options: [
        "A) Home Tool Markup Language",
        "B) Hyperlinks and Text Markup Language",
        "C) Hyper Text Markup Language",
      ],
      answer: "C",
    },
    {
      question: "Choose the correct HTML element for the largest heading:",
      options: ["A) <h1>", "B) <head>", "C) <heading>", "D) <h6>"],
      answer: "A",
    },
    {
      question: "Choose the correct HTML element to define emphasized text",
      options: ["A) <i>", "B) <em>", "C) <italic>"],
      answer: "B",
    },
    {
      question: "What is the correct HTML for creating a hyperlink?",
      options: [
        'A) <a url="http://www.w3schools.com">W3Schools.com</a>',
        "B) <a>http://www.w3schools.com</a>",
        'C) <a href="http://www.w3schools.com">W3Schools</a>',
        'D) <a name="http://www.w3schools.com">W3Schools.com</a>',
      ],
      answer: "C",
    },
    {
      question: "Which character is used to indicate an end tag?",
      options: ["A) *", "B) ^ ", "C) / ", "D) < "],
      answer: "C",
    },
    {
      question: "How can you open a link in a new tab/browser window?",
      options: [
        'A) <a href="url" target="new">',
        'B) <a href="url" new>',
        'C) <a href="url" target="_blank"> ',
      ],
      answer: "C",
    },
    {
      question: "Which of these elements are all <table> elements?",
      options: [
        "A) <thead><body><tr>  ",
        "B) <table><tr><td> ",
        "C) <table><head><tfoot>",
        "D) <table><tr><tt>",
      ],
      answer: "B",
    },
    {
      question:
        "Inline elements are normally displayed without starting a new line.",
      options: ["A) False", "B) True "],
      answer: "B",
    },
    {
      question: "What is the correct HTML for making a checkbox?",
      options: [
        'A) <input type="checkbox">  ',
        'B) <input type="check">',
        "C) <checkbox>",
      ],
      answer: "A",
    },
    {
      question: "What is the correct HTML for making a text input field?",
      options: [
        'A) <input type="text">',
        'B) <textinput type="text">',
        'C) <input type="textfield">',
      ],
      answer: "A",
    },
    {
      question: "Which CSS property controls the text size?",
      options: [
        "A) font-size ",
        "B) text-style",
        "C) font-family",
        "D) text-transform",
      ],
      answer: "A",
    },
    {
      question: "What is the correct HTML for inserting an image?",
      options: [
        'A) <image src="image.gif" alt="MyImage">  ',
        'B) <img href="image.gif" alt="MyImage">',
        'C) <img alt="MyImage">image.gif</img>',
        'D) <img src="image.gif" alt="MyImage"> ',
      ],
      answer: "D",
    },
    {
      question: "What is the correct HTML for inserting a background image?",
      options: [
        'A) <body style="background-image:url(background.gif)">',
        'B) <background img="background.gif">',
        'C) <body bg="background.gif">',
      ],
      answer: "A",
    },
    {
      question: "In HTML, onblur and onfocus are:",
      options: [
        "A) Event attributes",
        "B) Style attributes",
        "C) HTML elements",
      ],
      answer: "A",
    },
    {
      question:
        "In HTML, which attribute is used to specify that an input field must be filled out?",
      options: [
        "A) required ",
        "B) formvalidate",
        "C) placeholder",
        "D) validate",
      ],
      answer: "A",
    },
    {
      question: "Which input type defines a slider control?",
      options: ["A) search", "B) controls", "C) slider", "D) range"],
      answer: "D",
    },
    {
      question: "Which HTML element defines navigation links?",
      options: ["A) <nav> ", "B) <navigate>", "C) <navigation>"],
      answer: "A",
    },
    {
      question: "In HTML, what does the <aside> element define?",
      options: [
        "A) Content aside from the page content  ",
        "B) The ASCII character-set; to send information between computers on the Internet",
        "C) A navigation list to be shown at the left side of the page",
      ],
      answer: "A",
    },
    {
      question:
        "Which HTML element is used to specify a header for a document or section?",
      options: ["A) <section>", "B) <top>", "C) <head>", "D)<header>"],
      answer: "D",
    },
    {
      question:
        "In HTML, you can embed SVG elements directly into an HTML page.",
      options: ["A) False", "B) True"],
      answer: "B",
    },
  ],
};
// Funktion zum Abrufen zufälliger 10 Fragen zu einem bestimmten Kategorie/Thema
function getRandomQuestions(subject, numQuestions = 10) {
  if (!questions[subject]) {
    console.log(chalk.red.bold("Subject not found!"));
    process.exit(0);
  }

  let subjectQuestions = [...questions[subject]]; // Das Array wird geklont, um Mutationen zu vermeiden
  subjectQuestions.sort(() => Math.random() - 0.5); // Das Array wird zufällig sortiert
  return subjectQuestions.slice(0, numQuestions); // Die ersten „numQuestions“-Fragen werden ausgewählt
}
function ascii() {
  let text = `
  ████████╗███████╗███████╗████████╗
  ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝
     ██║   █████╗  ███████╗   ██║   
     ██║   ██╔══╝  ╚════██║   ██║   
     ██║   ███████╗███████║   ██║   
     ╚═╝   ╚══════╝╚══════╝   ╚═╝   
  `;
  console.log(chalk.cyan(text));
}

function test(questions) {
  let score = 0;
  console.log(chalk.bold("\n📌 Start the test!"));
  console.log(
    chalk.yellow.bold(
      "\nInstructions:\n- Each test has 10 questions with one correct answer.\n- Read each statement carefully and write the letter of the correct answer.\n- Each correct answer has 10 points, while each incorrect answer -3 points.\n- Be careful, if you don't know the answer, don't fill it in.\nGood luck!\n"
    )
  );
  // Jede Frage im questions-Array durchlaufen
  questions.forEach((q, index) => {
    console.log(
      chalk.blue.bold(`Question ${index + 1} from 10:\n${q.question}\n`)
    );
    // Jede Option für die aktuelle Frage durchlaufen und anzeigen
    q.options.forEach((option) => console.log(option));
    let userAnswer = readlineSync.question("\nYour answer: ").toUpperCase();
    console.clear();
    if (userAnswer === q.answer) {
      score += 10;
    } else {
      score -= 3;
    }
  });

  // Endergebnis anzeigen
  if (score < 0) score = 0;
  if (score >= 55) {
    console.log(
      chalk.green.bold(
        `\n🎉 Congratulations, you passed!\nYou scored: ${score} points`
      )
    );
  } else {
    console.log(
      chalk.red.bold(
        `😔 Sorry, you failed.\nYou must study harder!\nYou scored: ${score} points`
      )
    );
  }

  getGrade(score);
}
function getGrade(score) {
  let grade;

  // Switch case basierend auf der Punktzahl wechseln
  switch (true) {
    case score >= 85:
      grade = "A";
      break;
    case score >= 75:
      grade = "B";
      break;
    case score >= 65:
      grade = "C";
      break;
    case score >= 55:
      grade = "D";
      break;
    default:
      grade = "F";
      break;
  }

  console.log(chalk.bold.italic(`Your grade is: ${grade}\n`));
}

ascii();
console.log(chalk.bold.italic("Welcome to Electronic Testing!\n"));
console.log(chalk.bold("Subjects:\n[1] HTML\n[2] CSS\n[3] Javascript\n[4] React\n"));
let subjectMap = { "1": "HTML", "2": "CSS", "3": "Javascript", "4": "React" };
let userChoice = readlineSync.question(chalk.bold("Choose one of the options above [1...4]:  "));
let userSubject = subjectMap[userChoice];

if (!userSubject) {
  console.log(chalk.bold.red("Invalid choice!"));
  process.exit(0);
}

console.clear();
let selectedQuestions = getRandomQuestions(userSubject);
test(selectedQuestions);
