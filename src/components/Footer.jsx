/** @format */

import React from "react";

const date = new Date();
const year = date.getFullYear();
const Footer = () => (
	<div className="mt-24">
		<p className="dark:text-gray-200 text-gray-700 text-center m-20">
			© {year} All rights reserved by{" "} <a href="https://geocodec-tech.com/">GeoCodec Technologies</a> 
		</p>
	</div>
);

export default Footer;
