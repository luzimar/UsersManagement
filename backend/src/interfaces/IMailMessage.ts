interface IMailMessage {
  subject: string;
  body: string;
  attachments?: string[];
}

export default IMailMessage;
