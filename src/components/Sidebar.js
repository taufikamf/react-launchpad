import React from 'react'
import '../App.css'

const Sidebar = () => {
  return (
    <div className="sidebar close">
        <ul className="nav-links">
            <li>
                <a href="../../Home/index.html">
                    <i className='bx bx-grid-alt'></i>
                    <span className="link_name">Home</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Home</a></li>
                </ul>
            </li>

           
            {/* <li>
                <a href="#">
                    <i className='bx bx-line-chart'></i>
                    <span className="link_name">Trade</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Trade</a></li>
                </ul>
            </li> */}
            

            <li className="nav-links-active">
                <div className="iocn-link">
                    <a href="#">
                        <i className='bx bx-rocket'></i>
                        <span className="link_name">Launchpad</span>
                    </a>
                    <i className='bx bxs-chevron-down arrow'></i>
                </div>
                <ul className="sub-menu">
                    <li><a className="link_name" href="#">Launchpad</a></li>
                    <li className="sub-nav-links-active"><a href="../Create-Launchpad/index.html">Create Launchpad</a></li>
                    <li><a href="../Create-Fair-Launch/index.html">Create Fair Launch</a></li>
                    <li><a href="../Create-Token/index.html">Create Token</a></li>
                    <li><a href="../Launchpad-List/index.html">Launchpad List</a></li>
                </ul>
            </li>

            <li>
                <div className="iocn-link">
                    <a href="#">
                        <i className='bx bx-lock-open-alt'></i>
                        <span className="link_name">Lock</span>
                    </a>
                    <i className='bx bxs-chevron-down arrow'></i>
                </div>
                <ul className="sub-menu">
                    <li><a className="link_name" href="#">Lock</a></li>
                    <li><a href="../../Lock/Create-Lock/index.html">Create Lock</a></li>
                    <li><a href="../../Lock/Token/index.html">Token</a></li>
                    <li><a href="../../Launchpad/Launchpad-List/index.html">Liquidity</a></li>
                </ul>
            </li>

           
            {/* <li>
                <a href="#">
                    <i className='bx bx-pie-chart-alt-2'></i>
                    <span className="link_name">Farming</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Farming</a></li>
                </ul>
            </li> */}
            


            <li>
                <a href="#">
                    <i className='bx bxs-droplet-half'></i>
                    <span className="link_name">Pools</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Pools</a></li>
                </ul>
            </li>

           
            {/* <li>
                <a href="#">
                    <i className='bx bxs-tree'></i>
                    <span className="link_name">Jungles</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Jungles</a></li>
                </ul>
            </li> */}
            

            <li>
                <div className="iocn-link">
                    <a href="" target="_blank">
                        <i className='bx bx-plug'></i>
                        <span className="link_name">Ecosystem</span>
                    </a>
                    <i className='bx bxs-chevron-down arrow'></i>
                </div>
                <ul className="sub-menu">
                    <li><a className="link_name" href="https://bscscan.com/token/0x4732a86106064577933552fcea993d30bec950a5" target="_blank">Ecosystem</a></li>
                    <li><a href="https://bscscan.com/token/0x4732a86106064577933552fcea993d30bec950a5" target="_blank">BscScan</a></li>
                    <li><a href="https://prodigichain.com/" target="_blank">Prodigichain</a></li>
                </ul>
            </li>

            <li>
                <div className="iocn-link">
                    <a href="#">
                        <i className='bx bx-dots-horizontal-rounded'></i>
                        <span className="link_name">More</span>
                    </a>
                    <i className='bx bxs-chevron-down arrow'></i>
                </div>
                <ul className="sub-menu">
                    <li><a className="link_name" href="#">More</a></li>
                    <li><a href="https://prodigichain.com/" target="_blank">Website</a></li>
                    <li><a href="https://github.com/prodigichain" target="_blank">GitHub</a></li>
                    <li><a href="https://prodigichain.com/whitepaper/digipaper.pdf" target="_blank">Whitepaper</a></li>
                    <li><a href="https://prodigichain.com/roadmap.html" target="_blank">Roadmap</a></li>
                    <li><a href="https://prodigichain.medium.com/" target="_blank">Blog</a></li>
                </ul>
            </li>

            <li>

               
    {/* <div className="profile-details">
      <div className="profile-content">
        <img src="image/profile.jpg" alt="profileImg">
      </div>
      <div className="name-job">
        <div className="profile_name">Prem Shahi</div>
        <div className="job">Web Desginer</div>
      </div>
      <i className='bx bx-log-out' ></i>
    </div> */}
    
            </li>
        </ul>
    </div>
  )
}

export default Sidebar