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
	Slide,
	Toolbar,
	Typography,
	useScrollTrigger,
	useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Fragment, ReactElement, useState } from "react";
import { Link } from "react-router-dom";

const pages = [
	{ name: "Home", path: "/", icon: <HomeIcon /> },
	{ name: "About Us", path: "/about", icon: <InfoIcon /> },
	{ name: "Register", path: "/register", icon: <HowToRegIcon /> },
	{ name: "Log In", path: "/login", icon: <LoginIcon /> },
];

const HideOnScroll = ({ children }: { children: ReactElement }) => {
	const scrollTrigger = useScrollTrigger();

	return (
		<Slide appear={true} direction="down" in={!scrollTrigger}>
			{children}
		</Slide>
	);
};

const MobileDrawer = () => {
	function toggleDrawer(toggle: boolean) {
		setIsOpen(toggle);
	}

	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<Box onClick={() => toggleDrawer(!isOpen)} sx={{ display: { xs: "block", md: "none" } }}>
				<IconButton>
					<MenuIcon />
				</IconButton>
			</Box>

			<Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(!isOpen)}>
				<Box sx={{ width: 250 }} onClick={() => toggleDrawer(!isOpen)}>
					<List>
						{pages.map(({ name, path, icon }) => (
							<ListItem key={name}>
								<ListItemButton component={Link} to={path}>
									<ListItemIcon>{icon}</ListItemIcon>
									<ListItemText primary={name}></ListItemText>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</>
	);
};

const Navbar = () => {
	const theme = useTheme();

	function buttonChooser(page: string) {
		switch (page) {
			case "Log In":
				return "contained";

			case "Register":
				return "outlined";

			default:
				break;
		}
	}
	return (
		<HideOnScroll>
			<AppBar
				variant="elevation"
				elevation={15}
				position="sticky"
				color="secondary"
				sx={{
					maxWidth: { xs: 0.9, lg: 0.8 },
					borderRadius: theme.shape.borderRadius,
					top: "1.5rem",
					marginX: "auto",
					bgcolor: "white",
					color: theme.palette.secondary.main,
				}}
			>
				<Toolbar variant="regular" sx={{ justifyContent: "space-between" }}>
					<Typography variant="h3">Travel With Us</Typography>

					<MobileDrawer></MobileDrawer>

					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						{pages.map(({ name, path, icon }) => (
							<Fragment key={name}>
								{name === "Register" && (
									<Divider key={`divider${name}`} flexItem orientation="vertical"></Divider>
								)}
								<Button
									component={Link}
									to={path}
									variant={buttonChooser(name)}
									color="secondary"
									key={name}
									sx={{ marginX: 1 }}
								>
									{icon}
									{name}
								</Button>
							</Fragment>
						))}
					</Box>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
};

export default Navbar;
