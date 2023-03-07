export declare class MailService {
    private transporter;
    constructor();
    sendMail(name: string, email: string, message: string): Promise<void>;
}
