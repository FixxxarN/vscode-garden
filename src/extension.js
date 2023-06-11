const vscode = require('vscode');

function activate(context) {
	const provider = new GardenProvider(context.extensionUri);

	context.subscriptions.push(vscode.window.registerWebviewViewProvider(GardenProvider.viewType, provider));
}

class GardenProvider {
	static viewType = 'vscodeGarden.view';

	constructor(extensionUri) {
		this._extensionUri = extensionUri;
		this._view = undefined;
	}

	resolveWebviewView(webviewView, context, token) {
		this._view = webviewView;

		webviewView.webview.options = {
			enableScripts: true,
			localResourceRoots: [this._extensionUri]
		}

		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

		webviewView.webview.onDidReceiveMessage(data => {
			console.log(data);
		})
	}

	_getHtmlForWebview(webview) {
		return `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Document</title>
		</head>
		<body>
			<p>Hello, world</p>
		</body>
		</html>`
	}
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
