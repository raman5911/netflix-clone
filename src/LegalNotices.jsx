import React from 'react';
import './LegalNotices.css';
import Footer from './Footer';

function LegalNotices() {
  return (
    <>
      <div className="main">
        <button><i class="fa fa-print"></i> Print</button>

        <h1 className="title">Legal Notices</h1>

        <p>The Netflix service, including all content provided on the Netflix service, is protected by copyright, trademark, trade secret or other intellectual property laws and treaties.</p>

        <div>
          <h3>Copyrights</h3>

          <p>The copyrights in the content on our service are owned by many great producers and production companies, including Netflix. If you believe your or someone else’s copyrights are being infringed upon through the Netflix service, let us know by completing the Copyright Infringement Claims form (<a href='' className='ref_link'>www.netflix.com/copyrights</a>).</p>
        </div>

        <div>
          <h3>Trademarks</h3>
          
          <p>Netflix, the N Logo and its sonic Tudum ident are trademarks of Netflix, Inc.</p>

          <p>Unless you have our permission, do not use the Netflix marks as your own or in any manner that implies sponsorship or endorsement by Netflix.</p>

          <p>A product branded with the Netflix name or logo is a reflection of Netflix. Unless you are one of our licensees, we don’t allow others to make, sell, or give away anything with our name or logo on it.</p>
        </div>

        <div>
          <h3>Patents</h3>

          <p>Netflix applications and services are covered by patents. For information on patents related to our services please visit <a href='' className='ref_link'>www.netflix.com/patents</a>.</p>
        </div>

        <div>
          <h3>Third Party Notices</h3>
          
          <p>Netflix applications, software development kits (SDKs) and other Netflix products may contain software available under open source or free software licenses (“Open Source Software”). The Netflix Terms of Use do not alter any rights or obligations you may have under those Open Source Software licenses. Additional information about Open Source Software, including required acknowledgements, license terms and notices, can be found below.</p>
        </div>

        <div>
          <p><b>Last Updated:</b> September 25, 2023</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LegalNotices;