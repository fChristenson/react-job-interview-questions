const React = require("react");
const ReactDOM = require("react-dom");

// knows about es6
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], open: false }; // knows about state
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
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

  onOpen(item) {
    this.setState(
      Object.assign({}, this.state, { open: true, clickedItem: item })
    );
  }

  onClose() {
    this.setState(Object.assign({}, this.state, { open: false }));
  }

  render() {
    return (
      <form onSubmit={this.saveTodo}>
        <ul>
          {this.state.todos.map((todo, i) => (
            <li key={i} onClick={() => this.onOpen(todo)}>
              {todo}
            </li>
          ))}
        </ul>
        <input placeholder="add todo" ref={this.inputRef} />
        <Modal
          open={this.state.open}
          onClose={this.onClose}
          content={this.state.clickedItem}
        />
      </form>
    );
  }
}

// knows that we can put things outside the class
let node = null;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // knows about static methods
  static getDerivedStateFromProps(next, prev) {
    // render since we are outside of our React tree
    node && ReactDOM.render(<ModalBox {...next} />, node);
    return next;
  }

  componentDidMount() {
    node = document.createElement("div"); // knows when to use native js
    document.body.appendChild(node);
    // render since we are outside of our React tree
    ReactDOM.render(<ModalBox {...this.props} />, node);
  }

  // knows about DOM cleanup
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(node);
    node.parentNode && node.parentNode.removeChild(node);
  }

  render() {
    return <script />; // returns a placeholder that ignores css styles
  }
}

/**
 * Why the child component?
 * Because we need to add the modal to the body so we can
 * be sure that it will always be on top of all the other
 * elements on the page.
 */
const ModalBox = ({ content, onClose, open }) => {
  const className = open ? "click-catcher--open" : "click-catcher";
  return (
    <div className={className} onClick={onClose}>
      <div className="modal">{content}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
