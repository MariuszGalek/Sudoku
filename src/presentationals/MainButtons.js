import React from "react";

import style from "../styles/MainButtons.css";

const MainButtons = props => (
	<div
		className={style.MainButtons + " " + (props.hideBoard_MainButtons ? style.hide : "")}
	>
		<button className={style.MainButton} onClick={props.newGame}>NEW GAME</button>
		<button className={style.MainButton} onClick={props.resetBoard}>RESTART</button>
		<button className={style.MainButton} onClick={props.checkSudoku}>CHECK</button>
		<button className={style.MainButton} onClick={props.solveSudoku}>SOLVE</button>
	</div>
);

export default MainButtons;
