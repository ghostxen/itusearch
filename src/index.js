import React from "react";
import { render } from "react-dom";

import App from "./App";

const Index = () => {
	return <App />;
};

render(<Index />, document.querySelector("#root"));