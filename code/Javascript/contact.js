document.querySelector(".contact-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
        });

        const result = await response.text();
        alert(result); // Display the server response as an alert
    } catch (error) {
        alert("There was an error submitting the form. Please try again.");
    }
});
