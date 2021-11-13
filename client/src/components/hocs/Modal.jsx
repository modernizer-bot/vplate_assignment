import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Portal from './Portal';

import { selectModalMessage } from '../../features/modal/selectors';
import { closeModal } from '../../features/modal/slices';

import { appear, center, fullWidthAndHeight } from '../../styles/mixin';

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const modalMessage = useSelector(selectModalMessage);

  const handleForCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <ModalWrapper>
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
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div``;

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
  width: ${({ theme }) => theme.size.deviceSize};
  height: 200px;
  margin: 200px auto;
  left: 0;
  right: 0;
  animation: ${appear} 1s forwards;

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

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};
