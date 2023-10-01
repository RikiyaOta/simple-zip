import "../styles/globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" data-theme="aqua">
			<head>
				<title>Simple Zip | RikiyaOta</title>
			</head>
			<body>{children}</body>
		</html>
	);
}
