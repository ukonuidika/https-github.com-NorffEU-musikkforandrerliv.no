document.addEventListener(
    "DOMContentLoaded", function () {
        var contactForm = document.getElementById ("contact-form");
        var formMessages = document.getElementById ("form-messages");
        contactForm.addEventListener("submit", function (event){
            event.preventDefault();
            var formData = new formData(contactForm);
            fetch("contact.php",{
                method: "POST", 
                body: formData
            })

            .then(function(response) {
                return response.json();
            })

            .then(function(data) {
                formMessages.textContent = data.message;
                formMessages.style.display = "block";
                if (data.success) {
                    formMessages.style.color = "green";
                    contactForm.reset();
                }
                else {
                    formMessages.style.color = "red";
                }
            })

            .catch(function(error) {
                console.error("Error", error);
            });

        });
        
    });