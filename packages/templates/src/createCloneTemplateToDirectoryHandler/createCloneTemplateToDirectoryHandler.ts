import path from 'path';
import { TemplateName, Templates } from '../types';
import { EnvironmentMode, EnvironmentModes } from './types';

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

  console.log('templatePath', templatePath);
};

const cloneTemplateFromGithub: CloneTemplateHandler = async (
  directoryPath,
  templateName
) => {
  const repoUrl = path.join(
    __dirname,
    `https://github.com/andreaswierm/create-ml-typescript/blob/main/packages/templates/src/${mapTemplateNameToFolderName[templateName]}`
  );
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
