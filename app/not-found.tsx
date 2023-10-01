"use client";

import Link from "next/link";

const NotFound = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">404 Not Found 😥</h1>
					<p className="py-6">
						<Link href="/">ホームへ戻る</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
