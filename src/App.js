import React, { useRef, useState } from "react"
import { AddClass, UseExternalScripts } from "./utils/useExternalScripts"
import Button from "./components/Button"
import TextArea from "./components/TextArea"
import Graph from "./components/Graph"

const App = () => {
	UseExternalScripts(
		"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	)

	UseExternalScripts(
		"https://d1hvi6xs55woen.cloudfront.net/website-assets/polaris.css"
	)

	UseExternalScripts(
		"https://cdn.jsdelivr.net/npm/react-flow-renderer@latest/dist/style.min.css"
	)

	AddClass(
		".plain-buttons {color: #2B6ECA;} @media screen and (max-width: 950px) { .graph-content { flex-direction: column; } }"
	)

	const [openAPI, setOpenAPI] = useState("")

	const inputRef = useRef(null)

	const onImportClick = () => {
		inputRef.current?.click()
	}

	const handleFileUpload = (event) => {
		const file = event.target.files[0]
		const reader = new FileReader()

		reader.readAsText(file)
		reader.onload = () => {
			setOpenAPI(reader.result)
		}
		reader.onerror = () => {
			setOpenAPI(reader.error)
		}
	}

	return (
		<div>
			<div>
				<h1
					style={{
						fontFamily: "4.2rem",
						fontWeight: 600,
					}}
				>
					Dependency graph
				</h1>
			</div>

			<div
				className="Polaris-Card"
				style={{
					display: "flex",
					flexDirection: "column",
					padding: "0px",
					width: "100%",
					maxWidth: "100%",
					fontSize: "16px",
					borderRadius: "8px",
					border: "1px solid #E2E1E5",
				}}
			>
				<div
					className="graph-content"
					style={{
						display: "flex",
						gap: "20px",
						justifyContent: "space-between",
						padding: "30px",
					}}
				>
					<div style={{ flex: 4 }}>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								marginBottom: "-15px",
							}}
						>
							<h4
								style={{
									fontWeight: "400",
									fontSize: "18px",
								}}
							>
								OpenAPI
							</h4>

							<p
								onClick={onImportClick}
								className="plain-buttons"
								style={{
									cursor: "pointer",
									fontSize: "18px",
								}}
							>
								<input
									accept=".json, .yaml, .yml, .txt"
									type="file"
									ref={inputRef}
									onChange={handleFileUpload}
									hidden
								/>
								Import
							</p>
						</div>

						<TextArea value={openAPI} setValue={setOpenAPI} />
					</div>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
							gap: "15px",
						}}
					>
						<Button isPrimary={true} buttonText={"Generate"} />
						<Button isPrimary={false} buttonText={"Share tool"} />
					</div>

					<div style={{ flex: 4 }}>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								marginBottom: "-15px",
							}}
						>
							<h4
								style={{
									fontWeight: "400",
									fontSize: "18px",
								}}
							>
								Dependency Graph
							</h4>

							<p
								className="plain-buttons"
								style={{
									cursor: "pointer",
									fontSize: "18px",
								}}
							>
								Export
							</p>
						</div>
						<Graph />
					</div>
				</div>

				<div
					className="Polaris-Card"
					style={{
						background: "#FAFAFB",
						padding: "20px",
						width: "100%",
					}}
				>
					<img
						src="https://akto-setup.s3.amazonaws.com/templates/128x128.png"
						alt="Akto.io"
						style={{ height: "24px" }}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
