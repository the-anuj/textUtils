import React from 'react'

export default function Navbar(props) {
    let myStyle = {
        color:'white'
    }
    if(props.mode==='primary'){
        myStyle.color='black'
    }else{
        myStyle.color='white'
    }
    let newMode='light'
    if(props.mode==='primary'){
        newMode = 'Dark'
    }else{
        newMode='Light'
    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} `}style={myStyle}>
                <div className="container-fluid">
                    <a className="navbar-brand " style={myStyle} href="/">TextUtils</a>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" style={myStyle} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={myStyle} href="/">Tools</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={myStyle} href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={myStyle} href="/">Contact</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{newMode} Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

