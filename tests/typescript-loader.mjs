import { readFile } from 'node:fs/promises';
import ts from 'typescript';

export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context);
  } catch (error) {
    if (!specifier.startsWith('.') || /\.[a-z]+$/i.test(specifier)) throw error;
    return nextResolve(`${specifier}.ts`, context);
  }
}

export async function load(url, context, nextLoad) {
  if (!url.endsWith('.ts')) return nextLoad(url, context);
  const source = await readFile(new URL(url), 'utf8');
  return {
    format: 'module',
    source: ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    }).outputText,
    shortCircuit: true,
  };
}
