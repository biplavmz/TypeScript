import React from 'react'

const ReactExtra = () => {
  return (
    <div>
        <h1>what is render in react js</h1>
        <ul>
            <li>In React.js, rendering refers to the process of displaying UI components on the screen.</li>
            <li>React is a JavaScript library for building user interfaces, and it follows a declarative approach to define how the UI should look based on the current state of the application.</li>
          <li>When the state of a React component changes, React re-renders the component to reflect the updated state.</li>
        </ul>

        <h1>What is React Reconciliation</h1>
        <h3>After the virtual DOM is updated, React performs a process called reconciliation to determine the most efficient way to update the actual DOM.</h3>
        <h3>React compares the new virtual DOM with the previous one to identify the differences (changes in state or props). </h3>
        <h4>It then calculates the minimal set of changes needed to update the real DOM and applies those changes.</h4>
    
    <h1>How Browser is Understand the JSX Code</h1>

    <ul>
        <li>
        In summary, the browser doesn't directly understand JSX code.
        </li>
        <li>
        Instead, JSX is transformed into standard JavaScript using Babel before being executed in the browser.
        </li>
        <li> This process allows developers to write code in a more readable and expressive manner while ensuring compatibility with various browsers.</li>
    </ul>
    
    <h1>Babel Transpilation:

JSX code is not directly executable by browsers, so it needs to be transformed into standard JavaScript. Babel is the most commonly used tool for this purpose.
Babel takes JSX code and transpiles it into equivalent JavaScript using the React.createElement function.</h1>

<h2>Babel also handles other transformations, such as converting modern JavaScript features (ES6 and later) into older versions that are compatible with a wider range of browsers.</h2>
    
    <h2>Babel is a popular JavaScript compiler or transpiler that is commonly used in React.js development. Its primary purpose is to transform ECMAScript 2015+ (ES6 and later) JavaScript code into a backward-compatible version of JavaScript that can run in older browsers or environments.</h2>
    
    <h1>----------------------------------</h1>
    <h1>What is bind in React js </h1>
    <h2>In React.js, the bind method is a JavaScript function that is often used in the context of handling events in class components. The purpose of bind is to create a new function that, when invoked, has its this keyword set to a specific value.</h2>
    <h3>this.increment.bind(this)</h3>
    <h4>To remove this bind we can use the fat arrow function </h4>
    </div>
  )
}

export default ReactExtra