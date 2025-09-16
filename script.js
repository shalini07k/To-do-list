
const input = document.getElementById("input");
const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const ampmInput = document.getElementById("ampm");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (input.value.trim() === "") {
        alert("You must write something!");
        return;
    }

    // Format time
    let hr = hourInput.value.padStart(2, "0");
    let min = minuteInput.value.padStart(2, "0");
    let ampm = ampmInput.value;
    let time = hr && min ? `${hr}:${min} ${ampm}` : "No time";

    // Create list item
    let li = document.createElement("li");

    let contentDiv = document.createElement("div");
    contentDiv.className = "task-content";
    contentDiv.innerHTML = `<span>${input.value}</span><span class="task-time">${time}</span>`;

    let actionsDiv = document.createElement("div");
    actionsDiv.className = "task-actions";

    let editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerText = "Edit";
    editBtn.onclick = function () {
        input.value = li.querySelector("span").innerText;
        let taskTime = li.querySelector(".task-time").innerText.split(" ");
        if (taskTime[0] !== "DONE" && taskTime[0] !== "No") {
            let [h, m] = taskTime[0].split(":");
            hourInput.value = h;
            minuteInput.value = m;
            ampmInput.value = taskTime[1];
        }
        li.remove();
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(contentDiv);
    li.appendChild(actionsDiv);

    // On click = mark done
    li.addEventListener("click", function (e) {
        if (!e.target.classList.contains("edit-btn") &&
            !e.target.classList.contains("delete-btn")) {
            li.classList.toggle("checked");
            let timeSpan = li.querySelector(".task-time");
            if (li.classList.contains("checked")) {
                timeSpan.innerText = "DONE";
                editBtn.style.display = "none"; // hide edit
            } else {
                timeSpan.innerText = time; // restore time
                editBtn.style.display = "inline-block";
            }
        }
    });

    listContainer.appendChild(li);


    input.value = "";
    hourInput.value = "";
    minuteInput.value = "";
}

