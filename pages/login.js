import { useFetchUser } from "../lib/authContext";
import { default as LoginComponent } from "../components/Login";
import Home from ".";

const Login = () => {
  const { user } = useFetchUser();

  return <>{!user ? <LoginComponent /> : <Home />}</>;
};

export default Login;
