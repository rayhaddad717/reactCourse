import Link from "next/link";
const styles = {
    display: "flex",
    justifyContent: "space-between",
    background: "grey",
    padding: "1rem"
};
const Navbar = () => (
    <div style={styles}>
        <Link href="/">
            <a>Home Page</a>
        </Link>
        <Link href="/about">
            <a>About Page</a>
        </Link>
        <Link href="/contact">
            <a>Contact Page</a>
        </Link>
    </div>
);
export default Navbar;