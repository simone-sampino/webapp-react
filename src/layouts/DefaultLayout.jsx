import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <header>Hello</header>
      <main>
        <Outlet />
      </main>
      <footer>World!</footer>
    </>
  );
}
