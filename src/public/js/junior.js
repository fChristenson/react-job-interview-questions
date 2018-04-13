const React = require("react");
const ReactDOM = require("react-dom");

// knows about es6
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }; // knows about state
    this.saveTodo = this.saveTodo.bind(this); // knows about "this"
    this.inputRef = React.createRef(); // knows about refs
  }

  // knows about async/await
  async componentDidMount() {
    // knows about fetch and json
    const res = await fetch("http://localhost:3000/todos");
    const json = await res.json();
    this.setState({ todos: json });
  }

  async saveTodo(e) {
    e.preventDefault(); // knows about form submissions
    const options = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ todo: this.inputRef.current.value })
    };
    const res = await fetch("http://localhost:3000/todos", options);
    const json = await res.json();
    this.setState({ todos: json });
    this.inputRef.current.value = null;
    return false;
  }

  render() {
    return (
      <form onSubmit={this.saveTodo}>
        <ul>{this.state.todos.map((todo, i) => <li key={i}>{todo}</li>)}</ul>
        <input placeholder="add todo" ref={this.inputRef} />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
