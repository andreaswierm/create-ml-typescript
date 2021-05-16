import showProjectNameFormatErrors from './utils/showProjectNameFormatErrors';
import showProjectAlreadyExistsError from './utils/showProjectAlreadyExistsError';
import path from 'path';
import isDirectoryPresent from './utils/isDirectoryPresent';
import getProjectNameErrors from './utils/getProjectNameErrors';
import createPackageJsonFile from './utils/createPackageJsonFile';
import createDirectory from './utils/createDirectory';
import showSuccessfulProjectCreatedMessage from './utils/showSuccessfulProjectCreatedMessage';
import copyDirectory from './utils/copyDirectory';
import createGitRepository from './utils/createGitRepository';

type CreateScaffoldProjectOptions = {
  projectName: string;
  projectParentPath: string;
};

const createScaffoldProject = async ({
  projectName,
  projectParentPath,
}: CreateScaffoldProjectOptions) => {
  const projectNameErrors = getProjectNameErrors(projectName);

  if (projectNameErrors.length) {
    showProjectNameFormatErrors(projectName, projectNameErrors);

    process.exit(1);
  }

  const projectPath = path.join(projectParentPath, projectName);

  if (await isDirectoryPresent(projectPath)) {
    showProjectAlreadyExistsError(projectName);

    process.exit(1);
  }

  const templatePath = path.join(__dirname, '../template');

  await createDirectory(projectPath);

  await copyDirectory(templatePath, projectPath);

  await createPackageJsonFile(projectPath, projectName);

  await createGitRepository(projectPath);

  showSuccessfulProjectCreatedMessage(projectPath, projectName);
};

export default createScaffoldProject;
