"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schemas_1 = require("./schemas");
let QuestionService = class QuestionService {
    constructor(questionModel) {
        this.questionModel = questionModel;
    }
    async create(question) {
        return this.questionModel.create(question);
    }
    async update(_id, valuesToUpdate) {
        await this.questionModel.updateOne({ _id }, valuesToUpdate);
    }
    async findAll(query) {
        const pipeline = this.questionModel.aggregate();
        if (query.title) {
            pipeline.match({
                title: new RegExp(`.*${query.title}.*`, 'i')
            });
        }
        if (query.categories) {
            pipeline.match({
                categories: {
                    $in: query.categories.map((el) => new mongoose_2.Types.ObjectId(el))
                }
            });
        }
        if (query.levelOfPreparation) {
            pipeline.match({ levelOfPreparation: { $in: query.levelOfPreparation } });
        }
        if (query.developmentDirection) {
            pipeline.match({
                developmentDirection: { $in: query.developmentDirection }
            });
        }
        pipeline.lookup({
            from: 'categories',
            localField: 'categories',
            foreignField: '_id',
            as: 'categories'
        });
        if (query.attributes) {
            const projectArg = query.attributes.reduce((project, attribute) => {
                project[attribute] = 1;
                return project;
            }, {});
            pipeline.project(projectArg);
        }
        pipeline.facet({
            paginatedResults: [
                { $skip: query.offset },
                { $limit: query.offset + query.limit }
            ],
            totalCount: [
                {
                    $count: 'count'
                }
            ]
        });
        const [data] = await pipeline;
        const { paginatedResults, totalCount } = data;
        const [total] = totalCount;
        return { data: paginatedResults, total: (total === null || total === void 0 ? void 0 : total.count) || 0 };
    }
    async findOneById(_id) {
        const [fountQuestion] = await this.questionModel.aggregate([
            {
                $match: { _id }
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: 'categories',
                    foreignField: '_id',
                    as: 'categories'
                }
            }
        ]);
        return fountQuestion || null;
    }
    async exists(filter) {
        return !!(await this.questionModel.exists(filter));
    }
    async remove(filter) {
        return this.questionModel.remove(filter);
    }
};
QuestionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schemas_1.Question.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map