import * as React from "react";
import styled from "styled-components";

export const withLocalStorage = (ComponentToWrap: any) => {
  const saveKey = (key, value) => {
    localStorage.setItem(key, value);
  };

  const loadKey = (key) => {
    return localStorage.getItem(key);
  };

  const removeKey = (key) => {
    return localStorage.removeItem(key);
  }

  return (props: any) => {
    return <ComponentToWrap {...props} saveKey={saveKey} loadKey={loadKey} removeKey={removeKey} />
  }
}

const NoteEditor = styled.textarea`
  width: 100%;
  height: 180px;
  font-size: 16px;
  font-family: 'PT Sans'
`;

const NoteTitle = styled.label`
  margin-top: 10px;
  display: block;
  font-family: 'Concert One';
  font-size: 16px;
  color: dark-red;
`;

export const Note = (props: any) => {
  let lastValue = "";
  if (props.name && props.loadKey) {
    lastValue = props.loadKey(props.name);
  }

  const [noteText, setNoteText] = React.useState(lastValue || "");
  const saveNote = (value) => {
    setNoteText(value);
    if (props.name && props.saveKey) {
      props.saveKey(props.name, value);
    }

  };
  return (
    <div style={{width: '100%', marginBottom: '20px'}}>
      <NoteTitle>{props.title}</NoteTitle>
      <NoteEditor value={noteText} onChange={(e) => saveNote(e.target.value)} />
    </div>

  );
}

export const NoteWithStorage = withLocalStorage(Note);

export const HOC = (props: any) => {
  return (
    <div style={{width: '100%'}}>
      <Note name="withoutStorage" title='This Note is NOT SAVED' />
      <NoteWithStorage name="withStorage" title='This Note is SAVED' />
    </div>
  );
};
