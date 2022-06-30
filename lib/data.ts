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
      "name": "Achievement"
    }
  ],
  "paths": {
    "/achievement/media-report-update": {
      "post": {
        "summary": "更新媒体报道",
        "x-apifox-folder": "Achievement",
        "x-apifox-status": "testing",
        "deprecated": false,
        "description": "",
        "tags": [
          "Achievement"
        ],
        "parameters": [
          {
            "name": "token",
            "in": "query",
            "description": "",
            "required": true,
            "example": "i9bb3IpWluLGp77JPUGzXIQ4U8KtBft4",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "partner",
            "in": "query",
            "description": "",
            "required": true,
            "example": "inside",
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
                  "content": {
                    "type": "object",
                    "properties": {
                      "url": {
                        "type": "string"
                      }
                    },
                    "x-apifox-orders": [
                      "url"
                    ],
                    "required": [
                      "url"
                    ],
                    "x-apifox-ignore-properties": []
                  }
                },
                "x-apifox-orders": [
                  "content"
                ],
                "required": [
                  "content"
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
                  "properties": {
                    "reqId": {
                      "type": "string"
                    },
                    "code": {
                      "type": "integer"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "position": {
                            "type": "integer",
                            "title": "位置"
                          },
                          "type": {
                            "type": "string",
                            "title": "模块类型",
                            "enum": [
                              "dashboard",
                              "report",
                              "chart"
                            ],
                            "x-apifox": {
                              "enumDescriptions": {
                                "dashboard": "看板",
                                "report": "报告页面",
                                "chart": "图表类型"
                              }
                            }
                          },
                          "title": {
                            "type": "string",
                            "title": "模块名称"
                          },
                          "note": {
                            "type": "string",
                            "title": "模块备注"
                          },
                          "extension": {
                            "type": "object",
                            "properties": {},
                            "x-apifox-ignore-properties": [],
                            "x-apifox-orders": []
                          }
                        },
                        "required": [
                          "position",
                          "type",
                          "title",
                          "note",
                          "extension"
                        ],
                        "x-apifox-ignore-properties": [],
                        "x-apifox-orders": [
                          "position",
                          "type",
                          "title",
                          "note",
                          "extension"
                        ]
                      }
                    }
                  },
                  "required": [
                    "reqId",
                    "code",
                    "data"
                  ],
                  "x-apifox-ignore-properties": [],
                  "x-apifox-orders": [
                    "reqId",
                    "code",
                    "data"
                  ]
                },
                "examples": {}
              }
            }
          }
        }
      }
    },
    "/achievement/media-report": {
      "get": {
        "summary": "获取媒体报道",
        "x-apifox-folder": "Achievement",
        "x-apifox-status": "testing",
        "deprecated": false,
        "description": "",
        "tags": [
          "Achievement"
        ],
        "parameters": [
          {
            "name": "token",
            "in": "query",
            "description": "",
            "required": true,
            "example": "i9bb3IpWluLGp77JPUGzXIQ4U8KtBft4",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "partner",
            "in": "query",
            "description": "",
            "required": true,
            "example": "inside",
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
                    "reqId": {
                      "type": "string"
                    },
                    "code": {
                      "type": "integer"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "url": {
                            "title": "照片地址",
                            "type": "string"
                          }
                        },
                        "required": [
                          "url"
                        ],
                        "x-apifox-orders": [
                          "url"
                        ],
                        "x-apifox-ignore-properties": []
                      }
                    }
                  },
                  "required": [
                    "reqId",
                    "code",
                    "data"
                  ],
                  "x-apifox-orders": [
                    "reqId",
                    "code",
                    "data"
                  ],
                  "x-apifox-ignore-properties": []
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