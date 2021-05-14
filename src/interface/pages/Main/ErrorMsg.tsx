import React from 'react';

const ErrorMsg: React.FC<{ message: string }> = ({ message }) => (<div style={{ margin: 'auto', paddingTop: 100 }}>{message}</div>);

export default ErrorMsg;
