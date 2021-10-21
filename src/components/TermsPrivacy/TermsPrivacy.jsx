import React, { useEffect } from 'react';
import { staticDataService } from 'api';
import { useFetch } from 'hooks';
import ReactHtmlParser from 'react-html-parser';

function TermsPrivacy({ heading }) {
  const { data, status } = useFetch(staticDataService, {
    variables: heading,
  });

  useEffect(() => {
    if (data) console.log(data, 'asad');
  }, [data]);

  return (
    <div className="sm:mx-20 mb-100 mt-60 sm:mb-40 max-w-lg m-auto px-100 sm:px-0">
      <div className="heading pb-13">
        {ReactHtmlParser(data && data[0].title.rendered)}
      </div>
      {ReactHtmlParser(data && data[0].content.rendered)}
    </div>
  );
}

export default TermsPrivacy;
