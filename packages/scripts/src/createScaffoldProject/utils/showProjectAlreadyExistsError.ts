import chalk from 'chalk';

const showProjectAlreadyExistsError = (projectName: string): void => {
  console.error(
    chalk.red(
      `Cannot create a project named ${chalk.green(
        `"${projectName}"`
      )} because it already exists`
    )
  );
};

export default showProjectAlreadyExistsError;
