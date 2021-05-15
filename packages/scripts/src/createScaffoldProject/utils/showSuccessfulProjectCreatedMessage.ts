import chalk from 'chalk';

const showSuccessfulProjectCreatedMessage = (
  projectPath: string,
  projectName: string
): void => {
  console.log(`Success! Created ${projectName} at ${projectPath}`);
  console.log('Inside that directory, you can run:');
  console.log();
  console.log(chalk.cyan(`  yarn start`));
  console.log('    Starts the server.');
  console.log();
};

export default showSuccessfulProjectCreatedMessage;
