function App() {
  return (
    <div className="bodyContainer bg-image d-flex">
      <header className="App-header"></header>
      <div className="d-flex w-100  h-100 justify-content-end position-relative">
        <div className="bg-white h-100 formContainer">
          <div className="d-flex justify-content-center w-100 h-5 mb-5">
            <a
              className="text-decoration-none
          formheader"
              href="/"
            >
              Isomorphic
            </a>
          </div>
          <div className="w-100">
            <div class="mb-3">
              <input
                type="email"
                class="form-control formField"
                id="exampleFormControlInput1"
                placeholder="username"
              />
            </div>

            <div class="mb-3 w-100">
              <input
                type="email"
                class="form-control formField"
                id="exampleFormControlInput1"
                placeholder="password"
              />
            </div>
            <div class="mb-3 d-flex justify-content-between">
              <div className="d-flex align-items-center radioButtonContainer">
                <input className="form-check-input " type="checkbox" value="" />
                <label
                  className="form-check-label ml-2 mt-1 rememberSelect"
                  for="flexCheckChecked"
                >
                  Remember me
                </label>
              </div>
              <div>
                <button type="button" class="btn btn-primary button">
                  Sign in
                </button>
              </div>
            </div>

            <p className="promptController">
              {" "}
              username: demo password: demodemo or just click on any button.
            </p>
          </div>
          <div className="socialLoginContainer">
            <button
              type="button"
              class="btn btn-primary forn-control w-100 mb-3 socialButton faceBookButton"
            >
              Sign in with
            </button>
            <button
              type="button"
              class="btn btn-danger forn-control w-100 mb-3 socialButton googlePlusButton"
            >
              Sign in with Google Plus
            </button>
            <button
              type="button"
              class="btn btn-danger forn-control w-100 mb-3 socialButton"
            >
              Sign in with Auth0
            </button>
            <button
              type="button"
              class="btn btn-warning forn-control w-100 mb-3 socialButton fireBaseButton"
            >
              Sign in with Firebase
            </button>
          </div>
          <div className="forgotPasswordContainer mt-3">
            <a href="/" className="forgotPasswordText">
              Forgot password
            </a>

            <a href="/" className="createAccountLink">
              Create an Isomorphic account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
