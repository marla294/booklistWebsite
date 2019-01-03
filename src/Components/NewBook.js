import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

NewBook.propTypes = {
	displayNewBook: PropTypes.bool.isRequired,
	setDisplayNewBook: PropTypes.func.isRequired,
	createNewBook: PropTypes.func.isRequired,
	listId: PropTypes.number.isRequired
};

const BookWrapper = styled.div`
	padding: ${props => props.theme.S05};

	background: ${props => props.theme.yellow};

	border: 0.3rem solid ${props => props.theme.orange};

	display: ${props => (props.displayNewBook ? "grid" : "none")};
	grid-template-columns: 5fr 1fr;
`;

const TitleAuthorWrapper = styled.div`
	align-self: center;
	display: grid;
	grid-gap: ${props => props.theme.S02};

	input {
		background: ${props => props.theme.yellow};

		border: 1px solid ${props => props.theme.orange};
		outline: none;
	}
`;

const Title = styled.input`
	color: ${props => props.theme.darkorange};

	font-size: ${props => props.theme.F04};
	font-weight: 900;
`;

const Author = styled.input`
	color: ${props => props.theme.orange};

	font-size: ${props => props.theme.F03};
	font-weight: 900;
`;

const SubmitForm = styled.button`
	color: ${props => props.theme.yellow};
	background-color: ${props => props.theme.darkorange};

	border: none;

	font-size: ${props => props.theme.F04};
	font-weight: 900;
`;

const CloseForm = styled.button`
	color: ${props => props.theme.darkorange};
	background-color: ${props => props.theme.yellow};

	border: none;
	outline: none;

	font-size: ${props => props.theme.F08};
	line-height: 0;

	align-self: start;
	justify-self: end;
`;

export default function NewBook(props) {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");

	const handleChange = e => {
		const { name, value } = e.target;

		// Want to keep the allowed title and author under 120 characters
		const slicedValue = value.slice(0, 120);

		if (name === "title") setTitle(slicedValue);
		if (name === "author") setAuthor(slicedValue);
	};

	return (
		<BookWrapper displayNewBook={props.displayNewBook}>
			<form
				onSubmit={async e => {
					e.preventDefault();
					await props.createNewBook(props.listId, title, author);
					props.setDisplayNewBook(false);
					setTitle("");
					setAuthor("");
				}}
			>
				<TitleAuthorWrapper>
					<Title
						type="text"
						id="title"
						name="title"
						required
						placeholder="Title"
						value={title}
						onChange={handleChange}
					/>
					<Author
						type="text"
						id="author"
						name="author"
						required
						placeholder="Author"
						value={author}
						onChange={handleChange}
					/>
					<SubmitForm type="submit">Submit</SubmitForm>
				</TitleAuthorWrapper>
			</form>
			<CloseForm onClick={() => props.setDisplayNewBook(false)}>
				&times;
			</CloseForm>
		</BookWrapper>
	);
}
