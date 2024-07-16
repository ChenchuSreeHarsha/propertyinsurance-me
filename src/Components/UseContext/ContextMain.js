import React, { createContext, useEffect, useState } from 'react';

export const RsContextCreater = createContext();

const ContextMain = ({children}) => {

  const [detailsCon, setDetailsCon] = useState(() => {
    const saved = localStorage.getItem('detailsCon');
    return saved ? JSON.parse(saved) : { inputMoboleNo: '' };
  });

  useEffect(() => {
    localStorage.setItem('detailsCon', JSON.stringify(detailsCon));
  }, [detailsCon]);

  return (
    <div>
        <RsContextCreater.Provider value={{detailsCon , setDetailsCon}}>
            {children}
        </RsContextCreater.Provider>
    </div>
  )
}

export default ContextMain