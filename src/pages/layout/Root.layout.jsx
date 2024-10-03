// This is the layout used by all other pages
import { Outlet } from "react-router-dom";

export default function RootLayout() {
	return (
		<>
			<div id="main-wrapper" className="show">

				<div className="content-body">
					<Outlet />
				</div>
				{/* content @e */}
				
				{/* footer @s */}
				{/* <div className="footer">
					<div className="copyright">
					<p>Copyright © 2024 BGA-pay</p>
					</div>
				</div> */}
				{/* wrap @e */}
			</div>
			{/* main @e */}
			
			{/* Bottom Navigation */}
			{/* <Partial.BottomNav /> */}
	  </>
  );
}
