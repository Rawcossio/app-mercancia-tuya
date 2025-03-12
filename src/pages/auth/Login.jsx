import './Login.css'
function Login() {
  return (
    <div className='formulario'>
      <form class="modern-form">
        <div class="form-title">Sign Up</div>
        <div class="form-body">
          <div class="input-group">
            <div class="input-wrapper">
              <svg fill="none" viewBox="0 0 24 24" class="input-icon">
                <circle
                  stroke-width="1.5"
                  stroke="currentColor"
                  r="4"
                  cy="8"
                  cx="12"
                ></circle>
                <path
                  stroke-linecap="round"
                  stroke-width="1.5"
                  stroke="currentColor"
                  d="M5 20C5 17.2386 8.13401 15 12 15C15.866 15 19 17.2386 19 20"
                ></path>
              </svg>
              <input
                required=""
                placeholder="Username"
                class="form-input"
                type="text"
              />
            </div>
          </div>
          <div class="input-group">
            <div class="input-wrapper">
              <svg fill="none" viewBox="0 0 24 24" class="input-icon">
                <path
                  stroke-width="1.5"
                  stroke="currentColor"
                  d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                ></path>
              </svg>
              <input
                required=""
                placeholder="Email"
                class="form-input"
                type="email"
              />
            </div>
          </div>
          <div class="input-group">
            <div class="input-wrapper">
              <svg fill="none" viewBox="0 0 24 24" class="input-icon">
                <path
                  stroke-width="1.5"
                  stroke="currentColor"
                  d="M12 10V14M8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8C6 6.89543 6.89543 6 8 6Z"
                ></path>
              </svg>
              <input
                required=""
                placeholder="Password"
                class="form-input"
                type="password"
              />
              <button class="password-toggle" type="button">
                <svg fill="none" viewBox="0 0 24 24" class="eye-icon">
                  <path
                    stroke-width="1.5"
                    stroke="currentColor"
                    d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                  ></path>
                  <circle
                    stroke-width="1.5"
                    stroke="currentColor"
                    r="3"
                    cy="12"
                    cx="12"
                  ></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button class="submit-button" type="submit">
          <span class="button-text">Create Account</span>
          <div class="button-glow"></div>
        </button>

        <div class="form-footer">
          <a class="login-link" href="#">
            Already have an account? <span>Login</span>
          </a>
        </div>
      </form>
    </div>
  )
}

export default Login