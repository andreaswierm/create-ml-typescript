import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';

const createPackageJsonFile = async (
  projectPath: string,
  projectName: string
): Promise<void> => {
  const packageJsonPath = path.join(projectPath, 'package.json');

  const packageJson = {
    name: projectName,
  };

  await fs.writeFile(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + os.EOL
  );
};

export default createPackageJsonFile;
