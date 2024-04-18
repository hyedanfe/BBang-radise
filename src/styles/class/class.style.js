import styled from 'styled-components';

export const ClassAddWrapper = styled.div`
  width: 100%;
  padding-top: 96px;
`;

// file input
export const FileInputBoxStyle = styled.div`
  display: flex;
`;

export const PlusImageStyle = styled.input`
  display: none;
`;

export const PreviewImageWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  margin: 10px;
`;

export const PreviewImageStyle = styled.img`
  object-fit: cover;
  border-radius: 8px;
  width: 71px;
  height: 71px;
`;

export const DeleteButtonWrapper = styled.div`
  position: absolute;
  right: -5px;
  top: -5px;
`;

export const DeleteButtonStyle = styled.button`
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 20px;
  height: 20px;
  font-size: 10px;
  color: #fff;
`;
