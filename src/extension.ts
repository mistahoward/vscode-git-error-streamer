// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { GitExtension } from './git';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {
	const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git')?.exports;
	const git = gitExtension?.getAPI(1);

	if (!git) vscode.window.showErrorMessage('Git extension not found! Please install it and reload the window.');

	// context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
