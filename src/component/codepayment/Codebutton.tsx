import React, { useEffect, useRef } from 'react';
import code from '@code-wallet/elements';


const Codebutton = ({price}) => {
    const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { button } = code.elements.create('button', {
      currency: 'usd',
      destination: 'FyADBZXgbatVndStsK7L66FRSeVsPgMjVaTeGrW2iGMU',
      amount: price,

    });

    button.mount(el.current!);
  }, []);
  return (
    <div className='mb-5' ref={el} />
  )
}

export default Codebutton