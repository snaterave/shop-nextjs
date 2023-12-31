export default function ErrorPage(props) {
	return (
		<>
			<div
				className="p-3 mb-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
				role="alert"
			>
				<span className="font-medium">Error!</span> {props.value}
			</div>
		</>
	);
}
