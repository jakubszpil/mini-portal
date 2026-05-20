import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <h1>
          <Logo />
        </h1>

        <NavbarMenu />
      </div>
    </header>
  );
}
