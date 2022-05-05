const Task = (value) => {
  return (
    <>
      <li>
        <h1>{value}</h1>
      </li>
    </>
  )
};

const tasks = ['Assistir algo', 'Estudar', 'Dormir'];

function App() {
  return <ul>{tasks.map(Task)}</ul>;
}

// const App = () => <ul>{ tasks.map(Task)}</ul>;

export default App;
