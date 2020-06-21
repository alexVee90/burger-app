import { useEffect, useRef } from 'react';

export default (funcToExecuteInEffect, dependencies) => {
  let firstRender = useRef(true);

  return useEffect( () => {

    if(firstRender.current) {
      firstRender.current = false;
    } else {
      funcToExecuteInEffect();
    }

  }, dependencies);
  
}