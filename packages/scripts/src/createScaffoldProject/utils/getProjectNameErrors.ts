import validateProjectName from 'validate-npm-package-name';

const getProjectNameErrors = (projectName: string): string[] => {
  const projectNameValidation = validateProjectName(projectName);

  return projectNameValidation.errors || [];
};

export default getProjectNameErrors;
