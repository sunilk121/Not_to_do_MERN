import React from "react";

export const TotalHours = ({ total }) => {
	return (
		<div className="row mt-2m pb-5 fs-3 fw-bolder text-warning">
			<div className="col text-center">
				Total time allocated this week = <span id="totalHours">{total}</span> hr
			</div>
		</div>
	);
};
