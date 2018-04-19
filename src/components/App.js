import React, {Component} from 'react';
import Board from '../presentational/Board';
import Title from '../presentational/Title';
import sudoku from 'sudoku-umd';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			initialBoard: "",
			board: "",
		};
	}

	render() {
		return (
			<div className={style.App}>
				<h1>Sudoku</h1>
				   <Board />
				   <div className="buttons">
				       <button>Check</button>
				       <button>New Game</button>
				       <button>Solve</button>
				       <button>Restart</button>
				   	</div>
			</div>
		);
	}
}

export default App;
