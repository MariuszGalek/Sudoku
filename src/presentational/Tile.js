import React from "react";
import style from '../styles/Tile.css'

const Tile = (props) => {
	return (
		<input
			className="Tile"
			type="number"
            value={props.value} 
            id={props.id} 
			onChange={(e) => props.onChange(e.target.value, e.target.id)}
		/>
	);
};

export default Tile;