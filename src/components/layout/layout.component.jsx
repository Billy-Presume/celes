import Header from "../layout/header/header.component";
import SidePanelComponent from "../side-panel/SidePanel.component";
import Footer from "../layout/footer/footer.component";
import "./layout.scss";

const Layout = ({ children }) => {
	return (
		<div className="layout-container">
			<Header className="header" />
			<SidePanelComponent className="side-panel" />
			<main>{children}</main>
			<Footer className="footer" />
		</div>
	);
};

export default Layout;
