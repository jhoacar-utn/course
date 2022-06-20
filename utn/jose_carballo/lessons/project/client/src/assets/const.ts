
export const sx_stiles_movile = {
  mr: 2,
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};

export const sx_stiles_desktop = {
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 500,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};

export const sx_card_pokemon = {
  backgroundColor:'#f8fcf7d4',
  margin: 2,
  minWidth: 250,
  maxWidth: 300,
  height: 'auto',
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
};

export const sx_custom_card = {
  backgroundColor: '#2e353b',
  margin: '8px auto',
  minWidth: 250,
  maxWidth: 400,
  minHeight: 220,
  borderRadius: 10,
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
 ' &:hover': {
  transform: 'scale3d(1.1, 1.1, 1.1)',
  Index: 10
  }
};
export const sx_img_card = {
  backgroundColor: 'black',
  borderRadius: '50%',
  width : '80%',
  margin: 'auto',
  marginTop: 5
}

export const sx_card_footer = {
  backgroundColor: '#8b949f',
  borderTop: '3px solid #434a54',
  marginTop: 5
}
export const sx_poke_ball = {
  height: 50,
  width: 50,
  position: 'absolute',
  top:16
}

export const sx_box = {
  display: 'flex',
    width: 40,
    alignItems: 'center',
    margin: 'auto'
}