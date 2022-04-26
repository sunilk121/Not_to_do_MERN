import React, { useState } from "react";
import "./App.css";
import { BadList } from "./components/BadList";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";
import { Title } from "./components/Title";
import { TotalHours } from "./components/TotalHours";

function App() {
	const [taskList, setTaskList] = useState([]);
	const [badList, setBadList] = useState([]);

	const addNewTask = task => {
		setTaskList([...taskList, task]);
	};

	//delete the task for taskLIst
	const handleOnDeleteTaskList = i => {
		if (window.confirm("Are you sure you want to delete this task?")) {
			const newArg = taskList.filter((item, index) => index !== i);
			setTaskList(newArg);
		}
	};

	//delete the task for BadList
	const handleOnDeleteBadList = i => {
		if (window.confirm("Are you sure you want to delete this task?")) {
			const newArg = badList.filter((item, index) => index !== i);
			setBadList(newArg);
		}
	};

	// take item from taskLIst and put in the BadList
	const markAsNotToDo = i => {
		const selectedItem = taskList[i];
		setBadList([...badList, selectedItem]);
		const newArg = taskList.filter((item, index) => index !== i);
		setTaskList(newArg);
	};

	// take item from Badlist and put in the taskList
	const markAsTask = i => {
		const selectedItem = badList[i];
		setTaskList([...taskList, selectedItem]);

		const newArg = badList.filter((item, index) => index !== i);
		setBadList(newArg);
	};

	const ttlTaskHr = taskList.reduce((subttl, item) => subttl + item.hr, 0);
	const ttlBadHours = badList.reduce((acc, curr) => acc + curr.hr, 0);
	const total = ttlTaskHr + ttlBadHours;
	return (
		<div className="wrapper">
			<div className="container">
				{/* <!-- top title --> */}
				<Title />

				{/* <!-- form area --> */}
				<Form addNewTask={addNewTask} total={total} />

				{/* <!-- list area --> */}

				<div className="row">
					<TaskList
						taskList={taskList}
						handleOnDeleteTaskList={handleOnDeleteTaskList}
						markAsNotToDo={markAsNotToDo}
					/>
					<BadList
						badList={badList}
						markAsTask={markAsTask}
						handleOnDeleteBadList={handleOnDeleteBadList}
						ttlBadHours={ttlBadHours}
					/>
				</div>

				{/* total hours */}
				<TotalHours total={total} />
			</div>
		</div>
	);
}

export default App;
