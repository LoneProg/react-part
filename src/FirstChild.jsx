export function FirstChild(props) {
    console.log(props);
    
    return (<div><h1>Hi, my name is {props.myfirstprop} and i am the first child</h1></div>);
}