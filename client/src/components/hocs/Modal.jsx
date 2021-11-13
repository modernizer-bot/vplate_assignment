/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectModalMessage } from '../../features/modal/selectors';
import { closeModal } from '../../features/modal/slices';

import { center, fullWidthAndHeight } from '../../styles/mixin';
import Portal from './Portal';

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const modalMessage = useSelector(selectModalMessage);

  const handleForCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <ModalInnerBox>
      <Portal elementId="modal-root">
        <ModalOverlay onClick={handleForCloseModal} modalMessage={modalMessage}>
          <ModalBackground />
          <ModalMessageBox>
            <ModalTextOuterBox>
              <ModalText>{modalMessage}</ModalText>
            </ModalTextOuterBox>
          </ModalMessageBox>
        </ModalOverlay>
      </Portal>
      {children}
    </ModalInnerBox>
  );
}

const ModalInnerBox = styled.div``;

const ModalOverlay = styled.div`
  display: ${({ modalMessage }) => (modalMessage === null ? 'none' : 'block')};
  overflow-y: hidden;
`;

const ModalBackground = styled.div`
  position: fixed;
  z-index: 2;
  ${fullWidthAndHeight}
  background-color: black;
  opacity: 0.8;
`;

const ModalMessageBox = styled.div`
  position: fixed;
  z-index: 3;
  width: 650px;
  height: 200px;
  margin: 200px auto;
  left: 0;
  right: 0;
  animation: appear 0.8s forwards;

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes disappear {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(20px);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.size.deviceSize}) {
    width: 100%;
  }
`;

const ModalTextOuterBox = styled.div`
  ${center}
  width: 90%;
  height: 100%;
  margin: auto auto;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 25px 40px -20px white;
  opacity: 2;
`;

const ModalText = styled.p`
  color: black;
  font-size: ${({ theme }) => theme.font.big};
  font-weight: bold;
`;
