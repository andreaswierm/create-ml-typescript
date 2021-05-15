import { promises as fs } from 'fs';

const createDirectory = (directoryPath: string): Promise<void> => {
  return fs.mkdir(directoryPath);
};

export default createDirectory;
