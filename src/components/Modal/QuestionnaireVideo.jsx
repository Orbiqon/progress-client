import React from 'react';
import { Button, BackButton } from 'components/Button';
import { VideoCard } from 'components/VideoCard';

function QuestionnaireVideo() {
  return (
    <div className="bg-video bg-cover bg-no-repeat h-656">
      <div className="sub-heading text-white font-medium pl-51 pr-30 pt-72 pb-20">
        Questionnaire Video
      </div>
      <div className="mb-253 ">
        <VideoCard />
      </div>
      <div className="flex justify-center">
        <div className="pr-20">
          <BackButton value="Back" color="white" width="70" height="32" />
        </div>
        <div>
          <Button value="next" color="green" width="70" height="32" />
        </div>
      </div>
    </div>
  );
}

export default QuestionnaireVideo;
