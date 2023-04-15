"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsTitleAlreadyExists = void 0;
const class_validator_1 = require("class-validator");
const validations_1 = require("../validations");
const IsTitleAlreadyExists = (validationOptions) => {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'IsTitleAlreadyExists',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: validations_1.TitleAlreadyExists
        });
    };
};
exports.IsTitleAlreadyExists = IsTitleAlreadyExists;
//# sourceMappingURL=is-title-exists.decorator.js.map