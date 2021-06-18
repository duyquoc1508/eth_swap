import React, { Component } from 'react';
import Identicon from 'identicon.js';

class Navbar extends Component {
	render() {
		return (
			<nav className='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
				<a
					className='navbar-brand col-sm-3 col-md-2 mr-0'
					href='/'
					target='_blank'
					rel='noopener noreferrer'
				>
					EthSwap
				</a>

				<ul className='navbar-nav px-3'>
					<li className='nav-item text-nowrap d-none d-sm-none d-sm-block'>
						<small className='text-secondary'>
							<p id='account' style={{ marginBottom: 0, marginTop: '5px' }}>
								<strong>Account address:</strong> {this.props.account}
							</p>
						</small>
					</li>

					<li className='nav-item text-nowrap d-none d-sm-none d-sm-block'>
						<small className='text-secondary'>
							<p id='eth-balance' style={{ marginBottom: 0 }}>
								<strong>Ethereum balance:</strong> {this.props.ethBalance} ETH
							</p>
						</small>
					</li>

					<li className='nav-item text-nowrap d-none d-sm-none d-sm-block'>
						<small className='text-secondary'>
							<p id='token-balance' style={{ marginBottom: '5px' }}>
								<strong>Token balance:</strong> {this.props.tokenBalance} FAQ
							</p>
						</small>
					</li>

					{/* {this.props.account ? (
							<img
								className='ml-2'
								width='30'
								height='30'
								src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
								alt=''
							/>
						) : (
							<span></span>
						)}
					</li> */}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
