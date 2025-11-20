import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import DOMPurify from "dompurify";
import Footer from "@/components/Footer";
// Clerk imports
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  useUser,
  useAuth,
} from "@clerk/clerk-react";

// --- ALLOWLIST OF USERS WHO CAN CREATE BLOGS ---
const ALLOWLIST = [
  "nabilkamran2909@gmail.com",
  "devusmani@dsenergize.com",
  "*@dsenergize.com",
  "shahbaz@dsenergize.com",
  "social.dsesolar@gmail.com",
];

// --- Configuration ---
const API_URL = "http://localhost:5000/api/blogs";

// --- SVG Icons ---
const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.028 2.076 3.863-.764-.025-1.482-.234-2.11-.583v.062c0 2.248 1.595 4.125 3.713 4.557-.387.106-.796.162-1.224.162-.3 0-.59-.028-.875-.082.593 1.844 2.313 3.186 4.354 3.224-1.583 1.241-3.585 1.98-5.758 1.98-.374 0-.743-.022-1.107-.064 2.046 1.314 4.478 2.083 7.03 2.083 8.423 0 13.02-6.976 13.02-13.021 0-.198-.005-.395-.012-.592.894-.645 1.669-1.455 2.285-2.373z" />
  </svg>
);

// Spinner
const Spinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const Blog = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { getToken } = useAuth();

  // --- CHECK IF THE USER IS ALLOWLISTED (with wildcard domain support) ---
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const isAllowedUser =
    userEmail &&
    (ALLOWLIST.includes(userEmail) ||
      ALLOWLIST.some((pattern) => {
        if (pattern.startsWith("*@")) {
          const domain = pattern.replace("*@", "");
          return userEmail.endsWith(domain);
        }
        return false;
      }));

  // --- State Management ---
  const [allPosts, setAllPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Data Fetching ---
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:5000/api/blogs");
      const apiResponse = await response.json();
      console.log("Fetched data:", apiResponse);

      const normalizedApiPosts = apiResponse.map((post) => ({
        id: post._id,
        slug: post.slug,
        title: post.title,
        author: post.author,
        date: new Date(post.publishedOn).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        imageUrl: post.imageUrl || "https://placehold.co/800x400",
        altText: `Image for ${post.title}`,
        content: post.mainContent,
      }));

      setAllPosts(normalizedApiPosts);
      setCurrentPost(normalizedApiPosts[0] || null);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handlePostSelect = (slug) => {
    const post = allPosts.find((p) => p.slug === slug);
    if (post) {
      setCurrentPost(post);
      window.scrollTo(0, 0);
    }
  };

  const handleCreateBlogClick = () => {
    navigate("/create-blog");
  };

  const handleEditBlog = () => {
    // Navigate to the Create Blog page and pass the whole post as state
    navigate("/create-blog", { state: { post: currentPost, isEditing: true } });
  };

  const handleDeleteBlog = async () => {
    if (!window.confirm("Are you sure you want to delete this blog post?"))
      return;

    const token = await getToken();

    const response = await fetch(`${API_URL}/${currentPost.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Blog post deleted successfully.");
      window.location.reload();
    } else {
      throw new Error("Delete failed");
    }
  };

  // Detect if content is HTML or Markdown
  const isHTMLContent = (content) => /<[^>]*>/g.test(content);

  // Render HTML content safely
  const renderHTMLContent = (content) => {
    const sanitizedHTML = DOMPurify.sanitize(content);
    return (
      <div
        className="overflow-x-hidden break-words text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        style={{
          wordBreak: "break-word",
          overflowWrap: "break-word",
        }}
      />
    );
  };

  // Render Markdown content
  const renderMarkdownContent = (content) => (
    <div className="prose prose-sm sm:prose max-w-none overflow-x-hidden break-words">
      <style>{`
        .prose p, .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6,
        .prose ul, .prose ol, .prose blockquote, .prose code, .prose pre {
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .prose code {
          word-break: break-all;
        }
        .prose pre {
          overflow-x: auto;
        }
      `}</style>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );

  if (loading) return <Spinner />;

  return (
    <>
      <div className="bg-white w-full min-h-screen text-gray-800">
        <header className="bg-blue-900 text-white text-center py-20 px-4">
          <h1 className="text-5xl font-extrabold tracking-tight">
            DSenergize Insights
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Your expert source for solar technology, O&M best practices,
            renewable energy trends in India.
          </p>
        </header>

        {/* MAIN CONTENT */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {error && (
            <div className="text-center text-red-600 bg-red-100 p-4 rounded-lg mb-8">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <main className="lg:col-span-2 min-w-0">
              {currentPost ? (
                <article className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-md overflow-hidden">
                  <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight break-words">
                      {currentPost.title}
                    </h2>
                    <div className="text-sm text-gray-500 mt-3 flex flex-wrap items-center gap-2">
                      <span>
                        By <strong>{currentPost.author}</strong>
                      </span>
                      <span className="mx-1">|</span>
                      <span>Published on: {currentPost.date}</span>
                    </div>
                  </div>
                  <div className="mb-8 overflow-hidden rounded-xl">
                    <img
                      src={currentPost.imageUrl}
                      alt={currentPost.altText}
                      className="w-full h-auto object-cover shadow-lg"
                    />
                  </div>
                  {isHTMLContent(currentPost.content)
                    ? renderHTMLContent(currentPost.content)
                    : renderMarkdownContent(currentPost.content)}
                </article>
              ) : (
                !loading && (
                  <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-md">
                    No posts available.
                  </div>
                )
              )}
            </main>

            {/* Sidebar */}
            <aside className="space-y-8 sticky top-4 h-fit">
              <div className="bg-gray-50 p-6 rounded-2xl shadow-md relative">
                {/* HEADER WITH USER BADGE ON RIGHT */}
                <div className="flex items-start justify-between mb-4 gap-2">
                  <h3 className="font-bold text-xl text-blue-900">
                    About DSenergize
                  </h3>

                  <SignedIn>
                    <div className="flex items-center gap-2 px-3 py-1.5 h-6 bg-blue-50 hover:bg-blue-100 rounded-lg shadow-sm flex-shrink-0">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>

                      <span className="text-xs font-semibold text-blue-900 truncate max-w-[70px]">
                        {user?.firstName ||
                          user?.emailAddresses[0]?.emailAddress.split("@")[0]}
                      </span>

                      <UserButton
                        afterSignOutUrl="/resources/Blog"
                        appearance={{
                          elements: {
                            avatarBox:
                              "w-6 h-6 rounded-full border-2 border-blue-900",
                          },
                        }}
                      />
                    </div>
                  </SignedIn>

                  {/* ✅ SHOW LOGIN BUTTON WHEN LOGGED OUT */}
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="px-3 py-1.5 text-white text-xs font-semibold rounded-lg shadow bg-blue-800 hover:bg-blue-900 flex-shrink-0">
                        Sign In
                      </button>
                    </SignInButton>
                  </SignedOut>
                </div>
                <p className="text-sm text-gray-600 mb-4 break-words">
                  DS Energize is India's emerging innovator in smart solar
                  monitoring and data-driven asset management.
                </p>

                <a
                  href="#"
                  className="text-sm font-semibold text-blue-700 hover:underline"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
                <h3 className="font-bold text-xl mb-4 text-blue-900 border-b pb-2">
                  Categories
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-700 hover:underline break-words"
                    >
                      Solar O&M
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-700 hover:underline break-words"
                    >
                      Technology & Innovation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-700 hover:underline break-words"
                    >
                      Case Studies
                    </a>
                  </li>
                </ul>
              </div>

              {allPosts.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
                  <h3 className="font-bold text-xl mb-4 text-blue-900 border-b pb-2">
                    Recent Posts
                  </h3>
                  <ul className="space-y-3">
                    {allPosts.map((post) => (
                      <li key={post.slug}>
                        <button
                          onClick={() => handlePostSelect(post.slug)}
                          className={`font-medium text-left w-full transition-colors duration-200 break-words ${
                            currentPost?.slug === post.slug
                              ? "text-blue-700"
                              : "text-gray-800 hover:text-blue-700"
                          }`}
                        >
                          {post.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
                <h3 className="font-bold text-xl mb-4 text-blue-900 border-b pb-2">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-blue-700">
                    <LinkedinIcon />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-400">
                    <TwitterIcon />
                  </a>
                </div>
              </div>

              {/* ✅ ADMIN CONTROLS - AT BOTTOM */}
              {isAllowedUser && (
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-2xl shadow-lg space-y-3">
                  <h3 className="font-bold text-xl mb-2 text-white border-b border-blue-700 pb-2">
                    Admin Controls
                  </h3>

                  <button
                    onClick={handleCreateBlogClick}
                    className="w-full px-4 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 font-semibold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Create New Blog
                  </button>

                  {currentPost && (
                    <>
                      <button
                        onClick={handleEditBlog}
                        className="w-full px-4 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 font-semibold shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Edit This Blog
                      </button>

                      <button
                        onClick={handleDeleteBlog}
                        className="w-full px-4 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 font-semibold shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete Blog
                      </button>
                    </>
                  )}
                </div>
              )}
            </aside>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
