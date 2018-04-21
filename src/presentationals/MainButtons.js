import React from "react";

import style from "../styles/MainButtons.css";

const MainButtons = props => (
	<div
		className={style.MainButtons + " " + (props.hideBoard_MainButtons ? style.hide : "")}
	>
		<button onClick={props.newGame}>New Game</button>
		<button onClick={props.resetBoard}>Restart</button>
		<button onClick={props.checkSudoku}>Check</button>
		<button onClick={props.solveSudoku}>Solve</button>
	</div>
);

export default MainButtons;
