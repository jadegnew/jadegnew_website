import {
  Controller,
  Get,
  Header,
  Post,
  Render,
  Req,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { Request } from 'express';
import { MailService } from './mailer/mail.service';
import * as fs from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly mailService: MailService) {}

  @Get('index')
  @Render('index')
  root() {}

  @Get('cv')
  @Header('Content-Type', 'application/json')
  @Header(
    'Content-Disposition',
    'attachment; filename="dmytro_khabatilin_cv.pdf"',
  )
  getStaticFile(): StreamableFile {
    const file = fs.createReadStream(
      join(process.cwd(), 'public/cv/dmytro_khabatilin_cv.pdf'),
    );
    return new StreamableFile(file);
  }

  @Post('sendMail')
  async sendMail(@Req() request: Request) {
    console.log(request.body);

    await this.mailService.sendMail(
      request.body.name,
      request.body.email,
      request.body.message,
    );
  }
}
