import React, {Component} from 'react';
import Board from '../presentational/Board';
import sudoku from 'sudoku-umd';
import style from "../styles/App.css";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			initialBoard: "",
			board: "",
		};
	}

    onChangeHandler(value, id) {
        var array = this.state.board.split('').map((tile, index) => 
            (index === parseInt(id, 0)) ? ((value !== "") && (value < 10) && (value > 0) ? value : ".") : tile)
        .join('');
        this.setState({board : array});
	}

	render() {
		return (
			<div className={style.App}>
				<h1>Sudoku Game</h1>
				<Board 
                    board={this.state.board.split('')} 
                    initialBoard={this.state.initialBoard.split('')} 
                    onChange={(value, id) => this.onChangeHandler(value, id)}
				/>
			</div>
		);
	}
}

export default App;
