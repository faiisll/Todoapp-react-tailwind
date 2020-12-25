import React from 'react';

const Todos = ({todos, checkTodo, uncheckTodo, deleteTodo}) =>{

    let notDone = [];
    let done = [];

    if (todos){
        notDone = todos.filter( todo => !todo.isDone);
        done = todos.filter( todo => todo.isDone);
    }

    

    let jsx = notDone.length ? (
        notDone.map( todo => {
            return (
                <div className="w-full px-5 py-4 border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-transparent dark:shadow-lg" key={todo.id}>
                    <div className="w-full flex justify-between">
                        <h1 className="font-semibold text-gray-600 dark:text-white">{todo.task}</h1>
                        <button className="dark:text-800 dark:border-gray-700 text-sm p-1 w-8 h-8 hover:bg-purple-500 rounded-lg text-white shadow border border-gray-400" onClick={ () => checkTodo(todo)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="text-center text-gray-400">There isn't task yet, please add first</div>
    );

    let jsx2 = done.length ? (
        done.map( todo => {
            return (
                <div className="w-full px-5 py-4 border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-transparent dark:shadow-lg" key={todo.id}>
                    <div className="w-full flex justify-between">
                        <h1 className="font-semibold text-gray-400 line-through">{todo.task}</h1>
                        <div className="flex">
                            <button className="text-sm p-2 bg-gray-500 rounded-lg text-white shadow mr-2" onClick={ () => uncheckTodo(todo)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </button>
                            <button className="text-sm p-2 bg-red-500 rounded-lg text-white shadow" onClick={ e => window.confirm("Are you sure delete this task?") && deleteTodo(todo)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                        
                    </div>
                </div>
            )
        })
    ) : (
        <div className="text-center text-gray-400">Please do the task!</div>
    );

    

    return(
        <div className="w-full grid grid-cols-1 gap-2 mt-5">
            <h1 className="mt-2 mb-1 text-gray-600 dark:text-white">Task List</h1>
            {jsx}
            <h1 className="mt-3 mb-1 text-green-600 font-semibold dark:text-green-400">Task Done</h1>
            {jsx2}
        </div>
    )
}

export default Todos