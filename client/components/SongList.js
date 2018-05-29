import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
	renderSongs() {
		return this.props.data.songs.map(song => (
			<li key={song.id}>{song.title}</li>
		));
	}
	render() {
		if (this.props.data.loading) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<h3>SongList</h3>
				{this.renderSongs()}
			</div>
		);
	}
}

const query = gql`
	{
		songs {
			id
			title
		}
	}
`;

export default graphql(query)(SongList);
