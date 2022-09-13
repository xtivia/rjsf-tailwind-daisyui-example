import { JSONSchema7 } from "json-schema";

export const registrationFormSchema:JSONSchema7 = {
    "title": "A registration form",
    "description": "A simple form example.",
    "type": "object",
    "required": [
      "firstName",
      "lastName"
    ],
    "properties": {
      "name": {
        "type": "string",
        "title": "Name",
        "default": "John Smith"
      },
      "gender": {
        "type": "string",
        "title": "Gender",
        "enum": ["Male", "Female", "Other"]
      },
      "hobbies": {
        "type": "array",
        "title": "Hobbies",
        "uniqueItems": true,
        "items": {
          "type": "string",
          "enum": ["Art", "Cooking", "Music", "Sports", "Movies"]
        }
      },
      "birthdate": {
        "title": "Birth Date",
        "type": "string",
        "format": "date"
      },
      "updated": {
        "type": "string",
        "title": "Would you like us to keep you updated?",
        "enum": ["Yes", "No"]
      },
      "waysToContact": {
        "type": "array",
        "title": "How do you want to receive updates?",
        "items": {
          "type": "string",
          "enum": [
            "email",
            "sms",
            "mail"
          ]
        },
        "uniqueItems": true
      },
    }
  };