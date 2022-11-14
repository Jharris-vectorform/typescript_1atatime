import axios, { AxiosResponse } from "axios";
import { apiFile, apiMessageAttachment } from "../endpoints/endpoints";

export const downloadFile = (globalItemId: number): void => {
    downloadFileByUrl(`${apiFile}/DownloadFile/${globalItemId}`)
};

export const downloadMessageAttachment = (messageAttachmentId?: number): void => {
    if (messageAttachmentId) {
        downloadFileByUrl(`${apiMessageAttachment}/Download/${messageAttachmentId}`);
    }
};

export const downloadMultipleFiles = (globalItemIds: number[]): void => {
    for (let i = 0; i < globalItemIds.length; i++) {
        downloadFile(globalItemIds[i]);
    }
};

export const downloadFileByUrl = async (url: string): Promise<void> => {
    const a = document.createElement('a');
    a.style.display = 'none';
    const response: AxiosResponse<Blob> = await axios(url, {
        responseType: 'blob'
    });

    const contentDisposition = response.headers['content-disposition'];
    const idIndex = url.split('/').length - 1;
    const globalIdFromUrl = url.split('/')[idIndex];
    const defaultFileName = `${globalIdFromUrl}.${response?.data?.type.split('/')[1]}`;

    let fileName;
    if (contentDisposition) {
        fileName = contentDisposition.split(';')[1].split('=')[1].replace('"', '').replace('"', '');
        fileName = decodeURI(fileName);
    }
        
    if (response?.data?.size > 0 && response?.data?.type) {
        a.href = URL.createObjectURL(response.data);
        a.download = fileName || defaultFileName;
        document.body.append(a);
        a.click();
    }
};

export const downloadFileByFileId = (fileId: number): void => {
    downloadFileByUrl(`${apiFile}/DownloadFileByFileId/${fileId}`);
};
export const downloadMultipleFilesByFileId = (fileIds: number[]): void => {
    console.log("🚀 ~ file: FileHttpServices.tsx ~ line 28 ~ downloadMultipleFilesByFileId ~ fileIds", fileIds)
    for (let i = 0; i < fileIds.length; i++) {
        downloadFileByFileId(fileIds[i]);
    }
};
