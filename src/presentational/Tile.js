import React from "react";

const Tile = (props) => {
	return (
		<input
			className="tile"
			type="number"
            value={props.value} 
            id={props.id} 
			onChange={(e) => props.onChange(e.target.value, e.target.id)}
		/>
	);
};

export default Tile;