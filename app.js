const parentElement = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{id:"h1"},"I am an H1 bro"),
            React.createElement("h2",{id:"h2"},React.createElement("p",{id:3},"I am an h2 bro"))
        ])    
    ],React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"h1"},"I am child2's h1 bro"),
        React.createElement("h2",{id:"h2"},"I am child2's h2 bro")
    ])
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parentElement);