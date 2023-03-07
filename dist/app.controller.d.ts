import { StreamableFile } from '@nestjs/common';
import { Request } from 'express';
import { MailService } from './mailer/mail.service';
export declare class AppController {
    private readonly mailService;
    constructor(mailService: MailService);
    root(): void;
    getStaticFile(): StreamableFile;
    sendMail(request: Request): Promise<void>;
}
