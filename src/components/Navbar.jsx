import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <header>
      <h1>
        <Logo />
      </h1>

      <NavbarMenu />
    </header>
  );
}
