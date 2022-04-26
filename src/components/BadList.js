import React from "react";

export const BadList = ({
	badList,
	markAsTask,
	handleOnDeleteBadList,
	ttlBadHours,
}) => {
	return (
		<div className="col-md-6">
			<h2 className="text-center">Bad list</h2>
			<hr />
			<div className="list-items">
				<table className="table table-striped">
					<tbody id="bad-list">
						{badList.map((item, i) => {
							return (
								<tr key={i}>
									<td>
										<input type="checkbox" name="" id="" />
										{item.task}
									</td>
									<td> {item.hr}hrs</td>

									<td className="text-end">
										<button
											className="btn btn-sm btn-warning"
											onClick={() => markAsTask(i)}
										>
											<i
												className="fa-solid fa-arrow-left"
												title="Mark as bad list"
											></i>
										</button>
										<button
											className="btn btn-danger btn-sm"
											onClick={() => handleOnDeleteBadList(i)}
										>
											<i className="fa-solid fa-trash" title="Delete"></i>
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			{/* <!-- <div className="ttl-bad">You could have saved 50hr of your time.</div> --> */}
			<div className="ttl-bad text-end text-light">
				Total time saved = <span id="totalBadHrs">{ttlBadHours}</span> hr
			</div>
		</div>
	);
};
