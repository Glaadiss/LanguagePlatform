var k= 20;

var progress = ()=>{
    return (
        <div className="progress" style={{width: '60%'}}>
            <div className="progress-bar progress-bar-striped active" style={{width: k+ '%'}} >
            </div>
        </div>
    )}

var buttons = (
    <div className="btn-group">
        <button className="btn btn-success" id="learnIt"> Learn it! </button>
        <button className="btn btn-danger" id="stop"> Destroy!</button>
        <button className="btn btn-info"> Update!</button>
    </div>
);

var block = (el)=>(
    <div className="container">
        <h3>{el.time}</h3>
        <p> {el.description} </p>
        <div> {buttons} </div>
        <br/>
        <div>{progress()}</div>
    </div>
);


var blocks = ()=> data.map((el)=> <div key={el.id}> {block(el)} </div> );
var render = ()=> {
    ReactDOM.render(<div> {blocks()} </div>, document.getElementById('reactRoot'));
}
render();

var start = ()=>{
    setTimeout(function(){
        if(k<100) start() ;
        k++;
        render();
    }, 300);
}

document.getElementById('learnIt').addEventListener('click', function(){
    start();
});

document.getElementById('stop').addEventListener('click', function(){
    stop();
})



