import React from "react";

type Props = {
  name: string;
  handle?: string;
  balance?: number;
  avatarUrl?: string;
};

const ProfileHeader: React.FC<Props> = ({ name, handle = "@user", balance = 0, avatarUrl }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="header-glow" aria-hidden />
      <div className="fade-in-up bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl shadow-sm card-lift">
        <div className="flex items-center gap-4">
          <img
            src={avatarUrl ?? "https://avatars.dicebear.com/api/identicon/default.svg"}
            alt={`${name} avatar`}
            className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-700 transform transition-transform duration-200 hover:scale-105 animate-pulse-slow"
            style={{ animationDuration: "2.8s" }}
          />

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{handle}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 dark:text-gray-400">Wallet</div>
                <div className="text-lg font-medium text-gray-900 dark:text-gray-100">${balance.toFixed(2)}</div>
              </div>
            </div>
            <div className="mt-3 text-xs text-gray-500">Welcome back — here’s a quick view of your activity.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
