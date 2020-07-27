import React, { Component } from "react";
import PageTemplate from "../components/templates/PageTemplate";
import ShowcaseService from "../services/ShowcaseService";
import IntroHero from "../components/molecules/IntroHero";
import Card from "../components/molecules/Card";
import CardGroup from "../components/molecules/CardGroup";
import sortArrayBy from "../helpers/sortArrayBy";

class Community extends Component {
	state = {
		loaded: false,
		showcasePosts: []
	}

	async getShowCasePosts() {
		try {
			const posts = await ShowcaseService.getAllPosts();

			this.setState({
				loaded: true,
				showcasePosts: sortArrayBy(posts, "title")
			});
		} catch (error) {
			this.setState({
				error
			});
		}
	}

	componentDidMount() {
		this.getShowCasePosts();
	}

	render() {
		const { error, loaded, showcasePosts } = this.state;

		if (error) {
			// TODO return error template
		}

		if (loaded) {
			return (
				<PageTemplate page="Community">
					<IntroHero
						title="Community"
					/>
					<main>
						<section id="community-showcase" className="container">
							<h2>
								Community Showcase
							</h2>
							<CardGroup>
								{ showcasePosts.map((post) => (
									<Card
										title = { post.title }
										description = { post.description }
									/>
								))}
							</CardGroup>
						</section>
					</main>
				</PageTemplate>
			);
		}

		return <p>Loading...</p>
	}
}

export default Community;