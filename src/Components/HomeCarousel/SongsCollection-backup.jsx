import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const SongsCollection = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="songsCollection">
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Typography sx={{ minWidth: 150 }}>All</Typography>
          <Typography sx={{ minWidth: 150 }}>Trending Songs</Typography>
          <Typography sx={{ minWidth: 150 }}>New Songs</Typography>
          <Typography sx={{ minWidth: 150 }}>Old Songs</Typography>
          <Tooltip title="">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Typography
                variant="body1"
                component="span"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Moods & Genres
              </Typography>
            </IconButton>
          </Tooltip>
          <Typography sx={{ minWidth: 150 }}>Album</Typography>
          <Typography sx={{ minWidth: 150 }}>Radio</Typography>
          <Typography sx={{ minWidth: 150 }}>Podcast</Typography>
          <Typography sx={{ minWidth: 150 }}>My Music</Typography>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Box sx={{ maxHeight: 240, overflowY: "auto" }}>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                Party
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                Romance
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                90s and 2000s
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                Bhakti
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                Indie
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                EDM
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                Ghazals
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                Workout
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                Stars
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                Retro
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                Wedding
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                Kids
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                Dance
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body1" component="span">
                Friendship
              </Typography>
            </MenuItem>
          </Box>
        </Menu>
      </div>
    </>
  );
};

export default SongsCollection;