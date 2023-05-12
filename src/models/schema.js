export const schema = {
    "models": {
        "CFtemplate": {
            "name": "CFtemplate",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "S3link": {
                    "name": "S3link",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "desc": {
                    "name": "desc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "group": {
                    "name": "group",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "cfstack": {
                    "name": "cfstack",
                    "isArray": true,
                    "type": {
                        "model": "CFstack"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "cftemplate"
                    }
                }
            },
            "syncable": true,
            "pluralName": "CFtemplates",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "CFstack": {
            "name": "CFstack",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "stackname": {
                    "name": "stackname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "stack": {
                    "name": "stack",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "stackstatus": {
                    "name": "stackstatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createuser": {
                    "name": "createuser",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "cfoutput": {
                    "name": "cfoutput",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cftemplate": {
                    "name": "cftemplate",
                    "isArray": false,
                    "type": {
                        "model": "CFtemplate"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "templateID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "CFstacks",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStack",
                        "fields": [
                            "stack"
                        ],
                        "queryField": "byStack"
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCFtemplate",
                        "fields": [
                            "templateID"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "codegenVersion": "3.4.2",
    "version": "bb46523a35ae685785c3720769e6c409"
};