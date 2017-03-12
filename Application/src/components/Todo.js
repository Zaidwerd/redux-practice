import React from 'react';

const Todo = ({ text, id }) => (
   <li>
     {`${id} - ${text}`}
   </li>
)

export default Todo;
