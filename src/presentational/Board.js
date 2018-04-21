import React from "react";
import Tile from "./Tile";
import sudoku from "sudoku-umd";
import style from '../styles/Board.css';

const Board = props => {
	let splitTiles = tiles.split("");
	return (
		<form onSubmit={props.onSubmit}>
			{splitTiles.map((item, index) => (
				<Tile key={index} value={item} onChange={props.onChange} />
			))}
		</form>
	);
};

export default Board;