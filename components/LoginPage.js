import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";

const LoginPage = () => {
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //request on the tradesmith

    const getToken = async () => {
      const url = "https://638c92ebeafd555746a9521d.mockapi.io/api/v1/login";

      const response = await axios.post(url, {
        email: data.identifier,
        password: data.password,
      });

      if (
        response.data.email === data.identifier &&
        response.data.password === data.password
      ) {
        return response.data.token;
      } else {
        return null;
      }
    };

    const token = await getToken();
    const response = await signIn("credentials", { token, redirect: false });

    if (!token) {
      setError(
        "We didn't recognize the username or password you entered. Please try again."
      );
    } else if (response?.error) {
      setError("User is not found. Please try again.");
    }

    // const response = await signIn("credentials", {
    //   email: data.identifier,
    //   password: data.password,
    //   redirect: false,
    // });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-24">
      <Link href="/">
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="overflow-hidden"
          src="/parabolic-logo.png"
          width={235}
          height={84}
          alt="Parabolic Logo"
        />
      </Link>
      <div className="mx-auto w-[320px] mt-5 p-6 border border-white">
        <form
          onSubmit={handleSubmit}
          className="mb-2.5 md:flex md:flex-wrap md:justify-between"
        >
          <div className="flex flex-col mb-4 md:w-full">
            <div className="text-red-400 text-md pb-2">{error}</div>
            <label className="text-sm mb-1 text-[#17bcb8]" htmlFor="username">
              Email Address
            </label>
            <input type="hidden"></input>
            <input
              className="border-2 rounded py-1.5 px-3"
              type="text"
              name="identifier"
              onChange={handleChange}
              value={data.identifier}
              required
            />
          </div>
          <div className="flex flex-col mb-4 md:w-full">
            <label className="text-sm mb-1 text-[#17bcb8]" htmlFor="password">
              Password
            </label>
            <input type="hidden"></input>
            <input
              className="border-2 rounded py-1.5 px-3"
              type="password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
          </div>
          <div className="flex justify-between md:w-full">
            <div>
              <input
                type="checkbox"
                value=""
                className="w-4 h-4 cursor-pointer text-blue-300 bg-gray-100 rounded border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-400"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-center text-[#17bcb8] dark:text-gray-300 cursor-pointer"
              >
                Remember Me
              </label>
            </div>
            <div>
              <button
                className="bg-[#e56600] text-sm rounded px-3 py-1.5 mx-auto text-white hover:bg-[#ffb80b] hover:text-[#212b38] text-shadow-xl hover:text-shadow-xl"
                type="submit"
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
      <Link
        href="/"
        className="text-sm my-6 pr-12 text-[#17bcb8] justify-start items-start"
      >
        ← Go to TradeSmith Parabolic Profits
      </Link>
    </div>
  );
};

export default LoginPage;
