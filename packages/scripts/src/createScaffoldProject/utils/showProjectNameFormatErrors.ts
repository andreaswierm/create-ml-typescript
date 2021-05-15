import chalk from 'chalk';

const showProjectNameFormatErrors = (
  projectName: string,
  errors: string[]
): void => {
  console.error(
    chalk.red(
      `Cannot create a project named ${chalk.green(
        `"${projectName}"`
      )} because of npm naming restrictions:\n`
    )
  );

  errors.forEach((error) => {
    console.error(chalk.red(`  * ${error}`));
  });

  console.error(chalk.red('\nPlease choose a different project name.'));
};

export default showProjectNameFormatErrors;
