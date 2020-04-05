import IMessageDTO from "./IMessageDTO";

interface IMailService {
  sendMail(request: IMessageDTO): void;
}

export default IMailService;
