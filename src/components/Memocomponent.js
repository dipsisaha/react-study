import  React from 'react';

function Memocomponet(prop) {
    console.log("MEMO COMPONENT")
 return(
     <div>Memo component {prop.name}</div>
 )
}

export default React.memo(Memocomponet)