// import header_post_1 from "../../assets/posts/post_1/header.jpg";
// import heading_1_post_1 from "../../assets/posts/post_1/vcs.png";
// import heading_2_post_1 from "../../assets/posts/post_1/gitVsGithub.webp";

// import header_post_2 from "../../assets/posts/post_2/next-react.jpg";
// import heading_1_post_2 from "../../assets/posts/post_2/csr.png";
// import heading_2_post_2 from "../../assets/posts/post_2/ssr.png";
// import heading_3_post_2 from "../../assets/posts/post_2/nextjs-pros-and-cons.png";

// import header_post_4 from "../../assets/posts/post_4/header.png";
// import heading_1_post_4 from "../../assets/posts/post_4/states.png";
// import heading_2_post_4 from "../../assets/posts/post_4/handling.png";

// import header_post_5 from "../../assets/posts/post_5/header.png";

// import header_post_6 from "../../assets/posts/post_6/header.png";
// import heading_1_post_6 from "../../assets/posts/post_6/cab.png";
// import heading_2_post_6 from "../../assets/posts/post_6/without-defer-async-head.png";
// import heading_3_post_6 from "../../assets/posts/post_6/with-async.png";
// import heading_4_post_6 from "../../assets/posts/post_6/with-defer.png";
// import heading_5_post_6 from "../../assets/posts/post_6/eventflow.svg";
// import heading_6_post_6 from "../../assets/posts/post_6/event-order-bubbling.svg";
// import heading_7_post_6 from "../../assets/posts/post_6/capture.svg";

// import header_post_7 from "../../assets/posts/post_7/header.png";
// import heading_1_post_7 from "../../assets/posts/post_7/eventloop.png";
// import heading_2_post_7 from "../../assets/posts/post_7/callbackqueue.gif";
// import heading_3_post_7 from "../../assets/posts/post_7/microtask.gif";

// import header_post_8 from "../../assets/posts/post_8/header.jpg";
// import heading_1_post_8 from "../../assets/posts/post_8/object-prototype-empty.svg";
// import heading_2_post_8 from "../../assets/posts/post_8/proto.png";
// import heading_3_post_8 from "../../assets/posts/post_8/rabbit-animal-object.svg";

// import header_post_9 from "../../assets/posts/post_9/Header.jpg";
// import heading_1_post_9 from "../../assets/posts/post_9/Lifecycle.png";

