import Header from "../layout/header/header.component";
import SidePanel from "../side-panel/SidePanel.component";
import Footer from "../layout/footer/footer.component";
import "./layout.scss";

const Layout = ({ children }) => {
	// useEffect(() => {
	// 	document.getElementById("root").style.display = "grid";
	// });

	return (
		<div className="layout-container">
			<Header className="header" />
			<SidePanel className="side-panel" />
			<main>{children}</main>
			<Footer className="footer" />
		</div>
	);
};

export default Layout;
