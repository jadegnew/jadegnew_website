import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: Number(587),
      secure: false,
      auth: {
        user: 'todolist.dk@gmail.com',
        pass: 'scdtueaaevfxltip',
      },
    });
  }

  async sendMail(name: string, email: string, message: string) {
    const to = 'dmytro.khabatilin@gmail.com';
    await this.transporter
      .sendMail({
        from: 'todolist.dk@gmail.com',
        to,
        subject: 'New request from portfolio site',
        text: '',
        html: `
                <div>
                    <h1>Sender: ${name} | ${email}</h1>
                    <p>Topic: ${message}</p>
                </div>
                `,
      })
      .then((response) => console.log(response));
  }
}
