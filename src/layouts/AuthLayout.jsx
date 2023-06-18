import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="max-w-5xl m-auto mt-10 md:mt-18 flex flex-col md:flex-row items-center">
      <img src="../img/logo.svg" alt="imagen logotipo" className="max-w-xs" />

      <div className="px-20 py-10 w-full">
        <Outlet />
      </div>
    </main>
  );
}
