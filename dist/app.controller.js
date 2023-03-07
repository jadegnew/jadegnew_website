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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const mail_service_1 = require("./mailer/mail.service");
const fs = require("fs");
const path_1 = require("path");
let AppController = class AppController {
    constructor(mailService) {
        this.mailService = mailService;
    }
    root() { }
    getStaticFile() {
        const file = fs.createReadStream((0, path_1.join)(process.cwd(), 'public/cv/dmytro_khabatilin_cv.pdf'));
        return new common_1.StreamableFile(file);
    }
    async sendMail(request) {
        console.log(request.body);
        await this.mailService.sendMail(request.body.name, request.body.email, request.body.message);
    }
};
__decorate([
    (0, common_1.Get)('index'),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
__decorate([
    (0, common_1.Get)('cv'),
    (0, common_1.Header)('Content-Type', 'application/json'),
    (0, common_1.Header)('Content-Disposition', 'attachment; filename="dmytro_khabatilin_cv.pdf"'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", common_1.StreamableFile)
], AppController.prototype, "getStaticFile", null);
__decorate([
    (0, common_1.Post)('sendMail'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "sendMail", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [mail_service_1.MailService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map