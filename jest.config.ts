import presets from 'jest-preset-angular/presets';
import { type JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

export default {
  ...presets.createCjsPreset(),
  testMatch: ['<rootDir>/e2e/jest/**/*.spec.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts']
} satisfies JestConfigWithTsJest;
