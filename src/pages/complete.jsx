import React from 'react';
import { Container } from 'Layout';
import { Button } from 'components/Button';

function Complete() {
  return (
    <Container>
      <>
        <div className="flex flex-col items-center pt-147 ">
          <img src="images/logo/logo-icon.svg" className="h-217 pb-40" />
          <div className="sub-heading text-blue pb-20">Thank you</div>
        </div>
        <div className="content text-center pb-30 mx-20">
          You can go ahead and close this window or learn more on our website,
          we look forward to catching up with you on the discovery call.
        </div>
        <div className="flex justify-center pb-144">
          <Button color="green" value="Learn more" width="108" height="32" />
        </div>
      </>
    </Container>
  );
}

export default Complete;
