import React, { useEffect, useState } from 'react';
import { Container } from 'Layout';
import { Button } from 'components/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { staticDataService } from 'api';
import { EntryPoint } from 'components/Modal';
import { useFetch } from 'hooks';
import { Link } from 'react-router-dom';
import { LINKS } from 'utils';

function OrderDna() {
  const { ORDER_DNA } = LINKS;
  const [open, setOpen] = useState(false);

  const { data, status } = useFetch(staticDataService, {
    variables: `order-dna`,
  });

  const [element = {}] = data || [];
  const { acf = {} } = element;

  const { heading, description, header_image } = acf;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <>
          <div className="pt-60 sm:mx-0 mb-100 sm:mb-40 max-w-lg m-auto px-100 sm:px-0">
            <div className="flex w-100% justify-between sm:flex-col">
              <div className="sm:mx-20 sm:w-90% w-40% lg:w-60% mr-100 sm:mr-0">
                <div className="heading text-left pb-20">{heading}</div>
                <div className="content mb-40 text-18">{description}</div>
              </div>
              <div className="sm:w-full w-60% lg:w-40%">
                <iframe
                  src="https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=678293&require_offering=true&immediate_checkout=true&offering_id=65818&hide_package_images=false&hide_embed_title=false&primary_color=ffffff"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '600px',
                    border: '0px',
                    marginTop: '16px',
                  }}
                ></iframe>
                <p className="m-16">
                  Booking Provided by{' '}
                  <a href="https://gethealthie.com">Healthie</a>
                </p>
              </div>
            </div>
          </div>
        </>
      </Container>
      <EntryPoint open={open} setOpen={setOpen} />
    </>
  );
}

export default OrderDna;
