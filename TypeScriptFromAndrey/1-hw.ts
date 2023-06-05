// Типизировать объект:

let obj = {
    fields: {
        summary: {
            required: true,
            schema: {
                type: "string",
                system: "summary"
            },
            name: "Summary",
            fieldId: "summary",
            operations: [
                "set"
            ]
        },
        issuetype: {
            required: true,
            schema: {
                type: "issuetype",
                system: "issuetype"
            },
            name: "Issue Type",
            fieldId: "issuetype",
            operations: [],
            allowedValues: [
                {
                    self: "https://jira.tcsbank.ru/rest/api/2/issuetype/128300",
                    id: 128300,
                    description: "",
                    iconUrl: "https://jira.tcsbank.ru/secure/viewavatar?size=xsmall&avatarId=16500&avatarType=issuetype",
                    name: "Development",
                    subtask: false,
                    avatarId: 16500
                }
            ]
        },
        reporter: {
            required: true,
            schema: {
                type: "user",
                system: "reporter"
            },
            name: "Reporter",
            fieldId: "reporter",
            autoCompleteUrl: "https://jira.tcsbank.ru/rest/api/latest/user/search?username=",
            operations: [
                "set"
            ]
        },
        components: {
            required: false,
            schema: {
                type: "array",
                items: "array",
                system: "components"
            },
            name: "Component / s",
            fieldId: "components",
            operations: [
                "add",
                "set",
                "remove"
            ],
            allowedValues: [
                {
                    self: "https://jira.tcsbank.ru/rest/api/2/component/296419",
                    id: 296419,
                    name: "AppsInApp"
                },
                {
                    self: "https://jira.tcsbank.ru/rest/api/2/component/296420",
                    id: 296420,
                    name: "B2B - CRM"
                },
                {
                    self: "https://jira.tcsbank.ru/rest/api/2/component/296421",
                    id: 296421,
                    name: "BNPL"
                }
            ]
        },
        description: {
            required: false,
            schema: {
                type: "string",
                system: "description"
            },
            name: "Description",
            fieldId: "description",
            operations: [
                "set"
            ]
        },
        fixVersions: {
            required: false,
            schema: {
                type: "array",
                items: "version",
                system: "fixVersions"
            },
            name: "Fix Version / s",
            fieldId: "fixVersions",
            operations: [
                "set",
                "add",
                "remove"
            ],
            allowedValues: []
        },
        priority: {
            required: false,
            schema: {
                type: "priority",
                system: "priority"
            },
            name: "Priority",
            fieldId: "priority",
            operations: [
                "set"
            ],
            allowedValues: [
                {
                    self: "https://jira.tcsbank.ru/rest/api/2/priority/1",
                    iconUrl: "https://jira.tcsbank.ru/images/icons/priorities/blocker.svg",
                    name: "Blocker",
                    id: 1
                },
                {
                    self: "https://jira.tcsbank.ru/rest/api/2/priority/2",
                    iconUrl: "https://jira.tcsbank.ru/images/icons/priorities/critical.svg",
                    name: "Critical",
                    id: 2
                },
                {
                    self: "https://jira.tcsbank.ru/rest/api/2/priority/3",
                    iconUrl: "https://jira.tcsbank.ru/images/icons/priorities/major.svg",
                    name: "Major",
                    id: 3
                }
            ]
        },
        labels: {
            required: false,
            schema: {
                type: "array",
                items: "string",
                system: "labels"
            },
            name: "Labels",
            fieldId: "labels",
            autoCompleteUrl: "https://jira.tcsbank.ru/rest/api/1.0/labels/suggest?query=",
            operations: [
                "add",
                "set",
                "remove"
            ]
        },
        comment: {
            required: false,
            schema: {
                type: "comments - page",
                system: "comment"
            },
            name: "Comment",
            fieldId: "comment",
            operations: [
                "add",
                "edit",
                "remove"
            ]
        }
    }
}
