const data  = 
{
  "openapi": "3.0.1",
  "info": {
    "title": "Go",
    "description": "",
    "version": "1.0.0"
  },
  "tags": [
    {
      "name": "Partner"
    }
  ],
  "paths": {
    "/partner/update": {
      "post": {
        "summary": "更新大客户",
        "x-apifox-folder": "Partner",
        "x-apifox-status": "developing",
        "deprecated": false,
        "description": "",
        "tags": [
          "Partner"
        ],
        "parameters": [
          {
            "name": "token",
            "in": "query",
            "description": "",
            "required": true,
            "example": "1234567890abcdef1edcba0987654321",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ms",
            "in": "query",
            "description": "",
            "required": true,
            "example": "0",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "成功",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {},
                  "x-apifox-ignore-properties": [],
                  "x-apifox-orders": []
                }
              }
            }
          }
        },
        "x-run-in-apifox": "https://www.apifox.cn/web/project/478197/apis/api-27512833-run"
      }
    },
    "/partner/list": {
      "get": {
        "summary": "大客户列表",
        "x-apifox-folder": "Partner",
        "x-apifox-status": "developing",
        "deprecated": false,
        "description": "",
        "tags": [
          "Partner"
        ],
        "parameters": [
          {
            "name": "token",
            "in": "query",
            "description": "",
            "required": true,
            "example": "1234567890abcdef1edcba0987654321",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ms",
            "in": "query",
            "description": "",
            "required": true,
            "example": "0",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "成功",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {},
                  "x-apifox-ignore-properties": [],
                  "x-apifox-orders": []
                }
              }
            }
          }
        },
        "x-run-in-apifox": "https://www.apifox.cn/web/project/478197/apis/api-27652923-run"
      }
    }
  },
  "components": {
    "schemas": {}
  }
}

export default data