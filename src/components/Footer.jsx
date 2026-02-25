import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} <Logo />
      </p>
    </footer>
  );
}
