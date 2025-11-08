import React, { useState } from "react";

type Props = {
  onSend?: (payload: { recipient: string; amount: number; message?: string }) => void;
};

const SendForm: React.FC<Props> = ({ onSend }) => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!recipient || !amount || Number(amount) <= 0) {
      setError("Please provide a valid recipient and amount.");
      return;
    }
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 700));
      onSend?.({ recipient, amount: Number(amount), message });
      setRecipient("");
      setAmount("");
      setMessage("");
    } catch (err) {
      setError("Send failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="fade-in-up bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg shadow-md space-y-3 card-lift">
      <div>
        <label className="text-sm block mb-1">Recipient</label>
        <input
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full p-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent transition-shadow focus:shadow-outline"
          placeholder="0x123... or username"
        />
      </div>
      <div>
        <label className="text-sm block mb-1">Amount</label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
          type="number"
          min="0"
          step="0.01"
          className="w-full p-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent transition-shadow focus:shadow-outline"
          placeholder="0.00"
        />
      </div>
      <div>
        <label className="text-sm block mb-1">Message (optional)</label>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent transition-shadow focus:shadow-outline"
          placeholder="For coffee ☕"
        />
      </div>

      {error && <div className="text-sm text-red-500">{error}</div>}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded shadow hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 transform transition-transform hover:-translate-y-0.5"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default SendForm;
