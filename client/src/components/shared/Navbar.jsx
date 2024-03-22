import Container from "./Container";
import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  return (
    <div className="fixed w-full  bg-white z-10 shadow-sm">
      <div className="py-4 ">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
              {/* Logo */}
              <Logo></Logo>
              
              <ul className="hidden items-center justify-between gap-10 md:flex">
                <li className="group flex  cursor-pointer flex-col">
                  Home
                  <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group flex  cursor-pointer flex-col">
                  Services
                  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group flex  cursor-pointer flex-col">
                  About
                  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group flex  cursor-pointer flex-col">
                  Contact
                  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>
            </div>

            {/* Dropdown Menu */}
            <MenuDropdown></MenuDropdown>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
