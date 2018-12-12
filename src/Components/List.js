import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Book from "./Book";
import NewBook from "./NewBook";
import { ListWrapper, BooksWrapper, AddNewBook } from "./ListStyles";

List.propTypes = {
	id: PropTypes.number.isRequired,
	books: PropTypes.array.isRequired
};

export default function List(props) {
	const [displayNewList, setDisplayNewList] = useState(false);
	return (
		<ListWrapper>
			<BooksWrapper>{renderBooks(props)}</BooksWrapper>
			<NewBook display={displayNewList} />
			<AddNewBook key={0}>
				<button onClick={() => setDisplayNewList(true)}>+</button>
			</AddNewBook>
		</ListWrapper>
	);
}

function renderBooks(props) {
	const books = props.books;

	if (!books) {
		return <h1>Add a book to your list to get started!</h1>;
	}

	return books.map(book => {
		return (
			<Book
				key={book.Id}
				title={book.Title}
				author={book.Author}
				url={book.URL}
				image={book.Cover}
			/>
		);
	});
}
