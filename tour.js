function copyLink() {
    const eventLink = "DUPATSA GACOR";

    const tempInput = document.createElement("textarea");
    tempInput.value = eventLink;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Link copied to clipboard!");
}

function favoriteEvent() {
    alert("Event favorited!");
}

document.getElementById("share-icon").addEventListener("click", copyLink);

document
    .getElementById("favorite-icon")
    .addEventListener("click", favoriteEvent);

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("ticket-form-container");
    const openModalBtn = document.getElementById("open-ticket-form");
    const closeModalBtn = document.getElementById("close-form");

    modal.style.display = "none";

    openModalBtn.addEventListener("click", function () {
        console.log("Buy Tickets button clicked");
        modal.style.display = "flex";
    });

    closeModalBtn.addEventListener("click", function () {
        console.log("Close button clicked");
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            console.log("Clicked outside modal content");
            modal.style.display = "none";
        }
    });
});

function closeTicketForm() {
    console.log("Closing modal through helper function");
    const modal = document.getElementById("ticket-form-container");
    modal.style.display = "none";
}

window.addEventListener("click", function (event) {
    const modal = document.getElementById("ticket-form-container");
    if (event.target == modal) {
        closeTicketForm();
    }
});
