import React from "react";
import sudoku from "sudoku-umd";
import Board from "../presentationals/Board.js";
import MainButtons from "../presentationals/MainButtons.js";
import DifficultyLevel from "../presentationals/DifficultyLevel.js";
import style from "../styles/App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialBoard: "",
			board: "",
			hideBoard_MainButtons: true,
			hideDifficultyLevel: false,
			checkedAnswers: "",
		};
	}

	setDifficulty(difficultyLevel) {
		const board = sudoku.generate(difficultyLevel);
		this.setState({
			initialBoard: board,
			board,
			hideBoard_MainButtons: false,
			hideDifficultyLevel: true,
		});
	}

	handleChange(event, position) {
		const value = event.target.value;
		let number = ".";
		if (value) {
			if (value.length > 1) {
				number = value[value.length - 1];
			} else {
				number = value[0];
			}
		}
		const board =
			this.state.board.substr(0, position) +
			number +
			this.state.board.substr(
				position + 1,
				this.state.board.length - position
			);

		this.setState({ board });
	
	}

	resetBoard() {
		this.setState({
			board: this.state.initialBoard
		});
	}

	solveSudoku() {
		this.setState({
			board: sudoku.solve(this.state.initialBoard),
		});
	}

	newGame() {
		this.setState({
			board: "",
			hideBoard_MainButtons: true,
			hideDifficultyLevel: false,
		});
	}

	checkSudoku() {
		const answers = this.state.board.split("");
		const correctAnswers = sudoku.solve(this.state.initialBoard).split("");

		const checkedAnswers = answers.map(
			(item, index) => item == correctAnswers[index]
		);
		this.setState({ checkedAnswers: checkedAnswers });

		for (let i = 0; i < answers.length; i++) {
			if(answers[i] === correctAnswers[i]) {
				console.log('everything is ok')
			} else {
				console.log('some values are not ok')
			}
		}
		
		setTimeout(() => {
			this.setState({ checkedAnswers: "" });
		}, 3000);
	}

	render() {
		return (
			<div className={style.App}>
				<h1 className={style.Title}>Sudoku</h1>
				<DifficultyLevel
					hideDifficultyLevel={this.state.hideDifficultyLevel}
					setDifficultyEasy={() => this.setDifficulty("easy")}
					setDifficultyMedium={() => this.setDifficulty("medium")}
					setDifficultyHard={() => this.setDifficulty("hard")}
					setDifficultyVeryHard={() => this.setDifficulty("very-hard")}
					setDifficultyInsane={() => this.setDifficulty("insane")}
					setDifficultyInhuman={() => this.setDifficulty("inhuman")}
				/>
				<Board
					hideBoard_MainButtons={this.state.hideBoard_MainButtons}
					board={this.state.board}
					initialBoard={this.state.initialBoard}
					onChange={this.handleChange.bind(this)}
					checkedAnswers={this.state.checkedAnswers}
				/>
				<MainButtons
					hideBoard_MainButtons={this.state.hideBoard_MainButtons}
					resetBoard={this.resetBoard.bind(this)}
					solveSudoku={this.solveSudoku.bind(this)}
					newGame={this.newGame.bind(this)}
					checkSudoku={this.checkSudoku.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
