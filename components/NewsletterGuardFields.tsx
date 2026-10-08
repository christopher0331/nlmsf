import HoneypotField from "@/components/HoneypotField";

/** Hidden token, return path, and honeypot shared by every newsletter form. */
export default function NewsletterGuardFields({
  formToken,
  page,
  honeypotId,
}: {
  formToken: string;
  page: string;
  honeypotId: string;
}) {
  return (
    <>
      <input type="hidden" name="formToken" value={formToken} />
      <input type="hidden" name="page" value={page} />
      <HoneypotField id={honeypotId} />
    </>
  );
}
