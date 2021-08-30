import React, { useState, useEffect } from 'react';
import { BubbleLoading } from 'components/Loading';
import { Container } from 'Layout';
import { camelCasetoNormal, colorLoader } from 'utils';
import { CategoryScore } from 'components/CategoryScore';
import { useLocation } from 'react-router-dom';
import BookCallVideo from 'components/BookCallVideo/BookCallVideo';
import HealthVideo from 'pages/videoplayer';

function HealthScore() {
  const [bubbleValue, setBubbleValue] = useState(20);
  const location = useLocation();
  const [scores, setScores] = useState();
  const [videos, setVideos] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (location) {
      const data = JSON.parse(location.state.data);
      setScores(data.payload);
      setVideos(data.video);
    }
  }, [location]);
  console.log(scores, 'khu', videos);
  return (
    <Container questionaire={true}>
      {scores && (
        <>
          <div className="my-80">
            <BubbleLoading
              noOfBubbles="20"
              parentClass="maindiv"
              childClass="div2"
              childHeight="22"
              value={Math.round(scores.health.health_score)}
            >
              <div id="maindiv" className="m-auto relative">
                <div className="centerText text-center flex flex-col justify-center h-100%">
                  <div
                    className={`text-${colorLoader(
                      Math.round(scores.health.health_score)
                    )} font-display text-56 flex justify-center items-center h-90% w-95%`}
                  >
                    {Math.round(scores.health.health_score)}
                  </div>
                </div>
              </div>
            </BubbleLoading>
            <div className="mt-40 mb-20 font-display text-center text-blue sub-heading font-bold">
              Your health score
            </div>
            <div className="flex justify-center">
              <div className="sm:w-90% 2xl:w-30% font-display text-base text-dark-grey  text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies sem orci, ac pellentesque nunc viverra sed.
                Curabitur luctus ligula quam, ut accumsan lectus efficitur eu.
                Cras ut odio a neque imperdiet scelerisque
              </div>
            </div>
          </div>
          <div className="2xl:flex 2xl:justify-center 2xl:flex-wrap 2xl:pb-168  2xl:max-w-lg 2xl:m-auto 2xl:px-100">
            {scores.categories.map((item, index) => (
              <div className="grid-item" key={index}>
                <CategoryScore
                  parentClass={`${item.category_name.toLowerCase()}-score`}
                  childClass={`bubble-${item.category_name.toLowerCase()}`}
                  title={item.category_name}
                  description={item.category_description}
                  score={Math.round(item.percentage)}
                />
              </div>
            ))}
          </div>
          <div className="">
            <BookCallVideo
              step={false}
              title={videos.description}
              description={false}
              onClick={() => setOpen(true)}
            />
          </div>
        </>
      )}
      <HealthVideo open={open} setOpen={setOpen} />
    </Container>
  );
}

export default HealthScore;
