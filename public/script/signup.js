const signupFormHandler = async (event) => {
    // Stop the browser from submitting the form 
    event.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (username && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            }),
            headers: { "Content-Type" : "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {

            alert("Failed to log in");
        }
    }
};

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);