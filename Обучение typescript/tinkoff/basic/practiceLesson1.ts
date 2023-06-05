// начинаем с мелких сущностей/самых глубоких

type issuetypeAndReporterAndComponents = {
    name: string
}

type customfield = {
    value: number
}

type projectAndPriority = {
    id: number
}

type fields = {
    project: projectAndPriority
    summary: string
    description: string
    priority: projectAndPriority
    labels: string[]
    components: issuetypeAndReporterAndComponents[]
    reporter: issuetypeAndReporterAndComponents
    customfield_15301: customfield
    issuetype: issuetypeAndReporterAndComponents
}

type finalObject = {
    fields: fields
}

let arrayObj: finalObject[] = [
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