import { Link, Redirect, Route, Switch, useParams } from "react-router-dom";

function App() {
  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
    { id: 5, name: "User 5" },
    { id: 6, name: "User 6" },
  ];

  function MainPage() {
    return (
      <>
        <h1>Main Page</h1>
      </>
    );
  }

  function UsersLayout() {
    return (
      <>
        <h1>Users list page</h1>
        <Link to={"/"}>MainPage</Link>
        <Switch>
          <Route path="/users" exact component={UsersListPage} />
          <Route path="/users/edit/:userId?" component={EditUserPage} />
          <Route path="/users/:userId?" component={User} />
        </Switch>
      </>
    );
  }

  function UsersListPage() {
    return (
      <>
        <h1>Users list Page</h1>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  function User() {
    const { userId } = useParams();

    return (
      <>
        <h1>User Page</h1>
        <ul>
          <li>
            <Link to={"/users"}>Users list Page</Link>
          </li>
          <li>
            <Link to={`/users/edit/${userId}`}>Edit this user</Link>
          </li>
        </ul>
        <h2>User id: {userId}</h2>
      </>
    );
  }

  function EditUserPage() {
    const { userId } = useParams();

    return (
      <>
        <h1>Edit User Page</h1>
        <ul>
          <li>
            <Link to={`/users/${userId}`}>User Page</Link>
          </li>
          <li>
            <Link to={`/users/${+userId + 1}`}>Another user</Link>
          </li>
          <li>
            <Link to={"/users"}>Users list Page</Link>
          </li>
        </ul>
        <h2>User id: {userId}</h2>
      </>
    );
  }

  return (
    <div>
      <h1>App layout</h1>
      <Link to={"/users"}>Users list Page</Link>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/users" component={UsersLayout} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
