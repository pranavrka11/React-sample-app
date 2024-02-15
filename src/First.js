import './First.css'

function First(){
    var name="Pranav";
    var age=22;
    return(
        <div class="first">
            <h1>Hello {name}</h1>
            <br />
            <h1>Age is: {age}</h1>
        </div>
    )
}

export default First;