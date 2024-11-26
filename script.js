// Display dynamic time
function updateTime() {
    const currentTime = new Date();
    document.getElementById("currentTime").textContent = 
        `Current Time: ${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
}
setInterval(updateTime, 1000);

// Background color toggle
document.getElementById("toggleBackgroundButton").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Mailbox functionality
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (email && message) {
        const messageList = document.getElementById("messageList");

        // Create a new message item
        const messageItem = document.createElement("li");
        messageItem.classList.add("message-item");
        messageItem.textContent = `From: ${email} - Message: ${message}`;
        
        // Add message to the list
        messageList.appendChild(messageItem);

        // Clear the form fields
        document.getElementById("email").value = '';
        document.getElementById("message").value = '';
    }
});