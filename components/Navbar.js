import Link from 'next/link'


export default function Navbar() {
    return (
        <>
        <nav className="navbar mb-3">
            <div className="container-fluid navbarStyle d-flex justify-content-around">
                <div className="button type2"><Link href='/'>Home</Link></div>
                <div className="button type2"><Link href='/projects'>Projects</Link></div>
                <div className="button type2"><Link href='/experience'>Experience</Link></div>
                <div className="button type2"><Link href='/contact'>Connect</Link></div>
            </div>
        </nav>       
{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <div className="button type2"><Link href='/'>Home</Link></div>
        </li>
        <li class="nav-item">
        <div className="button type2"><Link href='/projects'>Projects</Link></div>
        </li>
        <li class="nav-item">
            <div className="button type2"><Link href='/experience'>Experience</Link></div>
        </li>
      </ul>

    </div>
  </div>
</nav> */}
        </>
    )
}