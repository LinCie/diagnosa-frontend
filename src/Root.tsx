import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

function Root() {
  const [Cookies] = useCookies(["username"]);

  return (
    <main className="w-full">
      <header className="fixed inset-x-0 top-0 flex items-center justify-between bg-white px-6 py-4">
        <div className="flex gap-3">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
        <div>
          {Cookies.username ? `Halo, ${Cookies.username}` : "Anda belum login"}
        </div>
      </header>
    </main>
  );
}

export default Root;
