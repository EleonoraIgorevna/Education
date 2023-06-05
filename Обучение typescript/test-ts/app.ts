type issueType = {
    name: string
}

type custom15301 = {
    value: number
}

type reporterAndComponents = {
    name: string
}

type priorityAndProject = { id: number }

type fields = {
    project: priorityAndProject,
    summary: string,
    description: string,
    priority: priorityAndProject,
    labels: string[],
    components: reporterAndComponents[],
    reporter: reporterAndComponents,
    customfield_15301: custom15301,
    issuetype: issueType
}

type finalObj = {
    fields: fields
}

let arrayObj: finalObj[] = [
    {
        fields: {
            project: {
                id: 202304
            },
            summary: "REST_test",
            description: "Creating of an issue using project keys and issue type names using the REST API",
            priority: { id: 4 },
            labels: ["SPD"],
            components: [{ name: "Обслуживание ФЛ" }],
            reporter: { name: "a.tolmachev" },
            customfield_15301: { value: 202066 },
            issuetype: {
                name: "Development"
            }
        }
    },
    {
        fields: {
            project: {
                id: 202304
            },
            summary: "REST_test",
            description: "Creating of an issue using project keys and issue type names using the REST API",
            priority: { id: 4 },
            labels: ["SPD"],
            components: [{ name: "Обслуживание ФЛ" }],
            reporter: { name: "a.tolmachev" },
            customfield_15301: { value: 202066 },
            issuetype: {
                name: "Development"
            }
        }
    },
]