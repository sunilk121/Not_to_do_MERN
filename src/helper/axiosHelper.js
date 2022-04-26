//import axios from axios
const rootUrl = "http://localhost:8000/api/v1";
const taskApi = `${rootUrl}/task`;

//fetch a task

//fetch multiple task
export const fetchTasks = () => {
  //return  axios.get(taskApi)
};

//post new tasks
export const postTasks = (data) => {
  fetch(taskApi, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

//delete tasks
