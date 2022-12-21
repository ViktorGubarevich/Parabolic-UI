import { useSession } from "next-auth/react";
import Nav from "./Nav";
import Footer from "./Footer";
import LoginPage from "./LoginPage";

const Layout = ({ children, categories }) => {
  const { status, data } = useSession();

  if (status === "unauthenticated") return <LoginPage />;

  if (status === "authenticated")
    return (
      <>
        <Nav categories={categories} />
        <main className="bg-[#F1F2F6] grow pt-20">
          <div className="flex justify-center mx-auto">
            <div className="w-full">{children}</div>
          </div>
        </main>

        <Footer />
      </>
    );
};

export default Layout;
