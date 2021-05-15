#!/usr/bin/env node
// add another package with `yo lerna-typescript:package @myscope/my-new-package` instead of `lerna create`

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import addProjectScaffoldCommand from './addProjectScaffoldCommand';

const yargsInstance = yargs(hideBin(process.argv));

addProjectScaffoldCommand(yargsInstance);

yargsInstance.argv;
