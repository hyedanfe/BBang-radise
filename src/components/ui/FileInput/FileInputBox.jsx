import AddImageIcon from '@assets/AddImageIcon';
import DefaultImagePreview from '@assets/DefaultImagePreview.png';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FileInputBoxStyle = styled.div`
  display: flex;
`;

const PlusImageStyle = styled.input`
  display: none;
`;

const PreviewImageWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  margin: 10px;
`;

const PreviewImageStyle = styled.img`
  object-fit: cover;
  border-radius: 8px;
  width: 71px;
  height: 71px;
`;

const DeleteButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -20px;
`;

const DeleteButtonStyle = styled.button`
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 20px;
  height: 20px;
  font-size: 10px;
  color: #fff;
`;

function FileInputBox({ id, label, multiple, maxfilenumber = 1, ...rest }) {
  const fileRef = useRef();
  const [images, setImages] = useState([]);

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleChange = (e) => {
    const targetFiles = e.target.files;
    const targetFilesArray = Array.from(targetFiles).slice(0, maxfilenumber);

    const selectedFiles = targetFilesArray.map((file) => URL.createObjectURL(file));

    setImages((prev) => prev.concat(selectedFiles));
  };

  return (
    <FileInputBoxStyle>
      <div>
        <label htmlFor={id}>{label}</label>
        <div onClick={handleClick}>
          <AddImageIcon stroke="var(--primary-01)" width="71px" />
        </div>
        <PlusImageStyle id={id} aria-label={label} name={id} ref={fileRef} type="file" multiple={multiple} accept="image/*" onChange={handleChange} maxfilenumber={maxfilenumber} {...rest} />
      </div>
      {images.length > 0 ? (
        images.map((url, i) => (
          <PreviewImageWrapper key={url}>
            <PreviewImageStyle src={url} className="hidden" width="160" height="160" alt={`image${i}`} />
            <DeleteButtonWrapper>
              <DeleteButtonStyle type="button" onClick={() => setImages(images.filter((e) => e !== url))}>
                x
              </DeleteButtonStyle>
            </DeleteButtonWrapper>
          </PreviewImageWrapper>
        ))
      ) : (
        <PreviewImageWrapper>
          <PreviewImageStyle src={DefaultImagePreview} alt="" />
        </PreviewImageWrapper>
      )}
    </FileInputBoxStyle>
  );
}

FileInputBox.propTypes = {
  id: PropTypes.string,
  multiple: PropTypes.bool,
  label: PropTypes.string,
  maxfilenumber: PropTypes.number,
};

export default FileInputBox;
