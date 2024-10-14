const taskList = document.querySelector("#task-list");

getData();

async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok) {
      throw new Error(`network error! ${res.status}`);
    }
    const data = await res.json();
    const shortData = data.slice(0, 10);
    shortData.map((task) => {
      const li = document.createElement("li");
      li.textContent = `Task: ${task.title}`;
      if (task.completed) {
        li.classList.add("completed");
      }
      taskList.append(li);
    });
  } catch (error) {
    console.log("error:", error.message);
  }
}
