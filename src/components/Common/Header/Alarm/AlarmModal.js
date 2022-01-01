import React from 'react';
import styled from 'styled-components';

const AlarmModal = (props) => {
  const { onClose, maskClosable, showModal, children } = props;

  // 모달 밖의 어두운 영역(ModalWrapper)을 클릭하면 닫히도록 한다
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    <>
      <StyledModalOverlay showModal={showModal} />
      <StyledModalWrapper
        onClick={maskClosable ? onMaskClick : null}
        tabIndex='-1'
        showModal={showModal}
      >
        <StyledModalInner tabIndex='0' className='modal-inner'>
          {children}
        </StyledModalInner>
      </StyledModalWrapper>
    </>
  );
};

const StyledModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.showModal ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 200px;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  height: 150px;
`;

const StyledModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.showModal ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.19);
  z-index: 999;
`;

const StyledModalInner = styled.div`
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

export default AlarmModal;
