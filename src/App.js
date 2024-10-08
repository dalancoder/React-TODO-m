

import './App.css';
import Header from './components/Header';

import TodoProvider from './context/TodoProvider';




function App() {
 
  return (
<TodoProvider  >
<Header/>


</TodoProvider>
 
  )
}

export default App;
