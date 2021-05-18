import path from 'path';
import { TemplateName, Templates } from '../types';
import { EnvironmentMode, EnvironmentModes } from './types';
import fs from 'fs-extra';
import { exec } from 'child_process';

const mapTemplateNameToFolderName: Record<Templates, string> = {
  [Templates.DEFAULT]: 'default',
};

type CloneTemplateHandler = (
  directoryPath: string,
  templateName: TemplateName
) => Promise<void>;

const cloneTemplateFromLocalDirectory: CloneTemplateHandler = async (
  directoryPath,
  templateName
) => {
  const templatePath = path.join(
    __dirname,
    `../../src/${mapTemplateNameToFolderName[templateName]}`
  );

  await fs.copy(templatePath, directoryPath);
};

const cloneTemplateFromGithub: CloneTemplateHandler = async (
  directoryPath,
  templateName
) => {
  const repoUrl = path.join(
    __dirname,
    `https://github.com/andreaswierm/create-ml-typescript/blob/main/packages/templates/src/${mapTemplateNameToFolderName[templateName]}`
  );

  const command = `git clone --depth 1 ${repoUrl} ${directoryPath}`;

  await new Promise((resolve) => exec(command, resolve));
};

const mapEnvironmentModeToCloneHandler: Record<
  EnvironmentModes,
  (directoryPath: string, templateName: TemplateName) => Promise<void>
> = {
  [EnvironmentModes.LOCAL]: cloneTemplateFromLocalDirectory,
  [EnvironmentModes.REMOTE]: cloneTemplateFromGithub,
};

const createCloneTemplateToDirectoryHandler =
  (mode: EnvironmentMode = EnvironmentModes.REMOTE) =>
  (directoryPath: string, templateName: TemplateName) => {
    return mapEnvironmentModeToCloneHandler[mode](directoryPath, templateName);
  };

export default createCloneTemplateToDirectoryHandler;
