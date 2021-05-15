import { promises as fs } from 'fs';

const isDirectoryPresent = async (directoryPath: string): Promise<boolean> => {
  try {
    await fs.access(directoryPath);

    return true;
  } catch (error) {
    return false;
  }
};

export default isDirectoryPresent;
