import React from 'react';
import { Link } from 'react-router-dom';

function Services() {

	const [services, setServices] = React.useState([])

	React.useEffect(() => {
		fetch('http://localhost:6000/clinic')
			.then((response) => response.json())
			.then((data) => {
				           setServices(data);
						});
	});

	return (
		<>

			<h2>Services</h2>

            {services.length > 0 &&
		    services.map((row) => (
			    <Link to={`/services/${row.clinic_id}`}>
				  <li key={row.clinic_id}>
					<h2>{row.clinic_name}</h2>
				  </li>
		         </Link>
        ))}			
		</>
		
	);
}

export default Services;
