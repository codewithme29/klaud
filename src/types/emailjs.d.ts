declare module '@emailjs/browser' {
  interface EmailJSResponse {
    status: number;
    text: string;
  }

  function send(
    serviceId: string,
    templateId: string,
    templateParams: Record<string, unknown>,
    publicKey?: string
  ): Promise<EmailJSResponse>;

  const emailjs: {
    send: typeof send;
  };

  export default emailjs;
}
