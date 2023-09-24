import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, TRegisterSchema } from "../../common/types.ts";

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
	} = useForm<TRegisterSchema>({ resolver: zodResolver(registerSchema) });

	const submitThis = (data: TRegisterSchema) => {
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
					Sign up
				</Typography>
				<Box component="form" onSubmit={handleSubmit(submitThis)} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Controller
								name="name"
								control={control}
								defaultValue={""}
								render={({ field }) => (
									<TextField
										{...field}
										error={!!errors.name}
										helperText={errors.name ? (errors.name.message as string) : ""}
										autoComplete="given-name"
										fullWidth
										label="Nome"
										autoFocus
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Controller
								name="surname"
								control={control}
								defaultValue={""}
								render={({ field }) => (
									<TextField
										{...field}
										error={!!errors.surname}
										helperText={errors.surname ? (errors.surname.message as string) : ""}
										fullWidth
										label="Cognome"
										autoComplete="family-name"
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="email"
								control={control}
								defaultValue={""}
								render={({ field }) => (
									<TextField
										{...field}
										error={!!errors.email}
										helperText={errors.email ? (errors.email.message as string) : ""}
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
								defaultValue={""}
								render={({ field }) => (
									<TextField
										{...field}
										error={!!errors.password}
										helperText={errors.password ? (errors.password.message as string) : ""}
										type="password"
										fullWidth
										label="Password"
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="confirmPassword"
								control={control}
								defaultValue={""}
								render={({ field }) => (
									<TextField
										{...field}
										error={!!errors.confirmPassword}
										helperText={
											errors.confirmPassword ? (errors.confirmPassword.message as string) : ""
										}
										fullWidth
										label="conferma password"
										type="password"
									/>
								)}
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
						Registrati
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="#" variant="body2">
								Hai già un account? Log in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	);
}
