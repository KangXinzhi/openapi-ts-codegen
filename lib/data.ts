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
      "name": "Lesson Package"
    },
    {
      "name": "Lesson Package/Material"
    },
    {
      "name": "Lesson Package/Material/Slide"
    },
    {
      "name": "Lesson Package/Material/Slide/combined"
    }
  ],
  "paths": {
    "/lesson-package/material/slide/combined/create": {
      "post": {
        "summary": "新建combined类型课件",
        "x-apifox-folder": "Lesson Package/Material/Slide/combined",
        "x-apifox-status": "developing",
        "deprecated": false,
        "description": "",
        "tags": [
          "Lesson Package/Material/Slide/combined"
        ],
        "parameters": [],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "lessonId": {
                    "type": "integer"
                  },
                  "name": {
                    "type": "string"
                  }
                },
                "required": [
                  "lessonId",
                  "name"
                ],
                "x-apifox-orders": [
                  "lessonId",
                  "name"
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
    "/lesson-package/material/slide/combined/detail": {
      "get": {
        "summary": "详情",
        "x-apifox-folder": "Lesson Package/Material/Slide/combined",
        "x-apifox-status": "developing",
        "deprecated": false,
        "description": "",
        "tags": [
          "Lesson Package/Material/Slide/combined"
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
          },
          {
            "name": "id",
            "in": "query",
            "description": "",
            "required": true,
            "example": "32301",
            "schema": {
              "type": "integer"
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
                      "type": "integer"
                    },
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    },
                    "pageList": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer"
                          },
                          "additional": {
                            "type": "object",
                            "properties": {
                              "td": {
                                "type": "string"
                              }
                            },
                            "x-apifox-orders": [
                              "td"
                            ],
                            "x-apifox-ignore-properties": []
                          },
                          "content": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "string",
                                  "title": "[\"image\",\"video\"]"
                                },
                                "url": {
                                  "type": "string"
                                }
                              },
                              "x-apifox-orders": [
                                "type",
                                "url"
                              ],
                              "x-apifox-ignore-properties": []
                            }
                          }
                        },
                        "x-apifox-orders": [
                          "id",
                          "additional",
                          "content"
                        ],
                        "x-apifox-ignore-properties": []
                      }
                    }
                  },
                  "required": [
                    "id",
                    "name",
                    "type"
                  ],
                  "x-apifox-orders": [
                    "id",
                    "name",
                    "type",
                    "pageList"
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
    "/lesson-package/material/slide/combined/update": {
      "post": {
        "summary": "更新（编辑）",
        "x-apifox-folder": "Lesson Package/Material/Slide/combined",
        "x-apifox-status": "developing",
        "deprecated": false,
        "description": "",
        "tags": [
          "Lesson Package/Material/Slide/combined"
        ],
        "parameters": [],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "pageList": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer"
                        },
                        "content": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "string",
                                "title": "[\"image\",\"video\"]"
                              },
                              "url": {
                                "type": "string"
                              }
                            },
                            "x-apifox-orders": [
                              "type",
                              "url"
                            ],
                            "x-apifox-ignore-properties": []
                          }
                        },
                        "additional": {
                          "type": "object",
                          "properties": {
                            "td_zh": {
                              "type": "string"
                            }
                          },
                          "x-apifox-orders": [
                            "td_zh"
                          ],
                          "x-apifox-ignore-properties": []
                        }
                      },
                      "x-apifox-orders": [
                        "id",
                        "content",
                        "additional"
                      ],
                      "x-apifox-ignore-properties": []
                    }
                  }
                },
                "required": [
                  "id"
                ],
                "x-apifox-orders": [
                  "id",
                  "pageList"
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