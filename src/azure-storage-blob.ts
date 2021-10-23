import { BlobServiceClient, ContainerClient} from '@azure/storage-blob';

const containerName = `images`;
const sasToken = process.env.REACT_APP_STORAGESASTOKEN;
const storageAccountName = process.env.REACT_APP_STORAGERESOURCENAME; 

// return list of blobs in container to display
const getBlobsInContainer = async (containerClient: ContainerClient) => {
  const returnedBlobUrls: string[] = [];

  // get list of blobs in container
  for await (const blob of containerClient.listBlobsFlat()) {
    // if image is public, just construct URL
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }

  return returnedBlobUrls;
}

const createBlobInContainer = async (containerClient: ContainerClient, file: File) => {
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(file.name);

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  // upload file
  await blobClient.uploadData(file, options);
}

const uploadFileToBlob = async (file: File | null): Promise<string[]> => {
  if (!file) return [];

  // get BlobService
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );

  // get Container - full public read access
  const containerClient: ContainerClient = blobService.getContainerClient(containerName);

  // upload file
  await createBlobInContainer(containerClient, file);

  // get list of blobs in container
  return getBlobsInContainer(containerClient);
};

export default uploadFileToBlob;