/** Shared options for newsletter “How did you hear about us?” attribution. */
export const NEWSLETTER_SOURCE_OPTIONS = [
  { value: "", label: "How did you hear about us? (optional)" },
  { value: "Website / Google search", label: "Website / Google search" },
  { value: "Facebook", label: "Facebook" },
  { value: "Instagram", label: "Instagram" },
  { value: "Doctor or hospital", label: "Doctor or hospital" },
  { value: "Friend or family", label: "Friend or family" },
  { value: "Support group", label: "Support group" },
  { value: "Event or fundraiser", label: "Event or fundraiser" },
  { value: "Another nonprofit / partner", label: "Another nonprofit / partner" },
  { value: "News or media", label: "News or media" },
  { value: "Other", label: "Other" },
] as const;

/** Mailchimp audience merge tag — create this field in Mailchimp as a Text field named “How did you hear about us?” with merge tag SOURCE. */
export const NEWSLETTER_SOURCE_MERGE_TAG = "SOURCE";
