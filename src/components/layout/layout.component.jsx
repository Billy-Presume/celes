import { Fragment } from "react";
import Header from "../layout/header/header.component";
import SidePanel from "../side-panel/side-panel.component";
import Footer from "../layout/footer/footer.component";

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<SidePanel />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
};

export default Layout;
