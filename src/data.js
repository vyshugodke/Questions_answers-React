const questions = [
    {
      id: 1,
      title: 'What is JSX?',
      info:
        'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.',
    },
    {
      id: 2,
      title: 'What is the virtual DOM?',
      info:
        'DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.',
    },
    {
      id: 3,
      title: 'What is an event in React?',
      info:
        'An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc. React events are named using camelCase, rather than lowercase in HTML.',
    },
    {
      id: 4,
      title: ' What is Redux?',
      info:
        'Redux is an open-source, JavaScript library used to manage the application state. React uses Redux to build the user interface. It is a predictable state container for JavaScript applications and is used for the entire application’s state management.',
    },
    {
      id: 5,
      title: 'Why do we need to React Router?',
      info:
        'It maintains consistent structure and behavior and is used to develop single-page web applications. Enables multiple views in a single application by defining multiple routes in the React application.',
    },
    {
        id: 6,
        title: 'Explain the use of CSS modules in React?',
        info:
          'The CSS module file is created with the .module.css extension. The CSS inside a module file is available only for the component that imported it, so there are no naming conflicts while styling the components.',
      },

      {
        id: 7,
        title: 'How are forms created in React?',
        info:
          'React forms are similar to HTML forms. But in React, the state is contained in the state property of the component and is only updated via setState(). Thus the elements can’t directly update their state and their submission is handled by a JavaScript function.',
      },
  ]
  export default questions