// @ts-check

const fs = require('fs');
const path = require('path');
const swc = require('@swc/core');
const {access} = require('fs/promises');

const cwd = process.cwd();
const sourcePath = path.resolve(cwd, 'src');
const buildDestDir = path.resolve(cwd, '.nxtmdoc');

const sourceFiles = [
  'footer.js',
  'header.js',
  'index.js',
]

/** @param {string} filePath File path of the file to read */
async function readFile(filePath) {
  if (!filePath) throw new Error("Given filePath is null");
  return fs.readFileSync(filePath, 'utf-8');
}

/**
 * @param {string} filePath File path to the file
 * @param {string} content Content to write inside the file
*/
async function writeFile(filePath, content) {
  if (!filePath) throw new Error("Given filePath is null");
  if (!content) throw new Error("Given content is null");
  fs.writeFileSync(filePath, content);
}

/**
 * @param {string} fromPath Source file path to transpile
 * @param {string} toPath Path to write the transpiled version
 * */
async function transpileSource(fromPath, toPath) {
  const content = await readFile(fromPath);
  const transpiledFile = await swc.transform(content, {
    jsc: {
      parser: {
        jsx: true,
        syntax: "ecmascript",
      },
      transform: {
        react: {
          pragma: "React.createElement",
          pragmaFrag: "React.Fragment",
          throwIfNamespace: true,
          development: false,
          useBuiltins: false
        },
      },
    },
  });
  await writeFile(toPath, transpiledFile.code);
}

/**
 * @param {string} filePath - Filepath to test existance
 * */
async function exists(filePath) {  
  try {
    await access(filePath);
    return true
  } catch {
    return false
  }
}

async function buildSources() {
  await Promise.all(sourceFiles.map(async (filename) => {
    const filePath = path.join(sourcePath, filename);
    if (await exists(filePath)) {
      console.log(filePath);
      const toPath = path.join(buildDestDir, filename);
      transpileSource(filePath, toPath);
    }
  }));
}

async function watchSources() {
  fs.watch(sourcePath, (e, filename) => {
    if (sourceFiles.includes(filename)) {
      const filePath = path.join(sourcePath, filename);
      const toPath = path.join(buildDestDir, filename);
      transpileSource(filePath, toPath);
    }
  });
}

module.exports.buildSources = buildSources;
module.exports.watchSources = watchSources;
module.exports.transpileSource = transpileSource;
