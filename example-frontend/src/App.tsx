import logo from "./logo.svg";
import "./App.css";
import Login from "./features/login/Login";
import Logout from "./features/login/Logout";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (user && isAuthenticated) {
    getAccessTokenSilently({
      authorizationParams: {
        audience: "https://localhost:8080",
      },
    }).then((val) => {
      fetch("http://localhost:8080/api/group", {
        headers: {
          authorization: `Bearer ${val}`,
        },
      }).then((result) => {
        result.text().then(console.log);
        console.log();
      });
    });
  }
  let profile;
  if (isAuthenticated && user) {
    profile = (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  }
  return (
    <div className="App">
      {profile}
      <Login></Login>
      <Logout></Logout>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
