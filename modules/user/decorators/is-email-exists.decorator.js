"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmailAlreadyExists = void 0;
const class_validator_1 = require("class-validator");
const validations_1 = require("../validations");
const IsEmailAlreadyExists = (validationOptions) => {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'IsEmailAlreadyExists',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: validations_1.EmailAlreadyExists
        });
    };
};
exports.IsEmailAlreadyExists = IsEmailAlreadyExists;
//# sourceMappingURL=is-email-exists.decorator.js.map