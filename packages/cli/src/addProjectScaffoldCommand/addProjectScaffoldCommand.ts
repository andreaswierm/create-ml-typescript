import yargs from 'yargs';
import { createScaffoldProject } from '@create-ml-typescript/scripts';

const addProjectScaffoldCommand = (yargs: yargs.Argv): yargs.Argv => {
  return yargs.command(
    '$0 <projectName>',
    'Create ML Typescript scaffold project',
    (yargs) => {
      yargs.positional('projectName', {
        describe: 'Name of your project',
        type: 'string',
      });
    },
    ({ projectName }: { projectName: string }) => {
      return createScaffoldProject({
        projectName,
        projectParentPath: process.cwd(),
      });
    }
  );
};

export default addProjectScaffoldCommand;
