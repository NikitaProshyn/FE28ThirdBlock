import React, { FC, ReactNode } from 'react';

import ThemeContext, { Theme } from './Context';

type ThemeProviderProps = {
   theme: Theme;
   onChangeTheme: () => void;
   children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({
   theme,
   onChangeTheme,
   children,
}) => {
   return (
      <ThemeContext.Provider value={{ theme, onChangeTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};
