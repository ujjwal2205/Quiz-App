const quizData = [
  { id: 1, name: "HTML Basics", totalQuestions: 5 },
  { id: 2, name: "CSS Fundamentals", totalQuestions: 5 },
  { id: 3, name: "JavaScript Essentials", totalQuestions: 5 },
  { id: 4, name: "React Basics", totalQuestions: 5 },
  { id: 5, name: "Data Structures", totalQuestions: 5 },
  { id: 6, name: "Algorithms", totalQuestions: 5 },
  { id: 7, name: "Node.js Introduction", totalQuestions: 5 },
  { id: 8, name: "Express.js Basics", totalQuestions: 5 },
  { id: 9, name: "MongoDB Essentials", totalQuestions: 5 },
  { id: 10, name: "SQL Queries", totalQuestions: 5 },
];
const questions = {
  1: [
    {
      "id": 1,
      "question": "HTML Basics - What is the full form of HTML?",
      "options": [
        "HyperText Markup Language",
        "HyperText Machine Language",
        "HyperText Markdown Language",
        "None of the above"
      ],
      "correctAnswer": [
        "HyperText Markup Language"
      ],
      "type": "single"
    },
    {
      "id": 2,
      "question": "HTML Basics - What tag is used to define a hyperlink?",
      "options": [
        "<link>",
        "<a>",
        "<href>",
        "<url>"
      ],
      "correctAnswer": [
        "<a>"
      ],
      "type": "single"
    },
    {
      "id": 3,
      "question": "HTML Basics - Is `<br>` a self-closing tag?",
      "correctAnswer":["true"],
      "type": "boolean"
    },
    {
      "id": 4,
      "question": "HTML Basics - What is the purpose of the `<head>` tag?",
      "options": [
        "Defines the main content of the webpage",
        "Contains metadata about the webpage",
        "Contains all the images",
        "Defines the footer of the webpage"
      ],
      "correctAnswer": [
        "Contains metadata about the webpage"
      ],
      "type": "single"
    },
    {
      "id": 5,
      "question": "HTML Basics - Select all tags used to create a table.",
      "options": [
        "<table>",
        "<tr>",
        "<td>",
        "<div>"
      ],
      "correctAnswer": [
        "<table>",
        "<tr>",
        "<td>"
      ],
      "type": "multiple"
    },
  ],
  2: [
    {
      "id": 1,
      "question": "CSS Fundamentals - Which property is used to change the text color?",
      "options": [
        "color",
        "font-color",
        "text-color",
        "background-color"
      ],
      "correctAnswer": [
        "color"
      ],
      "type": "single"
    },
    {
      "id": 2,
      "question": "CSS Fundamentals - Which of the following is the correct syntax for internal CSS?",
      "options": [
        "<style>body {color: black;}</style>",
        "<css>body {color: black;}</css>",
        "<style body='color: black;'> </style>",
        "<style='body {color: black;}'>"
      ],
      "correctAnswer": [
        "<style>body {color: black;}</style>"
      ],
      "type": "single"
    },
    {
      "id": 3,
      "question": "CSS Fundamentals - How do you add a background color to a webpage?",
      "options": [
        "background-color: yellow;",
        "color: yellow;",
        "bg-color: yellow;",
        "background: yellow;"
      ],
      "correctAnswer": [
        "background-color: yellow;"
      ],
      "type": "single"
    },
    {
      "id": 4,
      "question": "CSS Fundamentals - What is the default display value of a `div` element?",
      "options": [
        "block",
        "inline",
        "flex",
        "grid"
      ],
      "correctAnswer": [
        "block"
      ],
      "type": "single"
    },
    {
      "id": 5,
      "question": "CSS Fundamentals - Which property is used to set the space between elements in Flexbox?",
      "options": [
        "justify-content",
        "align-items",
        "gap",
        "space-between"
      ],
      "correctAnswer": [
        "gap"
      ],
      "type": "single"
    },
  ],
  3: [
    {
      "id": 1,
      "question": "JavaScript Essentials - Which of the following is used to define a variable in JavaScript?",
      "options": [
        "let",
        "var",
        "const",
        "All of the above"
      ],
      "correctAnswer": [
        "All of the above"
      ],
      "type": "single"
    },
    {
      "id": 2,
      "question": "JavaScript Essentials - What does `NaN` stand for in JavaScript?",
      "options": [
        "Not a Number",
        "Null and Nothing",
        "New Array Number",
        "None of the above"
      ],
      "correctAnswer": [
        "Not a Number"
      ],
      "type": "single"
    },
    {
      "id": 3,
      "question": "JavaScript Essentials - Which method is used to parse a string into an integer?",
      "options": [
        "parseInt()",
        "parseFloat()",
        "toString()",
        "toInt()"
      ],
      "correctAnswer": [
        "parseInt()"
      ],
      "type": "single"
    },
    {
      "id": 4,
      "question": "JavaScript Essentials - What does `this` keyword refer to?",
      "options": [
        "The current function",
        "The current object",
        "The parent object",
        "The global object"
      ],
      "correctAnswer": [
        "The current object"
      ],
      "type": "single"
    },
    {
      "id": 5,
      "question": "JavaScript Essentials - Which method is used to remove the last element from an array?",
      "options": [
        "pop()",
        "shift()",
        "unshift()",
        "slice()"
      ],
      "correctAnswer": [
        "pop()"
      ],
      "type": "single"
    },
  ],
  4: [
    {
      "id": 1,
      "question": "React Basics - What is JSX?",
      "options": [
        "A syntax extension for JavaScript",
        "A type of variable",
        "A method to define components",
        "A framework"
      ],
      "correctAnswer": [
        "A syntax extension for JavaScript"
      ],
      "type": "single"
    },
    {
      "id": 2,
      "question": "React Basics - What is the purpose of the `useState` hook?",
      "options": [
        "To declare state variables in functional components",
        "To perform side effects",
        "To store the component tree",
        "To manage events"
      ],
      "correctAnswer": [
        "To declare state variables in functional components"
      ],
      "type": "single"
    },
    {
      "id": 3,
      "question": "React Basics - What does `props` stand for?",
      "options": [
        "Properties",
        "Props",
        "Procedures",
        "Properties and States"
      ],
      "correctAnswer": [
        "Properties"
      ],
      "type": "single"
    },
    {
      "id": 4,
      "question": "React Basics - How do you pass data from parent to child in React?",
      "options": [
        "Through props",
        "Through state",
        "Through context",
        "Through hooks"
      ],
      "correctAnswer": [
        "Through props"
      ],
      "type": "single"
    },
    {
      "id": 5,
      "question": "React Basics - What is the virtual DOM in React?",
      "options": [
        "A lightweight representation of the real DOM",
        "A method to update the real DOM",
        "A state management tool",
        "A type of component"
      ],
      "correctAnswer": [
        "A lightweight representation of the real DOM"
      ],
      "type": "single"
    },
  ],
  5: [
    {
      "id": 1,
      "question": "Data Structures - Which data structure uses LIFO?",
      "options": [
        "Stack",
        "Queue",
        "Array",
        "Tree"
      ],
      "correctAnswer": [
        "Stack"
      ],
      "type": "single"
    },
    {
      "id": 2,
      "question": "Data Structures - What is the time complexity of accessing an element in an array?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      "correctAnswer": [
        "O(1)"
      ],
      "type": "single"
    },
    {
      "id": 3,
      "question": "Data Structures - What is the time complexity of inserting an element in the middle of a linked list?",
      "options": [
        "O(n)",
        "O(1)",
        "O(log n)",
        "O(n^2)"
      ],
      "correctAnswer": [
        "O(n)"
      ],
      "type": "single"
    },
    {
      "id": 4,
      "question": "Data Structures - Which data structure is used to implement recursion?",
      "options": [
        "Stack",
        "Queue",
        "Array",
        "Graph"
      ],
      "correctAnswer": [
        "Stack"
      ],
      "type": "single"
    },
    {
      "id": 5,
      "question": "Data Structures - What is the time complexity of searching in a balanced binary search tree?",
      "options": [
        "O(log n)",
        "O(n)",
        "O(1)",
        "O(n^2)"
      ],
      "correctAnswer": [
        "O(log n)"
      ],
      "type": "single"
    },
  ],
  6: [
  {
    id: 1,
    question: "Which algorithm is used to find the shortest path in a graph?",
    options: ["Dijkstra’s Algorithm", "DFS", "BFS", "Kruskal’s Algorithm"],
    correctAnswer: ["Dijkstra’s Algorithm"],
    type: "single"
  },
  {
    id: 2,
    question: "Which sorting algorithm is best on average?",
    options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
    correctAnswer: ["Merge Sort"],
    type: "single"
  },
  {
    id: 3,
    question: "Which algorithm uses divide and conquer?",
    options: ["Quick Sort", "Bubble Sort", "Linear Search", "Heap Sort"],
    correctAnswer: ["Quick Sort"],
    type: "single"
  },
  {
    id: 4,
    question: "In Binary Search, the array must be?",
    options: ["Sorted", "Unsorted", "Reversed", "None"],
    correctAnswer: ["Sorted"],
    type: "single"
  },
  {
    id: 5,
    question: "Which of the following are greedy algorithms?",
    options: ["Kruskal’s Algorithm", "Prim’s Algorithm", "Dijkstra’s Algorithm", "All of the above"],
    correctAnswer: ["All of the above"],
    type: "single"
  }
],
7: [
  {
    id: 1,
    question: "Node.js is built on which JavaScript engine?",
    options: ["V8", "SpiderMonkey", "Rhino", "Chakra"],
    correctAnswer: ["V8"],
    type: "single"
  },
  {
    id: 2,
    question: "Which module is used to create a server in Node.js?",
    options: ["http", "fs", "url", "path"],
    correctAnswer: ["http"],
    type: "single"
  },
  {
    id: 3,
    question: "Node.js is mainly used for?",
    options: ["Backend development", "Frontend development", "Desktop apps", "Games"],
    correctAnswer: ["Backend development"],
    type: "single"
  },
  {
    id: 4,
    question: "Is Node.js single-threaded?",
    correctAnswer: ["true"],
    type: "boolean"
  },
  {
    id: 5,
    question: "Which of the following are core Node.js modules?",
    options: ["http", "fs", "events", "All of the above"],
    correctAnswer: ["All of the above"],
    type: "single"
  }
],
8: [
  {
    id: 1,
    question: "What is Express.js?",
    options: ["A web framework for Node.js", "A database", "A frontend library", "A CSS framework"],
    correctAnswer: ["A web framework for Node.js"],
    type: "single"
  },
  {
    id: 2,
    question: "Which method is used to define a GET route in Express?",
    options: ["app.get()", "app.post()", "app.fetch()", "app.route()"],
    correctAnswer: ["app.get()"],
    type: "single"
  },
  {
    id: 3,
    question: "How do you start an Express server?",
    options: ["app.listen()", "app.start()", "app.run()", "app.begin()"],
    correctAnswer: ["app.listen()"],
    type: "single"
  },
  {
    id: 4,
    question: "Middleware functions have access to?",
    options: ["req", "res", "next", "All of the above"],
    correctAnswer: ["All of the above"],
    type: "single"
  },
  {
    id: 5,
    question: "What is the default HTTP status code for a successful GET request?",
    options: ["200", "201", "400", "500"],
    correctAnswer: ["200"],
    type: "single"
  }
],
9: [
  {
    id: 1,
    question: "MongoDB is a type of?",
    options: ["NoSQL database", "Relational DB", "Spreadsheet", "File system"],
    correctAnswer: ["NoSQL database"],
    type: "single"
  },
  {
    id: 2,
    question: "What is a MongoDB document?",
    options: ["A JSON-like object", "An HTML file", "A row", "A column"],
    correctAnswer: ["A JSON-like object"],
    type: "single"
  },
  {
    id: 3,
    question: "Which method is used to insert one document in MongoDB?",
    options: ["insertOne()", "add()", "push()", "writeOne()"],
    correctAnswer: ["insertOne()"],
    type: "single"
  },
  {
    id: 4,
    question: "Which of the following is a valid MongoDB data type?",
    options: ["ObjectId", "String", "Boolean", "All of the above"],
    correctAnswer: ["All of the above"],
    type: "single"
  },
  {
    id: 5,
    question: "Which command is used to retrieve all documents from a collection?",
    options: ["find()", "get()", "fetch()", "query()"],
    correctAnswer: ["find()"],
    type: "single"
  }
],
10: [
  {
    id: 1,
    question: "Which keyword is used to retrieve data from a database?",
    options: ["SELECT", "FETCH", "GET", "PULL"],
    correctAnswer: ["SELECT"],
    type: "single"
  },
  {
    id: 2,
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Sequential Query Language", "Simple Query Logic", "None of the above"],
    correctAnswer: ["Structured Query Language"],
    type: "single"
  },
  {
    id: 3,
    question: "Which clause is used to filter records?",
    options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    correctAnswer: ["WHERE"],
    type: "single"
  },
  {
    id: 4,
    question: "What does the COUNT() function do?",
    options: ["Returns number of rows", "Adds values", "Sorts data", "Updates records"],
    correctAnswer: ["Returns number of rows"],
    type: "single"
  },
  {
    id: 5,
    question: "Which SQL command is used to remove a table?",
    options: ["DROP", "DELETE", "REMOVE", "CLEAR"],
    correctAnswer: ["DROP"],
    type: "single"
  }
],
};


export default quizData;
export {questions}