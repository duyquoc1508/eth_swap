import React, { Component } from 'react';
import BuyForm from './BuyFrom';
import SellForm from './SellFrom';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentForm: 'buy'
		};
	}

	render() {
		let content;
		if (this.state.currentForm === 'buy') {
			content = (
				<BuyForm
					ethBalance={this.props.ethBalance}
					tokenBalance={this.props.tokenBalance}
					buyTokens={this.props.buyTokens}
				/>
			);
		} else {
			content = (
				<SellForm
					ethBalance={this.props.ethBalance}
					tokenBalance={this.props.tokenBalance}
					sellTokens={this.props.sellTokens}
				/>
			);
		}

		return (
			<div id='content' className='mt-5'>
				<div className='d-flex justify-content-between mb-3'>
					<button
						className={this.state.currentForm === 'buy' ? 'btn btn-primary' : 'btn btn-light'}
						onClick={(event) => {
							this.setState({ currentForm: 'buy' });
						}}
					>
						Buy
					</button>
					<span className='text-muted'>&lt; &nbsp; &gt;</span>
					<button
						className={this.state.currentForm === 'sell' ? 'btn btn-primary' : 'btn btn-light'}
						onClick={(event) => {
							this.setState({ currentForm: 'sell' });
						}}
					>
						Sell
					</button>
				</div>

				<div className='card mb-4'>
					<div className='card-body'>{content}</div>
				</div>
			</div>
		);
	}
}

export default Main;
