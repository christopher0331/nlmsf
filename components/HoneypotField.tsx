import { HONEYPOT_FIELD } from "@/lib/form-guard";

/**
 * Off-screen text field. Not display:none, so bots that skip hidden inputs still see it.
 * People don't: it sits outside the viewport, is removed from tab order, and is hidden from AT.
 */
export default function HoneypotField({ id }: { id: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "1px",
        height: "1px",
        overflow: "hidden",
        transform: "translateX(-100vw)",
      }}
    >
      <label htmlFor={id}>Extra</label>
      <input
        type="text"
        id={id}
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
        aria-hidden="true"
      />
    </div>
  );
}
