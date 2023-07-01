// function Navbar() {
//     return(
//         <div>
//             <h1>Navbar</h1>

//             <h2>navbar item</h2>
//         </div>
//     )
// }

// function MainContent(){
//     return(
//         <h1>Im learning react</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />

//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

// const navbar = (
//     <nav>
//         <h1>Ronko</h1>

//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navbar,document.getElementById("root"))

// const append = (
//     <div>
//         <nav>
//             <h1>Ronko</h1>

//             <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>

//         <div>
//             <h1>Moreee</h1>
//         </div>

//         <div>
//             <h2>sak povedz ty</h2>
//         </div>

//         <footer>
//             <p>mail : rokdiufdnuini@gmail.com</p>
//         </footer>
//     </div>
// )

// const page = document.getElementById("root");
// page.append(JSON.stringify(append));
// ReactDOM.render(append,document.getElementById("root"));

// function List(){
//     return(
//         <div>

//         <header>
//             <nav>
//                 <img src="r.png" width = "50px"></img>
//             </nav>
//         </header>

//         <h1>Niggas</h1>

//         <ol>
//             <li>negr</li>
//             <li>neger</li>
//             <li>negeer</li>
//         </ol>

//         <footer>

//             <p>&copy 2023 hifdhunidfninb</p>

//         </footer>

//         </div>
//     )
// }

// ReactDOM.render(<List />,document.getElementById("root"))


function MainContent(){
    return(
        <div>
                    <h1>Niggas</h1>

<ol>
    <li>negr</li>
    <li>neger</li>
    <li>negeer</li>
</ol>
        </div>
    )
}

function Header(){
    return(
        <header>
            <nav className="navbar">
                <img src="r.png" width = "50px"></img>
                <ul className= "nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer(){
    return(
        <footer>

        <p>&copy 2023 hifdhunidfninb</p>

    </footer>
    )
}

function App(){
    return(
        <div>

        <Header />
        <MainContent />
        <Footer />

        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))