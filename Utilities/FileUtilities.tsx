export const downloadInBrowser = (file: File | Blob, downloadFileName: string) => {
    //this will take a blob or a file type
    const url = window.URL.createObjectURL(file);
    downloadFromUrl(url, downloadFileName);  //if API returns blob replace with filename from data
}

export const downloadFromUrl = (url: string, downloadFileName: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = downloadFileName;
    document.body.append(a);
    a.click();
    a.remove();
}

export const toBase64 = (file: File | Blob) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

export const PrintPDF = (file:Blob) => {
  if(!(file instanceof Blob)) {
    throw new Error('file has to be a Blob object');
  }

  // transform blob to object url
  let objectUrl = URL.createObjectURL(file);

  // an invisble iframe
  let iframe = document.createElement("iframe");
  iframe.setAttribute('style', 'visibility: hidden; height: 0; width: 100%; position: absolute;');
  
  // iframe to load pdf
  iframe.src = `${objectUrl}`;
  document.documentElement.appendChild(iframe);

  // iframe to print
  iframe.onload = () => {
    iframe.contentWindow?.print();
  }
}
