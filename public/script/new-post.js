const newPostHandler = async (event) => {
    event.preventDefault();

    document.location.replace("/dashboard/new");
}

document.querySelector("#new-post").addEventListener("click", newPostHandler);