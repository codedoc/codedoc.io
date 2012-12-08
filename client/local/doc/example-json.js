module.exports = [
  {
    "description": {
      "full": "Library version",
      "summary": "",
      "body": ""
    },
    "isPrivate": false,
    "ignore": false,
    "code": "exports.version = '0.0.1'",
    "ctx": {
      "type": "property",
      "receiver": "exports",
      "name": "version",
      "value": "'0.0.1'",
      "string": "exports.version"
    }
  },
  {
    "tags": [
      {
        "type": "return",
        "types": [
          "Constructor"
        ],
        "description": "something cool"
      }
    ],
    "description": {
      "full": "Constructor",
      "summary": "return something cool",
      "body": ""
    },
    "isPrivate": false,
    "ignore": false,
    "code": "function Constructor (options) {\n  this.options = options;\n}",
    "ctx": {
      "type": "constructor",
      "receiver": "",
      "name": "Constructor",
      "string": "function Constructor (options)"
    }
  },
  {
    "tags": [
      {
        "type": "param",
        "types": [
          "String"
        ],
        "name": "secret",
        "description": "secret param."
      },
      {
        "type": "returns",
        "string": "Boolean",
        "description": "`true` or `false`."
      }
    ],
    "description": {
      "full": "<p>Find out which major card scheme issued the card based on the iin range.</p>",
      "summary": "<p>Find out which major card scheme issued the card based on the iin range.</p>",
      "body": ""
    },
    "isPrivate": false,
    "ignore": false,
    "code": "Constructor.prototype.method = function (secret) {\n  return secret === '' ? true : false;\n};",
    "ctx": {
      "type": "method",
      "receiver": "Constructor.prototype",
      "name": "method",
      "string": "Constructor.prototype.method = function (secret)"
    }
  }
];