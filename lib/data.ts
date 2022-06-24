const data  = {
  "openapi": "3.0.1",
  "info": {
    "title": "Go",
    "description": "",
    "version": "1.0.0"
  },
  "tags": [
    {
      "name": "ExternalCourse"
    }
  ],
  "paths": {
    "/external-course/list": {
      "get": {
        "summary": "机构素质课列表",
        "x-apifox-folder": "ExternalCourse",
        "x-apifox-status": "developing",
        "deprecated": false,
        "description": "",
        "tags": [
          "ExternalCourse"
        ],
        "parameters": [
          {
            "name": "partner",
            "in": "query",
            "description": "",
            "required": true,
            "example": "inside",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "token",
            "in": "query",
            "description": "",
            "required": true,
            "example": "FRDgliNoi2quATOxAzqnu0PqTA3vVIEN",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ms",
            "in": "query",
            "description": "",
            "required": true,
            "example": "68",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "",
            "required": true,
            "example": "1",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "pageSize",
            "in": "query",
            "description": "",
            "required": true,
            "example": "10",
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
                  "properties": {
                    "id": {
                      "type": "integer",
                      "title": "ID"
                    },
                    "courseName": {
                      "type": "string",
                      "title": "课程名称"
                    },
                    "agency": {
                      "type": "string",
                      "title": "授课机构"
                    },
                    "teacherName": {
                      "type": "string",
                      "title": "授课老师"
                    },
                    "status": {
                      "type": "string",
                      "title": "状态(\"normal\")"
                    }
                  },
                  "required": [
                    "id",
                    "courseName",
                    "agency",
                    "teacherName",
                    "status"
                  ],
                  "x-apifox-orders": [
                    "id",
                    "courseName",
                    "agency",
                    "teacherName",
                    "status"
                  ],
                  "x-apifox-ignore-properties": []
                },
                "examples": {}
              }
            }
          }
        }
      }
    },
    "/external-course/delete": {
      "post": {
        "summary": "删除机构素质课程",
        "x-apifox-folder": "ExternalCourse",
        "x-apifox-status": "developing",
        "deprecated": false,
        "description": "",
        "tags": [
          "ExternalCourse"
        ],
        "parameters": [
          {
            "name": "partner",
            "in": "query",
            "description": "",
            "required": true,
            "example": "inside",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "token",
            "in": "query",
            "description": "",
            "required": true,
            "example": "FRDgliNoi2quATOxAzqnu0PqTA3vVIEN",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ms",
            "in": "query",
            "description": "",
            "required": true,
            "example": "68",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "title": "",
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  }
                },
                "x-apifox-orders": [
                  "id"
                ],
                "required": [
                  "id"
                ],
                "x-apifox-ignore-properties": []
              }
            }
          }
        },
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
                },
                "examples": {}
              }
            }
          }
        }
      }
    },
    "/external-course/create": {
      "post": {
        "summary": "创建机构素质课程",
        "x-apifox-folder": "ExternalCourse",
        "x-apifox-status": "developing",
        "deprecated": false,
        "description": "",
        "tags": [
          "ExternalCourse"
        ],
        "parameters": [
          {
            "name": "partner",
            "in": "query",
            "description": "",
            "required": true,
            "example": "inside",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "token",
            "in": "query",
            "description": "",
            "required": true,
            "example": "FRDgliNoi2quATOxAzqnu0PqTA3vVIEN",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ms",
            "in": "query",
            "description": "",
            "required": true,
            "example": "68",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "courseName": {
                    "type": "string"
                  },
                  "agency": {
                    "type": "string"
                  },
                  "teacherName": {
                    "type": "string"
                  }
                },
                "required": [
                  "courseName"
                ],
                "x-apifox-orders": [
                  "courseName",
                  "agency",
                  "teacherName"
                ],
                "x-apifox-ignore-properties": []
              }
            }
          }
        },
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
                },
                "examples": {}
              }
            }
          }
        }
      }
    },
    "/external-course/update": {
      "post": {
        "summary": "更新机构素质课程",
        "x-apifox-folder": "ExternalCourse",
        "x-apifox-status": "developing",
        "deprecated": false,
        "description": "",
        "tags": [
          "ExternalCourse"
        ],
        "parameters": [
          {
            "name": "partner",
            "in": "query",
            "description": "",
            "required": true,
            "example": "inside",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "token",
            "in": "query",
            "description": "",
            "required": true,
            "example": "FRDgliNoi2quATOxAzqnu0PqTA3vVIEN",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ms",
            "in": "query",
            "description": "",
            "required": true,
            "example": "68",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "courseName": {
                    "type": "string"
                  },
                  "agency": {
                    "type": "string"
                  },
                  "techerName": {
                    "type": "string"
                  }
                },
                "required": [
                  "id",
                  "courseName"
                ],
                "x-apifox-orders": [
                  "id",
                  "courseName",
                  "agency",
                  "techerName"
                ],
                "x-apifox-ignore-properties": []
              }
            }
          }
        },
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
                },
                "examples": {}
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {}
  }
}

export default data