import React from "react";

import style from "../styles/DifficultyLevel.css";

const DifficultyLevel = props => (
	<div className={ "" + (props.hideDifficultyLevel ? style.hide : "")}>
		<div className={style.DifficultyTitle}>
			<h2>Choose your difficulty level: </h2>
		</div>
		<div className={style.DifficultyLevel}>
			<button className={style.DifficultyButton} onClick={props.setDifficultyEasy}>EASY</button>
			<button className={style.DifficultyButton} onClick={props.setDifficultyMedium}>MEDIUM</button>
			<button className={style.DifficultyButton} onClick={props.setDifficultyHard}>HARD</button>
			<button className={style.DifficultyButton} onClick={props.setDifficultyVeryHard}>VERY HARD</button>
			<button className={style.DifficultyButton} onClick={props.setDifficultyInsane}>INSANE</button>
			<button className={style.DifficultyButton} onClick={props.setDifficultyInhuman}>INHUMAN</button>
		</div>
	</div>
);

export default DifficultyLevel;
