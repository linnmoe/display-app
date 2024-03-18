import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button
                    color="inherit"
                    component={Link} 
                    to="/dashboard" 
                >
                    Dashboard
                </Button>
                <Button 
                    color="inherit"
                    component={Link} 
                    to="/settings"
                >
                    Settings
                </Button>
            </Toolbar>
        </AppBar>
    );
} 

export default NavigationBar;