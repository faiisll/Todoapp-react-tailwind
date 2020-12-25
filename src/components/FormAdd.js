import React, {Component} from 'react';

class FormAdd extends Component{
    state = {
        task: null
    }

    handleChange = e => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.task);
        e.target.reset();
        this.setState({
            task: null
        })
    }


    render() {
        return(
        <div className="w-full mt-4 flex justify-end">
            <form onSubmit={this.handleSubmit} className="w-full flex justify-center">
                <input onChange={this.handleChange} className="w-9/12 py-1 px-2 dark:bg-gray-900 dark:text-white rounded shadow mr-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                <button className="py-1 px-1 w-2/12 rounded text-white font-semibold shadow bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                    Add
                </button>
            </form>
        </div>
        )
    }
}

export default FormAdd