import React from 'react'

const Header = (props)=> (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            English Tenses
                        </a>
                    </div>
                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input type="text" id="tense" onChange={props.search} className="form-control" placeholder="Search"/>
                        </div>
                    </form>
                </div>
            </nav>
        )

export default Header;