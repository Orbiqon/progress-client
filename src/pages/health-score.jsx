import React from 'react';
import { BubbleLoading } from 'components/Loading';
import { bubblesCircle } from 'utils';

function HealthScore() {
  return (
    <>
      <div className="pb-100">
        <BubbleLoading
          radius="80"
          noOfBubbles="20"
          parentDiv="parentdiv"
          childDiv="div2"
          value={14}
        >
          <div id="parentdiv"></div>
        </BubbleLoading>
        <div className="mb-20 pt-263 text-center text-blue sub-heading font-bold">
          Your health score
        </div>
        <div className="content text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className="flex">
        <div>
          <BubbleLoading
            radius="39"
            noOfBubbles="20"
            parentDiv="childishDiv"
            childDiv="div3"
            value={14}
          >
            <div id="childishDiv"></div>
          </BubbleLoading>

          <div className="mt-70%">Lorem ipsum dolor</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            pharetra orci et facilisis dictum. Praesent eu convallis turpis.
            Donec vitae accumsan risus.
          </div>
        </div>
        <div>
          <BubbleLoading
            radius="39"
            noOfBubbles="20"
            parentDiv="childishDiv1"
            childDiv="div3"
            value={14}
          >
            <div id="childishDiv1" className="relative bg-white m-46"></div>
          </BubbleLoading>

          <div className="mt-70%">Lorem ipsum dolor</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            pharetra orci et facilisis dictum. Praesent eu convallis turpis.
            Donec vitae accumsan risus.
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <BubbleLoading
            radius="39"
            noOfBubbles="20"
            parentDiv="childishDiv2"
            childDiv="div3"
            value={14}
          >
            <div id="childishDiv2" className="relative bg-white m-46"></div>
          </BubbleLoading>

          <div className="mt-70%">Lorem ipsum dolor</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            pharetra orci et facilisis dictum. Praesent eu convallis turpis.
            Donec vitae accumsan risus.
          </div>
        </div>
        <div>
          <BubbleLoading
            radius="39"
            noOfBubbles="20"
            parentDiv="childishDiv3"
            childDiv="div3"
            value={14}
          >
            <div id="childishDiv3" className="relative bg-white m-46"></div>
          </BubbleLoading>

          <div className="mt-70%">Lorem ipsum dolor</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            pharetra orci et facilisis dictum. Praesent eu convallis turpis.
            Donec vitae accumsan risus.
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <BubbleLoading
            radius="39"
            noOfBubbles="20"
            parentDiv="childishDiv4"
            childDiv="div3"
            value={14}
          >
            <div id="childishDiv4" className="relative bg-white m-46"></div>
          </BubbleLoading>

          <div className="mt-70% text-center">Lorem ipsum dolor</div>
          <div className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            pharetra orci et facilisis dictum. Praesent eu convallis turpis.
            Donec vitae accumsan risus.
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthScore;
