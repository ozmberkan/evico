import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-teal-200 text-neutral-900 py-2">
        <div className="container mx-auto text-sm font-medium tracking-tighter">
          Şimdi evico ile güvenilir ev arkadaşınızı bulun!
        </div>
      </div>
      <div className="w-full border-b border-neutral-200  py-4">
        <div className="container mx-auto flex justify-between items-center ">
          <h1 className="text-2xl font-bold tracking-tighter text-teal-500">
            Evico
          </h1>
          <nav id="navbar-nav">
            <ul className="flex items-center gap-2">
              {NavLinks.map((link, index) => {
                if (!link.custom) {
                  return (
                    <li
                      key={index}
                      className="font-semibold text-neutral-700 hover:text-neutral-500 text-sm"
                    >
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  );
                } else {
                  return (
                    <li className="font-semibold text-neutral-700 hover:text-neutral-500 text-sm">
                      <Link>{link.label}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

export const NavLinks = [
  { path: "/about", label: "Hakkımızda", custom: false },
  { path: "/contact", label: "İletişim", custom: false },
  { path: "/profile", label: "Profilim", custom: true },
];
