import ReactModal from 'react-modal';
import React from 'react';
import { useOpenCreateEventModal } from '../../common/AppStore';

const CreateEventModal = ({}) => {
  const { isOpenCreateEventModal, closeCreateEventModal } = useOpenCreateEventModal();
  return (
    <ReactModal
      isOpen={isOpenCreateEventModal}
      onRequestClose={closeCreateEventModal}
      overlayClassName="detail-nft-overlay"
      className="Modal"
      ariaHideApp={false}
    >
      <div>Create Event</div>
    </ReactModal>
  );
};

export default CreateEventModal;
