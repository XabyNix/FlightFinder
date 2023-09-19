import {
	AppBar,
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./Navbar.css";
import { useState } from "react";

type Icons = {
	[key: string]: JSX.Element;
};
const Navbar = () => {
	const pages = ["Home", "About us", "Register", "Log In"];
	const icons: Icons = {
		Home: <HomeIcon />,
		"About us": <InfoIcon />,
		"Log In": <LoginIcon />,
		Register: <HowToRegIcon />,
	};
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const theme = useTheme();

	function toggleDrawer(toggle: boolean) {
		setIsOpen(toggle);
	}

	return (
		<AppBar
			variant="elevation"
			elevation={6}
			position="fixed"
			color="secondary"
			sx={{
				maxWidth: { xs: 0.9, lg: 0.8 },
				borderRadius: 3,
				top: "1.5rem",
				left: "50%",
				transform: "translateX(-50%)",
				bgcolor: "white",
				color: theme.palette.secondary.main,
			}}
		>
			<Toolbar variant="regular" sx={{ justifyContent: "space-between" }}>
				<Typography variant="h3" fontFamily={"Croissant One"}>
					Travel With Us
				</Typography>
				<Box onClick={() => toggleDrawer(!isOpen)} sx={{ display: { xs: "block", md: "none" } }}>
					<IconButton>
						<MenuIcon />
					</IconButton>
				</Box>

				<Drawer
					sx={{ md: { display: "none" } }}
					anchor="right"
					open={isOpen}
					onClose={() => setIsOpen(false)}
				>
					<Box sx={{ width: 250 }}>
						<List>
							{pages.map((page) => (
								<ListItem key={page}>
									<ListItemButton>
										<ListItemIcon>{icons[page]}</ListItemIcon>
										<ListItemText primary={page}></ListItemText>
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>
				</Drawer>

				<Box sx={{ display: { xs: "none", md: "flex" } }}>
					<Box>
						{pages.map((page) => (
							<Button color="secondary" key={page}>
								{icons[page]}
								{page}
							</Button>
						))}
					</Box>
					<Divider variant="middle" flexItem orientation="vertical"></Divider>
					<Box>
						<Button color="secondary">Registrati</Button>
						<Button color="secondary" variant="contained" disableElevation>
							Log in
						</Button>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
