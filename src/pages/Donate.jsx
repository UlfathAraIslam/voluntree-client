import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Donate = () => {
  const [amount, setAmount] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();

    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Please enter a valid donation amount.");
      return;
    }

    toast.success(`Thank you for donating $${amount}!`);
    setAmount("");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left - Image */}
        <div>
          <img
            src="https://plus.unsplash.com/premium_vector-1682309404307-2f788cb0190f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
            alt="Donate to Voluntree"
            className="w-full object-cover rounded-lg shadow"
          />
        </div>

        {/* Right - Text & Form */}
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Support Our Mission
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Your donation helps us empower volunteers and uplift communities. Every dollar brings us closer to making a positive impact.
          </p>

          <form
            onSubmit={handleDonate}
            className="bg-base-200 p-6 rounded-lg shadow space-y-4"
          >
            <label className="font-semibold">Donation Amount (USD)</label>
            <input
              type="number"
              min="1"
              step="0.01"
              placeholder="Enter amount"
              className="input input-bordered w-full"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button type="submit" className="btn btn-primary w-full">
              Donate Now
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Donate;
