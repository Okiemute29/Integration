import { useSelector } from 'react-redux'

const Dashboard = () => {
	const user = useSelector((state) => state.auth.user)
	
	console.log("user", user)

	return (
		<div className="container-fluid">
			<div className="dash-container">
				<div className="row col-12 col-lg-8 p-0 pr-lg-3">
					<div className="col-12 first-section primary-background">
						<div className="card card-container">
							<div className="card-header txt d-block d-sm-flex border-0">
								
								<ul>
									{Object.entries(user).map(([key, value]) => (
									<li key={key}>
										<strong>{key}:</strong> {value}
									</li>
									))}
								</ul>
							</div>

							
						</div>
					</div>
					

				</div>
			</div>
		</div>
	);
};

export default Dashboard;
