import React from "react";
import Tile from "./Tile.js";
import sudoku from "sudoku-umd";

+const Board = props => {
+	let tiles = sudoku.generate("easy");
+	let splitTiles = tiles.split("");
+	return (
+		<form>{splitTiles.map((item, index) => <Tile key={index} />)}</form>
+	);
+};

export default Board;