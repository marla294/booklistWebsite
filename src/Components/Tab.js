import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TabStyles = styled.div`
	width: 100%;
	height: 0;

	border-bottom: ${props => props.theme.S06} solid
		${props => props.theme.orange};
	border-right: ${props => props.theme.S04} solid rgba(255, 0, 0, 0);
	border-left: ${props => props.theme.S04} solid rgba(255, 0, 0, 0);

	input {
		width: 95%;
		height: ${props => props.theme.S06};

		padding-left: ${props => props.theme.S02};

		color: ${props => props.theme.yellow};
		background: ${props => props.theme.orange};

		border: none;
		outline: none;
		cursor: pointer;

		font-size: ${props => props.theme.F05};
		font-weight: 900;

		:focus {
			font-style: italic;
		}
	}
`;

export default class Tab extends React.Component {
	state = {
		listName: this.props.listName
	};

	async componentDidMount() {
		this.myInput = React.createRef();
	}

	render() {
		return (
			<TabStyles>
				<input
					ref={this.myInput}
					value={this.state.listName}
					onChange={event =>
						this.setState({ listName: event.target.value })
					}
					onKeyPress={async event => {
						if (event.key === "Enter") {
							this.myInput.current.blur();
						}
					}}
					onBlur={async event => {
						if (this.props.id !== 0) {
							await this.props.updateListName(
								this.props.id,
								this.state.listName.trim()
							);
							this.setState({ listName: this.props.listName });
						}
					}}
				/>
			</TabStyles>
		);
	}
}

Tab.propTypes = {
	id: PropTypes.number.isRequired,
	listName: PropTypes.string.isRequired,
	updateListName: PropTypes.func.isRequired,
	deleteList: PropTypes.func.isRequired
};
