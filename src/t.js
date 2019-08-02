//路由与嵌套路由
import React,{ Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    NavLink
} from 'react-router-dom';
 
console.log("Redirect===",Redirect)

const Home = (obj)=> {
    console.log("Home obj===",obj)
    console.log("Home this===",this)
    return (
    <div>首页</div>
    )
}
const About = ()=>(
    <div>关于</div>
)
const Themes = ({ match })=>{
    console.log("Themes match===",match)
   return (
    <div>
        <h3>主题列表</h3>
        <ul>
            <li><Link to={ `${match.url}/rendering` }>渲染</Link></li>
            <li><Link to={ `${ match.url }/status`}>状态</Link></li>
            <li><Link to={ `${ match.url }/angular`}>Angular</Link></li>
        </ul>
        <Route path={ `${ match.url }/:id` } component={ Theme } />
        <Route exact path={ `${ match.url }`} render={ ()=> {
            return <div>请选择一个主题</div>
        }} />
    </div>
)
}
 
const Theme = (obj) => {
    //console.log("Theme match===",match)
    //obj包含当前路由的信息
    console.log("Theme obj===",obj)
    return (
    <div>
        { `${obj.match.params.id }` }
    </div>
    )
}
 
class BasicUse2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
 
        }
    }
    componentDidMount() {
        console.log("componentDidMount====",this.props.history)
    }
    render () {
        console.log("render this====",this)
        const oddEvent=function(match, location) {
            console.log("match===",match);
            console.log("location===",location);
            if (!match) {
            return false;
            }
            const eventID = parseInt(match.params.eventID)
            console.log("eventID",eventID)
            return !isNaN(eventID) && eventID % 2 === 1;
        }
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/about">关于</Link>
                        </li>
                        <li>
                            <Link to="/themes">主题</Link>
                        </li>
                        <li>
                            <NavLink isActive={oddEvent} activeClassName="selected" activeStyle={{fontWeight: "bold",color: "red"}} to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" activeStyle={{fontWeight: "bold",color: "red"}} to="/about11">About11</NavLink>
                        </li>
                    </ul>
                    <Route exact path="/" component = { Home } />
                    <Route path="/about" component={ About } />
                    <Route path="/themes" component={ Themes } />
                    <Redirect to="/about" />
                    <Redirect
                    to={{
                        pathname: "/login",
                        search: "?utm=your+face",
                        state: { referrer: "currentLocation" }
                    }}
                    />
                </div>
            </Router>
        )
    }
}
 
export default BasicUse2;