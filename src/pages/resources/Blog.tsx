import React, { useState } from 'react';
import Footer from '@/components/Footer';
import { blogData } from '@/data/blogData';

const UserIcon = () => (
  <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

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


// --- Main Blog Page Component ---
<></>
const Blog = () => {
  // --- STATE MANAGEMENT ---
  const [currentPost, setCurrentPost] = useState(blogData.blog1); // State for the currently displayed post
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([
    { name: 'Arun Kumar', date: 'September 2, 2025 at 1:15 PM', text: "Excellent article. We saw our plant's PR increase by 5% after implementing a real-time monitoring system. It's a game-changer." },
    { name: 'Priya Sharma', date: 'September 2, 2025 at 2:05 PM', text: 'Well explained. The point about proactive vs. reactive maintenance is crucial for anyone managing solar assets.' },
    { name: 'Rajesh Singh', date: 'September 2, 2025 at 2:25 PM', text: 'Great insights on the financial impact. Data really is key to profitability in the solar sector.' },
  ]);

  const recentPosts = Object.values(blogData);

  // --- EVENT HANDLERS ---
  const handlePostSelect = (slug) => {
    const post = recentPosts.find(p => p.slug === slug);
    if (post) {
      setCurrentPost(post);
      window.scrollTo(0, 0); // Scroll to top when a new post is selected
    }
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !comment.trim()) {
      alert("Please enter both your name and a comment.");
      return;
    }
    const newComment = {
      name: name,
      date: new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }),
      text: comment,
    };
    setCommentsList([newComment, ...commentsList]);
    setName('');
    setComment('');
  };

  // --- RENDER FUNCTIONS ---
  const renderContent = (contentArray) => {
    return contentArray.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return <p key={index}>{item.text}</p>;
        case 'heading':
          return <h3 key={index} className="text-2xl font-bold text-blue-900 mt-8">{item.text}</h3>;
        case 'list':
          return (
            <ul key={index} className="list-disc list-inside space-y-2">
              {item.items.map((listItem, liIndex) => (
                <li key={liIndex}>{listItem}</li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <>
    <div className="bg-white w-full min-h-screen text-gray-800">
      
      {/* 1. BLOG HEADER */}
      <header className="bg-blue-900 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold tracking-tight">DSenergize Insights</h1>
        <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
          Your expert source for solar technology, O&M best practices, and renewable energy trends in India.
        </p>
      </header>

      {/* 2. MAIN LAYOUT CONTAINER (CONTENT + SIDEBAR) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* 2a. CONTENT BODY (MAIN COLUMN) */}
          <main className="lg:col-span-2">
            <article className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-md">
              {/* Post Header */}
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
                  {currentPost.title}
                </h2>
                <div className="text-sm text-gray-500 mt-3 flex items-center">
                  <span>By <strong>{currentPost.author}</strong></span>
                  <span className="mx-2">|</span>
                  <span>Published on: {currentPost.date}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src={currentPost.imageUrl} 
                  alt={currentPost.altText}
                  className="rounded-xl w-full h-auto object-cover shadow-lg"
                />
              </div>

              {/* Post Content - Now rendered dynamically */}
              <div className="prose prose-lg max-w-none text-gray-700">
                {renderContent(currentPost.content)}
              </div>
            </article>

            {/* 2b. COMMENTS SECTION */}
            {/* <section className="mt-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Comments ({commentsList.length})</h3>
              <div className="bg-gray-50 p-6 rounded-2xl shadow-md mb-8">
                <h4 className="font-bold text-lg mb-4 text-gray-800">Leave a Reply</h4>
                <form className="space-y-4" onSubmit={handleCommentSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
                    <textarea 
                      id="comment" 
                      rows="4" 
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2" 
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </div>
                  <button type="submit" className="bg-blue-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Post Comment
                  </button>
                </form>
              </div>
              <div className="space-y-6">
                {commentsList.map((commentItem, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0"><UserIcon /></div>
                    <div>
                      <p className="font-semibold text-gray-900">{commentItem.name}</p>
                      <p className="text-xs text-gray-500">{commentItem.date}</p>
                      <p className="mt-2 text-gray-700">{commentItem.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section> */}
          </main>
          
          {/* 2c. SIDEBAR (RIGHT COLUMN) */}
          <aside className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-xl mb-4 text-blue-900 border-b pb-2">About DSenergize</h3>
              <p className="text-sm text-gray-600 mb-4">
                DS Energize is India's emerging innovator in smart solar monitoring and data-driven asset management, committed to optimizing solar performance across the nation.
              </p>
              <a href="#" className="text-sm font-semibold text-blue-700 hover:underline">Learn More →</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-xl mb-4 text-blue-900 border-b pb-2">Categories</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#" className="hover:text-blue-700 hover:underline">Solar O&M</a></li>
                <li><a href="#" className="hover:text-blue-700 hover:underline">Technology & Innovation</a></li>
                <li><a href="#" className="hover:text-blue-700 hover:underline">Case Studies</a></li>
                <li><a href="#" className="hover:text-blue-700 hover:underline">Industry News</a></li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-xl mb-4 text-blue-900 border-b pb-2">Recent Posts</h3>
              <ul className="space-y-3">
                {recentPosts.map(post => (
                  <li key={post.slug}>
                    <button 
                      onClick={() => handlePostSelect(post.slug)}
                      className="font-medium text-gray-800 hover:text-blue-700 text-left w-full"
                    >
                      {post.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-xl mb-4 text-blue-900 border-b pb-2">Follow Us</h3>
              <div className="flex space-x-4">
                 <a href="#" className="text-gray-500 hover:text-blue-700"><LinkedinIcon /></a>
                 <a href="#" className="text-gray-500 hover:text-blue-400"><TwitterIcon /></a>
              </div>
            </div>
          </aside>
        </div>
      </div>
      
      {/* <Footer /> */}
    </div>
    <Footer/>
    </>
  );
};

export default Blog;

