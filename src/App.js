import logo from './logo.svg';
import './App.css';
import { TaskInput } from './component/taskInput/taskInput';
import { TaskList } from './component/taskList/taskList';

function App() {
  return (
    <div className="App">
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
