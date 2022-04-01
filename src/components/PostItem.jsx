import { useState } from 'react';
import Icon from './UI/Icon';

export default function PostItem(props) {
  const [darkModeInput, setDarkModeInput] = useState(false);
  function deleteHandler() {
    // console.log('buvo paspausta delete', props.id);
    props.onDelete(props.id);
  }

  const darkModeClass = darkModeInput === true ? 'dark-mode-item' : '';
  return (
    <div className={'post-item ' + darkModeClass}>
      <div>
        <input
          onChange={(e) => setDarkModeInput(e.target.checked)}
          value={darkModeInput}
          type='checkbox'
          id={'d_' + props.id}
        />
        <label htmlFor={'d_' + props.id}>{!darkModeInput ? 'Dark' : 'Light'} mode?</label>
      </div>
      <h3>{props.title}</h3>
      <p>
        <i>{props.author}</i>
      </p>
      <p className='body'>{props.body}</p>
      <button onClick={deleteHandler}>
        <Icon icon='fa-trash-o' />
      </button>
    </div>
  );
}
