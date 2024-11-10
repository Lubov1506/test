const schema1 = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "attendees": {
      "type": "object",
      "$id": "#attendees",
      "properties": {
        "userId": {
          "type": "integer"
        },
        "access": {
          "enum": [
            "view",
            "modify",
            "sign",
            "execute"
          ]
        },
        "formAccess": {
          "enum": [
            "view",
            "execute",
            "execute_view"
          ]
        }
      },
      "required": [
        "userId",
        "access"
      ]
    }
  },
  "type": "object",
  "properties": {
    "id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "integer"
        }
      ]
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "startDate": {
      "type": "integer"
    },
    "endDate": {
      "type": "integer"
    },
    "attendees": {
      "type": "array",
      "items": {
        "$ref": "#attendees"
      },
      "default": []
    },
    "parentId": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "string"
        },
        {
          "type": "integer"
        }
      ]
    },
    "locationId": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "integer"
        }
      ]
    },
    "process": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "string",
          "pattern": "https:\\/\\/[a-z]+\\.corezoid\\.com\\/api\\/1\\/json\\/public\\/[0-9]+\\/[0-9a-zA-Z]+"
        }
      ]
    },
    "readOnly": {
      "type": "boolean"
    },
    "priorProbability": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "integer",
          "minimum": 0,
          "maximum": 100
        }
      ]
    },
    "channelId": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "integer"
        }
      ]
    },
    "externalId": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "string"
        }
      ]
    },
    "tags": {
      "type": "array"
    },
    "form": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "viewModel": {
          "type": "object"
        }
      },
      "required": [
        "id"
      ]
    },
    "formValue": {
      "type": "object"
    }
  },
  "required": [
    "id",
    "title",
    "description",
    "startDate",
    "endDate",
    "attendees"
  ]
}
  const schema2 = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/product.schema.json",
    "title": "Product",
    "description": "A product from Acme's catalog",
    "type": "object",
    "properties": {
    "productId": {
    "description": "The unique identifier for a product",
    "type": "integer"
    },
    "productName": {
    "description": "Name of the product",
    "type": "string"
    },
    "price": {
    "description": "The price of the product",
    "type": "number",
    "exclusiveMinimum": 0
    },
    "tags": {
    "description": "Tags for the product",
    "type": "array",
    "items": {
    "type": "string"
    },
    "minItems": 1,
    "uniqueItems": true
    },
    "dimensions": {
    "type": "object",
    "properties": {
    "length": {
    "type": "number"
    },
    "width": {
    "type": "number"
    },
    "height": {
    "type": "number"
    }
    },
    "required": [ "length", "width", "height" ]
    }
    },
    "required": [ "productId", "productName", "price" ]
    }
    
  export { schema1, schema2 };