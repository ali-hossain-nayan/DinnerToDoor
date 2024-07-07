// Header.tsx
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Restaurant from "./Restaurant";

interface HeaderProps {
  // Add props if needed
}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleLogin = () => {
    handleNavigation("/login");
  };

  const handleSignUp = () => {
    handleNavigation("/signup");
  };

  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <div
            className="cursor-pointer flex items-center"
            onClick={() => handleNavigation("/")}
          >
            {/* Your logo or any other content */}
          </div>
          <div className="flex items-center lg:order-2">
            {/* Login link */}

            <div
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none cursor-pointer hover:text-orange-700"
              onClick={handleLogin}
            >
              Log in
            </div>
            <div
              className="text-gray-800 hover:text-orange-700 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none cursor-pointer"
              onClick={handleSignUp}
            >
              Sign up
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <div className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <div
                className={`block py-2 pr-4 pl-3 duration-200 ${
                  pathname === "/" ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer`}
                onClick={() => handleNavigation("/")}
              >
                Home
              </div>
              <div
                className={`block py-2 pr-4 pl-3 duration-200 ${
                  pathname === "/shop" ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer`}
                onClick={() => handleNavigation("/shop")}
              >
                Menu
              </div>
              <div
                className={`block py-2 pr-4 pl-3 duration-200 ${
                  pathname === "/blog" ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer`}
                onClick={() => handleNavigation("/blog")}
              >
                Blog
              </div>
              <div
                className={`block py-2 pr-4 pl-3 duration-200 ${
                  pathname === "/about" ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer`}
                onClick={() => handleNavigation("/about")}
              >
                About
              </div>
              <div
                className={`block py-2 pr-4 pl-3 duration-200 ${
                  pathname === "/profile" ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer`}
                onClick={() => handleNavigation("/profile")}
              >
                Profile
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
