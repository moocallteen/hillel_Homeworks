const buttonInfo = {
    text: 'Button',
}

const buttonStyle = {
    color: 'red',
    border: '1px solid red',
    width: '100px',
    height: '50px',
}

const newButton = {
    ...buttonInfo,
    ...buttonStyle,
}

console.table(newButton);