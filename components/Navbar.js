import Link from 'next/link';

export default function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="container-fluid navbarStyle d-flex">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/contact'>Contact</Link>
            </div>
        </nav>
            
        </>
    )
}