import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";

function Users() {
  const dispatch = useDispatch();

  // get state from Redux store
  const { users, loading, error } = useSelector(
    (state) => state.users
  );

  // call API when component loads
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;
