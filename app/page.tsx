"use client";

import Link from 'next/link'
import {BlobReader, BlobWriter, ZipWriter} from "@zip.js/zip.js"

const buildZipFile = async (fileList: FileList): Promise<Blob> => {
  const zipWriter = new ZipWriter(new BlobWriter("application/zip"));

  const fileAddPromises = [];
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList.item(i) as File;
    fileAddPromises.push(zipWriter.add(file.name as string, new BlobReader(file)));
  }
  await Promise.all(fileAddPromises);

  return zipWriter.close();
};

const downloadZipFile = (zipFile: Blob): void => {
  document.body.appendChild(Object.assign(document.createElement("a"), {
    download: "hello.zip",
    href: URL.createObjectURL(zipFile),
    textContent: "Download zip file",
  }));
};

const clickHandler = async () => {
  console.info("Click!!!");
  const inputElement = document.getElementById("files") as HTMLInputElement;
  const {files} = inputElement;

  if (files === null) {
    console.warn("ファイルが選択されていません。");
    return;
  }
  const zipFile = await buildZipFile(files);
  downloadZipFile(zipFile);
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Hello World! This is the Home page</p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
      <input type="file" multiple id="files"></input>
      <button onClick={clickHandler}>Zip!!!</button>
    </div>
  )
}

export default Home
