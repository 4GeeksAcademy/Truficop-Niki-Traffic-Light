import React, { useState }from "react";
import "/src/styles/index.css";


export const Semaforo = () => {
    const [color, setColor]= useState('');
	const [additionalColors, setAdditionalColors] = useState(['red', 'green', 'yellow']);
// const setRojo = () => setColor('red')
// const setAmarillo = () => setColor('yellow')
// const setVerde = () => setColor('green')

const newColor = () => {
	if (additionalColors.length === 3) {
		setColor('purple');
		setAdditionalColors([...additionalColors, 'purple', 'purpleTwo', 'purpleThree']);
		console.log(additionalColors);	
	}
}

const randomColor = () => {
	const randomIndex = Math.floor(Math.random() * additionalColors.length);
	setColor(additionalColors[randomIndex]);
	console.log(additionalColors);
}
	return (
		<><div className="container text-center bg-black" style={{width: "30px", height: "50px"}}></div>
		<div className="container text-center bg-black" style={{width: "85px",height: "250px", display:"grid", paddingTop: "10px", borderRadius: "15px"}}>
			<div onClick={() => setColor('green')} className= {`rounded-circle ${color === 'purple' ? 'purple' : 'bg-success'}`} style={{width: "60px",height: "60px", border: color === 'green' || color === 'purple' ? "3px solid yellow" : "none"}}></div>
			<div onClick={() => setColor('yellow')} className={`rounded-circle ${color === 'purpleTwo' ? 'purple' : 'bg-warning'}`} style={{width: "60px",height: "60px", border: color === 'yellow' || color === 'purpleTwo' ? "3px solid yellow" : "none"}}></div>
			<div onClick={() => setColor('red')} className={`rounded-circle ${color === 'purpleThree' ? 'purple' : 'bg-danger'}`} style={{width: "60px",height: "60px", border: color === 'red' || color === 'purpleThree' ? "3px solid yellow" : "none"}}></div>
		</div>
		<div className="container justify-content-center d-flex pt-5"><button onClick={randomColor}>Random color</button></div>
		<div className="container justify-content-center d-flex pt-5"><button onClick={newColor}>Add purple!</button></div>
		</>
	);
};