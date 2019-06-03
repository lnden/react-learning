import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Header() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/topics">Topics</Link>
            </li>
        </ul>
    );
}

function Home(value) {
    // console.log(value)
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function defaultValue() {
    return <h3>我应该是默认值</h3>
}
function Topics({match}){
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route exact path={match.path} render={()=><h3>Please select a topic</h3>} /> 
            {/* <Route exact path={match.path} component={defaultValue} />  */}
            <Route path={`${match.path}/:id`} component={Topic} />    
        </div>
    )
}

function Topic({ match }) {
    return <h3>Requested Param: {match.params.id}</h3>;
}

function App() {
    return (
        <Router>
            <section>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </section>
        </Router>
    )
}

export default App