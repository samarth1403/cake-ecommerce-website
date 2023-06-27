import React from 'react'
import { Modal } from "antd";

const CustomModal = (props) => {
  const { open, hideModal, performAction, title, modalContent } = props;
  return (
    <Modal
      title={title}
      open={open}
      onOk={performAction}
      onCancel={hideModal}
      okText="Ok"
      cancelText="Cancel"
    >
      <h3 className='font-roboto font-bold text-lg'>{modalContent}</h3>
    </Modal>
  );
}

export default CustomModal;