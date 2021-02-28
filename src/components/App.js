// import './App.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from './Layout/Layout';
// import { createTask } from '../utils/create-task'
import { TaskList } from './TaskList/TaskList';
import { TaskEditor } from './TaskEditor/TaskEditor';
import { Filter } from './Filter';
import { uuid } from 'uuidv4';

export class App extends Component {

	state = {
		tasks: [],
		filter: '',
	};

	static propTypes = {
		initialValue: PropTypes.number,
		step: PropTypes.number,
		addTask: PropTypes.func,
		removeTask: PropTypes.func,
	};

	changeFilter = filter => {
		this.setState({ filter });
	}

	getFilteredTasks = () => {
		const { tasks, filter } = this.state;

		return tasks.filter(task =>
			task.text.toLowerCase().includes(filter.toLowerCase()),
		);
	}

	addTask = (text) => {
		const task = {
			id: uuid(),
			text,
			completed: false,
		}

		this.setState(prevState => {
			return {
				tasks: [...prevState.tasks, task],
			}
		})
	};

	removeTask = taskId => {
		this.setState(prevState => {
		return {
			tasks: prevState.tasks.filter(({id}) => id !== taskId),
		};
		});
	};

	// updateCheckedTask = taskId => {
	// 	this.setState(prevState => {
	// 		return {
	// 			tasks: prevState.tasks.map(task => {
	// 				if (task.id === taskId) {
	// 					return {
	// 						...task,
	// 						completed: !task.completed,
	// 					};
	// 				}

	// 				return task;
	// 			}),
	// 		};
	// 	});
	// }

	updateCheckedTask = taskId => {
		this.setState(prevState => ({
			tasks: prevState.tasks.map(task =>
				task.id === taskId
				? { ...task,
					completed: !task.completed }
				: task
			),
		}));
	}

	// Для неявного возврата объекта в строке 63 нужно
	// поставить круглые скобки () как выражение,
	// иначе функция решит, что в {} ее тело

	render() {
		const visibleTasks = this.getFilteredTasks();

		return (
		<>
		<Layout>
			<TaskEditor addTaskOnClick={this.addTask} />
			{visibleTasks.length > 1 &&
			<Filter
				value={this.state.filter}
				onChangeFilter={this.changeFilter} />}
			{this.state.tasks.length > 0 &&
			<TaskList
				tasks={visibleTasks}
				removeTaskOnClick={this.removeTask}
				updateTask={this.updateCheckedTask} />}
		</Layout>
		</>
		);
	}
}