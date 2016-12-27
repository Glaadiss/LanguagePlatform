import React from 'react'
import Block from './block.jsx'
import data from '../data.jsx'
import Header from './header.jsx'
class Content extends React.Component{

    constructor(props){
        super(props);
        this.state={
            search_word: '',
            data: data
        }
    }
    search(){
        this.setState({
            search_word: document.getElementById('tense').value
        });
    }
    render(){
        return (
            <div>
                <Header search={this.search.bind(this)} />
                <div className="container">
                    {this.state.data.map((el,i)=> <Block {...el} search_word={this.state.search_word} key={el.id} /> )}
                </div>
            </div>
        )
    }
}

export default Content;