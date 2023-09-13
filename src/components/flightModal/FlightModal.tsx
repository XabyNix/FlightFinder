import { Button, Dialog } from "@mui/material";
import { useState } from "react";

function FlightModal() {
	const [open, setOpen] = useState<boolean>(false);

	function handleClickOpen() {
		setOpen(true);
	}
	function handleClose() {
		setOpen(false);
	}

	return (
		<>
			<Button sx={{ width: "100%" }} variant="contained" onClick={handleClickOpen}>
				Seleziona
			</Button>
			<Dialog open={open} onClose={handleClose}>
				Ciao
			</Dialog>
		</>
	);
}

export default FlightModal;
