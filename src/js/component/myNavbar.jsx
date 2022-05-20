import React from "react";

export const MyNavbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			<div className="container-fluid">
				<a className="navbar-brand text-secondary" href="#">
					Start Bootstrap
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<ul className="navbar-nav nav justify-content-end">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a class="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
