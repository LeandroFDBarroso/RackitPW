import React, { useEffect, useState } from "react";

export const Teste = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		async function teste() {
			let response = await fetch(
				"http://localhost:3000/info-produtos/count?where=%7B%0A%20%20%22produtosId%22%3A%201%0A%7D"
			);
			response = await response.json();
			setCount(response.count);
		}
		teste();
	}, []);
	return count;
};
