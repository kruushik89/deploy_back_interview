"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNameAlreadyExists = void 0;
const class_validator_1 = require("class-validator");
const validations_1 = require("../validations");
const IsNameAlreadyExists = (validationOptions) => {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'IsNameAlreadyExists',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: validations_1.NameAlreadyExists
        });
    };
};
exports.IsNameAlreadyExists = IsNameAlreadyExists;
//# sourceMappingURL=is-name-exists.decorator.js.map