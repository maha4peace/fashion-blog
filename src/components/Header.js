function Header() {
    return (
        <header>
            <h1 style={{fontSize: '8vw'}} className="blog-title"> Sarte's List</h1>
            <h2>Better-Dressed People</h2> 
            <nav> 
                <ul className= "nav-header" aria-label="Main Navigation" role="navigation">
                    <li>
                        <a href=""> Women's</a>
                    </li>
                    <li>
                        <a href="">Men's</a>
                    </li>
                    <li>
                        <a href="">On the Street</a>
                    </li>
                    <li>
                        <a href="">The Catwalk</a>
                    </li>
                    <li>
                        <a href="">AdWatch</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                </ul>   
            </nav>
        </header>
    );
}


export default Header ; 