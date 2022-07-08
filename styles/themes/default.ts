export const themeDefault = {
  borderRadius: '4px',
  view: {
    background: {
      primary: '#ADD8E6',
      secondary: 'white',
    }
  },
  text: {
    fontSize: {
      title: '16px',
      text: '12px',
    },
    color: {
      primary: 'black',
      secondary: 'orange',
    }
  },
  button: {
    color: {
      primary: 'white',
      hoverPrimary: 'white',
    },
    background: {
      primary: '#ADD8E6',
      hoverPrimary: 'orange',
    }
  }
};

export type Theme = typeof themeDefault;
