import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../common/elements";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [activeState, setActiveState] = useState(0);
  const [loading, setLoading] = useState(false);

  const onFormSubmit = () => {};

  const onInputBlur = (e: any) => {};

  return (
    <div className="register auth">
      <div className="auth-container">
        <Link to="/">
          <h4>rydes.</h4>
        </Link>
        <form onSubmit={onFormSubmit}>
          <div className="form-content">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="jack.robinson@bankr.com"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email && "invalid"}
              onBlur={(e) => onInputBlur(e)}
            />
          </div>
          <div className="form-content">
            <label>Password</label>
            <input
              type="password"
              required
              name="password"
              value={password}
              placeholder="****"
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password && "invalid"}
              onBlur={(e) => onInputBlur(e)}
            />
          </div>
          <div>
            <Button
              type="submit"
              className="login-btn"
              disabled={email === "" || password === "" || loading}
              loading={loading}
            >
              {activeState === 0 ? "Log In" : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;