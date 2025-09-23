import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

const AddBlogPage = () => {
  const navigate = useNavigate();

  // State for form fields
  const [Title, setTitle] = useState('');
  const [Published_by, setPublished_by] = useState('');
  const [Published_on, setPublished_on] = useState(new Date().toISOString().slice(0, 10));
  const [Main_content, setMain_content] = useState('');
  
  // --- CHANGE 1: State for the image file ---
  const [imageFile, setImageFile] = useState(null); 
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if an image is selected
    if (!imageFile) {
      alert("Please select an image to upload.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // --- CHANGE 2: UPLOAD THE IMAGE FIRST ---
      const formData = new FormData();
      formData.append('files', imageFile);

      const uploadResponse = await fetch('http://localhost:1337/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error('Failed to upload the image.');
      }

      const uploadedImages = await uploadResponse.json();
      const imageId = uploadedImages[0].id; // Get the ID of the uploaded image

      // --- CHANGE 3: CREATE THE BLOG POST AND LINK THE IMAGE ID ---
      const newBlogData = {
        data: {
          Title,
          Published_by,
          Published_on,
          Main_content,
          Image: imageId, // Use the image ID here
        },
      };

      const postResponse = await fetch('http://localhost:1337/api/blog-posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBlogData),
      });

      if (postResponse.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        throw new Error('Failed to save the blog post.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      if (submitStatus !== 'success') {
          setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <div className="bg-white w-full min-h-screen text-gray-800">
        <header className="bg-blue-900 text-white text-center py-16 px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">Create New Blog Post</h1>
          <p className="mt-2 text-lg text-blue-200 max-w-2xl mx-auto"> Fill out the form below to publish a new article. </p>
        </header>

        <div className="container mx-auto px-4 sm-px-6 lg-px-8 py-12">
          <form onSubmit={handleSubmit} className="bg-gray-50 p-6 sm-p-8 rounded-2xl shadow-md space-y-6">
            <div>
              <label htmlFor="title" className="block text-xl font-bold text-blue-900 mb-2">Blog Title</label>
              <input type="text" id="title" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" value={Title} onChange={(e) => setTitle(e.target.value)} required disabled={isSubmitting} />
            </div>

            <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
              <div>
                <label htmlFor="published_by" className="block text-lg font-semibold text-gray-700 mb-2">Published By</label>
                <input type="text" id="published_by" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" value={Published_by} onChange={(e) => setPublished_by(e.target.value)} required disabled={isSubmitting} />
              </div>
              <div>
                <label htmlFor="published_on" className="block text-lg font-semibold text-gray-700 mb-2">Publish Date</label>
                <input type="date" id="published_on" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" value={Published_on} onChange={(e) => setPublished_on(e.target.value)} required disabled={isSubmitting} />
              </div>
            </div>

            {/* --- CHANGE 4: Input for file upload --- */}
            <div>
              <label htmlFor="image" className="block text-lg font-semibold text-gray-700 mb-2">Featured Image</label>
              <input type="file" id="image" className="w-full p-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" onChange={handleImageChange} required disabled={isSubmitting} />
            </div>

            <div>
              <label htmlFor="main_content" className="block text-lg font-semibold text-gray-700 mb-2">Main Content</label>
              <textarea id="main_content" rows={10} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" value={Main_content} onChange={(e) => setMain_content(e.target.value)} required disabled={isSubmitting} ></textarea>
            </div>

            <div className="mt-6">
              <button type="submit" disabled={isSubmitting} className="w-full py-3 px-6 bg-green-600 text-white text-xl font-semibold rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed" >
                {isSubmitting ? 'Publishing...' : 'Publish Blog Post'}
              </button>
              {submitStatus === 'success' && ( <p className="text-green-600 font-semibold mt-4 text-center"> ✅ Success! Redirecting... </p> )}
              {submitStatus === 'error' && ( <p className="text-red-600 font-semibold mt-4 text-center"> ❌ There was an error. Please try again. </p> )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddBlogPage;