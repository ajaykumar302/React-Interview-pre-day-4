import React from 'react';
import './App.css';
import {Class} from './Components/Class';
import Ref from './Components/Ref';

function App() {
  return (
    <div className="App">
    <h1>Day-4</h1>
    <Ref/>
    <h2>2.What is Context api?</h2>
    <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>
    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around.<br/> This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
     <h2>3.Difference between callback and useCallback Hook ?</h2>
     <p>callback is like an argument passed to an function whereas another one is hook, in this you pass another function as an argument.</p>
    <p>The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.<br/> Note: It is recommended to use lifecycle method rather than this callback function.</p>
    <h2>4.What is Props Drilling Concept ?What is State Uplifting ?</h2>
    <h3>Props Drilling:-</h3>
    <p>It is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around.</p>
    <h3>State Uplifting:-</h3>
    <p>When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor.<br/> That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.</p>
    <h2>5.Difference between useEffect and useContext ?</h2>
    <h3>useEffect :-</h3>
    <p>If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
    <h3>useContext :-</h3>
    <p>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application.<br/> Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
    <h2>6.What are React Life cycles Explain each one with Example?</h2>
    <h3>React Life cycles</h3>
    <ul>
      <li>Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.</li>
      <li>Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.</li>
      <li>Updating: Updating is the stage when the state of a component is updated and the application is repainted.</li>
      <li>Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.</li>
    </ul>
    <Class/>
    </div>
  );
}

export default App;
