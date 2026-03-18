import { Link } from "react-router";

export default function NotFound() {
  return (
    <div>
      <h2>404: Nie znaleziono strony</h2>
      <Link to="/">Powrót do strony głównej</Link>
    </div>
  );
}
