import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton";
import Profile from "./components/profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <Profile></Profile>
          <LogoutButton></LogoutButton>
        </div>
      ) : (
        <LoginButton></LoginButton>
      )}
    </div>
  );
}

export default App;
