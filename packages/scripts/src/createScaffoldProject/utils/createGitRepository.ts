import executeCommand from './executeCommand';

const createGitRepository = async (projectPath: string): Promise<void> => {
  await executeCommand(projectPath, 'git init');

  await executeCommand(projectPath, 'git add .');

  await executeCommand(
    projectPath,
    "git commit -am 'Initialize project using Create ML Typescript'"
  );
};

export default createGitRepository;
