import { exec } from 'child_process';

const executeCommand = (
  directoryPath: string,
  command: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: directoryPath }, (err) => {
      if (err) {
        console.error(err);

        return reject(err);
      }

      resolve();
    });
  });
};

export default executeCommand;
