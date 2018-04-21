import React from "react";

import style from "../styles/DifficultyLevel.css";

const DifficultyLevel = props => (
	<div className={style.DifficultyLevel + " " + (props.hideDifficultyLevel ? style.hide : "")}>
		<button onClick={props.setDifficultyEasy}>EASY</button>
		<button onClick={props.setDifficultyMedium}>MEDIUM</button>
		<button onClick={props.setDifficultyHard}>HARD</button>
	</div>
);

export default DifficultyLevel;
