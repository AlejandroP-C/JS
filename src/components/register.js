import { router } from "../router/router.js";

export { Register };

class Register {

    constructor() { }

    renderRegister() {
        
        let divLogin = document.querySelector("#login");
    
        divLogin.innerHTML = `
    
            <section class="vh-100">

                <div class="container-fluid h-custom">

                <div class="row d-flex justify-content-center align-items-center h-100">

                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image">
                </div>

                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                    <form id="formLogin">

                    <!-- Email input -->
                    <div class="form-outline mb-4">
                        <input type="email" id="InputEmail" class="form-control form-control-lg" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="abc@lmn.yz" />
                        <label class="form-label" for="InputEmail">Email address</label>
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-3">
                        <input type="password" id="InputPassword" class="form-control form-control-lg" />
                        <label class="form-label" for="InputPassword">Password</label>
                    </div>

                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="button" class="btn btn-primary" id="btn-login" style="padding-left: 2.5rem; padding-right: 2.5rem;">Register</button>
                        <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="#/login" class="link-danger">Login</a></p>
                    </div>

                    </form>

                </div>

                </div>

                </div>

            </section>

        `;
        container.querySelector("#btn-login").addEventListener("click", () => {
            app.user = app.container.querySelector("#InputEmail").value;
            app.password = app.container.querySelector("#InputPassword").value;
            this.register();
        });
    }

    register() {

        console.log(app.user);
        console.log(app.password);

        let datosFormData = new FormData();

        datosFormData.append("email", app.user);
        datosFormData.append("password", app.password);

        let objecteFormData = Object.fromEntries(datosFormData);
        objecteFormData.returnSecureToken = true;

        delete objecteFormData.remember;

        let datos = JSON.stringify(objecteFormData);

        console.log(datos);

        fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhrLssnL72rI4rs9eWfmnoUV6XUpLNqoI",
            {
                method: "post",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: datos,
            }
        )
            .then(async (response) => {

                if (response.ok) {
                    return response.json();
                } else {
                    const text = await response.json();
                    console.log(text);
                    throw new Error(text.error.message);
                }

            })
            .then((datos) => {

                localStorage.setItem("idToken", datos.idToken);
                localStorage.setItem("email", datos.email);

                window.location.hash = "#/login";
                router(window.location.hash);

            })
            .catch((error) => {
                console.error("Error;", error);
            });
    };
}


