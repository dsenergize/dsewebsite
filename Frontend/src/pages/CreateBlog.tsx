import React, { useState, FormEvent, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import Footer from "@/components/Footer";

// 👉 Correct Import for React App (NOT Next.js)
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type SubmitStatus = "success" | "error" | null;

const CreateBlog = () => {
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [publishDate, setPublishDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );
  const [content, setContent] = useState<string>(""); // HTML content from Quill
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const location = useLocation();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [errorMessage, setErrorMessage] = useState<string>(""); // Quill Toolbar Options (Headings, bold, italic, lists, colors, etc.)

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ size: [] }],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["blockquote", "code-block"],
      ["link", "image"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "size",
    "color",
    "background",
    "list",
    "bullet",
    "align",
    "blockquote",
    "code-block",
    "link",
    "image",
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }; // Prefill when navigated from Edit (Blog page passes post in state)

  useEffect(() => {
    const state = (location && (location as any).state) || null;
    if (state && state.post) {
      const post = state.post;
      setIsEditing(Boolean(state.isEditing));
      setEditingId(post.id || post._id || null);
      setTitle(post.title || "");
      setAuthor(post.author || "");
      setPublishDate(
        post.date
          ? new Date(post.date).toISOString().slice(0, 10)
          : post.publishedOn || new Date().toISOString().slice(0, 10)
      );
      setContent(post.content || post.mainContent || ""); // If post has imageUrl, show it as preview (no need to upload again unless user selects a new one)
      if (post.imageUrl) {
        setImagePreview(post.imageUrl);
      }
    }
  }, [location]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // If creating new, require image; if editing and no existing image, require image

    if (!isEditing && !imageFile) {
      setErrorMessage("Please select an image to upload.");
      return;
    }
    if (isEditing && !imageFile && !imagePreview) {
      setErrorMessage("Please select an image to upload.");
      return;
    }

    if (content.replace(/<[^>]+>/g, "").length < 100) {
      setErrorMessage("Content should be at least 100 characters long.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage(""); // 1. Get initial token for image upload

    let token = await getToken();

    if (!token) {
      setErrorMessage("Authentication error. Please try logging in again.");
      setIsSubmitting(false);
      return;
    } // If user selected a new image file, upload it first to get imageUrl

    let imageUrl = imagePreview;
    if (imageFile) {
      const imageFormData = new FormData();
      imageFormData.append("image", imageFile);

      const uploadResponse = await fetch(
        "http://localhost:5000/api/blogs/upload",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: imageFormData,
        }
      );

      if (!uploadResponse.ok) {
        setErrorMessage("Failed to upload the image.");
        setIsSubmitting(false);
        return;
      }

      const uploadData = await uploadResponse.json();
      imageUrl = uploadData.imageUrl || uploadData.url || imageUrl;
    }

    // 2. IMPORTANT FIX: Get a fresh token for the final submission
    // to avoid the 'token-expired' error from the second API call.
    const finalToken = await getToken();

    if (!finalToken) {
      setErrorMessage(
        "Authentication token expired during process. Please log in and try again."
      );
      setIsSubmitting(false);
      return;
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const blogData = {
      title,
      author,
      publishedOn: publishDate,
      mainContent: content, // HTML saved
      imageUrl,
      slug,
    }; // If editing, call PUT to update the blog; otherwise POST to create

    let response;
    if (isEditing && editingId) {
      response = await fetch(`http://localhost:5000/api/blogs/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${finalToken}`, // Use the fresh token
        },
        body: JSON.stringify(blogData),
      });
    } else {
      response = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${finalToken}`, // Use the fresh token
        },
        body: JSON.stringify(blogData),
      });
    }

    if (response.ok) {
      setSubmitStatus("success");
      setTimeout(() => navigate("/resources/Blog"), 1200);
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.message || "Failed to save the blog post.");
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "Are you sure you want to cancel? All unsaved changes will be lost."
      )
    ) {
      navigate("/resources/Blog");
    }
  };

  return (
    <>
      <div className="bg-white w-full min-h-screen text-gray-800">
        <header className="bg-blue-900 text-white text-center py-16 px-4 relative">
          <button
            onClick={() => navigate("/resources/Blog")}
            className="absolute left-4 top-4 flex items-center space-x-2 px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              ={" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Blogs</span>
          </button>
          <h1 className="text-4xl mt-6 md:text-5xl font-extrabold tracking-tight">
            Create New Blog Post
          </h1>
          <p className="mt-3 text-lg text-blue-200 max-w-2xl mx-auto">
            Share your insights and expertise with the community
          </p>
        </header>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
              <strong className="font-bold">Error: </strong>
              <span>{errorMessage}</span>
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-md space-y-6"
          >
            {/* Title */}
            <div>
              <label className="block text-xl font-bold text-blue-900 mb-2">
                Blog Title *
              </label>
              <input
                type="text"
                placeholder="Enter an engaging title"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                maxLength={150}
                disabled={isSubmitting}
              />
            </div>
            {/* Author + Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold mb-2">
                  Author Name *
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2">
                  Publish Date *
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            {/* Featured Image */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                Featured Image *
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border border-gray-300 rounded-lg"
                onChange={handleImageChange}
                required
                disabled={isSubmitting}
              />
              {imagePreview && (
                <div className="mt-4">
                  <img
                    src={imagePreview}
                    className="w-full max-w-md rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
            {/* Rich Text Editor */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Blog Content *
              </label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={quillModules}
                formats={quillFormats}
                className="bg-white rounded-lg"
                placeholder="Share your experience..."
                style={{ height: "300px", marginBottom: "60px" }}
              />
              <p className="text-sm text-gray-500 mt-2">
                {content.replace(/<[^>]+>/g, "").length} characters (minimum 100
                required)
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 px-6 bg-green-600 text-white text-xl font-semibold rounded-lg"
              >
                {isSubmitting ? "Publishing..." : "✓ Publish Blog Post"}{" "}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="py-3 px-6 bg-gray-300 text-gray-700 text-lg font-semibold rounded-lg"
              >
                Cancel
              </button>
            </div>
            {submitStatus === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                <p className="font-semibold">
                  ✅ Success! Your blog post has been published.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateBlog;
