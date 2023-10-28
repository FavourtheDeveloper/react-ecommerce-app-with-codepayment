import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
        <div className="row m-5">
            <div className="col-lg-4 text-center">
              <Link to={}><TwitterIcon sx={{ fontSize: 100 }}/></Link>
            </div>
            <div className="col-lg-4 text-center">
                <Link><LinkedInIcon sx={{ fontSize: 100 }}/></Link>
            </div>
            <div className="col-lg-4 text-center">
               <Link><GitHubIcon sx={{ fontSize: 100 }}/></Link>
            </div>
        </div>
    </div>
  )
}

export default Contact