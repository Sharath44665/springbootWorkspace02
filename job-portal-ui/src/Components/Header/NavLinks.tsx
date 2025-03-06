import { Link, useLocation } from "react-router";


const NavLinks = () => {
    const links = [
        {'name': 'findjobs', 'url': 'findjob' },
        {'name': 'find talent', 'url': 'findtalent' },
        {'name': 'post jobs', 'url': 'pjob/0' },
        {'name': 'posted jobs', 'url': 'posted-jobs/0' },
        {'name': 'job history', 'url': 'jhistory' },
        {'name': 'SignUp', 'url': 'signup' }
    ]
    const location = useLocation();
    return (
        <>
            <div className='flex gap-4 h-full items-center' style={{ textTransform: 'capitalize' }}>
                {
                links.map((link, idx) => {
                    return (
                        <div key={idx} className={`${location.pathname === '/'+link.url?`border-blue-400 text-blue-400`: `border-transparent`} border-t-[3px] h-full flex items-center`}>
                            <Link  to={link.url}>{link.name} </Link>
                        </div>
                    )
                })
                }
                
            </div>
        </>
    )
}

export default NavLinks;    