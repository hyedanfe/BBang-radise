import { useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const formats = ['font', 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'align', 'color', 'background', 'size', 'h1', 'image', 'video'];

function QuillEditor() {
  const [values, setValues] = useState();

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ size: ['small', false, 'large', 'huge'] }],
          [{ align: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
          ['link', 'image', 'video'],
        ],
      },
    };
  }, []);

  return <ReactQuill theme="snow" modules={modules} formats={formats} onChange={setValues} style={{ marginTop: '100px' }} />;
}

export default QuillEditor;
