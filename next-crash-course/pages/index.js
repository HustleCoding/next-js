import Footer from "../components/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet</p>
      <p>Lorem ipsum dolor sit amet</p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
