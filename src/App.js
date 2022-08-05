/** @format */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

// Components
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";

// Pages
import {
	Exam,
	Grade,
	Rule,
	HRM,
	EMployee,
	Leave,
	Policy,
	Mark,
	Result,
	MonthlyAttendance,
	StudentList,
	Administrator,
	Dashboard,
	Employees,
	Promotion,
	School,
	MarkResult,
	Student,
	Teacher,
	Academic,
	Report,
	User,
	Employee,
	Stacked,
	Pyramid,
	Customers,
	Line,
	Area,
	Bar,
	Pie,
	Financial,
} from "./pages";

const App = () => {
	const { activeMenu } = useStateContext();

	return (
		<Router>
			<div className="flex relative dark:bg-main-dark-bg">
				<div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
					<TooltipComponent conten="Settings" position="Top">
						<button
							type="button"
							className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-grey text-white"
							style={{ background: "blue", borderRadius: "50%" }}>
							<FiSettings />
						</button>
					</TooltipComponent>
				</div>
				{activeMenu ? (
					<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
						<Sidebar />
					</div>
				) : (
					<div className="w-0 dark:bg-secondary-dark-bg">
						<Sidebar />
					</div>
				)}
				<div
					className={
						activeMenu
							? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
							: "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
					}>
					<div className="fixed md:static bg-main-bg dark:bd-main-dark-bg navbar w-full">
						<Navbar />
					</div>

					<div>
						<Routes>
							{/* Dashboard */}
							<Route path="/" element={<Dashboard />} />
							<Route path="/dashboard" element={<Dashboard />} />

							{/* Pages */}
							<Route path="/student" element={<Student />} />
							<Route path="/teacher" element={<Teacher />} />
							<Route path="/academic" element={<Academic />} />
							<Route path="/exam" element={<Exam />} />
							<Route path="/mark_result" element={<MarkResult />} />
							<Route path="/promostion" element={<Promotion />} />
							<Route path="/hrm" element={<HRM />} />
							<Route path="/users" element={<User />} />
							<Route path="/report" element={<Report />} />
							<Route path="/employee" element={<Employee />} />
							<Route path="/administrator" element={<Administrator />} />

							{/* charts  */}
							<Route path="/line" element={<Line />} />
							<Route path="/area" element={<Area />} />
							<Route path="/bar" element={<Bar />} />
							<Route path="/pie" element={<Pie />} />
							<Route path="/financial" element={<Financial />} />
							<Route path="/pyramid" element={<Pyramid />} />
							<Route path="/stacked" element={<Stacked />} />
						</Routes>
					</div>
				</div>
			</div>
			<Footer />
		</Router>
	);
};

export default App;
