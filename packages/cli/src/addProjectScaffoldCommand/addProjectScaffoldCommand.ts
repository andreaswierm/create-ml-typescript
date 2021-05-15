import yargs from "yargs";

const addProjectScaffoldCommand = (yargs: yargs.Argv): yargs.Argv => {
  return yargs.command(
    '$0 <projectName>',
    "Create ML Typescript scaffold project",
    (yargs) => {
      yargs
        .positional("projectName", {
          describe: "Name of your project",
          type: "string",
        })
    },
    ({
      projectName,
    }: {
      projectName: string;
    }) => {
      console.log("projectName", projectName);
    });
}

export default addProjectScaffoldCommand;
