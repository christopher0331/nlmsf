import Image from "next/image";

type PodcastResource = {
  href: string;
  label: string;
  icon: string;
};

type PodcastItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  resources?: PodcastResource[];
};

const podcasts: PodcastItem[] = [
  {
    id: "XhLg-x1dBAM",
    title:
      "NLMSF Anxiety and Coping Podcast (less than 10 minutes): The Power in your Thoughts - Self-Care in combating Stress and Anxiety",
    description:
      "An NLMSF anxiety and coping podcast, less than 10 minutes, on the power in your thoughts and self-care in combating stress and anxiety.",
    url: "https://youtu.be/XhLg-x1dBAM",
  },
  {
    id: "W8KbRJpOOXI",
    title:
      "Sharing Knowledge, Sharing Hope NLMSF Podcast Series, Episode 1: Dimensions in Resilience",
    description:
      "The first episode of the Sharing Knowledge, Sharing Hope NLMSF Podcast Series, Dimensions in Resilience.",
    url: "https://www.youtube.com/watch?v=W8KbRJpOOXI",
  },
  {
    id: "n4OOczeh1LQ",
    title: "Caring for the Caregiver",
    description:
      "NLMSF recording, Supporting Caregivers, on caring for the caregiver, with an accompanying PowerPoint.",
    url: "https://youtu.be/n4OOczeh1LQ",
    resources: [
      {
        href: "https://nlmsf.org/wp-content/uploads/2022/02/NLMSF-Caregivers-PowerPoint.pdf",
        label: "Caring for the Caregiver PowerPoint",
        icon: "fa-file-powerpoint",
      },
    ],
  },
  {
    id: "0fv3DoEWFtQ",
    title: "Introducing Morning Pages - A self-driven Cognitive Support Therapy Concept",
    description:
      "An introduction to Morning Pages, a self-driven cognitive support therapy concept and a first step toward cognitive behavioral support therapy.",
    url: "https://youtu.be/0fv3DoEWFtQ",
  },
];

export default function NlmsfPodcastSection() {
  return (
    <section id="nlmsf-podcast" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-purple-700">NLMSF Podcast</h2>
      <div className="rounded-xl border border-purple-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700">
            <i className="fas fa-podcast" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">NLMSF Programs</h3>
            <p className="text-sm text-slate-500">Podcast recordings</p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These recordings are from the NLMSF podcast: anxiety and coping, the Sharing
          Knowledge, Sharing Hope series, caregiving, and Morning Pages.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          {podcasts.map((podcast) => (
            <article
              key={podcast.id}
              className="flex h-full flex-col rounded-2xl border border-purple-100 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 inline-flex w-fit rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700">
                NLMSF Podcast
              </div>
              <a
                href={podcast.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={`https://img.youtube.com/vi/${podcast.id}/mqdefault.jpg`}
                    alt={`${podcast.title} - Video Thumbnail`}
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <i
                    className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                    aria-hidden
                  />
                </div>
              </a>
              <h4 className="mt-4 text-lg font-semibold text-slate-900">{podcast.title}</h4>
              <p className="mt-3 flex-1 text-sm text-slate-600">{podcast.description}</p>
              <div className="mt-4 flex flex-col items-start gap-2">
                <a
                  href={podcast.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800"
                >
                  <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
                </a>
                {podcast.resources?.map((resource) => (
                  <a
                    key={resource.href}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800"
                  >
                    <i className={`fas ${resource.icon}`} aria-hidden /> {resource.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
