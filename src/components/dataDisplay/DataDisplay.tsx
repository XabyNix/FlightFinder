import * as type from "../../common/types.ts";
import Results from "../results/Results.tsx";

function DataDisplay(props: type.Root) {
	return;

	props.data.map((flight, index) => {
		return <Results></Results>;
	});
}

export default DataDisplay;
