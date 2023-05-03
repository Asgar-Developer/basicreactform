import "./styles.css";
import { useState } from "react";
export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email:${username} Password:${password}`);
  };
  return (
    <div className="App">
      <div className="row">
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          <form className="form-example">
            <h1>Login Form</h1>

            {/* <!-- Input fields --> */}
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control username"
                id="username"
                placeholder="Username..."
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control password"
                id="password"
                placeholder="Password..."
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-customized mt-4"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
