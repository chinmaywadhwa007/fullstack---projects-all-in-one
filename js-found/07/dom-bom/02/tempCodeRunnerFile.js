document.getElementById("add").addEventListener("click", () => {
    const value = document.getElementById("input").value;

    const li = document.createElement("li");
    li.innerText = value;

    document.getElementById("list").appendChild(li);
});