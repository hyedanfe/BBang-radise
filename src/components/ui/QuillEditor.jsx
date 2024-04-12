import React, { ReactChild, ReactFragment, RefObject, useMemo, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomToolbar from '@components/ui/CustomToolbar';

const formats = ['font', 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'align', 'color', 'background', 'size', 'h1'];

function QuillEditor() {
  const [values, setValues] = useState();

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: { CustomToolbar },
      },
    };
  }, []);

  return <ReactQuill theme="snow" modules={modules} formats={formats} onChange={setValues} />;
}

export default QuillEditor;
