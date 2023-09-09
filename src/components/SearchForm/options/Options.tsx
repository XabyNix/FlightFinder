import { useState, useEffect } from "react";
import FocusTrap from "focus-trap-react";
import "./options.css";

interface adultType {
	changePeopleNumber(bigPeople: number, littlePeople: number): void;
}

const Options = ({ changePeopleNumber }: adultType) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [adults, setAdults] = useState<number>(1);
	const [children, setChildren] = useState<number>(0);

	useEffect(() => {
		changePeopleNumber(adults, children);
	});

	return (
		<div className="inputContainer">
			<p
				className="inputControl optionButton"
				onClick={() => setIsVisible(!isVisible)}
			>{`${adults} adulti - ${children} bambini`}</p>

			{isVisible && (
				<FocusTrap
					focusTrapOptions={{
						initialFocus: false,
						allowOutsideClick: true,
						clickOutsideDeactivates: true,
						onDeactivate: () => setIsVisible(false),
					}}
				>
					<div className="container1">
						<div className="innerContainer">
							<div className="typeContainer">
								<p>Adulti</p>
							</div>
							<div className="buttonsContainer">
								<button type="button" disabled={adults <= 1} onClick={() => setAdults(adults - 1)}>
									-
								</button>
								<p>{adults}</p>
								<button type="button" onClick={() => setAdults(adults + 1)}>
									+
								</button>
							</div>
						</div>
						<div className="innerContainer">
							<div className="typeContainer">
								<p>Bambini</p>
							</div>
							<div className="buttonsContainer">
								<button
									type="button"
									disabled={children < 1}
									onClick={() => setChildren(children - 1)}
								>
									-
								</button>
								<p>{children}</p>
								<button type="button" onClick={() => setChildren(children + 1)}>
									+
								</button>
							</div>
						</div>
					</div>
				</FocusTrap>
			)}
		</div>
	);
};

export default Options;
