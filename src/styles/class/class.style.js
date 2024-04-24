import styled from 'styled-components';

export const ClassAddWrapper = styled.div`
  width: 100%;
  position: reltaive;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media all and (min-width: 768px) {
    flex-direction: row;
    position: relative;
    padding-top: 120px;
    gap: 100px;
  }
`;

export const ClassFormText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  word-break: keep-all;

  @media all and (min-width: 768px) {
    width: 500px;
  }
`;

export const ClassFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media all and (min-width: 768px) {
    width: 86%;
    padding-top: 10px;
    display: grid;
    column-gap: 50px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fill);
  }
`;

// file input
export const FileInputBoxStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  column-gap: 2.4%;
  row-gap: 10px;
  margin-top: 10px;
  padding: 0 3px;
`;

export const PlusImageStyle = styled.input`
  display: none;
`;

export const PreviewImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 23%;
  aspect-ratio: 1/1;

  @media all and (min-width: 768px) {
    width: 18%;
  }
`;

export const PreviewImageStyle = styled.img`
  object-fit: cover;
  border-radius: 8px;
  width: 100%;
  height: auto;
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

export const ClassFormButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  bottom: -160px;
  width: 100%;

  @media all and (min-width: 768px) {
    margin-top: 80px;
    position: absolute;
    left: 0px;
    top: 400px;
    width: 25%;
  }
`;
