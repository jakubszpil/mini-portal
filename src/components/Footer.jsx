import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} <Logo />
        </p>
      </div>
    </footer>
  );
}
