import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimpolicysnippets implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Apimanagement Apimpolicysnippets',
                name: 'N8nDevAzureApimanagementApimpolicysnippets',
                icon: { light: 'file:./azure-apimanagement-apimpolicysnippets.png', dark: 'file:./azure-apimanagement-apimpolicysnippets.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Retrieve policy snippets via Azure API Management REST APIs.',
                defaults: { name: 'Azure Apimanagement Apimpolicysnippets' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApimanagementApimpolicysnippetsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
