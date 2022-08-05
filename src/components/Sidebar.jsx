/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";

import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
	const {activeMenu, setActiveMenu, screenSize } = useStateContext()
	const handleCloseSidebar = () => {
		if (activeMenu && screenSize <= 900) {
			setActiveMenu(!activeMenu)
		}
	}
	const activeLink =
		"flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
	const normalLink =
		"flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-white-700 dark:text-gray-200 dark:hover:text-black hover:bg-black m-2";

	return (
		<div className="h-screen  text-white md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10" style={{ background: 'rgb(0, 30, 60)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset' }}>
			{activeMenu && (
				<>
					<div className="flex justify-between items-center">
						<Link
							to="/"
							onClick={handleCloseSidebar}
							className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-white">
							<SiShopware /> <span> Rancho School </span>
						</Link>
						{/* <TooltipComponent content="Menu" position="BottomCenter">
							<button
								type="button"
								onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
								className="text-xl rounded-full p-3 hover:bg-black mt-4 block md:hiden">
								<MdOutlineCancel />
							</button>
						</TooltipComponent> */}
					</div>
					<div className="mt-10">
						{links.map((item) => (
							<div key={item.title}>
								<p className="text-white-400 font-bold m-3 mt:4 uppercase">{item.title}</p>
								{item.links.map((link) => (
									<NavLink
										to={`/${link.name}`}
										key={link.name}
										onClick={() => {}}
										className={({ isActive }) =>
											isActive ? activeLink : normalLink
										}>
										{link.icon}
										<span className="capitalize">{link.name}</span>
									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Sidebar;