import React, { useState } from 'react'
import '../App.css'
import Metamask from '../assets/images/metamask.svg';
import TrustWallet from '../assets/images/metamask.svg';
import TockenPocket from '../assets/images/metamask.svg';
import WalletConnect from '../assets/images/metamask.svg';
import MathWallet from '../assets/images/metamask.svg';
import Binance from '../assets/images/metamask.svg';

const Section = () => {

    const prevBtns = document.querySelectorAll(".btn-prev");
    const nextBtns = document.querySelectorAll(".btn-next");
    const progress = document.getElementById("progress");
    const formSteps = document.querySelectorAll(".form-step");
    const progressSteps = document.querySelectorAll(".progress-step");
    
    const [getData, setData] = useState([])

    const[getToken, setToken] = useState('')
    const[getRate, setRate] = useState('')
    const[getWhitelist, setWhitelist] = useState('')
    const[getSoftcap, setSoftcap] = useState('')
    const[getHardcap, setHardcap] = useState('')
    const[getMinimumBuy, setMinimumBuy] = useState('')
    const[getMaximumBuy, setMaximumBuy] = useState('')
    const[getRefundType, setRefundType] = useState('')
    const[getRouter, setRouter] = useState('')
    const[getLiquidity, setLiquidity] = useState('')
    const[getListingRate, setListingRate] = useState('')
    const[getStartTime, setStartTime] = useState('')
    const[getEndTime, setEndTime] = useState('')
    const[getLiquidityLockup, setLiquidityLockup] = useState('')
    const[getLogoUrl, setLogoUrl] = useState('')
    const[getFacebook, setFacebook] = useState('')
    const[getTwitter, setTwitter] = useState('')
    const[getGithub, setGithub] = useState('')
    const[getTelegram, setTelegram] = useState('')
    const[getInstagram, setInstagram] = useState('')
    const[getDiscord, setDiscord] = useState('')
    const[getReddit, setReddit] = useState('')
    const[getDescription, setDescription] = useState('')
    const[getWebsite, setWebsite] = useState('')
    const[getVesting, setVesting] = useState('')
    const[getTeam, setTeam] = useState('')

    const handleToken = (event) => {
        setToken(event.target.value)
    }
    const handleRate = (event) => {
        setRate(event.target.value)
    }
    const handleWhitelist = (event) => {
        setWhitelist(event.target.value)
    }
    const handleSoftcap = (event) => {
        setSoftcap(event.target.value)
    }
    const handleHardcap = (event) => {
        setHardcap(event.target.value)
    }
    const handleMinimumBuy = (event) => {
        setMinimumBuy(event.target.value)
    }
    const handleMaximumBuy = (event) => {
        setMaximumBuy(event.target.value)
    }
    const handleRefundType = (event) => {
        setRefundType(event.target.value)
    }
    const handleRouter = (event) => {
        setRouter(event.target.value)
    }
    const handleLiquidity = (event) => {
        setLiquidity(event.target.value)
    }
    const handleStartTime = (event) => {
        setStartTime(event.target.value)
    }
    const handleEndTime = (event) => {
        setEndTime(event.target.value)
    }
    const handleLiquidityLockup = (event) => {
        setLiquidityLockup(event.target.value)
    }
    const handleLogoUrl = (event) => {
        setLogoUrl(event.target.value)
    }
    const handleFacebook = (event) => {
        setFacebook(event.target.value)
    }
    const handleTwitter = (event) => {
        setTwitter(event.target.value)
    }
    const handleInstagram = (event) => {
        setInstagram(event.target.value)
    }
    const handleTelegram = (event) => {
        setTelegram(event.target.value)
    }
    const handleDiscord = (event) => {
        setDiscord(event.target.value)
    }
    const handleReddit = (event) => {
        setReddit(event.target.value)
    }
    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleWebsite = (event) => {
        setWebsite(event.target.value)
    }
    const handleListingRate = (event) => {
        setListingRate(event.target.value)
    }
    const handleGithub = (event) => {
        setGithub(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const newData = {
            tokenAddress: getToken,
            presaleRate: getRate,
            whitelist: getWhitelist,
            softcap: getSoftcap,
            hardcap: getHardcap,
            minimumBuy: getMinimumBuy,
            maximumBuy: getMaximumBuy,
            refundType: getRefundType,
            router: getRouter,
            liquidity: getLiquidity,
            listingRate: getListingRate,
            startTime: getStartTime,
            endTime: getEndTime,
            liquidityLockup: getLiquidityLockup,
            logoUrl: getLogoUrl,
            website: getWebsite,
            facebook: getFacebook,
            twitter: getTwitter,
            github: getGithub,
            telegram: getTelegram,
            instagram: getInstagram,
            discord: getFacebook,
            reddit: getReddit,
            description: getDescription
        }
        setData(newData);
        console.log(getData)
    }

    let formStepsNum = 0;

        nextBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                formStepsNum++;
                updateFormSteps();
                updateProgressbar();
            });
        });

        prevBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                formStepsNum--;
                updateFormSteps();
                updateProgressbar();
            });
        });

        function updateFormSteps() {
            formSteps.forEach((formStep) => {
                formStep.classList.contains("form-step-active") &&
                    formStep.classList.remove("form-step-active");
            });

            formSteps[formStepsNum].classList.add("form-step-active");
        }

        function updateProgressbar() {
            progressSteps.forEach((progressStep, idx) => {
                if (idx < formStepsNum + 1) {
                    progressStep.classList.add("progress-step-active");
                } else {
                    progressStep.classList.remove("progress-step-active");
                }
            });

            const progressActive = document.querySelectorAll(".progress-step-active");

            progress.style.width =
                ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
        }
  return (
        <section className="home-section">
            <div className="form-container">
            <form action="#" className="form">
                <h1 className="text-center">Create Launchpad</h1>
                {/* <!-- Progress bar --> */}
                <div className="progressbar">
                    <div className="progress" id="progress"></div>
                    <div className="progress-step progress-step-active" data-title="Verify Token"></div>
                    <div className="progress-step" data-title="DeFi Launchpad Info"></div>
                    <div className="progress-step" data-title="Add Additional Info"></div>
                    <div className="progress-step" data-title="Finish"></div>
                </div>

                {/* <!-- Steps --> */}
                <div className="form-step form-step-active">
                    <div className="input-group">
                        <label for="username">Token Address <span style={{color: '#008df2'}}>*</span></label>
                        <input type="text" id="token" value={getToken} onChange={handleToken} placeholder="Ex : DigiMoon" />
                        <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>Create pool fee: 1 BNB</p>
                    </div>
                    <table width="100%" style={{borderCollapse: 'collapse', borderSpacing: '0.2rem'}}>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Name</td>
                            <td style={{color: '#008df2'}} align="right">Test Coin</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Symbol</td>
                            <td style={{color: '#ffffff'}} align="right">Test Coin</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Decimal</td>
                            <td style={{color: '#ffffff'}} align="right">9</td>
                        </tr>
                    </table>
                    <br/>
                    <div style={{width: '100%', backgroundColor: '#006df2', height: 'auto', paddingTop: '10px', paddingBottom: '10px', borderRadius: '5px'}}>
                        <p style={{textAlign: 'center', color: '#ffffff'}}>Make sure the token has 'Exclude transfer fee' function if it has transfer fees.</p>
                    </div>
                    <br/>    
                    <div className="">
                        <a href="#" className="btn btn-next width-50 ml-auto">Next</a>
                    </div>
                </div>
                <div className="form-step">
                    <div className="input-group">
                        <label for="username">Presale rate <span style={{color: '#008df2'}}>*</span></label>
                        <input type="text" id="token" placeholder="Ex : 999999" value={getRate} onChange={handleRate}/>
                        <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>If i spend 1 BNB how many tokens will i receive?</p>
                    </div>
                    <div className="input-group" style={{marginBottom: '0px'}}>
                        <label for="username">Whitelist</label>
                    </div>
                    <div>
                        <input className="input-radio" id="yes" name="seen" type="radio" value={getWhitelist} onClick={() => setWhitelist('Disable')}/>
                        <label className="input-radio" for="yes" style={{marginRight: '10%'}}>Disable</label>
                        <input className="input-radio" id="yes" name="seen" type="radio" value={getWhitelist} onClick={() => setWhitelist('Enable')}/>
                        <label className="input-radio" for="yes">Enable</label>
                        <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>You can disable/enable whitelist anytime</p>
                    </div>
                    <div style={{whiteSpace: 'nowrap'}}>
                        <div className="input-group" style={{width: '49%', display: 'inline-block', whiteSpace: 'normal' }}>
                            <label for="username">Softcap (BNB) <span style={{color: '#008df2'}}>*</span></label>
                            <input type="number" id="token" placeholder="Ex : 999999" value={getSoftcap} onChange={handleSoftcap}/>
                            <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>Softcap must be >= 50% of Hardcap!</p>
                        </div>
                        <div className="input-group" style={{width: '2%', display: 'inline-block', whiteSpace: 'normal'}}></div>
                        <div className="input-group" style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Hardcap (BNB) <span style={{color: '#008df2'}}>*</span></label>
                            <input type="number" id="token" placeholder="Ex : 999999" value={getHardcap} onChange={handleHardcap}/>
                            <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>&nbsp; </p>
                        </div>
                    </div>
                    <div style={{whiteSpace: 'nowrap'}}>
                        <div className="input-group" style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Minimum buy (BNB) <span style={{color: '#008df2'}}>*</span></label>
                            <input type="number" id="token" placeholder="Ex : 100" value={getMinimumBuy} onChange={handleMinimumBuy}/>
                            <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>Softcap must be >= 50% of Hardcap!</p>
                        </div>
                        <div className="input-group" style={{width: '2%', display: 'inline-block', whiteSpace: 'normal'}}></div>
                        <div className="input-group" style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Maximum buy (BNB) <span style={{color: '#008df2'}}>*</span></label>
                            <input type="number" id="token" placeholder="Ex : 200" value={getMaximumBuy} onChange={handleMaximumBuy}/>
                            <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>&nbsp; </p>
                        </div>
                    </div>
                    <div style={{whiteSpace: 'nowrap'}}>
                        <div className="input-group" style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Refund type</label>
                            <select value={getRefundType} onChange={handleRefundType}>
                                <option>Burn</option>
                            </select>
                            <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>Softcap must be >= 50% of Hardcap!</p>
                        </div>
                        <div className="input-group" style={{width: '2%', display: 'inline-block', whiteSpace: 'normal'}}></div>
                        <div className="input-group" style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Router <span style={{color: '#008df2'}}>*</span></label>
                            <select value={getRouter} onChange={handleRouter}>
                                <option>Pancake Swap</option>
                            </select>
                            <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>&nbsp; </p>
                        </div>
                    </div>
                    <div style={{whiteSpace: 'nowrap'}}>
                        <div className="input-group" style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">PancakeSwap liquidity (%) <span style={{color: '#008df2'}}>*</span></label>
                            <input type="number" id="token" placeholder="Ex : 0.1" value={getLiquidity} onChange={handleLiquidity}/>
                            <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>&nbsp; </p>
                        </div>
                        <div className="input-group" style={{width: '2%', display: 'inline-block', whiteSpace: 'normal'}}></div>
                        <div className="input-group" style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">PancakeSwap listing rate <span style={{color: '#008df2'}}>*</span></label>
                            <input type="number" id="token" placeholder="Ex : 999999" value={getListingRate} onChange={handleListingRate}/>
                            <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>1 BNB = 800000 TestCoin</p>
                        </div>
                    </div>
                    <div className="input-group">
                        <p style={{color: '#008df2', fontSize: '0.7em', marginTop: '0.2rem'}}>
                            Enter the percentage of raised funds that should be allocated to Liquidity on PancakeSwap (Min 51% Max 100%)
                        </p>
                        <p style={{color: '#008df2', fontSize: '0.7em', marginTop: '0.2rem'}}>
                            If i spend 1 BNB on PancakeSwap how many tokens will i receive? Usually this amount is lower than presale rate to allow for a higher listing price on PancakeSwap
                        </p>
                    </div>
                    <br/>
                    <div>
                        <label for="username">Select start time &amp; end time (UTC)</label>
                    </div>
                    <div style={{whiteSpace: 'nowrap'}}>
                        <div style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Start time (UTC) <span style={{color: '#008df2'}}>*</span></label>
                            <input type="date" id="token" placeholder="Ex : 0.1" value={getStartTime} onChange={handleStartTime}/>
                            <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>&nbsp; </p>
                        </div>
                        <div style={{width: '2%', display: 'inline-block', whiteSpace: 'normal'}}></div>
                        <div style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">End time (UTC) <span style={{color: '#008df2'}}>*</span></label>
                            <input type="date" id="token" placeholder="Ex : 999999" value={getEndTime} onChange={handleEndTime}/>
                            <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>1 BNB = 800000 TestCoin</p>
                        </div>
                    </div>
                    <div className="input-group">
                        <label for="username">Liquidity lockup (days) <span style={{color: '#008df2'}}>*</span></label>
                        <input type="number" id="token" placeholder="Ex : 60" value={getLiquidityLockup} onChange={handleLiquidityLockup}/>
                    </div>
                    <div className="input-group">
                        <input style={{display: 'inline-block', width: 'auto'}} type="checkbox" id="vehicle1" name="vehicle1" value={getVesting} onClick={() => setVesting('Yes')}/>
                        <label style={{display: 'inline-block', width: 'auto'}} for="vehicle1"> Using Vesting Contributor?</label><br/>
                        <input style={{display: 'inline-block', width: 'auto'}} type="checkbox" id="vehicle1" name="vehicle1" value={getTeam} onClick={() => setTeam('No')}/>
                        <label style={{display: 'inline-block', width: 'auto'}} for="vehicle1"> Using Team Contributor?</label><br/>
                    </div>
                    <div className="input-group">
                        <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem', textAlign: 'center'}}>
                            Need 298.078.796 TestCoin to create launchpad
                        </p>
                    </div>
                    <br/>
                    <div className="btns-group">
                        <a href="#" className="btn btn-prev">Previous</a>
                        <a href="#" className="btn btn-next">Next</a>
                    </div>
                </div>
                <div className="form-step">
                    <div style={{whiteSpace: 'nowrap'}}>
                        <div style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Logo URL <span style={{color: '#008df2'}}>*</span></label>
                            <input type="text" id="token" placeholder="Ex : https://image.jpg" value={getLogoUrl} onChange={handleLogoUrl}/>
                            <p style={{color: '#008df2', fontSize: '0.6em', marginTop: '0.2rem'}}>URL must end with a supported image extension png, jpg, jpeg, or gif. You can  upload your image at <a href="javascript:void(0)" style={{color: '#ffffff'}}>https://upload.pinksale.finance/</a></p>
                        </div>
                        <div style={{width: '2%', display: 'inline-block', whiteSpace: 'normal'}}></div>
                        <div style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Website <span style={{color: '#008df2'}}>*</span></label>
                            <input type="url" id="token" placeholder="Ex : https://google.com" value={getWebsite} onChange={handleWebsite}/>
                            <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>&nbsp; </p>
                            <p style={{color: '#008df2', fontSize: '0.9em', marginTop: '0.2rem'}}>&nbsp; </p>
                        </div>
                    </div>
                    <div style={{whiteSpace: 'nowrap'}}>
                        <div style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Facebook <span style={{color: '#008df2'}}>*</span></label>
                            <input type="url" id="token" placeholder="Ex : https://facebook.com" value={getFacebook} onChange={handleFacebook}/>
                        </div>
                        <div style={{width: '2%', display: 'inline-block', whiteSpace: 'normal'}}></div>
                        <div style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Twitter <span style={{color: '#008df2'}}>*</span></label>
                            <input type="url" id="token" placeholder="Ex : https://twitter.com" value={getTwitter} onChange={handleTwitter}/>
                        </div>
                    </div>
                    <div style={{whiteSpace: 'nowrap'}}>
                        <div style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Github <span style={{color: '#008df2'}}>*</span></label>
                            <input type="url" id="token" placeholder="Ex : https://github.com" value={getGithub} onChange={handleGithub}/>
                        </div>
                        <div style={{width: '2%', display: 'inline-block', whiteSpace: 'normal'}}></div>
                        <div style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Telegram <span style={{color: '#008df2'}}>*</span></label>
                            <input type="url" id="token" placeholder="Ex : https://telegram.com" value={getTelegram} onChange={handleTelegram}/>
                        </div>
                    </div>
                    <div style={{whiteSpace: 'nowrap'}}>
                        <div style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Instagram <span style={{color: '#008df2'}}>*</span></label>
                            <input type="url" id="token" placeholder="Ex : https://instagram.com" value={getInstagram} onChange={handleInstagram}/>
                        </div>
                        <div style={{width: '2%', display: 'inline-block', whiteSpace: 'normal'}}></div>
                        <div style={{width: '49%', display: 'inline-block', whiteSpace: 'normal'}}>
                            <label for="username">Discord <span style={{color: '#008df2'}}>*</span></label>
                            <input type="url" id="token" placeholder="Ex : https://discord.com" value={getDiscord} onChange={handleDiscord}/>
                        </div>
                    </div>
                    <div className="input-group">
                        <label for="username">Reddit</label>
                        <input type="url" id="token" placeholder="Ex : https://reddit.com" value={getReddit} onChange={handleReddit}/>
                    </div>
                    <div className="input-group">
                        <label for="username">Description</label>
                        <textarea placeholder="Ex : Disclaimer...." value={getDescription} onChange={handleDescription}></textarea>
                    </div>
                    <div className="btns-group">
                        <a href="#" className="btn btn-prev">Previous</a>
                        <a href="#" className="btn btn-next">Next</a>
                    </div>
                </div>
                <div className="form-step">
                    <table width="100%" style={{borderCollapse: 'collapse', borderSpacing: '0.2rem'}}>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Totak token</td>
                            <td style={{color: '#ffffff'}} align="right">298.079.796 TestCoin</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Token name</td>
                            <td style={{color: '#008df2'}} align="right">Test Coin</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Token symbol</td>
                            <td style={{color: '#008df2'}} align="right">Test Coin</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Token decimal</td>
                            <td style={{color: '#008df2'}} align="right">9</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Presale rate</td>
                            <td style={{color: '#008df2'}} align="right">999999 Testcoin</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Listing rate</td>
                            <td style={{color: '#008df2'}} align="right">999999 Testcoin</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Sale method</td>
                            <td style={{color: '#008df2'}} align="right">Whitelist only</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Softcap</td>
                            <td style={{color: '#008df2'}} align="right">100 BNB</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Hardcap</td>
                            <td style={{color: '#008df2'}} align="right">200 BNB</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Buy minumum</td>
                            <td style={{color: '#008df2'}} align="right">0.1 BNB</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Buy maximum</td>
                            <td style={{color: '#008df2'}} align="right">1 BNB</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Liquidity</td>
                            <td style={{color: '#008df2'}} align="right">60%</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Start time</td>
                            <td style={{color: '#008df2'}} align="right">2022-02-11T10:20 (UTC)</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>End time</td>
                            <td style={{color: '#008df2'}} align="right">2022-02-11T10:20 (UTC)</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Liquidity lockup time</td>
                            <td style={{color: '#008df2'}} align="right">60 days</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Website</td>
                            <td style={{color: '#008df2'}} align="right">https://google.com</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Description</td>
                            <td style={{color: '#008df2'}} align="right">Disclaimer...</td>
                        </tr>
                        <tr style={{borderBottom: '0.1px solid #1f1f1f'}}>
                            <td style={{color: '#ffffff'}}>Using Team Vesting?</td>
                            <td style={{color: '#008df2'}} align="right">No</td>
                        </tr>
                    </table>
                    <br/>
                    <div style={{width: '100%', backgroundColor: '#006df2', height: 'auto', paddingTop: '10px', paddingBottom: '10px', borderRadius: '5px'}}>
                        <p style={{textAlign: 'center', color: '#ffffff', fontSize: '0.7em'}}>For tokens with burn. rebase or other special transfers please ensure that you have a way to whitelist multiple addresses or turn off the special transfer events (By setting fees to 0 for example for the duration of the presale)</p>
                    </div>
                    <br/>
                    <div className="btns-group">
                        <a href="#" className="btn btn-prev">Previous</a>
                        <button type="submit" value="Submit" className="btn" onSubmit={handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
            <footer>
                <p>Digidex 2021 | by Digichain</p>
                <a href="https://bscscan.com/token/0x4732a86106064577933552fcea993d30bec950a5#balances" target="_blank"><button>Token Verifier</button></a>
            </footer>
        </section>
    )
}

export default Section