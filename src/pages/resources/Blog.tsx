import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Footer from "@/components/Footer";

// --- Configuration ---
const API_URL =
  "https://strapi-dsewebsite-d05s.onrender.com/api/blog-posts?populate=*";

// --- SVG Icons ---
const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    {" "}
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />{" "}
  </svg>
);
const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    {" "}
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.028 2.076 3.863-.764-.025-1.482-.234-2.11-.583v.062c0 2.248 1.595 4.125 3.713 4.557-.387.106-.796.162-1.224.162-.3 0-.59-.028-.875-.082.593 1.844 2.313 3.186 4.354 3.224-1.583 1.241-3.585 1.98-5.758 1.98-.374 0-.743-.022-1.107-.064 2.046 1.314 4.478 2.083 7.03 2.083 8.423 0 13.02-6.976 13.02-13.021 0-.198-.005-.395-.012-.592.894-.645 1.669-1.455 2.285-2.373z" />{" "}
  </svg>
);

// --- UI Components ---
const Spinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const Blog = () => {
  // --- State Management ---
  const [allPosts, setAllPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Data Fetching Effect ---
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const apiResponse = await response.json();
        const validApiPosts = apiResponse.data.filter((post) => !!post);

        // Map API data to a clean object for the component to use
        const normalizedApiPosts = validApiPosts.map((post) => {
          const imageAttributes = post.Image?.data?.attributes;

          // Use the URL directly from Cloudinary, with a fallback
          const imageUrl =
            imageAttributes?.formats?.large?.url ||
            imageAttributes?.url ||
            "https://placehold.co/800x400";

          return {
            id: post.id,
            slug: post.slug,
            title: post.Title,
            author: post.Published_by,
            date: new Date(post.Published_on).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            imageUrl: imageUrl,
            altText: `Image for ${post.Title}`,
            content: post.Main,
          };
        });

        setAllPosts(normalizedApiPosts);
        setCurrentPost(normalizedApiPosts[0] || null);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
        setError("Could not load posts from the server.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []); // Empty dependency array ensures this runs only once

  // --- Event Handlers ---
  const handlePostSelect = (slug) => {
    const post = allPosts.find((p) => p.slug === slug);
    if (post) {
      setCurrentPost(post);
      window.scrollTo(0, 0);
    }
  };

  // --- Render Logic ---
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="bg-white w-full min-h-screen text-gray-800">
        <header className="bg-blue-900 text-white text-center py-20 px-4">
          <h1 className="text-5xl font-extrabold tracking-tight">
            DSenergize Insights
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Your expert source for solar technology, O&M best practices, and
            renewable energy trends in India.
          </p>
        </header>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {error && (
            <div className="text-center text-red-600 bg-red-100 p-4 rounded-lg mb-8">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content Area */}
            <main className="lg:col-span-2">
              {currentPost ? (
                <article className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-md">
                  <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
                      {currentPost.title}
                    </h2>
                    <div className="text-sm text-gray-500 mt-3 flex items-center">
                      <span>
                        By <strong>{currentPost.author}</strong>
                      </span>
                      <span className="mx-2">|</span>
                      <span>Published on: {currentPost.date}</span>
                    </div>
                  </div>
                  <div className="mb-8">
                    <img
                      src={currentPost.imageUrl}
                      alt={currentPost.altText}
                      className="rounded-xl w-full h-auto object-cover shadow-lg"
                    />
                  </div>
                  <div className="prose">
                    <ReactMarkdown>{currentPost.content}</ReactMarkdown>
                  </div>
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
            <aside className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
                <h3 className="font-bold text-xl mb-4 text-blue-900 border-b pb-2">
                  About DSenergize
                </h3>
                <p className="text-sm text-gray-600 mb-4">
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
                    <a href="#" className="hover:text-blue-700 hover:underline">
                      Solar O&M
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 hover:underline">
                      Technology & Innovation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 hover:underline">
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
                          className={`font-medium text-left w-full transition-colors duration-200 ${
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
                  {/* <div className="mt-4 pt-4 border-t border-gray-200">
                     <Link to="/add-blog" className="block w-full text-center py-2 px-4 rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700 transition-colors">
                       Add New Blog Post
                     </Link>
                   </div> */}
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
            </aside>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
