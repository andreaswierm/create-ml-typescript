import fs from 'fs-extra';

const copyDirectory = async (
  directoryPath: string,
  destinationPath: string
): Promise<void> => {
  return fs.copy(directoryPath, destinationPath);
};

export default copyDirectory;
