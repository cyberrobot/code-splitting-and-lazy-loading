import { Link, Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
};
