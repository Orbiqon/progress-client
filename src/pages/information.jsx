import React from 'react';
import { Container } from 'Layout';
import { Box } from 'components/Box';
import { MobileForm } from 'components/Form';

function Information() {
  return (
    <Container>
      <>
        <div className="2xl:pt-80 sm:pt-60 mx-20">
          <div className="heading pb-13">Testimonials & FAQ</div>
          <div className="content 2xl:text-18 text-center sm:mb-40 2xl:mb-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            lacinia ex, vitae scelerisque nisl. Sed ac velit sit amet odio
            rutrum dignissim sed ac felis. Mauris convallis magna lectus, id
            blandit metus volutpat non.
          </div>
          <div className="2xl:flex">
            <div className="2xl:mr-30">
              <Box
                heading="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac elit "
                detail="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac velit sit amet
odio rutrum dignissim sed ac felis.
"
              />
              <Box
                heading="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac elit "
              />
              <Box
                heading="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac elit "
              />
            </div>
            <div>
              <Box
                heading="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac elit "
              />
              <Box
                heading="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac elit "
              />
            </div>
          </div>
        </div>
        <div className="bg-gradient-light-blue 2xl:mt-100 px-20 pt-40 pb-20">
          <div className="text-white h-230 rounded-sm bg-white">s</div>
        </div>
        <div className="mb-_40 mt-80 2xl:mx-auto 2xl:max-w-lg">
          <MobileForm />
        </div>
      </>
    </Container>
  );
}

export default Information;
