"use client";

import { useState, useEffect, useCallback } from "react";

type Video = {
  id: string;
  title: string;
  category: string;
  youtube_url: string;
  duration: string;
  description: string;
  featured: boolean;
  created_at: string;
};

const CATEGORIES = [
  { key: "all", label: "All Videos", icon: "fa-play-circle" },
  { key: "patient-education", label: "Patient Education", icon: "fa-user-md" },
  { key: "medical-research", label: "Medical Research", icon: "fa-microscope" },
  { key: "caregiver-support", label: "Caregiver Support", icon: "fa-heart" },
  { key: "webinars", label: "Webinars", icon: "fa-video" },
] as const;

function extractVideoId(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : "";
}

function getCategoryName(key: string): string {
  const c = CATEGORIES.find((x) => x.key === key);
  return c ? c.label : key;
}

export default function EducationVideosSection() {
  const [allVideos, setAllVideos] = useState<Video[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState<{
    title: string;
    embedUrl: string;
    youtubeUrl: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/education-videos")
      .then((res) => res.json())
      .then((data: Video[]) => setAllVideos(Array.isArray(data) ? data : []))
      .catch(() => setAllVideos([]))
      .finally(() => setLoading(false));
  }, []);

  const filteredVideos =
    currentCategory === "all"
      ? allVideos
      : allVideos.filter((v) => v.category === currentCategory);

  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  const counts: Record<string, number> = {
    all: allVideos.length,
    "patient-education": allVideos.filter((v) => v.category === "patient-education").length,
    "medical-research": allVideos.filter((v) => v.category === "medical-research").length,
    "caregiver-support": allVideos.filter((v) => v.category === "caregiver-support").length,
    webinars: allVideos.filter((v) => v.category === "webinars").length,
  };

  const openModal = useCallback((video: Video) => {
    const videoId = extractVideoId(video.youtube_url);
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    setModalVideo({ title: video.title, embedUrl, youtubeUrl });
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setModalVideo(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, closeModal]);

  useEffect(() => {
    if (modalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <section
      className="relative py-16 my-8 overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-[#eef2ff] to-[#eff6ff] md:py-12 sm:py-8"
      aria-label="Education Videos & Resources"
    >
      {/* Decorative circles (replacing ::before / ::after) */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full -top-[100px] -left-[100px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)",
        }}
        aria-hidden
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full -bottom-[200px] -right-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, rgba(147, 51, 234, 0) 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-4">
        <div className="text-center mb-12 max-w-[800px] mx-auto md:mb-8">
          <span className="inline-block py-2 px-4 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white font-semibold text-sm rounded-full mb-4 shadow-[0_4px_6px_-1px_rgba(99,102,241,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_8px_-1px_rgba(99,102,241,0.4)] tracking-wide">
            Educational Resources
          </span>
          <h2 className="text-[2.5rem] font-extrabold m-0 mb-6 leading-tight bg-gradient-to-r from-[#4338ca] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent md:text-3xl sm:text-[1.75rem]">
            Important Videos & Education
          </h2>
          <p className="text-lg text-gray-600 m-0 leading-relaxed md:text-base">
            Access our comprehensive library of educational videos, webinars, and
            resources designed to help patients, caregivers, and healthcare
            providers better understand LMS.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 items-start md:grid-cols-[250px_1fr] md:gap-6 lg:gap-8">
          <aside className="bg-white rounded-2xl p-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:sticky md:top-8 max-md:order-2">
            <h3 className="text-xl font-bold text-gray-800 m-0 mb-6 pb-3 border-b-2 border-gray-200">
              Categories
            </h3>
            <ul className="list-none m-0 p-0">
              {CATEGORIES.map((cat) => (
                <li key={cat.key} className="mb-2">
                  <button
                    type="button"
                    className={`flex items-center w-full py-3 px-4 rounded-lg border-2 text-left font-medium text-base transition-all duration-200 cursor-pointer ${
                      currentCategory === cat.key
                        ? "bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] text-white border-[#6366f1]"
                        : "bg-transparent border-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                    }`}
                    data-category={cat.key}
                    onClick={() => setCurrentCategory(cat.key)}
                  >
                    <div className="w-5 h-5 mr-3 flex items-center justify-center shrink-0">
                      <i className={`fas ${cat.icon}`} aria-hidden />
                    </div>
                    {cat.label}
                    <span
                      className={`ml-auto py-1 px-2 rounded-full text-xs font-semibold ${
                        currentCategory === cat.key
                          ? "bg-white/30"
                          : "bg-white/20"
                      }`}
                    >
                      {counts[cat.key] ?? 0}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-md:order-1"
            id="videoGrid"
          >
            {loading ? (
              <div className="col-span-full text-center py-16 px-8 bg-white rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-video text-3xl text-white" aria-hidden />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 m-0 mb-3">
                  Loading videos…
                </h3>
                <p className="text-base text-gray-500 m-0">Please wait.</p>
              </div>
            ) : sortedVideos.length === 0 ? (
              <div className="col-span-full text-center py-16 px-8 bg-white rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-video text-3xl text-white" aria-hidden />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 m-0 mb-3">
                  {currentCategory === "all"
                    ? "No videos available"
                    : "No videos in this category"}
                </h3>
                <p className="text-base text-gray-500 m-0">
                  {currentCategory === "all"
                    ? "Videos will appear here once they are added to the system."
                    : "Videos will appear here once they are added to this category."}
                </p>
              </div>
            ) : (
              sortedVideos.map((video) => {
                const videoId = extractVideoId(video.youtube_url);
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                const categoryName = getCategoryName(video.category);
                return (
                  <div
                    key={video.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] sm:mx-1"
                    data-category={video.category}
                    data-video-id={videoId}
                    role="button"
                    tabIndex={0}
                    onClick={() => openModal(video)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openModal(video);
                      }
                    }}
                  >
                    <div className="relative w-full h-[200px] overflow-hidden group">
                      <img
                        src={thumbnailUrl}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                        }}
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-black/80 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[rgba(99,102,241,0.9)] group-hover:scale-110">
                        <i
                          className="fas fa-play text-2xl text-white ml-1"
                          aria-hidden
                        />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white py-1 px-2 rounded text-xs font-semibold">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-800 m-0 mb-3 leading-snug">
                        {video.title}
                        {video.featured && (
                          <span className="bg-gradient-to-br from-amber-400 to-amber-500 text-white py-1 px-2 rounded text-xs font-semibold ml-2">
                            Featured
                          </span>
                        )}
                      </h4>
                      <p className="text-sm text-gray-500 m-0 mb-4 leading-normal">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span className="bg-gray-100 text-gray-500 py-1 px-2 rounded font-medium">
                          {categoryName}
                        </span>
                        <span className="flex items-center">
                          <i className="fas fa-calendar mr-1" aria-hidden />{" "}
                          {new Date(video.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <div
        className={`fixed inset-0 z-[1000] flex items-center justify-center p-8 bg-black/90 transition-opacity duration-300 ${
          modalOpen ? "flex opacity-100" : "hidden opacity-0"
        }`}
        id="videoModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        onClick={(e) => e.target === e.currentTarget && closeModal()}
      >
        <div className="bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-[900px] max-h-[90vh] overflow-hidden relative sm:mx-4 sm:my-4">
          <div className="flex justify-between items-center py-6 px-8 border-b border-gray-200">
            <h3
              className="text-2xl font-bold text-gray-800 m-0"
              id="modalTitle"
            >
              {modalVideo?.title ?? "Video"}
            </h3>
            <button
              type="button"
              className="bg-transparent border-0 text-gray-500 cursor-pointer p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-800"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <i className="fas fa-times text-2xl" aria-hidden />
            </button>
          </div>
          <div className="p-0">
            {modalVideo && (
              <iframe
                className="w-full h-[500px] border-0 md:h-[300px] sm:h-[250px]"
                id="videoIframe"
                src={modalOpen ? modalVideo.embedUrl : ""}
                title={modalVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <div className="flex justify-between items-center py-6 px-8 border-t border-gray-200">
            <div className="flex gap-4">
              {modalVideo && (
                <>
                  <a
                    href={modalVideo.youtubeUrl}
                    className="flex items-center gap-2 py-2 px-4 bg-[#6366f1] text-white no-underline rounded-lg font-medium transition-all duration-200 hover:bg-[#4f46e5] hover:-translate-y-0.5"
                    id="youtubeLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube" aria-hidden /> Watch on
                    YouTube
                  </a>
                  <a
                    href={modalVideo.youtubeUrl}
                    className="flex items-center gap-2 py-2 px-4 bg-gray-100 text-gray-500 no-underline rounded-lg font-medium transition-all duration-200 hover:bg-gray-200 hover:text-gray-800"
                    id="shareLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-share" aria-hidden /> Share Video
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
