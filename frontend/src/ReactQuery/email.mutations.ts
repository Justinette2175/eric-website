import { useMutation } from "react-query";
import { sendEmail } from "../Services/EmailService";
import { EmailParameters } from "../Types";

export function useSendEmailMutation() {
  return useMutation((params: EmailParameters) => {
    return sendEmail(params);
  });
}
