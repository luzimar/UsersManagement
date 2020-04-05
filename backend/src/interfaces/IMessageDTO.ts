import IMailTo from "./IMailTo";
import IMailMessage from "./IMailMessage";

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

export default IMessageDTO;
