
const App = (props) => {
  const { name } = props;
  return (
    <div>
      <HelloWorld />
      <Text name={name} />
    </div>
    );
};

const HelloWorld = () => {
  return <h1 className="title">Hello World!</h1>;
}

const Text = (props) => {
  const { name } = props;
  const number = add(1, 1); // from ./index.js
  return (
      <div>
        <h2> My name is {name}.</h2>
        <p>1+1={number}</p>
      </div>
  );
};

const app = <App name="Tester" />;

ReactDOM.render(
  app,
  document.getElementById("app")
);