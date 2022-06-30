function parserSchema(schema: any) {
  let result

  if (schema.type === 'object') {
    result = {}
    let properties = schema.properties

    for (let key in properties) {
      let item = properties[key]
      let isRequired = schema.required.includes(key) ? '' : '?'
      let k = `${key}${isRequired}`
      if (item.type === 'string') {
        let a = { [k]: 'string' }
        result = { ...result, ...a }
      } else if (item.type === 'integer' || item.type === 'number') {
        let a = { [k]: 'number' }
        result = { ...result, ...a }
      } else if (item.type === 'boolean') {
        let a = { [k]: 'boolean' }
        result = { ...result, ...a }
      } else if (item.type === 'object') {
        let a: any = { [k]: parserSchema(item) }
        result = { ...result, ...a }
      } else if (item.type === 'array') {
        let a: any = { [k]: parserSchema(item.items) + '[]' }
        result = { ...result, ...a }
      }
    }

    return JSON.stringify(result)
  } else if (schema.type === 'integer' || schema.type === 'number') {
    return 'number'
  } else if (schema.type === 'string') {
    return 'string'
  } else if (schema.type === 'boolean') {
    return 'boolean'
  } else if (schema.type === 'array') {
    parserSchema(schema.items)
  }

}

type a = {
  id: string,
  courseName?: number,
  agency: boolean,
  teacheIds?: number[],
  status: {},
  test1: number,
  test3: { name: string, value?: string, id: number },
  teachers: { id: number, name: string, age: string }[]
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
    "teacheIds": {
      "title": "",
      "type": "array",
      "items": {
        "type": "integer"
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
    },
    "teachers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "age": {
            "type": "string"
          }
        },
        "x-apifox-orders": [
          "id",
          "name",
          "age"
        ],
        "required": [
          "id",
          "name",
          "age"
        ],
        "x-apifox-ignore-properties": []
      }
    }
  },
  "required": [
    "id",
    "agency",
    "status",
    "test1",
    "test3",
    "teachers"
  ],
  "x-apifox-orders": [
    "id",
    "courseName",
    "agency",
    "teacheIds",
    "status",
    "test1",
    "test2",
    "test3",
    "teachers"
  ],
  "x-apifox-ignore-properties": []
}

let a: any = parserSchema(schema)

console.log(a)