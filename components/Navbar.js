import Link from 'next/link';

export default function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="container-fluid navbarStyle d-flex">
                <div className="button type2"><Link href='/'>Home</Link></div>
                <div className="button type2"><Link href='/about'>About</Link></div>
                <div className="button type2"><Link href='/projects'>Projects</Link></div>
                <div className="button type2"><Link href='/contact'>Contact</Link></div>
            </div>
        </nav>       
        </>
    )
}