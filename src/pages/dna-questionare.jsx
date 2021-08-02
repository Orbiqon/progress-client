import React from 'react';
import { Container } from 'Layout';
import { Button } from 'components/Button';
import { BubbleLoading } from 'components/Loading';

function DnaQuestionare() {
  return (
    <Container>
      <>
        {/* <div className="sm:hidden">
          <BubbleLoading
            radius="108"
            noOfBubbles="20"
            parentDiv="parentdiv"
            childDiv="div1"
            value={14}
          >
            <div id="parentdiv"></div>
          </BubbleLoading>
        </div> */}
        <div></div>
        <div className="mt-40 sub-heading text-blue text-center pb-20">
          DNA Questionnaire
        </div>
        <div className="content text-center mx-30 pb-40">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ultricies sem orci, ac pellentesque nunc viverra sed. Curabitur luctus
          ligula quam, ut accumsan lectus efficitur eu. Cras ut odio a neque
          imperdiet scelerisque
        </div>
        <div className="flex flex-col items-center">
          <div>
            <div className="content opacity-10 mx-20 mb-20">
              11. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </div>
            <div className="mx-20 content font-bold">
              12. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </div>
            <div className="mx-20 flex">
              <div className="flex  mr-40 label text-dark-grey">
                <input type="radio" className="mt-4 mr-10" />
                <div>True</div>
              </div>
              <div className="flex label text-dark-grey">
                <input type="radio" className="mt-4 mr-10" />
                <div>False</div>
              </div>
            </div>
            <div className="mt-16 mx-20 mb-53">
              <Button width="70" height="32" color="blue" value="Back" />
            </div>
          </div>
        </div>
      </>
    </Container>
  );
}

export default DnaQuestionare;
