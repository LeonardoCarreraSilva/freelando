import { ThemeProvider } from "@emotion/react";

const tema ={
    cores:{
        branco: '',
        atencao: '',
        focus: '',
        primarias: {
            a: '#5754ED',
            b: '',
            c: '',
        },
        secundarias:{
            a: '#EBEAF9',
            b: '',
            c: '',
        },
        neutras:{
            a: '',
            b: '',
            c: '',
            d: ''
        },
        dark:{
            a: '',
            b: ''
        }
    },
    espacementos:{
        xxs: '4px',
        xs: '8px',
        s: '16px',
        l: '32px',
        xl: '48px',
        xxl: '64px'
    }
}

export const ProvedorTema= ({ children }) =>{
    return <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
}