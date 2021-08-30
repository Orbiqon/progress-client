import React from 'react';
import { Button, BackButton } from 'components/Button';

function IFrame({ onClick }) {
  return (
    <div>
      <iframe
        src="https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=678293&appt_type_ids=[131371,131372,134619]"
        // style="width:100%; height: 100%; min-height:600px; border:0px"
        className="w-100% h-100% 2xl:max-w-lg 2xl:m-auto 2xl:px-10"
        style={{ minHeight: '629px' }}
      ></iframe>
      <div className="flex pb-20 justify-center mt-20">
        <div className="flex items-center mr-20">
          <BackButton value="Back" color="black" />
        </div>
        {/* <Link to="/i-frame"> */}
        <Button
          value="learn more"
          color="green"
          width={120}
          height={32}
          DeWidth="120"
          DeHeight="66"
          onClick={onClick}
        />
        {/* </Link> */}
      </div>
    </div>
  );
}

export default IFrame;
