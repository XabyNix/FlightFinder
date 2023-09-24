import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { loginShema, TLoginShema } from "../../common/types.ts";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Copyright(props: any) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Travel With Us
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function Index() {
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = useForm<TLoginShema>({ resolver: zodResolver(loginShema) });

	const submitThis = (data: TLoginShema) => {
		console.log(data);
	};

	useEffect(() => {
		if (isSubmitSuccessful) reset({});
	});

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Log In
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit(submitThis)} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Controller
								name="email"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<TextField
										{...field}
										error={!!errors.email}
										helperText={errors.email?.message}
										fullWidth
										label="Indirizzo email"
										autoComplete="email"
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="password"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<TextField
										{...field}
										error={!!errors.password}
										helperText={errors.password?.message}
										fullWidth
										label="Password"
										type="password"
										autoComplete="new-password"
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="Resta connesso"
							/>
						</Grid>
					</Grid>
					<Button
						disabled={isSubmitting}
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Entra
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="/register" variant="body2">
								Non hai un account? Registrati
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	);
}
