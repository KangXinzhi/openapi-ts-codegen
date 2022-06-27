function parserSchema(schema) {
  let result
  if (schema.type === 'object') {
    result = {}
    let properties = schema.properties

    for (let key in properties) {
      let item = properties[key]
      let isRequired = schema.required.includes(item) ? '' : '?'
      let k = `${key} ${isRequired}`
      if (item.type === 'string') {
        let a = { [k] : 'string'}
        result = { ...result, ...a }
      } else if (item.type === 'integer' || item.type === 'number') {
        let a = { [k] : 'number'}
        result = { ...result, ...a }
      } else if (item.type === 'boolean') {
        let a = { [k] : 'boolean'}
        result = { ...result, ...a }
      } else if (item.type === 'object' || schema.type === 'array') {
        //@ts-ignore
        console.log(parserSchema(item))
        let a = { [k] : `${parserSchema(item)}`}
        result = { ...result, ...a }
      }
    }
    return result
  } else if (schema.type === 'array') {
    parserSchema(schema.items)
  }
}

const schema = {
  "type": "object",
  "properties": {
    "id": {
      "title": "ID",
      "type": "string"
    },
    "courseName": {
      "title": "课程名称",
      "type": "integer"
    },
    "agency": {
      "title": "授课机构",
      "type": "boolean"
    },
    "teacherName": {
      "title": "",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "name": {
            "type": "string"
          }
        },
        "x-apifox-orders": [
          "id",
          "name"
        ],
        "required": [
          "id",
          "name"
        ],
        "x-apifox-ignore-properties": []
      }
    },
    "status": {
      "title": "状态(\"normal\")",
      "type": "object",
      "properties": {},
      "x-apifox-orders": [],
      "x-apifox-ignore-properties": []
    },
    "test1": {
      "type": "number",
      "title": "test1"
    },
    "test2": {
      "title": "test2",
      "type": "null"
    },
    "test3": {
      "title": "",
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "value": {
          "type": "string"
        },
        "id": {
          "type": "number"
        }
      },
      "x-apifox-orders": [
        "name",
        "value",
        "id"
      ],
      "required": [
        "name",
        "id"
      ],
      "x-apifox-ignore-properties": [],
      "nullable": true
    }
  },
  "required": [
    "id",
    "agency",
    "status",
    "test1",
    "test3"
  ],
  "x-apifox-orders": [
    "id",
    "courseName",
    "agency",
    "teacherName",
    "status",
    "test1",
    "test2",
    "test3"
  ],
  "x-apifox-ignore-properties": []
}

let a = parserSchema(schema)

console.log(a)