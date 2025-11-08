import React, { useState } from "react";
import "./index.css";
import DashboardLayout from "./components/DashboardLayout";
import ProfileHeader from "./components/ProfileHeader";
import FeedCard from "./components/FeedCard";
import SendForm from "./components/SendForm";
import { samplePosts } from "./data/samplePosts";

const App: React.FC = () => {
  const [posts, setPosts] = useState(samplePosts);
  const [balance, setBalance] = useState(42.13);

  const handleSend = ({ recipient, amount, message }: { recipient: string; amount: number; message?: string }) => {
    // update balance locally for demo
    setBalance((b) => {
      const next =  +(b - amount).toFixed(2);
      return next;
    });
    // add a new post to feed
    setPosts((p) => [
      { id: Date.now(), author: "You", text: `Sent ${amount} to ${recipient}. ${message ?? ""}`, time: "now" },
      ...p,
    ]);
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <ProfileHeader name="Shalin" handle="@shalin0078" balance={balance} />
          <SendForm onSend={handleSend} />
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="text-lg font-semibold">Feed</div>
          <div className="space-y-3">
            {posts.map((post, i) => (
              <FeedCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default App;
