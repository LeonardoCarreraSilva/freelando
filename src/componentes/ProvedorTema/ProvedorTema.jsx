import { ThemeProvider } from "@emotion/react";

const tema ={
    cores:{
        branco: '#FFFFFF',
        atencao: '',
        focus: '',
        primarias: {
            a: '#5754ED',
            b: '#D93114',
            c: '',
        },
        secundarias:{
            a: '#F8F8FD',
            b: '',
            c: '',
        },
        neutras:{
            a: '#373737',
            b: '',
            c: '#F5F5F5',
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
    },
    fonteFamily: "'Montserrat', sans-serif"
}

export const ProvedorTema= ({ children }) =>{
    return <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
}