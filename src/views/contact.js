export { Contact };

class Contact {

    constructor() { }

    renderContact() {

        let divContact = document.querySelector("#contact");

        divContact.innerHTML = `

            <div class="wrap-contact2">
                
                <div id="formContact">

                    <span class="contact2-form-title">
                        Contacta con <br><br> nosotros
                    </span>

                    <div class="mat-form-field">
                        <input class="form-control" placeholder="Nombre" id="InputName" name="name">
                        <span id="errorName"></span>
                    </div>

                    <div class="mat-form-field">
                        <input class="form-control" placeholder="Email" id="InputEmail" name="email">
                        <span id="errorEmail"></span>
                    </div>

                    <div class="mat-form-field">
                        <textarea class="form-control" placeholder="Mensaje" id="InputMessage" name="message"></textarea>
                        <span id="errorMessage"></span>
                    </div>

                    <div class="container-contact2-form-btn">

                        <button class="contact2-form-btn" id="btn-send">
                            <span class="text">Enviar</span>
                            <i class="fa-solid fa-check"></i>
                        </button>

                    </div>

                </div>

            </div>
        
        `;

        container.querySelector("#btn-send").addEventListener("click", () => {
            setTimeout(() => { this.checkInfo() }, 800);
        })

    }

    checkInfo() {

        const pass = true;

        let inputName = app.container.querySelector("#InputName").value;
        let inputEmail = app.container.querySelector("#InputEmail").value;
        let inputMessage = app.container.querySelector("#InputMessage").value;

        errorName.innerHTML = ``;
        errorEmail.innerHTML = ``;
        errorMessage.innerHTML = ``;

        function checkName() {

            let errorName = app.container.querySelector("#errorName");
            errorName.classList.add("text-danger");

            if (!inputName) {

                errorName.innerHTML = `El campo no puede estar vacío.`;
                pass = false;

            } else if (inputName.length < 2) {

                errorName.innerHTML = `El campo debe tener almenos 2 letras.`;
                pass = false;

            }

        }

        function checkEmail() {

            let errorEmail = app.container.querySelector("#errorEmail");
            errorEmail.classList.add("text-danger");

            if (!inputEmail) {

                errorEmail.innerHTML = `El campo no puede estar vacío.`;
                pass = false;

            } else if (!isEmailValid(inputEmail)) {

                errorEmail.innerHTML = `<p>El campo no es válido</p><p>Eg. abc@lmn.yz</p>`;
                pass = false;

            }

        }

        function checkMessage() {

            let errorMessage = app.container.querySelector("#errorMessage");
            errorMessage.classList.add("text-danger");

            if (!inputMessage) {

                errorMessage.innerHTML = `El campo no puede estar vacío.`;
                pass = false;

            }

        }

        function isEmailValid(inputEmail) {
            const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
            return re.test(inputEmail);
        };

        checkName();
        checkEmail();
        checkMessage();

        if (pass) {

            let token = localStorage.getItem("idToken");

            let url = `https://projecteangular-7effc-default-rtdb.firebaseio.com/contact.json?auth=${token}`;

            var contact = {
                'name': `${inputName}`,
                'email': `${inputEmail}`,
                'message': `${inputMessage}`,
            }

            fetch(url, {
                method: "post",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify(contact)
                })
                .then((response) => response.json())

            setTimeout(() => {
                window.location.reload(800);
            }, 800);

        }

    }

}