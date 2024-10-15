import "./style.css";

export default function illustration({title, className}) {
    
    //console.log(location.pathname);
    console.log({title});
    console.log({className});

    /*
    const test = {
        width: classIllustration + '%',
        backgroundColor : 'red'
    }

    const style = {background : 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(/src/assets/Illustration_hp_big.png)'}

    */

    return (
            <div className={`illustration ${className}`}>
                <div>
                    <h1>{title}</h1>
                </div>
            </div>
    );
}