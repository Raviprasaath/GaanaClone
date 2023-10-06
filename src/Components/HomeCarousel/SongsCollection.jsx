import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import action from '../../action.js'
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

import { useNavigate } from 'react-router-dom';


import { AiOutlineDown } from 'react-icons/ai'

import { Link, useLocation } from 'react-router-dom';


const SongsCollection = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const activeItem = useSelector((state) => state.usersData.activeItem);


  function setActiveItem(){

  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setActiveItem(event.target.innerText);
  };
  
  React.useEffect(()=> {
    dispatch(action.setActiveItem("Home"));    
    navigate('/', { replace: true });    
  }, [])



  const [ category, setCategory ] = React.useState("Moods & Genres");



  const handleSongSelection = (selectedItem) => {    
    dispatch(action.setActiveItem(selectedItem));
  }

  const handleClose = () => {
    setAnchorEl(null);
  };


  const scroll = () => {
    if (activeItem === "Home" || activeItem === "Album" || activeItem === "All Songs") {
      window.scrollTo({
        left: 0, // Use 'left' for horizontal scrolling to the left
        behavior: 'smooth',
      });
    }
  };
  
  React.useEffect(() => {
    scroll();
  }, [activeItem]);

  

  return (
    <>
      <div className="songsCollection">
        <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
          <Link className="list-selector" to="/">         
            <Typography onClick={() => {handleSongSelection("Home"); setCategory("Moods & Genres")}} className={activeItem === "Home" ? "active" : ""} sx={{ minWidth: 150 }}>
              Home
            </Typography>
          </Link>
          <Link className="list-selector" to="/album">                 
            <Typography onClick={() => {handleSongSelection("Album"); setCategory("Moods & Genres")}} className={activeItem === "Album" ? "active" : ""} sx={{ minWidth: 150 }}>Album</Typography>
          </Link>
          <Link className="list-selector" to="/allsongs">         
            <Typography onClick={() => {handleSongSelection("All Songs"); setCategory("Moods & Genres")}} className={activeItem === "All Songs" ? "active" : ""}  sx={{ minWidth: 150 }}>              
                All Songs
            </Typography>    
          </Link>              
          
          <Link className="list-selector" to="/artist">         
            <Typography onClick={() => {handleSongSelection("Artist"); setCategory("Moods & Genres")}} className={activeItem === "Artist" ? "active" : ""}  sx={{ minWidth: 150 }}>            
              Artist
            </Typography>
          </Link>
          <Link className="list-selector" to="/happy">         
            <Typography onClick={() => {handleSongSelection("Happy Mood"); setCategory("Moods & Genres")}} className={activeItem === "Happy Mood" ? "active" : ""}  sx={{ minWidth: 150 }}>            
              Happy Mood
            </Typography>
          </Link>
          <Link className="list-selector" to="/exited">                   
            <Typography onClick={() => {handleSongSelection("Exciting Harmony"); setCategory("Moods & Genres")}} className={activeItem === "Exciting Harmony" ? "active" : ""}  sx={{ minWidth: 150 }}>Exciting Harmony</Typography>
          </Link>

          <Tooltip title="Hover for Access to the Drop-Down Menu">
            <IconButton              
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              // onMouseOver={handleClick}
              onClick={handleClick}
              >
              <Typography
                className={activeItem === "Moods & Genres" ? "active" : ""}
              variant="body1"
              component="span"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
              }} >
                {category} <AiOutlineDown />
              </Typography>
            </IconButton>
          </Tooltip>
          
          <Link className="list-selector" to="/comingsoon">          
            <Typography onClick={() => {handleSongSelection("Radio"); setCategory("Moods & Genres")}} className={activeItem === "Radio" ? "active" : ""} sx={{ minWidth: 150 }}>Radio</Typography>
          </Link>
          <Link className="list-selector" to="/comingsoon">          
            <Typography onClick={() => {handleSongSelection("Podcast"); setCategory("Moods & Genres")}} className={activeItem === "Podcast" ? "active" : ""} sx={{ minWidth: 150 }}>Podcast</Typography>
          </Link>
          <Link className="list-selector" to="/mysongs">          
            <Typography onClick={() => {handleSongSelection("My Music"); setCategory("Moods & Genres")}} className={activeItem === "My Music" ? "active" : ""} sx={{ minWidth: 150 }}>My Music</Typography>
          </Link>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          // onClick={handleClose}
          // onClick={handleClose}
          onClick={() => {handleSongSelection("Moods & Genres");}}

          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "&:before": {
                content: '""', display: "block", position: "absolute", top: 0, right: 14, 
                width: 10, height: 10,
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


              {/* <Link className="list-selector" to="/exited">          
                <MenuItem  onClick={()=>{handleClose(); setCategory("Exciting Harmony");}}>
                    <Typography variant="body1" component="span">
                    Exciting Harmony 
                    </Typography>
                </MenuItem>
              </Link> */}
              
              
              
              
              <Link className="list-selector" to="/sad">          
                <MenuItem  onClick={()=>{handleClose(); setCategory("Sad Songs");}}>
                    <Typography variant="body1" component="span">
                      Sad Songs 
                    </Typography>
                </MenuItem>
              </Link>
              <Link className="list-selector" to="/romance">
                <MenuItem onClick={()=>{handleClose(); setCategory("Romance");}}>
                  <Typography variant="body1" component="span">
                    Romance
                  </Typography>
                </MenuItem>
              </Link>
              <Link className="list-selector" to="/songsfrom90s2000s">
                <MenuItem onClick={()=>{handleClose(); setCategory("90s and 2000s");}}>
                  <Typography variant="body1" component="span">
                    90s and 2000s
                  </Typography>
                </MenuItem>
              </Link>
              
              <Link className="list-selector" to="/comingsoon">
              <MenuItem onClick={()=>{handleClose(); setCategory("Bhakti");}}>
                <Typography variant="body1" component="span">
                  Bhakti
                </Typography>
              </MenuItem>
              </Link>
              <Link className="list-selector" to="/comingsoon">
                <MenuItem onClick={()=>{handleClose(); setCategory("Indie");}}>
                  <Typography variant="body1" component="span">
                    Indie
                  </Typography>
                </MenuItem>
              </Link>
              <Link className="list-selector" to="/comingsoon">
                <MenuItem onClick={()=>{handleClose(); setCategory("EDM");}}>
                  <Typography variant="body1" component="span">
                    EDM
                  </Typography>
                </MenuItem>
              </Link>
              <Link className="list-selector" to="/comingsoon">
                <MenuItem onClick={()=>{handleClose(); setCategory("Ghazals");}}>
                  <Typography variant="body1" component="span">
                    Ghazals
                  </Typography>
                </MenuItem>
              </Link>
              <Link className="list-selector" to="/comingsoon">
                <MenuItem onClick={()=>{handleClose(); setCategory("Workout");}}>
                  <Typography variant="body1" component="span">
                    Workout
                  </Typography>
                </MenuItem>
              </Link>
              <Link className="list-selector" to="/comingsoon">
                <MenuItem onClick={()=>{handleClose(); setCategory("Stars");}}>
                  <Typography variant="body1" component="span">
                    Stars
                  </Typography>
                </MenuItem>
              </Link>
              <Link className="list-selector" to="/comingsoon">
                <MenuItem onClick={()=>{handleClose(); setCategory("Retro");}}>
                  <Typography variant="body1" component="span">
                    Retro
                  </Typography>
                </MenuItem>
              </Link>
              <Link className="list-selector" to="/comingsoon">
                <MenuItem onClick={()=>{handleClose(); setCategory("Wedding");}}>
                  <Typography variant="body1" component="span">
                    Wedding
                  </Typography>
                </MenuItem>
              </Link>
              <Link className="list-selector" to="/comingsoon">
                <MenuItem onClick={()=>{handleClose(); setCategory("Kids");}}>
                  <Typography variant="body1" component="span">
                    Kids
                  </Typography>
                </MenuItem>
              </Link>
              <Link className="list-selector" to="/comingsoon">
                <MenuItem onClick={()=>{handleClose(); setCategory("Dance");}}>
                  <Typography variant="body1" component="span">
                    Dance
                  </Typography>
                </MenuItem>
              </Link>
              <Link className="list-selector" to="/comingsoon">
                <MenuItem onClick={()=>{handleClose(); setCategory("Friendship");}}>
                  <Typography variant="body1" component="span">
                    Friendship
                  </Typography>
                </MenuItem>
              </Link>
          </Box>
        </Menu>
      </div>
    </>
  );
};

export default SongsCollection;