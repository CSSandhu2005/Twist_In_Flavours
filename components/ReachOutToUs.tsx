"use client";
import React from "react";

export default function ReachOutToUs() {
  return (
    <div className="max-w-6xl w-full mx-auto text-gray-800 py-10 px-4 lg:px-0">
      <span className="px-2 py-1 text-xs border border-[#00345b] rounded-full text-[#00345b]/90">
        Reach Out To Us
      </span>

      <h1 className="text-4xl font-bold text-left mt-4">
        We'd love to Hear From You.
      </h1>

      <p className="text-left mt-4">
        Or just reach out manually to
        <a
          href="mailto:contact@example.com"
          className="text-[#00345b]/90 hover:underline ml-1"
        >
          contact@example.com
        </a>
      </p>

      <div className="grid md:grid-cols-3 mt-4 gap-8">
        {/* Email */}
        <div className="bg-[#f0f0ee] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <svg
            className="text-[#00345b] bg-[#00345b]/20 p-2.5 aspect-square rounded-full size-10"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.505 4.505 0 0 0 12 7.5zm0 7.5A3 3 0 1 1 15 12a3.004 3.004 0 0 1-3 3zm4.75-7.75a.75.75 0 1 0 .75.75.75.75 0 0 0-.75-.75z"
            />
          </svg>

          <p className="text-lg font-bold mt-2">DM Support</p>
          <p className="text-gray-500 mt-1 mb-4">
            Our team can respond in real time. You are just a DM Away!, DM us on
            Instagram
          </p>
          <a
            href="https://www.instagram.com/twist_in_flavours/?hl=en"
            target="_blank"
            className="text-[#00345b]/90 font-semibold"
          >
            instagram.com/twist_in_flavours
          </a>
        </div>

        {/* Visit */}
        <div className="bg-[#f0f0ee] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <svg
            className="text-[#00345b] bg-[#00345b]/20 p-2.5 aspect-square rounded-full size-10"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22.875 19.125H21.75V9.309a1.125 1.125 0 0 0-.375-2.184h-3.75V4.809a1.125 1.125 0 0 0-.375-2.184H3.75a1.125 1.125 0 0 0-.375 2.184v14.316H2.25a1.125 1.125 0 1 0 0 2.25h20.625a1.125 1.125 0 1 0 0-2.25"
              fill="currentColor"
            />
          </svg>
          <p className="text-lg font-bold mt-2">Visit Our Cafe</p>
          <p className="text-gray-500 mt-1 mb-4">
            Visit our Cafe in real life.
          </p>
          <span
            className="text-[#00345b]/90 font-semibold"
            onClick={() => {
              window.open(
                "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MgYIAhBFGDsyDQgDEC4YrwEYxwEYgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEC4YQNIBCDI5MDlqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTGavUbCmds7MdD3n9AMc8iU&daddr=Twist+in+Flavours+Cafe+%26+Restaurant,+Snehnagar,+Konkanwadi,+Chhatrapati+Sambhajinagar,+Maharashtra+431005",
                "_blank"
              );
            }}
          >
            Twist in Flavours Cafe & Restaurant, Snehnagar, Konkanwadi,
            Chhatrapati Sambhajinagar, Maharashtra 431005
          </span>
        </div>

        {/* Call */}
        <div className="bg-[#f0f0ee] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <svg
            className="text-[#00345b] bg-[#00345b]/20 p-2.5 aspect-square rounded-full size-10"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="m19 13.513-4.415-1.98a1.87 1.87 0 0 0-1.886.243l-2.091 1.781c-1.22-.66-2.478-1.91-3.14-3.113l1.787-2.125a1.88 1.88 0 0 0 .028-1.89L7.488 2A1.88 1.88 0 0 0 5.539.89A5.65 5.65 0 0 0 .625 6.5c0 7.651 6.224 13.875 13.875 13.875a5.65 5.65 0 0 0 5.61-4.914A1.88 1.88 0 0 0 19 13.513"
              fill="currentColor"
            />
          </svg>
          <p className="text-lg font-bold mt-2">Call Us Directly</p>
          <p className="text-gray-500 mt-1 mb-4">
            Available during working hours.
          </p>
          <span
            className="text-[#00345b]/90 font-semibold"
            onClick={() => {
              window.location.href = "tel:+919960302200";
            }}
          >
            +91-9960302200
          </span>
        </div>
      </div>
    </div>
  );
}
