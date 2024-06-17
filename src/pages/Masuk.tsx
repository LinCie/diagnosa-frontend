import { Button, Label, TextInput } from "flowbite-react";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";

interface UserForm {
  username: string;
  password: string;
}

function Masuk() {
  const [userForm, setUserForm] = useState<UserForm>({
    username: "",
    password: "",
  });

  const [cookies, setCookie] = useCookies(["username"]);

  const navigate = useNavigate();

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", userForm);
      setCookie("username", response.data.username);
      navigate("/diagnosa");
    } catch (error) {
      console.log(error);
    }
  }

  if (cookies.username) {
    return <Navigate replace to="/" />;
  }

  return (
    <section className="flex h-screen w-full items-center justify-center">
      <form onSubmit={handleSubmit} className="flex w-[25vw] flex-col gap-4">
        <h1 className="text-2xl font-bold">Form Masuk</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            id="username"
            name="username"
            type="text"
            value={userForm.username}
            onChange={handleInputChange}
            placeholder="Dimas Kanjeng"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            name="password"
            type="password"
            value={userForm.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button type="submit">Masuk</Button>
      </form>
    </section>
  );
}

export default Masuk;
