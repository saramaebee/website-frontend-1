import React from "react";
import { Link } from "react-router-dom";

const Error = styled("div")`
	.error-template {
		width: 100vw;
		height: 100vh;

		top: 0;
		left: 0;

		display: flex;
		position: fixed;

		justify-content: center;
		align-items: center;
	}

	.error {
		text-align: center;
	}

	.error p {
		margin: 25px;
	}

	.error a {
		color: inherit;
		text-decoration: none;
	}
`;

function ErrorTemplate({message, code}) {
    return (
		<Error>
			<main className="error-template">
				<section className="error">
					<h1>
						{code ? `Error ${code}` : "An Error Occurred"}
					</h1>
					<p>
						{message}
					</p>
					<Link to="/">
						<button>
							Back To The Homepage
						</button>
					</Link>
				</section>
			</main>
		</Error>
    );
}

export default ErrorTemplate;