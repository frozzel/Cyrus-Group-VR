import React, { useEffect } from 'react';

const MeetingsEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    

    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="meetings-iframe-container"
      data-src="https://cyrusgroupinnovations.com/meetings/dennis-hickox?embed=true"
    ></div>
  );
};

export default MeetingsEmbed;