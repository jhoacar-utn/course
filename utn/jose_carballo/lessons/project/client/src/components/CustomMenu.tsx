import { Menu, MenuItem, Typography } from "@mui/material"

interface Props{
  anchor?: null | HTMLElement;
  data?: any;
  handleClose: () => void;
  vertical: number | "top" | "center" | "bottom";
  horizontal: number | "center" | "left" | "right"
}
export const CustoMenu = ({anchor, data, handleClose, vertical, horizontal}: Props) => {
  return (
    <Menu
    id="menu-appbar"
    anchorEl={anchor}
    anchorOrigin={{
      vertical: vertical,
      horizontal: horizontal,
    }}
    keepMounted
    transformOrigin={{
      vertical: "top",
      horizontal: horizontal,
    }}
    open={Boolean(anchor)}
    onClose={handleClose}
    sx={{
      display: { xs: 'block', md: 'none' },
    }}
  >
    {data?.map((page:any) => (
      <MenuItem key={page} onClick={handleClose}>
        <Typography textAlign="center">{page}</Typography>
      </MenuItem>
    ))}
  </Menu>
  )
}
