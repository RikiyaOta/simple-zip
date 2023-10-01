"use client";

import { useState } from "react";
import { BlobReader, BlobWriter, ZipWriter } from "@zip.js/zip.js";

const buildZipFile = async (fileList: FileList): Promise<Blob> => {
	const zipWriter = new ZipWriter(new BlobWriter("application/zip"));

	const fileAddPromises = [];
	for (let i = 0; i < fileList.length; i++) {
		const file = fileList.item(i) as File;
		fileAddPromises.push(
			zipWriter.add(file.name as string, new BlobReader(file)),
		);
	}
	await Promise.all(fileAddPromises);

	return zipWriter.close();
};

const downloadZipFile = (zipFile: Blob): void => {
	Object.assign(document.createElement("a"), {
		download: "SimpleZip.zip",
		href: URL.createObjectURL(zipFile),
	}).click();
};

const clickHandler = async (files: FileList) => {
	const zipFile = await buildZipFile(files);
	downloadZipFile(zipFile);
};

const Home = () => {
	const [files, setFiles] = useState<FileList>();
	const [isDownloading, setIsDownloading] = useState(false);

	const fileInputChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setFiles(event.target.files ? event.target.files : undefined);
	};

	return (
		<div className="hero min-h-[80vh] bg-base">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Simple Zip</h1>
					<p className="py-6">選んだファイルを zip ファイルにまとめます。</p>
					<input
						id="files"
						type="file"
						className="file-input file-input-bordered file-input-info w-full max-w-xs"
						multiple
						onChange={fileInputChangeHandler}
					/>
					<div>
						{isDownloading && (
							<span className="loading loading-spinner text-success m-5"></span>
						)}
						{files !== undefined && files.length > 0 && !isDownloading && (
							<button
								className="btn btn-success m-5"
								onClick={async () => {
									setIsDownloading(true);
									await clickHandler(files);
									setIsDownloading(false);
								}}
							>
								ダウンロード
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
