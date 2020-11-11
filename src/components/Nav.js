import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

function Nav(){
    return(
        <div>
            <nav>
                <Link to="/about">About Me</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
            </nav>
            <Switch>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/skills'>
                    <Skills/>
                </Route>
                <Route path='/projects'>
                    <Projects/>
                </Route>
            </Switch>
        </div>
        
    )
}

export default Nav;