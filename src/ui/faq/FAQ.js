import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props}/>
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.5rem', color:"white" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'white'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FAQ() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div sx={{margin:"30px 0px"}}>
            <Typography sx={{color: "red", fontSize: "50px", textAlign: "center", margin: "30px 0px"}}>Frequently Asked Questions About Us</Typography>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{backgroundColor: "black", color: "white"}}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
                    <Typography sx={{fontSize: "35px"}}>What kind of games are available on the website?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Users often inquire about the variety of games offered on a gaming website. They may want to know if it caters to specific genres like action, adventure, strategy, or sports. Additionally, they might ask about the availability of popular titles or new releases.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{backgroundColor: "black", color: "white"}}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography sx={{fontSize: "35px"}}>Are there any subscription fees or hidden costs?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Many users are concerned about potential expenses associated with using a gaming website. They may ask about subscription plans, in-game purchases, or any hidden costs that could arise. Clear and transparent pricing information is crucial for building trust with users.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{backgroundColor: "black", color: "white"}}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography sx={{fontSize: "35px"}}>What platforms/devices are supported by the website?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Users often want to know if they can access the gaming website on their preferred devices or platforms. Questions about compatibility with PCs, gaming consoles (such as PlayStation, Xbox), mobile devices (iOS, Android), or web browsers are common. This information helps users determine whether they can enjoy the gaming experience seamlessly across their devices.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{backgroundColor: "black", color: "white"}}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography sx={{fontSize: "35px"}}>Is there a community or multiplayer feature?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Many gamers enjoy interacting with others while playing. They might inquire about features such as online multiplayer modes, forums, chat rooms, or social networking integration. Knowing whether they can connect with friends or other players adds to the appeal of the gaming website.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{backgroundColor: "black", color: "white"}}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography sx={{fontSize: "35px"}}>What are the system requirements for playing games on the website?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Users often want to ensure that their devices meet the necessary specifications to run games smoothly. They might ask about minimum hardware requirements such as processor speed, RAM, graphics card, and internet connection speed. Providing detailed system requirements helps users assess whether their devices can handle the gaming experience without issues.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}