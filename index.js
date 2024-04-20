document.getElementById("fetchButton").addEventListener("click", fetchUsers);

function fetchUsers() {
    fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(data => {
            displayUsers(data.data);
        })
        .catch(error => console.error("Error fetching users:", error));
}

function displayUsers(users) {
    const usersContainer = document.getElementById("usersContainer");
    usersContainer.innerHTML = "";
    users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user");

        const avatar = document.createElement("img");
        avatar.src = user.avatar;
        avatar.alt = "User Avatar";
        userDiv.appendChild(avatar);

        const name = document.createElement("p");
        name.textContent = `Name: ${user.first_name} ${user.last_name}`;
        userDiv.appendChild(name);

        const email = document.createElement("p");
        email.textContent = `Email: ${user.email}`;
        userDiv.appendChild(email);

        usersContainer.appendChild(userDiv);
    });
}
