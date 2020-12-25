
import React, {Component} from 'react';
import Todos from './components/Todos';
import FormAdd from './components/FormAdd';

class App extends Component{
  state = {
    todos: []
  }

  updateLocal = (data) => {
    localStorage.setItem('todos', JSON.stringify(data));
  }

  checkTodo = todo => {
    let todos = this.state.todos.filter( t => t.id !== todo.id);
    todo.isDone = 1;

    this.setState({
      todos: [...todos, todo]
    });
    this.updateLocal([...todos, todo]);
  }

  uncheckTodo = todo => {
    let todos = this.state.todos.filter( t => t.id !== todo.id);
    todo.isDone = 0;

    this.setState({
      todos: [...todos, todo]
    });
    this.updateLocal([...todos, todo]);
  }

  addTodo = task => {
    
    if(task){
      let todo = {
        id: Math.random(),
        task,
        isDone: 0
      };

      this.setState({
        todos: [...this.state.todos, todo]
       });

      this.updateLocal([...this.state.todos, todo]);
    }
  }
    

  deleteTodo = todo => {
    let todos = this.state.todos.filter( t => t.id !== todo.id);

    this.setState({
      todos: [...todos]
    });

    this.updateLocal([...todos]);
  }

  componentDidMount(){
    const json = localStorage.getItem("todos");
    const todos = JSON.parse(json) || [];
    this.setState({
      todos
    })
  }

  render(){
    return (
      <div className="App">
        <div className="w-full">
          <div className="mx-auto w-11/12 md:w-8/12 h-auto shadow rounded-lg px-6 py-6 dark:bg-gray-800">
            <div className="w-full flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-8 h-8 mr-1 text-purple-600" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <h1 className="text-2xl font-semibold text-gray-500 dark:text-white">Todo App</h1>
            </div>
            <FormAdd addTodo={this.addTodo} />
            <Todos todos={this.state.todos} checkTodo={this.checkTodo} uncheckTodo={this.uncheckTodo} deleteTodo={this.deleteTodo} />
          </div>
        </div>
      </div>
    );  
  }
  
}

export default App;
