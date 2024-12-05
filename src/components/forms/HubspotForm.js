import React, { useEffect } from 'react';

const HubspotForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '45070224',
          formId: 'ae7ab140-36c4-4162-840e-c1a4eea1666e',
            target: '#hubspotForm'
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Clean up the script if the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return <div id="hubspotForm"></div>;
};

export default HubspotForm;
