import Nav from "./Nav";
import Footer from "./Footer";
import { useFetchUser, UserProvider } from "../lib/authContext";
import Login from "./Login";
import Loader from "./Loader";

const Layout = ({ children, categories }) => {
  const { user, loading } = useFetchUser();

  if (loading) return <Loader />;
  if (!user) return <Login />;

  return (
    <UserProvider value={user}>
      <Nav categories={categories} />

      <main className="bg-[#F1F2F6] grow pt-20">
        <div className="flex justify-center mx-auto">
          <div className="w-full">{children}</div>
        </div>
      </main>

      <Footer />
    </UserProvider>
  );
};

export default Layout;
