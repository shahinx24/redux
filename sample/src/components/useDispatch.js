import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";

function UsersList() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return users.map(user => <p key={user.id}>{user.name}</p>);
}