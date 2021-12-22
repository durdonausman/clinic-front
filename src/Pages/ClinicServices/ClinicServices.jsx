import React from 'react';
import { useParams } from 'react-router-dom';

function ClinicServices() {
	const { clinic_id } = useParams();
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch(`http://localhost:6000/clinic/${clinic_id}`)
			.then((response) => response.json())
			.then((data) => {
				           setData(data);
						});
	}, [clinic_id]);

	return (
		<>
		    <div>
			    <h2>Services and sub-services</h2>
			</div>

			{data.length > 0 &&
				data.map((row) => (
					    <li key={row.clinic_id}>
							<h2>{row.clinic_name}</h2>
					    </li>
				))}
		</>	
	);
}

export default ClinicServices;
