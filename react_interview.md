# Hooks
    Hooks are functions that allow functional components to use state, lifecycle methods, and other React features that were previously only available in class components. Hooks were introduced in React version 16.8 to provide a more concise and expressive way to work with state and side effects in functional components.

## 1. useState 
    useState is a React hook that allows functional components to manage state. Prior to the introduction of hooks in React 16.8, state management was primarily the domain of class components. However, with the useState hook, functional components can now have stateful logic.

## 2. useEffect 
    The useEffect hook is a React hook that allows functional components to perform side effects. Side effects can include data fetching, subscriptions, manual DOM manipulations, and other operations that are not directly related to rendering.

## 3. useContext
    The useContext hook in React is used to consume values from a React context. Context provides a way to share values like themes, authentication status, or any other global state between components without having to pass the data through each level of the component tree explicitly.

## 4. useReducer 

## 5. useMemo

## 6. useCallback

## 7. useRef




# Higher order component 

## What 
    Higher-Order Components (HOCs) are a pattern in React where a component function takes a component and returns a new component with enhanced functionality. The term "higher-order" comes from functional programming and refers to a function that takes a function as an argument or returns a function.

    In the context of React, HOCs allow you to reuse component logic, add additional props, or modify the behavior of components. They provide a way to compose components in a more modular and reusable manner.

## Why

## When

## How




# Life cycle method 
    React class components have lifecycle methods that allow developers to execute code at specific points in the component's lifecycle. These methods can be categorized into three main phases: Mounting, Updating, and Unmounting.


### Mounting 
    These methods are called when an instance of a component is being created and inserted into the DOM.

    constructor(): The constructor is called before a component is mounted. It is used to initialize state and bind event handlers.

    static getDerivedStateFromProps(props, state): This method is called before every render and returns an object to update the state or null to indicate that the new props do not require any state updates.

    render(): This method is mandatory and returns the JSX that will be rendered.

    componentDidMount(): This method is called after the component is rendered into the DOM. It is commonly used for network requests or other asynchronous operations.

### Updating 
    These methods are called when a component is being re-rendered due to changes in props or state.

    static getDerivedStateFromProps(props, state): As in the mounting phase, this method is also called before every render.

    shouldComponentUpdate(nextProps, nextState): This method allows you to control whether the component should re-render based on changes in props or state. It can be used for performance optimization.

    render(): Renders the updated JSX.

    getSnapshotBeforeUpdate(prevProps, prevState): This method is called right before the changes from the virtual DOM are to be reflected in the actual DOM. It can capture some information (e.g., scroll position) before the update.

    componentDidUpdate(prevProps, prevState, snapshot): Called after the component is re-rendered. It can be used for post-update operations like interacting with the DOM.

### Unmounting 
    This method is called when a component is being removed from the DOM.

    componentWillUnmount(): This method is called just before the component is unmounted and destroyed. It is commonly used for cleanup operations (e.g., clearing up timers or subscriptions).

## class components 
    Class components are a type of component in React that extends from React.Component and has its own internal state. They were the primary way of creating components in React before the introduction of Hooks. Class components have a set of lifecycle methods that allow developers to control the behavior of the component at different stages of its lifecycle.



# State management 
    State management in React refers to the management of component state, which represents the current condition or data within a component. React provides a built-in useState hook for managing state in functional components and a this.state object for class components.

## State 
    In React, state is a JavaScript object that represents the current condition or data within a component. The state object is used to store and manage data that can change over time, affecting the rendering of the component. State allows components to be dynamic and interactive.

## Props
    In React, props (short for "properties") are a mechanism for passing data from a parent component to its child components. Props allow you to make components dynamic and reusable by passing different values to them.

## Props drilling 
    Props drilling in React refers to the process of passing down props (properties) through multiple layers of nested components in order to make the props available to a deeply nested child component. This happens when you have a hierarchy of components, and you need to pass data from a parent component through intermediate components to a child component that requires the data.

## context 
    In React, the Context API provides a way to share values like props between components without the need to pass those values explicitly through each level of the component tree. This is especially useful for data that needs to be accessed by many components at different nesting levels.

    The Context API consists of two main parts: the Provider and the Consumer.




