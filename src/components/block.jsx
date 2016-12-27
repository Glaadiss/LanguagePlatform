import React from 'react'
import Buttons from './buttons.jsx'

class Block extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search_word: props.search_word,
            active: props.active,
            tense: props.tense,
            description: props.description,
            key_words: props.key_words,
            struct_sample: props.struct_sample
        }
    }
    render(){
        return (
            <div className="col-md-4 tense" style={{display: this.state.tense.includes(this.props.search_word)? 'block' : 'none'  }}>
                <div className="block">
                    <h3>{this.state.tense}</h3>
                    <p> <strong>Description:</strong> {this.state.description}</p>
                    <p> <strong>Key words:</strong> {this.state.key_words}</p>
                    <p> <strong>Examples:</strong> {this.state.struct_sample}</p>
                </div>
                <div> <Buttons/> </div>
                <br/>
            </div>
        )
    }
}
export default Block;