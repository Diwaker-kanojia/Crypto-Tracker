import React, { useState } from "react";

const CoinInfo = ({ heading, desc }) => {
  const shortDesc =
    desc.slice(0, 400) + "<p style='color:#888'> Read More...</p>";
  const longDesc = desc + "<p style='color:#888'> Read less...</p>";
  const [flag, setFlag] = useState(false);
  return (
    <div className="block w-full md:w-[95%] lg:w-[95%] bg-[#f3f3f3] dark:bg-darkgrey md:my-6  md:mx-5 lg:mx-auto rounded-xl p-4">
      <h2 className="text-2xl font-['Inter'] font-semibold py-4 dark:text-white">
        {heading}
      </h2>
      {desc.length > 200 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="pb-4 cursor-pointer dark:text-white"
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
        />
      ) : (
        <p
          className="pb-4 cursor-pointer dark:bg-white"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      )}
    </div>
  );
};

export default CoinInfo;
