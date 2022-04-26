import React from "react";

export const TaskList = ({
	taskList,
	handleOnDeleteTaskList,
	markAsNotToDo,
}) => {
	console.log(taskList);
	return (
		<div className="col-md-6 mb-5">
			<h2 className="text-center">Task list</h2>
			<hr />
			<div className="list-items">
				<table className="table table-striped">
					<tbody id="task-list">
						{taskList.map((item, i) => (
							<tr key={i}>
								<td>
									<input type="checkbox" name="" id="" />
									{item.task}
								</td>
								<td> {item.hr}hrs</td>
								<td className="text-end">
									<button
										className="btn btn-danger btn-sm"
										onClick={() => handleOnDeleteTaskList(i)}
									>
										<i className="fa-solid fa-trash" title="Delete"></i>
									</button>
									<button
										className="btn btn-sm btn-warning"
										onClick={() => markAsNotToDo(i)}
									>
										<i
											className="fa-solid fa-arrow-right"
											title="Mark as bad list"
										></i>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