// const posts = [
//     {
//         id: 1,
//         topic: "Git",
//         title: "Understanding Git and Github",
//         description:
//             "Understanding the difference between Git and Github with examples and their main use cases or how they are helpful for the developers...",
//         readTime: "2 min read",
//         tags: ["Git", "Github"],
//         image: header_post_1,
//         content: [
//             {
//                 heading: "What is git?",
//                 text: "Git is a version control system which is maintained on your local system. Git gives us a record for ongoing programming versions. It can be used completely exclusive of any cloud-hosting service i.e. we don’t even need internet to access git.",
//             },
//             {
//                 heading: "Version Control System",
//                 text: "It is a program to keep track of the changes in projects, by tracking or logging the files changes over time. A version control system allows us to review, restore earlier versions and even branching and merging or code.",
//                 image: heading_1_post_1,
//             },
//             {
//                 heading: "What Is GitHub?",
//                 text: [
//                     "GitHub is a cloud-based hosting service that lets us manage Git repositories. It’s an online database that allows you to keep track of and share your Git version control projects outside of your local computer. Other Git repository hosting services also exist: Eg:- GitLab, BitBucket, and SourceForge.",
//                     "GitHub just takes things a little bit further than Git, offering more functionality and resources, as well as a place online to store and collaborate on projects. And because GitHub is cloud-based, an individual’s Git repositories can be remotely accessed by any authorized person, from any computer, anywhere in the world.",
//                     "Through GitHub, one can share code with others, giving them the power to make revisions or edits on your various Git branches. This makes it possible for entire teams to coordinate together on single projects in real-time. As changes are introduced, new branches are created, allowing the team to continue to revise the code without overwriting each other's work.",
//                 ],
//             },
//             {
//                 heading: "Conclusion",
//                 image: heading_2_post_1,
//             },
//             {
//                 heading: "Why Use a Version Control System?",
//                 text: [
//                     "- Collaboration",
//                     "- Storing Versions",
//                     "- sRestoring Previous Versions",
//                 ],
//             },
//         ],
//     },
//     {
//         id: 2,
//         topic: "React",
//         title: "Client Vs Server Side Rendering",
//         description:
//             "Difference between different types of rendering techniques and advantage of Next.js over React.js...",
//         readTime: "4 min read",
//         tags: ["React", "Next"],
//         image: header_post_2,
//         content: [
//             {
//                 heading: "Client Side Rendering",
//                 text: [
//                     "When we talk about client-side rendering,it’s about rendering content in the browser using JavaScript.",
//                     "So instead of getting all the content from the HTML document itself, a simple HTML document with a JavaScript file in initial loading itself is received, which renders the rest of the site using the browser.",
//                     "With client-side rendering, the initial page load is naturally a bit slow. However, after that, every subsequent page load is very fast. In this approach, communication with server happens only for getting the run-time data. Moreover, there is no need to reload the entire UI after every call to the server. The client-side framework manages to update UI with changed data by re-rendering only that particular DOM element.",
//                 ],
//                 image: heading_1_post_2,
//             },
//             {
//                 heading: "Server Side Rendering",
//                 text: "In server-side rendering when a user makes a request to a webpage, the server prepares an HTML page by fetching user-specific data and sends it to the user’s machine over the internet. Webpages are generated on your server for every request. This entire process of fetching data from the database, creating an HTML page and serve it to user is known as SSR.",
//                 image: heading_2_post_2,
//             },
//             {
//                 heading: "Static Site Generation",
//                 text: "At build time, your app will fetch all the data required and compile it down to static webpages. After a production build is created, every request is going to reuse that statically generated HTML file. This provides the best performance and can easily be cached on a CDN.",
//             },
//             {
//                 heading: "Problems with React.js",
//                 text: [
//                     "React uses Client Side Rendering. With React, nothing gets displayed until all of your JavaScript loads. Your HTML is nearly empty and React injects your content in your HTML with JavaScript. This leads multiple problems:",
//                     `When the browser is loading the JavaScript, the screen is blank because <div id="root"></div> does not show anything. Depending on the size of your JavaScript bundle, this could lead to your visitors staring at a white screen for a couple of seconds.`,
//                     "Most SEO crawlers do not have JavaScript enabled. DuckDuckGo, Google, Bing and any other search engine would not actually know what is on your website since it requires JavaScript to display the content. You will not be ranked at all on Search Engines.",
//                 ],
//             },
//             {
//                 heading: "Methods for Prerendering using Next.js",
//                 text: [
//                     "Next.js offers (Server Side Rendering)SSR and (Static Site Generation)SSG using getStaticProps and getServerSideProps.",
//                     "getStaticProps",
//                     "getStaticProps is a server-side function that will only be called at build time. The build will then use the response from getStaticProps to generate a static webpage.",
//                     "Since stale data is a problem with static generated pages, there is an option you can set to revalidate your static page and rebuild it if data changes. revalidate: 60 will check your data every 60 seconds and rebuild the page if needed.",
//                     "getServerSideProps",
//                     "getServerSideProps is similar to getStaticProps but is called every time the page loads instead of at build time. This ensures that all of your initial data is up to date on every load.",
//                 ],
//             },
//         ],
//     },
//     {
//         id: 3,
//         topic: "React",
//         title: "Core Concept You Need to Know About React",
//         description:
//             "Learning some of the fundamental concepts of React.js and top questions asked in react interview...",
//         readTime: "10 min read",
//         tags: ["React", "Interview"],
//         image: header_post_2,
//         content: [
//             {
//                 heading: "Why use react.js",
//                 text: [
//                     "1.Reusable Components:",
//                     "React provides a component based structure.Each tiny elements like button, checkbox, dropdown etc can be a component and the we create wrapper components composed of those smaller components.Each component decides how it should be rendered. Each component has its own internal logic.",
//                     "2.Fast render with Virtual DOM",
//                     "React uses virtual DOM to render the view.virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves.",
//                     "3.SEO friendly",
//                     "React allows developers to develop user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.",
//                 ],
//                 image: heading_1_post_2,
//             },
//             {
//                 heading: "What is JSX?",
//                 text: "JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).",
//                 image: heading_2_post_2,
//             },
//             {
//                 heading: "Static Site Generation",
//                 text: "At build time, your app will fetch all the data required and compile it down to static webpages. After a production build is created, every request is going to reuse that statically generated HTML file. This provides the best performance and can easily be cached on a CDN.",
//             },
//             {
//                 heading: "Problems with React.js",
//                 text: [
//                     "React uses Client Side Rendering. With React, nothing gets displayed until all of your JavaScript loads. Your HTML is nearly empty and React injects your content in your HTML with JavaScript. This leads multiple problems:",
//                     `When the browser is loading the JavaScript, the screen is blank because <div id="root"></div> does not show anything. Depending on the size of your JavaScript bundle, this could lead to your visitors staring at a white screen for a couple of seconds.`,
//                     "Most SEO crawlers do not have JavaScript enabled. DuckDuckGo, Google, Bing and any other search engine would not actually know what is on your website since it requires JavaScript to display the content. You will not be ranked at all on Search Engines.",
//                 ],
//             },
//             {
//                 heading: "Methods for Prerendering using Next.js",
//                 text: [
//                     "Next.js offers (Server Side Rendering)SSR and (Static Site Generation)SSG using getStaticProps and getServerSideProps.",
//                     "getStaticProps",
//                     "getStaticProps is a server-side function that will only be called at build time. The build will then use the response from getStaticProps to generate a static webpage.",
//                     "Since stale data is a problem with static generated pages, there is an option you can set to revalidate your static page and rebuild it if data changes. revalidate: 60 will check your data every 60 seconds and rebuild the page if needed.",
//                     "getServerSideProps",
//                     "getServerSideProps is similar to getStaticProps but is called every time the page loads instead of at build time. This ensures that all of your initial data is up to date on every load.",
//                 ],
//             },
//         ],
//     },
//     {
//         id: 4,
//         topic: "Javasript",
//         title: "Understanding Promises in Javasript",
//         description: "Learning about Promises in Javascript..",
//         readTime: "3 min read",
//         tags: ["Javascript", "Interview"],
//         image: header_post_4,
//         content: [
//             {
//                 heading: "What is a Promise in JavaScript",
//                 text: [
//                     "A Promise is a special JavaScript object. It produces a value after an asynchronous operation completes successfully, or an error if it does not complete successfully due to time out, network error, and so on.",
//                 ],
//             },
//             {
//                 heading: "Creating a JavaScript Promise",
//                 text: "When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise.",
//             },
//             {
//                 heading: "Promise States",
//                 text: [
//                     "A promise has three states: pending, fulfilled, and rejected. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.",
//                     "- Pending: Initially when the executor function starts the execution.",
//                     "- Fulfilled: When the promise is resolved.",
//                     "- Rejected: When the promise is rejected.",
//                 ],
//                 image: heading_1_post_4,
//             },
//             {
//                 heading: "Problems with React.js",
//                 text: [
//                     "React uses Client Side Rendering. With React, nothing gets displayed until all of your JavaScript loads. Your HTML is nearly empty and React injects your content in your HTML with JavaScript. This leads multiple problems:",
//                     `When the browser is loading the JavaScript, the screen is blank because <div id="root"></div> does not show anything. Depending on the size of your JavaScript bundle, this could lead to your visitors staring at a white screen for a couple of seconds.`,
//                     "Most SEO crawlers do not have JavaScript enabled. DuckDuckGo, Google, Bing and any other search engine would not actually know what is on your website since it requires JavaScript to display the content. You will not be ranked at all on Search Engines.",
//                 ],
//             },
//             {
//                 heading: "Handling a Promise",
//                 text: [
//                     "Handling Promises With Then Method",
//                     "Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve.",
//                     "Handling a Rejected Promise with Catch Method",
//                     "Catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called.",
//                 ],
//                 image: heading_2_post_4,
//             },
//             {
//                 heading: "Async Await",
//                 text: [
//                     "Async/await are special syntax to work with promises in a more comfortable fashion.",
//                     "- async makes a function return a Promise",
//                     "- await makes a function wait for a Promise",
//                 ],
//             },
//         ],
//     },
//     {
//         id: 5,
//         topic: "Javasript",
//         title: "Javascript Concepts - Part1",
//         description:
//             "Learning some of the fundamental concepts of Javascript and questions asked in javascript interview...",
//         readTime: "12 min read",
//         tags: ["Javascript", "Interview"],
//         image: header_post_5,
//         content: [
//             {
//                 heading: "New Features in ES6",
//                 text: [
//                     "Some of the new features of javascript introductes in ES6 are:",
//                     "- The Let keyword",
//                     "- The Const keyword",
//                     "- Arrow Functions",
//                     "- Promises",
//                     "- Map Object",
//                     "- Set Object",
//                     "- Classes",
//                 ],
//             },
//             {
//                 heading: "Difference between Let and Var and Const",
//                 text: [
//                     "Comparision of Declarations",
//                     "One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations",
//                     "In the code above, the camper variable is originally declared as James, and is then overridden to be David. The console then displays the string David.",
//                     "If you replace var with let in the code above, it results in an error:",
//                     "So unlike var, when you use let, a variable with the same name can only be declared once.",
//                     "Comparision of scopes of the var and let Keywords",
//                     "When you declare a variable with the var keyword, it is declared globally. The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.",
//                     "With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable.",
//                     "This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable.",
//                     "As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop.",
//                     "The let keyword does not follow this behavior:",
//                     "Here the console will display the value 2, and an error that i is not defined. i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.",
//                     "Const",
//                     "While var and let can be declared without being initialized, const must be initialized during declaration. Const cannot be initialized after declaritions",
//                     "However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.",
//                     "As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.",
//                 ],
//             },
//             {
//                 heading: "Variable shadowing",
//                 text: "In this case, both variables on line 1 and 5 are defined with the same name — number.This has a significant result: the variable defined in the outer scope is ‘shadowed’ by the variable defined in the inner scope.",
//             },
//             {
//                 heading: "String in Javascript",
//                 text: [
//                     "In JavaScript, String values are immutable, which means that they cannot be altered once created.",
//                     "For example, the following code:",
//                     `let myStr = "Bob"; myStr[0] = "J"; cannot change the value of myStr to Job, because the contents of myStr cannot be altered.`,
//                 ],
//             },
//             {
//                 heading: "Difference between '==' and '===' in javascript",
//                 text: [
//                     "Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.",
//                     "If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.",
//                     "The value of number and stringNumber looks similar here. However, the type of number is Number and type of stringNumber is string. Even though the values are same, the type is not the same. Hence a == check returns true, but when checked for value and type, the value is false.",
//                     "This is an interesting case. The value of 0 when checked with false is same. It is so because 0 and false have the same value for JavaScript, but when checked for type and value, the value is false because 0 is a number and false is boolean.",
//                     "The value of empty string and false is same in JavaScript. Hence, == returns true. However, the type is different and hence === returns false.",
//                     "The important thing to understand here is that the variables, obj1 and obj2 (which could be an Object, Array or Function) each contain only a reference to a location in memory. Not the value of the object.",
//                 ],
//             },
//             {
//                 heading: "Explain how this works in JavaScript",
//                 text: [
//                     "To access a property of an object from within a method of the same object, you need to use the this keyword.",
//                     "In the above example, a person object is created. It contains properties (name and age) and a method greet. In the method greet, while accessing a property of an object, this keyword is used. In order to access the properties of an object, this keyword is used following by . and key.",
//                     "This keyword refers to the object where it is called.",
//                 ],
//             },
//         ],
//     },
//     {
//         id: 6,
//         topic: "Javasript",
//         title: "Javascript Concepts - Part2",
//         description:
//             "Learning some of the fundamental concepts of Javascript and questions asked in javascript interview...",
//         readTime: "11 min read",
//         tags: ["Javascript", "Interview"],
//         image: header_post_6,
//         content: [
//             {
//                 heading: `Explain "hoisting"`,
//                 text: [
//                     "Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope. Note that the declaration is not actually moved - the JavaScript engine parses the declarations during compilation and becomes aware of declarations and their scopes.",
//                     "Function declarations have the body hoisted while the function expressions only has the variable declaration hoisted.",
//                     "Variables defined with let and const are hoisted to the top of the block, but not initialized.Meaning that the block of code is aware of the variable, but it cannot be used until it has been declared.",
//                 ],
//             },
//             {
//                 heading: "What is a closure",
//                 text: [
//                     "JavaScript implements a scoping mechanism named lexical scoping (or static scoping). Lexical scoping means that the accessibility of variables is determined by the position of the variables inside the nested scopes.",
//                     "Simpler, the lexical scoping means that inside the inner scope you can access variables of outer scopes.",
//                     "Closures are functions that have access to the outer (enclosing) function's variables scope even after the outer function has returned.",
//                     "Now innerFunc() is executed outside of its lexical scope, but exactly in the scope of exec() function. And what's important: innerFunc() still has access to outerVar from its lexical scope, even being executed outside of its lexical scope.",
//                 ],
//             },
//             {
//                 heading: "JavaScript Rest vs Spread Operator",
//                 text: [
//                     "Rest Operator",
//                     "The rest operator (...) is used to put the rest of some specific user-supplied values into a JavaScript array.",
//                     "For instance, consider this code that uses rest to enclose some values into an array:",
//                     "Spread Operator",
//                     "The spread operator (...) helps you expand iterables into individual elements.",
//                     "A spread operator is effective only when used within array literals, function calls, or initialized properties objects.",
//                     "Example 1: How Spread Works in an Array Literal",
//                     `Suppose we did not use the spread syntax to duplicate myName’s content. For instance, if we had written const aboutMe = ["Oluwatobi", myName, "name."]. In such a case, the computer would have assigned a reference back to myName`,
//                     "Example 2: How to Use Spread to Convert a String into Individual Array Items",
//                     "Example 3: How the Spread Operator Works in a Function Call",
//                     "Suppose the numbers array had more than four items. In such a case, the computer will only use the first four items as addNumbers() argument and ignore the rest.",
//                     "Example 4: How Spread Works in an Object Literal",
//                     "- Spread operators can’t expand object literal’s values",
//                     "- Since a properties object is not an iterable object, you cannot use the spread operator to expand its values.",
//                     "- However, you can use the spread operator to clone properties from one object into another.",
//                 ],
//             },
//             {
//                 heading: "Pure vs Impure Functions in JavaScript",
//                 text: [
//                     "1. Pure Functions:",
//                     "- They must be predictable",
//                     "- They must have no side effects",
//                     "Identical inputs will always return identical outputs, no matter how many times a pure function is called.",
//                     "2. Impure Function:",
//                     "- Unpredictable",
//                     "- Has side-effects",
//                     "Side Effects can be:",
//                     "- Modifying a global variable",
//                     "- Modifying an argument",
//                     "- External dependency (APIs, outer variables)",
//                     "- DOM manipulation",
//                     "- Reading/writing files",
//                 ],
//             },
//             {
//                 heading: "Higher Order Functions",
//                 text: [
//                     "A higher order function is a function that takes a function as an argument, or returns a function.",
//                     "Some examples of higher order functions are .map() , .filter() and .reduce(). Both of them take a function as an argument.",
//                     "Map Method",
//                     "Using map method in javaScript creates an array by calling a specific function on each element present in the parent array.It returns a new array and elements of arrays are result of callback function.",
//                     "Filter Method",
//                     "The filter() method takes in a callback function and calls that function for every item it iterates over inside the target array. It entails filtering out one or more items (a subset) from a larger collection of items (a superset) based on some condition/preference.",
//                     "Reduce Method",
//                     "Array.reduce takes two parameters.",
//                     "- The reducer",
//                     "- An initial value (optional)",
//                     "- The reducer is the function doing all the work. As reduce loops over your list, it feeds two parameters to your reducer.",
//                     "- An accumulator",
//                     "Accumulator is the eventual return value When you're looping through the users, how are you keeping track of their total age? You need some counter variable to hold it. That's the accumulator",
//                     "- The current value",
//                     "The current value is just like when you use array[i] in a regular loop.",
//                 ],
//             },
//             {
//                 heading: "Using call(), apply() and bind()",
//                 text: [
//                     "We can have objects that have their own properties and methods. But object1 cannot use the methods of object2 and vice versa.",
//                     "We can use call(), apply(), and bind() methods to tie a function into an object and call the function as if it belonged to that object.",
//                     "Call() Method in JavaScript",
//                     "The call() method invokes a function with a specified context.",
//                     "use the call() method to tie the function add() to the object obj:",
//                     "Use Call() with Multiple Arguments",
//                     "Apply() Method in JavaScript",
//                     "The apply() method does the exact same as call(). The difference is that call() accepts an argument list, but apply() accepts an array of arguments.",
//                     "Bind() Method in JavaScript",
//                     "call() and apply() methods are executed immediately when called (and returned a value). But instead of executing a function immediately, bind() returns a copy of a function that can be executed later on.",
//                 ],
//                 image: heading_1_post_6,
//             },
//             {
//                 heading: "Async and Defer",
//                 text: [
//                     "- Without using async and defer The parsing is paused until the script is fetched, and executed. Once this is done, parsing resumes.",
//                     "- Page loading a script with async The script is fetched asynchronously, and when it’s ready the HTML parsing is paused to execute the script, then it’s resumed.",
//                     "- Page loading With defer The script is fetched asynchronously, and it’s executed only after the HTML parsing is done.",
//                 ],
//                 image: [heading_2_post_6, heading_3_post_6, heading_4_post_6],
//             },
//             {
//                 heading: "Event Throtting and debouncing",
//                 text: [
//                     "Debouncing and Throttling techniques enhance the performance of your website, also prevent unnecessary API calls and load on the server.",
//                     "Debouncing and throttling techniques are used to limit the number of times a function can execute.",
//                     "Throttling",
//                     "Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.",
//                     "Debouncing",
//                     "In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.",
//                 ],
//             },
//             {
//                 heading: "Event Bubbling and Capturing",
//                 text: [
//                     "Event Bubbling",
//                     "When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.",
//                     "Throttling",
//                     "Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.",
//                     "Debouncing",
//                     "In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.",
//                 ],
//                 image: heading_5_post_6,
//             },
//         ],
//     },
//     {
//         id: 7,
//         topic: "Javasript",
//         title: "Javascript Event Loop:Explained",
//         description:
//             "Understanding how javascript works under the hood, how it executes our asynchronous javascript code and event loop...",
//         readTime: "5 min read",
//         tags: ["Javascript", "Interview"],
//         image: header_post_7,
//         content: [
//             {
//                 text: [
//                     "Browser JavaScript execution flow, as well as in Node.js, is based on an event loop. The event loop concept is very simple. There’s an endless loop, where the JavaScript engine waits for tasks, executes them, and then sleeps, waiting for more tasks.",
//                     "The event loop is the secret behind JavaScript’s asynchronous programming.",
//                 ],
//             },
//             {
//                 heading: "Event Loop Visualisation/Basic Architecture",
//                 text: [
//                     "Memory Heap",
//                     "This is where all the memory allocation happens for your variables, that you have defined in your program.",
//                     "Call Stack",
//                     "This represents the single thread provided for JavaScript code execution. This is where all your javascript code gets pushed and executed one by one as the interpreter reads your program, and gets popped out once the execution is done. It is responsible for keeping track of all the operations in line to be executed. Whenever a function is finished, it is popped from the stack.",
//                     "Browser or Web APIs",
//                     "They are built into your web browser and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. They are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code.",
//                     "For example, the Geolocation API provides some simple JavaScript constructs for retrieving location data so you can say, plot your location on a Google Map. In the background, the browser is actually using some complex lower-level code (e.g. C++) to communicate with the device’s GPS hardware (or whatever is available to determine position data), retrieve position data, and return it to the browser environment to use in your code. But again, this complexity is abstracted away from you by the API.",
//                     "Common browser APIs",
//                     "- APIs for manipulating documents",
//                     "- APIs that fetch data from the server",
//                     "- Audio and Video APIs",
//                     "- Client-side storage APIs",
//                     "Event or Callback Queue",
//                     "This is where your asynchronous code gets pushed to, and waits for the execution.",
//                     "Event Loop",
//                     "It has one simple job to monitor the call stack and the callback queue. It keeps running continuously and checks the Main stack, if it has any frames to execute, if not then it checks Callback queue, if Callback queue has codes to execute then it pops the message from it to the Main Stack for the execution.",
//                     "Job Queue or Microtask Queue",
//                     "Apart from Callback Queue, browsers have introduced one more queue which is “Job Queue”, reserved only for new Promise() functionality. So when you use promises in your code, you add .then() method, which is a callback method. These thenable methods are added to Job Queue once the promise has returned/resolved, and then gets executed.",
//                 ],
//                 image: heading_1_post_7,
//             },
//             {
//                 heading: "Execution of async function in javascript",
//                 text: [
//                     "Whenever an async function is called, it is sent to a browser API. These are APIs built into the browser.",
//                     "An example of this is the setTimeout method. When a setTimeout operation is processed, it is sent to the corresponding API which waits till the specified time to send this operation back in for processing.",
//                     "This operation is then send to the callback queue. Hence, we have a cyclic system for running async operations in JavaScript. The language itself is single-threaded, but the browser APIs act as separate threads.",
//                     "The event loop facilitates this process. It has one simple job to monitor the call stack and the callback queue. If the call stack is empty, the event loop will take the first event from the queue and will push it to the call stack, which effectively runs. If it is not, then the current function call is processed.",
//                 ],
//                 image: heading_2_post_7,
//             },
//             {
//                 heading: "Why Job Queue or Microtask Queue",
//                 text: [
//                     "Micro-tasks has high priority in executing callbacks, if event loop tick comes to Micro-tasks, it will execute all the jobs in job queue first until it gets empty, then will move to callback queue.",
//                     "- The primary reason for prioritizing the micro-task queue is to improve the user experience.",
//                     "- Micro-tasks include mutation observer callbacks as well as promise callbacks.",
//                     "All thenable callbacks of the promise are called first, then the setTimeout callback is called.",
//                 ],
//                 image: heading_3_post_7,
//             },
//         ],
//     },
//     {
//         id: 8,
//         topic: "Javasript",
//         title: "Prototype and Prototypical Inheritance",
//         description:
//             "Understanding And Using Prototype and Prototypical Inheritance in JavaScript..",
//         readTime: "3 min read",
//         tags: ["Javascript", "Interview"],
//         image: header_post_8,
//         content: [
//             {
//                 heading: "Prototype",
//                 text: [
//                     "The prototype is an object that is associated with every functions and objects by default in JavaScript.",
//                     "Whenever we create a function , object or array javacript by default attaches a prototype object to it which contains some additional methods inside it.",
//                     "All JavaScript objects inherit properties and methods from a prototype:",
//                     "- Date objects inherit from Date.prototype.",
//                     "- Array objects inherit from Array.prototype.",
//                     "- Player objects inherit from Player.prototype.",
//                     "- The Object.prototype is on top of the prototype inheritance chain. Date objects, Array objects, and Player objects all inherit from Object.prototype.",
//                 ],
//                 image: heading_1_post_8,
//             },
//             {
//                 heading: "The Prototype Chain",
//                 text: [
//                     "Prototypal inheritance uses the concept of prototype chaining.",
//                     "Every object created contains [[Prototype]], which points either to another object or null.",
//                     "Example:- An object C with a [[Prototype]] property that points to object B. Object B’s [[Prototype]] property points to prototype object A. This continues onward, forming a kind of chain called the prototype chain.",
//                 ],
//             },
//             {
//                 heading: "Prototypal Inheritance",
//                 image: heading_3_post_8,
//             },
//             {
//                 heading: "Creating own prototype",
//                 text: "Creating Ployfill for bind method",
//             },
//             {
//                 heading: "Creating Ployfill for Call, Apply and Bind method",
//             },
//         ],
//     },
//     {
//         id: 9,
//         topic: "React",
//         title: "React Lifecycle Methods",
//         description:
//             "Lifecycle methods are series of events that happen throughout the birth, growth, and death of a React component...",
//         readTime: "5 min read",
//         tags: ["React", "Interview"],
//         image: header_post_9,
//         content: [
//             {
//                 heading: "Visual overview of topics covered in this tutorial",
//                 image: heading_1_post_9,
//             },
//             {
//                 heading: "What is the React component lifecycle?",
//                 text: [
//                     "In React, components go through a lifecycle of events:",
//                     "- Mounting (adding nodes to the DOM)",
//                     "- Updating (altering existing nodes in the DOM)",
//                     "- Unmounting (removing nodes from the DOM)",
//                 ],
//             },
//             {
//                 heading: "Mounting lifecycle methods",
//                 text: [
//                     "The mounting phase refers to the phase during which a component is created and inserted to the DOM. The following methods are called in order.",
//                     "- constructor()",
//                     "- static getDerivedStateFromProps()",
//                     "- render()",
//                     "- componentDidMount()",
//                     "constructor()",
//                     "The constructor() is the very first method that is invoked before the component is mounted to the DOM.",
//                     "The constructor method is called before the component is mounted to the DOM. In most cases, you would initialize state and bind event handlers methods within the constructor method.",
//                     "Example of the constructor() React lifecycle method in action:",
//                     "static getDerivedStateFromProps()",
//                     "Its main function is to ensure that the state and props are in sync for when it’s required.",
//                     "The basic structure of the static getDerivedStateFromProps() looks like this:",
//                     "render()",
//                     "As the name suggests it handles the rendering of your component to the UI",
//                     "The render() method returns JSX that is displayed in the UI. A render() can also return a null if there is nothing to render for that component.",
//                     "A render() method has to be pure with no side-effects. React requires that your render() is pure. Pure functions are those that do not have any side-effects and will always return the same output when the same inputs are passed. This means that you can not setState() within a render(). You cannot modify the component state within the render().",
//                     "componentDidMount",
//                     "After render is called, the component is mounted to the DOM and the componentDidMount method is invoked.",
//                     "This function is invoked immediately after the component is mounted to the DOM.",
//                     "You would use the componentDidMount lifecycle method to grab a DOM node from the component tree immediately after it’s mounted.",
//                     "If you also want to make network requests as soon as the component is mounted to the DOM, this is a perfect place to do so.",
//                     "You could also set up subscriptions such as timers",
//                 ],
//             },
//             {
//                 heading: "Updating lifecycle methods",
//                 text: [
//                     "Whenever a change is made to the state or props of a React component, the component is rerendered. In simple terms, the component is updated. This is the updating phase of the React component lifecycle.",
//                     "- shouldComponentUpdate()",
//                     "- render()",
//                     "- getSnapshotBeforeUpdate()",
//                     "- componentDidUpdate()",
//                     "shouldComponentUpdate()",
//                     "In most cases, you’ll want a component to rerender when state or props changes. However, you do have control over this behavior.",
//                     "Within this lifecycle method, you can return a boolean true or false and control whether the component gets rerendered (e.g., upon a change in state or props).",
//                     "render()",
//                     "After the shouldComponentUpdate method is called, render is called immediately afterward, depending on the returned value from shouldComponentUpdate, which defaults to true.",
//                     "getSnapshotBeforeUpdate()",
//                     "The getSnapshotBeforeUpdatelifecycle method stores the previous values of the state after the DOM is updated. getSnapshotBeforeUpdate() is called right after the render method.",
//                     "Here’s the important thing: the value queried from the DOM in getSnapshotBeforeUpdate refers to the value just before the DOM is updated, even though the render method was previously called.",
//                     "The getSnapshotBeforeUpdate React lifecycle method doesn’t work on its own. It is meant to be used in conjunction with the componentDidUpdate lifecycle method.",
//                     "componentDidUpdate()",
//                     "The componentDidUpdate lifecycle method is invoked after the getSnapshotBeforeUpdate. As with the getSnapshotBeforeUpdate method it receives the previous props and state as arguments:",
//                     "However it also takes whatever value is returned from the getSnapshotBeforeUpdate lifecycle method is passed as the third argument to the componentDidUpdate method.",
//                 ],
//             },
//             {
//                 heading: "Unmounting lifecycle method",
//                 text: [
//                     "The following method is invoked during the component unmounting phase",
//                     "- componentWillUnmount()",
//                     "componentWillUnmount()",
//                     "The componentWillUnmount lifecycle method is invoked immediately before a component is unmounted and destroyed. This is the ideal place to perform any necessary cleanup such as clearing up timers, cancelling network requests, or cleaning up any subscriptions that were created in componentDidMount().",
//                 ],
//             },
//         ],
//     },
//     // Add more posts here
// ];

// export default posts;
