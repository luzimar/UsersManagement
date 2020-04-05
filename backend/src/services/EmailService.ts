import IMailService from "../interfaces/IMailService";
import IMessageDTO from "../interfaces/IMessageDTO";

class EmailService implements IMailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`E-mail sent to ${to.email}, message: ${message.subject}`);
  }
}

export default new EmailService();
