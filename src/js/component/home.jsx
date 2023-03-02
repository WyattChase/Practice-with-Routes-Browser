import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../views/Main.jsx";
import Product from "../views/Product.jsx";

//create your first component
const Home = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />}/>
				<Route path="/home" element={<Main />}/>
				<Route path="/product/:id" element={<Product />}/>

			</Routes>
		</BrowserRouter>
	);
};

export default Home;
