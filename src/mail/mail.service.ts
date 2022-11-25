import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
export interface User {
  email: string;
  name: string;
  subject: string,
  message: string
}

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendContactUsEmail(userData: User) {
    await this.mailerService.sendMail({
      to: userData.email,
      from: '"Support Team" <noreply@example.com>', // override default from
      subject: 'New Contact Us Message ✔', // Subject line
      template: './confirmation', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: userData.name,
        email: userData.email,
        subject: userData.subject,
        message: userData.message,
      },
    });
  }
}