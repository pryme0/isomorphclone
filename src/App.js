function App() {
  return (
    <div className="bodyContainer bg-image d-flex">
      <header className="App-header"></header>
      <div className="d-flex w-100  h-100 justify-content-end">
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
          <div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="username"
              />
            </div>

            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="password"
              />
            </div>
            <div class="mb-3 flex ">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label ml-2" for="flexCheckChecked">
    Remember me
  </label>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
