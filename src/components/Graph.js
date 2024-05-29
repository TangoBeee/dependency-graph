import React, { useEffect } from "react"

const Graph = () => {
	useEffect(() => {
		if(window.ReactFlow) {
			console.log(window.ReactFlow)
		}
	}, [])

	return (
		<div
			className="Polaris-Card"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "70vh",
				border: "1px solid #E2E1E5",
			}}
		>
			<div id="graph"></div>
		</div>
	)
}

export default Graph
