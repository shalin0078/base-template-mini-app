import React from "react";

export type Post = {
  id: string | number;
  author: string;
  avatar?: string;
  text: string;
  time?: string;
};

const FeedCard: React.FC<{ post: Post; index?: number }> = ({ post, index = 0 }) => {
  const style = { animationDelay: `${index * 70}ms` } as React.CSSProperties;
  return (
    <div className="stagger-child bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg shadow-sm card-lift" style={style}>
      <div className="flex gap-3">
        <img
          src={post.avatar ?? "https://avatars.dicebear.com/api/male/seed.svg"}
          alt={post.author}
          className="w-10 h-10 rounded-full object-cover transform transition-transform duration-200 hover:scale-105"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">{post.author}</div>
            <div className="text-xs text-gray-400">{post.time ?? "just now"}</div>
          </div>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{post.text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
