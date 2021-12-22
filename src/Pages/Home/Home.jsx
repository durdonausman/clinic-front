import React from 'react';
import { Link } from 'react-router-dom';

// Components

function Home() {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch('http://localhost:6000/clinics')
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			});
	});

	return (
		<>
			<h2>Clinics</h2>

			{data.length > 0 &&
				data.map((row) => (
					<Link to={`/services/${row.clinic_id}`}>
					    <li key={row.clinic_id}>
						    <div>
							    <img
								    src='https://tagestipp24.com/wp-content/uploads/2020/10/Hospital-HITN.jpg'
								    alt={row.clinic_name+'image'}
								    width={300}
								    height={150}
							    />
						    </div>
							<h2>{row.clinic_name} Clinic </h2>
					    </li>
					</Link>
				))}
		</>
	);
}

export default Home;
