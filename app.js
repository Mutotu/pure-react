const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { className: "title" }, "React is rendered"),
    React.createElement(Person, { name: "LOL", occupation: "WOW" }, null),
    React.createElement(Person, { name: "ZOZ", occupation: "POP" }, null),
    React.createElement(Person, { name: "GOG", occupation: "KOK" }, null),
  ]);
};

//ReactDOM.render(
// React.createElement(App),
//document.getElementById("root")
//);
ReactDOM.createRoot(document.getElementById("root")).render(App());

const container = document.getElementById("root");
const root = ReactDOM.createElement(container);
root.render(React.createElement(App));