# Redux / RTK (Redux Toolkit)
    Redux is a predictable state container for JavaScript applications, and it is often used with React to manage the state of a React application in a more centralized and predictable way. React Redux is the official React bindings for Redux, making it easier to integrate Redux with React components.

## How
## Why
## When



# custom hooks 

## When to use?

## Code for a custom hook



# Lazy loading / Code Spliting / Code Chunking 



# Virtual DOM

## Reconcilition Algorithm 

## React Fiber 

## Diffing Algorithm 



# SSR vs CSR (Server Side Rendering vs Client Side Rendering)

    Server-Side Rendering (SSR) and Client-Side Rendering (CSR) are two different approaches to rendering web pages in React, and they have distinct characteristics and use cases. Let's explore the key differences between SSR and CSR in React:

    
1. Rendering Location.
    
    SSR (Server-Side Rendering):
    The initial rendering of the application occurs on the server. The server generates HTML content and sends a fully rendered page to the client.

    CSR (Client-Side Rendering):
    The initial HTML document sent to the client is minimal, and the bulk of rendering occurs on the client side after the JavaScript has been downloaded and executed.

2. Initial Page Load:

    SSR:
    Faster initial page loads because the server sends pre-rendered HTML content to the client. The user sees meaningful content sooner.

    CSR:
    Slower initial page loads as the client needs to download JavaScript, execute it, and then render the content. The user may initially see a loading spinner or a blank page.

3. SEO (Search Engine Optimization):

    SSR:
    Better for SEO because search engines can easily crawl and index the fully rendered HTML content.

    CSR:
    May face SEO challenges initially, as search engines might not immediately index content generated dynamically on the client side. Pre-rendering or additional techniques may be needed for SEO.

4. Performance:

    SSR:
    Better perceived performance for users, especially on slower network connections, due to the presence of pre-rendered content.

    CSR:
    Once the JavaScript is loaded and executed, subsequent interactions can be faster as the application updates without full page reloads.
   
5. JavaScript Dependency:

    SSR:
    Requires JavaScript for interactivity but provides a functional page even if JavaScript is disabled. Content is visible before JavaScript execution.
   
    CSR:
    Heavily relies on JavaScript. If JavaScript is disabled, the page may not function correctly, and content may not be visible.

6. User Experience:

    SSR:
    Offers a more consistent user experience across different devices and network conditions.

    CSR:
    May provide a more interactive and dynamic user experience, especially for single-page applications (SPAs), but can lead to varying performance based on the user's device and network.
   
7. Use Cases:

    SSR:
    Well-suited for content-heavy websites, blogs, and applications where SEO is a priority.
 
    CSR:
    Suitable for dynamic and interactive web applications, especially SPAs, where the focus is on a highly responsive and seamless user experience.
  
8. Combination (Hybrid Rendering):
  
    SSR:
    Initial page load is fast.
 
    CSR:
    Subsequent navigations and interactions are handled on the client side.


## SSR
    Server-Side Rendering (SSR) in React is a technique used to render React components on the server instead of the client (browser). The main goal of SSR is to improve performance, provide better SEO (Search Engine Optimization), and enhance user experience by delivering a fully rendered page to the client.

    In a traditional single-page application (SPA), the initial HTML document is relatively empty, and the content is populated on the client side after the JavaScript has been downloaded and executed. With SSR, the server generates the HTML content with React components and sends a fully rendered page to the client.

## CSR 
    Client-Side Rendering (CSR) in React involves rendering React components on the client's browser using JavaScript. In a client-side rendered application, the initial HTML document sent to the browser is minimal, and the bulk of the rendering and content fetching occurs on the client side after the JavaScript has been downloaded and executed.

# Routing 
    In React, routing is the process of navigating between different views or pages within a single-page application (SPA). React itself does not provide built-in routing functionality, but there are several popular third-party libraries that make it easy to implement routing in React applications. Two common libraries for handling routing in React are React Router and Reach Router.

## react-router-dom

## Dynamic routing 
    Dynamic routing in React refers to the ability to handle routes with dynamic parameters or segments. Instead of defining static routes, you define a route pattern with dynamic segments that can vary based on user input or other factors. React Router provides a way to achieve dynamic routing using route parameters.



# Testing 

## React Testing Library 




# Async task 

## useEffect 

## API calls 

## Promises 