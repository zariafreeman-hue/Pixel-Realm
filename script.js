function welcomeMessage() {
    alert("Welcome to Pixel Realm! Join the gaming community and start exploring.");
}

function subscribeUser() {
    const email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email address.");
    } else {
        alert("Thank you for subscribing to Pixel Realm!");
    }
}

function sendMessage() {
    alert("Your message has been sent. Pixel Realm will contact you soon!");
}
function createForumPost() {
    const title = document.getElementById("forumTitle").value;
    const category = document.getElementById("forumCategory").value;
    const message = document.getElementById("forumMessage").value;
    const createdTopics = document.getElementById("createdTopics");

    const newTopic = document.createElement("div");
    newTopic.classList.add("forum-topic");

    newTopic.innerHTML = `
        <div>
            <h3>${title}</h3>
            <p>${message}</p>
        </div>
        <span class="badge">${category}</span>
    `;

    createdTopics.prepend(newTopic);

    document.getElementById("forumTitle").value = "";
    document.getElementById("forumMessage").value = "";

    alert("Your forum topic has been created!");
}